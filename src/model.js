import { action, thunk, selector } from 'easy-peasy';
const root = 'https://webquoin.com/catalog/door-selector/assets/json/';

const userModel = {
  product_line: 'custom',
  material: {
    type: '',
    title: '',
    category: '',
    color: ''
  },
  door: {
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
  selection: [],
  // Actions
  userDoor: action((user, clicked) => {
    user.door.title = clicked;
  }, { listenTo: '@action.doors.clickedDoor' }),
  userMaterial: action((user, clicked) => {
    user.material.category = clicked;
  }, { listenTo: '@action.materials.clickedMat' }),
  userStain: action((user, clicked) => {
    user.stain.color = clicked;
  }, { listenTo: '@action.stains.clickedStain' }),
  userEdge: action((user, clicked) => {
    user.edge.title = clicked;
  }, { listenTo: '@action.edges.clickedEdge' })
}

const doorsModel = {
  loading: false,
  loaded: false,
  items: {},
  door: null,
  // Thunks
  fetchDoors: thunk(async (actions) => {
    const res = await fetch(root + 'doors.json');
    const doors = await res.json();
    actions.setDoors(doors);
  }, { listenTo: 'initStore' }),
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
  })
};

const materialsModel = {
  loading: false,
  loaded: false,
  bySection: {},
  material: '',
  // Thunks
  fetchBySection: thunk(async actions => {
    const res = await fetch(root + 'mat-sections.json');
    const mats = await res.json();
    actions.setSections(mats);
  }, { listenTo: 'initStore' }),
  // Actions
  setSections: action((materials, mats) => {
    materials.bySection = mats;
    materials.loaded = true;
  }),
  clickedMat: action((materials, clicked) => {
    materials.material = clicked;
  }),
  // Selectors
  getSection: selector([materials => materials.bySection], (stateResolvers, sectionId) => {
    const items = stateResolvers[0];
    return items[sectionId] || null;
  }),
  getMaterials: selector([materials => materials.bySection], (stateResolvers) => {
    let items = stateResolvers[0];
    items = Object.values(items);
    items = items.map(item => item = { ...item, category: 'materials' });
    return items || null;
  }),
  getPaints: selector([materials => materials], (stateResolvers) => {
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
  fetchStains: thunk(async actions => {
    const res = await fetch(root + 'stains.json');
    const stains = await res.json();
    actions.setStains(stains);
  }, { listenTo: 'initStore' }),
  // Actions
  setStains: action((stains, items) => {
    const array = Object.values(items);
    let newItems = {};
    array.forEach(arr => {
      if (arr.image) {
        newItems[arr.title.toLowerCase()] = { ...arr, firestore_uid: arr.uid, uid: arr.title.toLowerCase() };
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
  getStains: selector([stains => stains.items], (stateResolvers) => {
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
  fetchEdges: thunk(async actions => {
    const res = await fetch(root + 'edges.json');
    const edges = await res.json();
    actions.setEdges(edges);
  }, { listenTo: 'initStore' }),
  // Actions
  setEdges: action((edges, items) => {
    const array = Object.values(items);
    let newItems = {};
    array.forEach(arr => {
      if (arr.image) {
        newItems[arr.title.toLowerCase()] = { ...arr, firestore_uid: arr.uid, uid: arr.title.toLowerCase() };
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
  getEdges: selector([edges => edges.items], (stateResolvers) => {
    let items = stateResolvers[0];
    items = Object.values(items);
    items = items.map(item => item = { ...item, category: 'edges' });
    return items || null;
  })
};

const model = {
  doors: doorsModel,
  materials: materialsModel,
  stains: stainsModel,
  edges: edgesModel,
  user: userModel,
  // Actions
  onInit: action((state, action) => {
    state.doors.loading = true;
    state.materials.loading = true;
    state.stains.loading = true;
    state.edges.loading = true;
  }, { listenTo: 'initStore' }),
  // Selectors
  getColor: selector([state => state], (stateResolvers, obj) => {
    let items = stateResolvers[0];
    const { color, mat } = obj[0];
    if (!items.materials.loaded || !items.stains.loaded) return null;
    switch (mat) {
      case 'stains':
        const stain = color.toLowerCase();
        return items.stains.items[stain];
      case 'painted':
        const paints = Object.values(items.materials.bySection.painted.sub);
        return paints.filter(s => s.title === color)[0];
      default:
        return null;
    }
  })
};

export default model;
