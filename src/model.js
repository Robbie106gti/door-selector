import { action, thunk, selector } from 'easy-peasy';
import uuid from 'uuid';

let apiUrl = window.location.hostname;
switch (apiUrl) {
  case 'localhost':
    apiUrl = 'http://localhost:3000/assets/json/';
    break;
  case 'webquoin':
    apiUrl = 'https://www.webquoin.com/catalog/door-selector/assets/json/';
    break;
  case 'testquoin':
    apiUrl = 'http://www.testquoin.com/catalog/door-selector/assets/json/';
    break;
  default:
    apiUrl = 'https://www.webquoin.com/catalog/door-selector/assets/json/';
    break;
}

const userModel = {
  product_line: 'custom',
  material: {
    type: '',
    title: '',
    category: '',
    color: '',
    main_material: ''
  },
  door: {
    door_style: '',
    title: '',
    type: '',
    color: '',
    category: ''
  },
  stain: {
    title: '',
    type: '',
    color: '',
    category: ''
  },
  edge: {
    title: ''
  },
  toasts: {
    '123': {
      text: 'Hi, welcome to the Door-selector', 
      key: '123', 
      new: true,
      reading: false
    },
    'door': {
      text: '', 
      key: 'door', 
      new: false,
      reading: false
    }
  },
  selection: { step: 0, steps: { step1: '' } },
  // Actions
  userDoor: action(
    (user, clicked) => {
      user.door.title = clicked;
    },
    { listenTo: '@action.doors.clickedDoor' }
  ),
  userMaterial: action(
    (user, clicked) => {
      user.material.category = clicked;
    },
    { listenTo: '@action.materials.clickedMat' }
  ),
  userStain: action(
    (user, clicked) => {
      user.stain.color = clicked;
    },
    { listenTo: '@action.stains.clickedStain' }
  ),
  userEdge: action(
    (user, clicked) => {
      user.edge.title = clicked;
    },
    { listenTo: '@action.edges.clickedEdge' }
  ),
  toastReading: action(
    (user, clicked) => {
        user.toasts[clicked].new = false;
        user.toasts[clicked].reading = true;
    }
  ),
  toastRead: action(
    (user, clicked) => {
        user.toasts[clicked].reading = false;
    }
  ),
  addToast: action((user, text) => {
    const toast = {
      key: uuid.v4(),
      text: text, 
      new: true,
      reading: false
    }
    user.toasts[toast.key] = toast;
  }),
  // Thunks
  toastDown: thunk(
    async (actions, clicked) =>  {
      await setTimeout(()=> {
        actions.toastRead(clicked)
      }, 4000);
    }, { listenTo: '@action.user.toastReading'}
  ),
  // Selectors
  getToasts: selector(
    [user => user.toasts],
    (stateResolvers) => {
      const items = Object.values(stateResolvers[0]) || false;
      return items;
    }
  )

};

const doorsModel = {
  loading: false,
  loaded: false,
  items: {},
  door: null,
  door_style: '',
  // Thunks
  fetchDoors: thunk(
    async actions => {
      const res = await fetch(apiUrl + 'doors.json');
      const doors = await res.json();
      actions.setDoors(doors);
    },
    { listenTo: 'initStore' }
  ),
  // Actions
  setDoors: action((doors, items) => {
    doors.items = items;
    doors.loaded = true;
  }),
  clickedDoor: action((doors, clicked) => {
    doors.door = clicked;
  }),
  // Selectors
  getDoor: selector([doors => doors.items], (stateResolvers, doorId) => {
    const items = stateResolvers[0];
    // console.log(items[doorId])
    return items[doorId] || null;
  }),
  getDoorFilterProps: selector(
    [doors => doors.items],
    (stateResolvers, params) => {
      const doors = Object.values(stateResolvers[0]);
      const filters = params[0].material
        ? [params[0].material]
        : { dstyle: params[0].dstyle, mat: params[0].mat };
      return FilterDoors(doors, filters);
    }
  ),
  getAllDoors: selector([doors => doors.items], stateResolvers => {
    const doors = Object.values(stateResolvers[0]);
    return CompareByTitle(doors);
  })
};

