const RequestHelper = require("../helpers/request_helper.js");
const PubSub = require("../helpers/pub_sub.js");

const DataController = function(){
  this.munros = [];
};

DataController.prototype.getData = function () {
  const request = new RequestHelper("https://munroapi.herokuapp.com/api/munros");

  request.get((data) => {
    this.munros = data;
    // console.log(this.munros);
    // const name = "name";
    const munroNames = this.munroField();
    console.log(munroNames);

    PubSub.publish("DataController: all-munro-names-ready", munroNames);
  });
};

DataController.prototype.munroField = function(){
  const result = this.munros.map(munro => munro.name);
    return result;
 };

module.exports = DataController;
