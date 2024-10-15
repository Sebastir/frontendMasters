import API from './API.js';

export async function loadData() {
  data = await API.fetchMenu();
  app.store.menu = data;

}
