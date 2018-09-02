var express = require('express'),
    app = express(),
    React = require('react'),
    path = require('path'),
    DOM = React.DOM, html = DOM.html, div = DOM.div, script = DOM.script,
    main = React.createFactory(require('./js/_jsx/views/main')),
    model = require('./js/model/NavModel');
    
app.use("/js", express.static(path.join(__dirname, 'js')));
app.use("/css", express.static(path.join(__dirname, 'css')));
app.use("/build", express.static(path.join(__dirname, 'build')));

app.get('/inspera', function (req, res) {
    res.type('html');
    res.send(React.renderToString(main({navBar: model.getNavBarItems()})));
});

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('dashboard server listening at http://localhost', port);
});

app.use(express.static('css'));