function FilterDoors(doors, filters) {
  const filteredDoors = filters.length
    ? filterByMatDoors(doors, filters)
    : filterBasicDoors(doors, filters);
  const sortedDoors = CompareByTitle(filteredDoors);
  return sortedDoors;
}

function filterByMatDoors(doors, material) {
  if (material[0] === 'other') {
    material = ['engineered', 'euro materials', 'gloss', 'metal'];
  }
  const doorByMat = doors.filter(door => {
    const mats = [];
    let bool = false;
    door.versions.forEach(ver => mats.push(ver.types.material.toLowerCase()));
    if (mats.includes(material)) {
      bool = true;
    }
    material.forEach(mat => {
      if (mats.includes(mat)) {
        bool = true;
      }
    });
    return bool ? door : bool;
  });
  return doorByMat;
}

function filterBasicDoors(doors, filters) {
  switch (filters.dstyle) {
    case 'slab':
      filters.dstyle = 'Slab Face Doors';
      break;
    case 'raised':
      filters.dstyle = 'Raised Panel Doors';
      break;
    case 'recessed':
      filters.dstyle = 'Recessed Panel Doors';
      break;
    default:
      filters.dstyle = 'Slab Face Doors';
      break;
  }
  const styleDoors = [];
  doors.forEach(door => {
    let bdoor = false;
    door.versions.forEach(ver => {
      if (ver.types.doorstyle === filters.dstyle) {
        bdoor = true;
      }
    });
    return bdoor ? styleDoors.push(door) : bdoor;
  });
  const matDoors = filterByMatDoors(styleDoors, [filters.mat]);
  return matDoors;
}

function CompareByTitle(items) {
  return items.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
}

const materialsModel = {
  loading: false,
  loaded: false,
  bySection: {},
  material: '',
  main_material: '',
  // Thunks
  fetchBySection: thunk(
    async actions => {
      const res = await fetch(apiUrl + 'mat-sections.json');
      const mats = await res.json();
      actions.setSections(mats);
    },
    { listenTo: 'initStore' }
  ),
  // Actions
  setSections: action((materials, mats) => {
    materials.bySection = mats;
    materials.loaded = true;
  }),
  clickedMat: action((materials, clicked) => {
    materials.material = clicked;
  }),
  // Selectors
  getSection: selector(
    [materials => materials.bySection],
    (stateResolvers, sectionId) => {
      const items = stateResolvers[0];
      return items[sectionId] || null;
    }
  ),
  getMaterials: selector([materials => materials.bySection], stateResolvers => {
    let items = stateResolvers[0];
    items = Object.values(items);
    items = items.map(item => (item = { ...item, category: 'materials' }));
    return items || null;
  }),
  getPaints: selector([materials => materials], stateResolvers => {
    const materials = stateResolvers[0];
    let item = [];
    if (materials.loaded) {
      item = Object.values(materials.bySection.painted.sub);
    }
    return item || null;
  })
};

const stainsModel = {
  loading: false,
  loaded: false,
  items: {},
  stain: '',
  // Thunks
  fetchStains: thunk(
    async actions => {
      const res = await fetch(apiUrl + 'stains.json');
      const stains = await res.json();
      actions.setStains(stains);
    },
    { listenTo: 'initStore' }
  ),
  // Actions
  setStains: action((stains, items) => {
    const array = Object.values(items);
    let newItems = {};
    array.forEach(arr => {
      if (arr.image) {
        newItems[arr.title.toLowerCase()] = {
          ...arr,
          firestore_uid: arr.uid,
          uid: arr.title.toLowerCase()
        };
      }
    });
    stains.items = newItems;
    stains.loaded = true;
  }),
  clickedStain: action((stains, clicked) => {
    stains.stain = clicked;
  }),
  // Selectors
  getStain: selector([stains => stains.items], (stateResolvers, stainId) => {
    const items = stateResolvers[0];
    return items[stainId] || null;
  }),
  getStains: selector([stains => stains.items], stateResolvers => {
    let items = stateResolvers[0];
    items = Object.values(items);
    return items || null;
  })
};

