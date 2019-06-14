import { action, thunk } from 'easy-peasy';
const root = 'https://webquoin.com/catalog/door-selector/assets/json/';

export default {
    doors: {},
    // Thunks
  fetchDoors: thunk(async actions => {
    const res = await fetch(root+'doors.json');
    const doors = await res.json();
    actions.setDoors(doors);
  }),
    // Actions
    setDoors: action((state, doors) => {
      state.doors = doors;
    }),
    materials: {},
    // Thunks
  fetchMaterials: thunk(async actions => {
    const res = await fetch(root+ 'materials.json');
    const mats = await res.json();
    actions.setMaterials(mats);
  }),
    // Actions
    setMaterials: action((state, mats) => {
      state.materials = mats;
    }),
    stains: {},
    // Thunks
  fetchStains: thunk(async actions => {
    const res = await fetch(root+'stains.json');
    const stains = await res.json();
    actions.setStains(stains);
  }),
    // Actions
    setStains: action((state, stains) => {
      state.stains = stains;
    }),
    edges: {},
    // Thunks
  fetchEdges: thunk(async actions => {
    const res = await fetch(root+'edges.json');
    const edges = await res.json();
    actions.setEdges(edges);
  }),
    // Actions
    setEdges: action((state, edges) => {
      state.edges = edges;
    }),
      
}
