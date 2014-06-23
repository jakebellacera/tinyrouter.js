// A tiny router
// http://github.com/jakebellacera/tinyrouter.js
;(function (window, $) {
  var TinyRouter = function (opts) {
    var config = $.extend({
      routes: {},
      controller: {}
    }, opts);

    this._mediator = $({});
    this.routes = config.routes;
    this.controller = config.controller;

    return this;
  };

  TinyRouter.prototype.getURLFragment = function () {
    return window.location.pathname.slice(1);
  };

  TinyRouter.prototype.route = function (fragment) {
    var f = fragment || this.getURLFragment(),
        action = this.routes[f];

    if (action && action in this.controller) {
      this.controller[action]();
    }

    this.trigger("route:finished", { fragment: f });
  };

  TinyRouter.prototype.start = function () {
    this.route();
  };

  TinyRouter.prototype.on = function () {
    return this._mediator.on.apply(this._mediator, arguments);
  };

  TinyRouter.prototype.one = function () {
    return this._mediator.one.apply(this._mediator, arguments);
  };

  TinyRouter.prototype.off = function () {
    return this._mediator.off.apply(this._mediator, arguments);
  };

  TinyRouter.prototype.trigger = function () {
    return this._mediator.trigger.apply(this._mediator, arguments);
  };

  window.TinyRouter = TinyRouter;
}(window, jQuery));
