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

var NavBar = React.createClass({displayName: "NavBar",
    propTypes: {
        navBar: React.PropTypes.array // The JSON array returned from js/model/NavModel.getNavBarItems passed on from main
    },
    getInitialState: () => {
        return {navCollapsed: 1};
    },
    onToggleNav() {
        // this.setState({ navCollapsed: !this.state.navCollapsed });
        this.setState({navCollapsed: 2 });
    },
    
    render: function() {
        var navBar = this.props.navBar;
        // console.log(navBar);
        const items = _.map(navBar, (item,index) => (
            React.createElement(NavItem, {item: item, key: index}) 
        ));
        return (
            React.createElement("nav", {className: "navbar navbar-expand-lg navbar-light bg-light fixed-top"}, 
            /* {this.state.navCollapsed} */
                React.createElement("img", {className: "navbar-brand", src: "https://ias.inspera.no/file/cil/mp_logo/file"}), 
                /* <a href="#" onClick={this.onToggleNav}>aeaseeae</a> */
                React.createElement("button", {"aria-expanded": "false", className: "navbar-toggler ml-auto hidden-sm-up float-xs-right", onClick: this.onToggleNav, type: "button"}, 
                    React.createElement("span", {className: "navbar-toggler-icon"})
                ), 
                React.createElement("div", {className: (this.state.navCollapsed ? 'collapse' : '') + ' navbar-collapse'}, 
                    React.createElement("ul", {className: "navbar-nav mr-auto"}, 
                        items
                    )
                )
            )
        );
    }
});

module.exports = NavBar;