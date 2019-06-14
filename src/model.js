import { action, thunk } from 'easy-peasy';
const root = 'https://webquoin.com/catalog/door-selector/assets/json/';

const doorsModel = {
  loading: false,
  loaded: false,
  items: {},
  // Thunks
  fetchDoors: thunk(async (actions) => {
    const res = await fetch(root + 'doors.json');
    const doors = await res.json();
    actions.setDoors(doors);
  }, { listenTo: 'initStore'}),
  // Actions
  setDoors: action((doors, items) => {
    doors.items = items;
    doors.loaded = true;
  })
};

const materialsModel = {
  loading: false,
  loaded: false,
  materials: {},
  // Thunks
  fetchMaterials: thunk(async actions => {
    const res = await fetch(root + 'materials.json');
    const mats = await res.json();
    actions.setMaterials(mats);
  }, { listenTo: 'initStore'}),
  // Actions
  setMaterials: action((state, mats) => {
    state.materials = mats;
    state.loaded = true;
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
  }, { listenTo: 'initStore'}),
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
  }, { listenTo: 'initStore'}),
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
  onInit: action((state, action) => {
    state.doors.loading = true;
    state.materials.loading = true;
    state.stains.loading = true;
    state.edges.loading = true;
  },{ listenTo: 'initStore'})
};

export default model;
