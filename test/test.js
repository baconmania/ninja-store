var should = require('should');
var routes = require('../routes/store');

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
    it("should provide the view name 'home' if username is missing", function(){
      var req = {
        session: {username: undefined}
      };
      routes.home(req, res);
      res.viewName.should.equal('home');
    });
    it("should provide the view name '/items' if username exists", function(){
      var req = {
        session: {username: "sooo"}
      };
      routes.home(req, res);
      res.viewName.should.equal('/items');
    });
  });
});
