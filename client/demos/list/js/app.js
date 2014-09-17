var app = angular.module('rememberApp', ['ngSanitize']);

// Share data between controllers! Good stuff!
app.factory('Data', function () {
    var entries = [
            {
                created: "321321",
                modified: "191213584365",
                content: "<h1>Lorem ipsum dolor sit amet</h1>" +
                        "<p>try this keywords on search field: <strong>foo</strong></p>" +
                        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam.</p>" +
                        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam.</p>",
                author: "hammerizer",
                shared: false,
                bookmarked: true,
                collapsed: true
            },
            {
                created: "12121212",
                modified: "12121212",
                content: "<p>try this keywords on search field: <strong>baz</strong></p>" +
                        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam.</p>",
                author: "hammerizer",
                shared: false,
                bookmarked: false,
                collapsed: true
            },
            {
                created: "09090909",
                modified: "34234566",
                content: "<h1>Lorem ipsum dolor sit amet</h1>" +
                        "<p>try this keywords on search field: <strong>bar</strong></p>" +
                        "<p>Eveniet eligendi enim neque, autem voluptate. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam.</p>" +
                        "<h2>In et sit voluptates</h2>" +
                        "<p><a href='#'>Lorem ipsum</a> dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam.</p>" +
                        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam.</p>" +
                        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam.</p>",
                author: "hammerizer",
                shared: true,
                bookmarked: false,
                collapsed: false
            },
            {
                created: "09090909",
                modified: "09090909",
                content: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam.</p>" +
                        "<p>try this keywords on search field: <strong>wat</strong></p>" +
                        "<pre>" +
                        "article {\n" +
                        "    max-height: 200px;\n" +
                        "    overflow: hidden;\n" +
                        "    border: 1px solid #ddd;\n" +
                        "    border-radius: 4px 4px 0 0;\n" +
                        "    padding: 10px;\n" +
                        "    margin: 0 0 15px;\n" +
                        "}" +
                        "</pre>" +
                        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam.</p>" +
                        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quo quam aspernatur. In et sit voluptates impedit nisi laborum consequuntur ab earum maxime aspernatur, sint at quaerat illo reiciendis quibusdam.</p>",
                author: "hammerizer",
                shared: false,
                bookmarked: false,
                collapsed: true
            }
        ];

    return {
        getEntries: function () {
            return entries;
        },

        setEntries: function (value) {
            entries = value;
        }
    };
});

