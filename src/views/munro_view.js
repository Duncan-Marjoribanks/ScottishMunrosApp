const PubSub = require("../helpers/pub_sub.js");

const MunroView = function (container) {
  this.container = container;
  this.namesData = [];
}


MunroView.prototype.bindEventsView = function () {
  PubSub.subscribe("DataController: all-munro-names-ready", (evt) => {
    const munroNames = evt.detail;
    this.namesData = munroNames;
    this.generate(munroNames);

  });

};

MunroView.prototype.generate = function (munroNames) {
  const unorderedList = document.createElement('ul');
  this.container.appendChild(unorderedList);
  munroNames.forEach((munro) => {
    const listItem = document.createElement('li');
    listItem.textContent = munro;
    unorderedList.appendChild(listItem);
  })
};

module.exports = MunroView;
