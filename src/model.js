import { action, thunk, selector } from 'easy-peasy';
const root = 'https://webquoin.com/catalog/door-selector/assets/json/';

const userModel = {
  product_line: 'custom',
  material: {
    type: '',
    categroy: '',
    color: ''
  },
  door: {
    type: '',
    color: '',
    categroy: ''
  },
  stain: {
    type: '',
    color: '',
    categroy: ''
  },
  selection: []
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
  items: {},
  bySection: {},
  // Thunks
  fetchMaterials: thunk(async actions => {
    const res = await fetch(root + 'materials.json');
    const mats = await res.json();
    actions.setMaterials(mats);
  }, { listenTo: 'initStore' }),
  fetchBySection: thunk(async actions => {
    const res = await fetch(root + 'mat-sections.json');
    const mats = await res.json();
    actions.setSections(mats);
  }, { listenTo: 'initStore' }),
  // Actions
  setMaterials: action((materials, mats) => {
    materials.items = mats;
    materials.loaded = true;
  }),
  setSections: action((materials, mats) => {
    materials.bySection = mats;
  }),
  // Selectors
  getSection: selector([materials => materials.bySection], (stateResolvers, sectionId) => {
    const items = stateResolvers[0];
    return items[sectionId] || null;
  })
};

const stainsModel = {
  loading: false,
  loaded: false,
  stains: {},
  // Thunks
  fetchStains: thunk(async actions => {
    const res = await fetch(root + 'stains.json');
    const stains = await res.json();
    actions.setStains(stains);
  }, { listenTo: 'initStore' }),
  // Actions
  setStains: action((state, stains) => {
    state.stains = stains;
    state.loaded = true;
  })
};

const edgesModel = {
  loading: false,
  loaded: false,
  edges: {},
  // Thunks
  fetchEdges: thunk(async actions => {
    const res = await fetch(root + 'edges.json');
    const edges = await res.json();
    actions.setEdges(edges);
  }, { listenTo: 'initStore' }),
  // Actions
  setEdges: action((state, edges) => {
    state.edges = edges;
    state.loaded = true;
  })
};

const model = {
  doors: doorsModel,
  materials: materialsModel,
  stains: stainsModel,
  edges: edgesModel,
  user: userModel,
  onInit: action((state, action) => {
    state.doors.loading = true;
    state.materials.loading = true;
    state.stains.loading = true;
    state.edges.loading = true;
  }, { listenTo: 'initStore' })
};

export default model;
