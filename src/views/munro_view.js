const PubSub = require("../helpers/pub_sub.js");

const MunroView = function (container) {
  this.container = container;
  this.namesData = [];
}


MunroView.prototype.bindEventsView = function () {

  PubSub.subscribe("DataController: all-munro-objects-ready", (evt) => {
    const munroObjects = evt.detail;
    this.generateDetails(munroObjects);
  });


};


MunroView.prototype.generateDetails = function (munroObjects) {
  munroObjects.forEach((munroObject) => {

    const unorderedList = document.createElement('ul');
    this.container.appendChild(unorderedList);

    const listHeading = document.createElement('lh');
    listHeading.textContent = munroObject.name;
    unorderedList.appendChild(listHeading);
    listHeading.classList = "munro-name";

    const listItem1 = document.createElement('li');
    listItem1.textContent = `Meaning: ${munroObject.meaning}`;
    listHeading.appendChild(listItem1);


    const listItem2 = document.createElement('li');
    listItem2.textContent = `Height: ${munroObject.height}`;
    listHeading.appendChild(listItem2);

  })
};



module.exports = MunroView;
