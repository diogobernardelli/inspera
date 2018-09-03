var express = require('express'),
    app = express(),
    React = require('react'),
    browserify = require('browserify-middleware'),
    reactify = require('reactify'),
    path = require('path'),
    DOM = React.DOM, html = DOM.html, div = DOM.div, script = DOM.script,
    main = React.createFactory(require('./js/_jsx/views/main')),
    model = require('./js/model/NavModel');
    
app.use("/js", express.static(path.join(__dirname, 'js')));
app.use("/css", express.static(path.join(__dirname, 'css')));
app.use("/build", express.static(path.join(__dirname, 'build')));

browserify.settings('transform', ['reactify']);
app.get('/bundles/main.js', browserify('./js/_jsx/views/main.js'));

app.get('/inspera', function (req, res) {
    var props = { navBar: model.getNavBarItems(), initialState: false };
    
    res.type('html');
    res.send(React.renderToString(main( props ), html));
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('dashboard server listening at http://localhost', port);
});

app.use(express.static('css'));