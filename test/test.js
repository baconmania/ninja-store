var should = require('should');
var routes = require('../routes/store');

var req = {
  session: {username: "sooo"}
};
var res = {
  viewName: "",
  data: {},
  render: function(view, viewData) {
    this.viewName = view;
    this.data = viewData;
  },
  redirect: function(view) {
    this.viewName = view;
  }
};

describe("Routing", function(){
  describe("home", function(){
    it("should provide the view name '/items' if username exists", function(){
      routes.home(req, res);
      res.viewName.should.equal('/items');
    });
  });
});
