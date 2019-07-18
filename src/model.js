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

const uiuxModel = {
  matChoice: {
    'painted': {
      title: 'Painted',
      link: 'painted',
      chips: ['Paints'],
      image: 'https://webquoin.com/catalog/build/assets/samples/quite%20time.jpg'
    },
    'wood': {
      title: 'Wood',
      link: 'wood',
      chips: ['Alder', 'White Oak', 'Black Walnut'],
      image: 'https://webquoin.com/catalog/doorstyler/images/Material/walnut.jpg'
    },
    'other': {
      title: 'Others',
      link: 'other',
      chips: ['Melamine', 'Gloss', 'Metal', 'Euro Materials'],
      image: 'https://firebasestorage.googleapis.com/v0/b/modcon-2b3c7.appspot.com/o/uploads%2Fmaterials%2FTM-01.jpg?alt=media&token=cffb2dc4-b621-4406-b172-b03f4e46839a'
    }
  },
  dstyleChoice: {
    'slab': {
      title: 'Slab Face Doors',
      link: 'slab',
      chips: ['Slab'],
      mats: ['painted', 'wood', 'other'],
      image: 'https://webquoin.com/catalog/images/Doors/Webquoin/Alpha.gif'
    },
    'recessed': {
      title: 'Recessed Panel Doors',
      link: 'recessed',
      chips: ['Alder', 'White Oak', 'Black Walnut'],
      mats: ['painted', 'wood', 'other'],
      image: 'https://webquoin.com/catalog/images/doors/vista.jpg'
    },
    'raised': {
      title: 'Raised Panel Doors',
      link: 'raised',
      chips: ['Melamine', 'Gloss', 'Metal', 'Euro Materials'],
      mats: ['painted', 'wood'],
      image: 'https://webquoin.com/catalog/images/Doors/Webquoin/Cambridge.png'
    }
  },
  icons: [
    {
      icon: 'insert_chart'
    },
    {
      icon: 'inbox'
    },
    {
      marked_icon: 'bookmark',
      unmarked_icon: 'bookmark_border'
    },
    {
      icon: 'free_breakfast'
    },
    {
      icon: 'help'
    },
    {
      icon: 'home'
    },
    {
      icon: 'info'
    }
  ],
  // Selectors
  getMats: selector(
    [uiux => uiux.matChoice],
    (stateResolvers) => {
      const items = Object.values(stateResolvers[0]) || [];
      return items;
    }
  ),
  getDstyle: selector(
    [uiux => uiux.dstyleChoice],
    (stateResolvers) => {
      const items = Object.values(stateResolvers[0]) || [];
      return items;
    }
  )
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
    async (actions, clicked) => {
      await setTimeout(() => {
        actions.toastRead(clicked)
      }, 4000);
    }, { listenTo: '@action.user.toastReading' }
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
  uiux: uiuxModel,
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
  step1: action((state, update) => {
    const item = state.uiux.matChoice[update.id];
    const step = {
      title: item.title,
      location: update.id,
      link: '/'
    };
    state.user.selection.steps[update.step] = step;
    state.user.material.type = update.id;
    state.materials.main_material = update.id;
    // send out toast
    const toast = {
      key: 'material',
      text: 'Selected ' + item.title,
      new: true,
      reading: false
    }
    state.user.toasts[toast.key] = toast;
  }),
  step2: action((state, update) => {
    const item = state.uiux.dstyleChoice[update.id];
    const step = {
      title: item.title,
      location: update.id,
      link: '/steps/' + update.params.mat
    };
    state.user.selection.steps[update.step] = step;
    state.user.door.door_style = update.id;
    state.doors.door_style = update.id;
    // send out toast
    const toast = {
      key: 'doorstyle',
      text: 'Selected ' + item.title,
      new: true,
      reading: false
    }
    state.user.toasts[toast.key] = toast;
  }),
  step3: action((state, update) => {
    const item = state.doors.items[update.id];
    const step = {
      title: item.title,
      location: update.id,
      link: '/steps/' + update.params.mat + '/' + update.params.dstyle + '/doors'
    };
    state.user.selection.steps[update.step] = step;
    state.user.door.title = update.id;
    state.doors.door_style = update.id;
    // send out toast
    const toast = {
      key: 'door',
      text: 'Selected the ' + item.title + ' door which is a ' + state.user.selection.steps.step2.title + ' in material ' + state.user.selection.steps.step1.title,
      new: true,
      reading: false
    }
    state.user.toasts[toast.key] = toast;
  }),
  step4: action((state, update) => {
    const step = {
      title: update.id,
      location: update.id,
      link: '/steps/' + update.params.mat + '/' + update.params.dstyle + '/' + update.params.door
    };
    state.user.selection.steps[update.step] = step;
    state.user.material.color = update.id;
    state.materials.material = update.id;
    // send out toast
    const toast = {
      key: 'doorcolor',
      text: 'Selected ' + update.id + ' on a ' + update.params.door,
      new: true,
      reading: false
    }
    state.user.toasts[toast.key] = toast;
  }),
  step5: action((state, update) => {
    const step = {
      title: update.id,
      location: update.id,
      link: '/steps/' + update.params.mat + '/' + update.params.dstyle + '/' + update.params.door + '/' + update.params.color
    };
    state.user.selection.steps[update.step] = step;
    state.user.material.color = update.id;
    state.materials.material = update.id;
    // send out toast
    const toast = {
      key: 'doorstain',
      text: 'Selected ' + update.id + ' on a ' + update.params.color + ' - ' + update.params.door + ' door',
      new: true,
      reading: false
    }
    state.user.toasts[toast.key] = toast;
  }),
  updateStep: action((state, params) => {
    let step = 0;
    step = params.mat ? 1 : step;
    step = params.dstyle ? 2 : step;
    step = params.door ? 3 : step;
    step = params.color ? 4 : step;
    step = params.stain ? 5 : step;
    state.user.selection.step = step;
  }),
  // Thunks
  steps: thunk((actions, payload) => {
    const step1 = payload.params.mat ? stepCheck(payload, 'mat', 'step1') : { skip: true };
    const step2 = payload.params.dstyle ? stepCheck(payload, 'dstyle', 'step2') : { skip: true };
    const step3 = payload.params.door ? stepCheck(payload, 'door', 'step3') : { skip: true };
    const step4 = payload.params.color ? stepCheck(payload, 'color', 'step4') : { skip: true };
    const step5 = payload.params.stain ? stepCheck(payload, 'stain', 'step5') : { skip: true };
    if (step1.skip === false) {
      actions.step1(step1);
    }
    if (step2.skip === false) {
      actions.step2(step2);
    }
    if (step3.skip === false) {
      actions.step3(step3);
    }
    if (step4.skip === false) {
      actions.step4(step4);
    }
    if (step5.skip === false) {
      actions.step5(step5);
    }
    actions.updateStep(payload.params);
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
    return samples;
  }),
  getDoorWoodStains: selector([state => state], (stateResolvers, params) => {
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

function stepCheck(payload, key, stepid) {
  const item = payload.params[key];
  const step = {
    id: item,
    params: payload.params,
    step: stepid,
    skip: payload.selection.steps[stepid] && payload.selection.steps[stepid].location === item ? true : false
  };
  return step;
}

export default model;