const edgesModel = {
  loading: false,
  loaded: false,
  items: {},
  edge: '',
  // Thunks
  fetchEdges: thunk(
    async actions => {
      const res = await fetch(apiUrl + 'edges.json');
      const edges = await res.json();
      actions.setEdges(edges);
    },
    { listenTo: 'initStore' }
  ),
  // Actions
  setEdges: action((edges, items) => {
    const array = Object.values(items);
    let newItems = {};
    array.forEach(arr => {
      if (arr.image) {
        newItems[arr.title.toLowerCase()] = {
          ...arr,
          firestore_uid: arr.uid,
          uid: arr.title.toLowerCase()
        };
      }
    });
    edges.items = newItems;
    edges.loaded = true;
  }),
  clickedEdge: action((edges, clicked) => {
    edges.edge = clicked;
  }),
  // Selectors
  getEdge: selector([edges => edges.items], (stateResolvers, edgeId) => {
    let items = stateResolvers[0];
    // console.log(items[edgeId])
    return items[edgeId] || null;
  }),
  getEdges: selector([edges => edges.items], stateResolvers => {
    let items = stateResolvers[0];
    items = Object.values(items);
    items = items.map(item => (item = { ...item, category: 'edges' }));
    return items || null;
  })
};

const model = {
  doors: doorsModel,
  materials: materialsModel,
  stains: stainsModel,
  edges: edgesModel,
  user: userModel,
  url: window.location.hostname,
  loading: 0,
  // Actions
  onInit: action(
    (state, action) => {
      state.doors.loading = true;
      state.materials.loading = true;
      state.stains.loading = true;
      state.edges.loading = true;
    },
    { listenTo: 'initStore' }
  ),
  clickedColor: action((state, clicked) => {
    if (clicked.mat === 'stains') {
      state.stains.color = clicked.color;
      state.user.stain.color = clicked.color;
    } else {
      state.user.material.color = clicked.color;
      state.user.material.category = clicked.mat;
      state.materials.material = clicked.mat;
      state.materials.color = clicked.color;
    }
  }),
  clickedMainMaterial: action((state, clicked) => {
    let mat = '';
    switch (clicked) {
      case 'painted':
        mat = 'Painted';
        break;
      case 'wood':
        mat = 'Wood';
        break;
      case 'other':
        mat = 'Other';
        break;
      default:
        return;
    }
      const toast = {
        key: 'material',
        text: 'Selected ' + mat, 
        new: true,
        reading: false
      }
      state.user.toasts[toast.key] = toast;
    state.user.material.main_material = clicked;
    state.materials.main_material = clicked;
    state.user.selection = {
      step: 1,
      steps: { step1: { title: mat, location: clicked, link: '/' } }
    };
  }),
  clickedMainDoorStyle: action((state, clicked) => {
    let dstyle = '';
    switch (clicked) {
      case 'slab':
        dstyle = 'Slab Face Doors';
        break;
      case 'recessed':
        dstyle = 'Recessed Panel Doors';
        break;
      case 'raised':
        dstyle = 'Raised Panel Doors';
        break;
      default:
        return;
    }
      const toast = {
        key: 'doorstyle',
        text: 'Selected the ' + dstyle, 
        new: true,
        reading: false
      }
      state.user.toasts[toast.key] = toast;
    state.user.door.door_style = clicked;
    state.doors.door_style = clicked;
    state.user.selection = {
      step: 2,
      steps: {
        ...state.user.selection.steps,
        step2: {
          title: dstyle,
          location: clicked,
          link: '/steps/' + state.user.selection.steps.step1.location
        }
      }
    };
  }),
  clickedMainDoor: action((state, params) => {
    console.log(params)
    let { mat, dstyle, door } = params;
    switch (dstyle) {
      case 'slab':
        dstyle = 'Slab Face Doors';
        break;
      case 'recessed':
        dstyle = 'Recessed Panel Doors';
        break;
      case 'raised':
        dstyle = 'Raised Panel Doors';
        break;
      default:
        break;
    }
    switch (mat) {
      case 'painted':
        mat = 'Painted';
        break;
      case 'wood':
        mat = 'Wood';
        break;
      case 'other':
        mat = 'Other';
        break;
      default:
        break;
    }
    const toast = {
      key: 'door',
      text: 'Selected the ' + door + ' door which is a ' + dstyle + ' in material ' + mat, 
      new: true,
      reading: false
    }
    state.user.toasts[toast.key] = toast;
    state.user.selection = {
      step: 3,
      steps: {
        step1: { title: mat, location: params.mat, link: '/' },
        step2: {
          title: dstyle,
          location: params.dstyle,
          link: '/steps/' + params.mat
        },
        step3: {
          title: door,
          location: params.door,
          link: '/steps/' + params.mat + '/' + params.dstyle + '/doors'
        }
      }
    };
  }),
  // Selectors
  getColor: selector([state => state], (stateResolvers, obj) => {
    const items = stateResolvers[0];
    const { color, mat } = obj[0];
    if (!items.materials.loaded || !items.stains.loaded) return null;
    let samples = null;
    switch (mat) {
      case 'stains':
        const stain = color.toLowerCase();
        return items.stains.items[stain];
      case 'painted':
        samples = Object.values(items.materials.bySection[mat].sub);
        return samples.filter(s => s.title === color)[0];
      case 'engineered':
        samples = Object.values(items.materials.bySection[mat].sub);
        return samples.filter(s => s.title === color)[0];
      case 'melamine':
        samples = Object.values(items.materials.bySection[mat].sub);
        return samples.filter(s => s.title === color)[0];
      case 'euro_materials':
        samples = Object.values(items.materials.bySection[mat].sub);
        return samples.filter(s => s.title === color)[0];
      case 'gloss':
        samples = Object.values(items.materials.bySection[mat].sub);
        return samples.filter(s => s.title === color)[0];
      default:
        return null;
    }
  }),
  getDoorMatLoaded: selector([state => state], (stateResolvers) => {
    let bool = false;
    if (stateResolvers[0].materials.loaded && stateResolvers[0].doors.loaded) { bool = true };
    return bool;
  }),
  getDoorMaterial: selector([state => state], (stateResolvers, params) => {
    console.log(params)
    if (!stateResolvers[0].materials.loaded && !stateResolvers[0].doors.loaded) return false;
    const store = stateResolvers[0];
    const { door, mat } = params[0];
    let samples = { material: [], door: {} };
    switch (mat) {
      case 'painted':
        samples.material = Object.values(store.materials.bySection.painted.sub);
        break;
      case 'wood':
        samples.material = Object.values(store.materials.bySection.wood.sub);
        break;
      default:
        const all = {
          engineered: Object.values(store.materials.bySection.engineered.sub),
          melamine: Object.values(store.materials.bySection.melamine.sub),
          euro: Object.values(store.materials.bySection.euro_materials.sub),
          gloss: Object.values(store.materials.bySection.gloss.sub)
        }
        all.engineered.forEach(en => samples.material.push(en));
        all.melamine.forEach(en => samples.material.push(en));
        all.euro.forEach(en => samples.material.push(en));
        all.gloss.forEach(en => samples.material.push(en));
        break;
    }
    samples.door = store.doors.items[door];
    console.log(samples)
    return samples;
  }),
  getDoorWoodStains: selector([state => state], (stateResolvers, params) => {
    console.log(params)
    if (!stateResolvers[0].materials.loaded && !stateResolvers[0].doors.loaded) return false;
    const store = stateResolvers[0];
    const { door, color } = params[0];

    let samples = { ready: false, material: {}, door: {}, stains: [] };
    samples.door = store.doors.items[door];
    samples.stains = Object.values(store.stains.items);
    const array = Object.values(store.materials.bySection.wood.sub);
    array.map(m => {
      if (m.title === color) {
        samples.material = m;
      }
    });
    return samples;
  })
};

export default model;
