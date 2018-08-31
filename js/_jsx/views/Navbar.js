var React = require('react'),
    _ = require('underscore');


var NavItem = React.createClass({displayName: "NavItem",
    propTypes: {
        item: React.PropTypes.object // One nav item in the navBar array
    },
    render: function() {
        var item = this.props.item;
        return (
            React.createElement("li", {className: "nav-item"}, 
                React.createElement("a", {className: "nav-link", href: item.url, target: (item.newTab ? '_blank' : '_self')}, 
                    item.title
                )
            )
        );
    }
});

module.exports = React.createClass({displayName: "exports",
    propTypes: {
        navBar: React.PropTypes.array // The JSON array returned from js/model/NavModel.getNavBarItems passed on from main
    },
    render: function() {
        var items = [],
            navBar = this.props.navBar;
        for (var i = 0; i < navBar.length; i++) {
            items.push(React.createElement(NavItem, {item: navBar[i], key: i}));
        }

        return (
            React.createElement("nav", {className: "navbar navbar-expand-lg navbar-light bg-light fixed-top"}, 
                React.createElement("img", {className: "navbar-brand", src: "https://ias.inspera.no/file/cil/mp_logo/file"}), 
                React.createElement("button", {className: "navbar-toggler ml-auto hidden-sm-up float-xs-right", type: "button", "data-toggle": "collapse", "data-target": "#navbarTogglerDemo01", "aria-controls": "navbarTogglerDemo01", "aria-expanded": "false", "aria-label": "Toggle navigation"}, 
                    React.createElement("span", {className: "navbar-toggler-icon"})
                ), 
                React.createElement("div", {className: "collapse navbar-collapse", id: "navbarTogglerDemo01"}, 
                    React.createElement("ul", {className: "navbar-nav mr-auto"}, 
                        items
                    )
                )
            )
        );
    }
});