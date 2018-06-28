const DataController = require("./models/data_controller.js");
const MunroView = require("./views/munro_view.js");
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munroContainer = document.querySelector('#name-list');
  const munroView = new MunroView(munroContainer);
  munroView.bindEventsView();

  const dataControllerObject = new DataController();
  dataControllerObject.getData();
})
