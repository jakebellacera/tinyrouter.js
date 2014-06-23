# tinyrouter.js

A tiny router. It currently depends on jQuery.

## Usage

```javascript
var router = new TinyRouter({
  routes: {
    "blog": "listBlogPosts"
  },
  controller: {
    listBlogPosts: function () {
      console.log("Listing blog posts!");
    }
  }
});

router.start();
```

You can also listen to events:

```javascript
router.on("route:finished", function (fragment) {
  console.log("You just visited", fragment);
});
```

## TODO

* [ ] [add parameter support](https://github.com/jakebellacera/tinyrouter.js/issues/1)
* [ ] [remove jQuery dependency](https://github.com/jakebellacera/tinyrouter.js/issues/2)
* [ ] add more events
* [ ] add tests
