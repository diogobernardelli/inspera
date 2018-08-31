var React = require('react'),
    NavBar = require('./Navbar'),
    MainContent = require('./MainContent');

module.exports = React.createClass({displayName: "exports",
    propTypes: {
        navBar: React.PropTypes.array.isRequired // The JSON returned from js/model/NavModel.getNavBarItems passed from server.js
    },
    render: function() {
        return (
            React.createElement("html", null, 
                React.createElement("head", null, 
                    React.createElement("meta", {charset: "utf-8"}), 
                    React.createElement("link", {rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"}), 
                    React.createElement("link", {rel: "stylesheet", href: "/base.css"}), 
                    React.createElement("meta", {name: "author", content: "Diogo"}), 
                    React.createElement("title", null, "Inspera Front-End Test"), 
                    React.createElement("meta", {name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5"}), 

                    React.createElement("link", {rel: "shortcut icon", href: "https://www.inspera.com/hubfs/Images/favicon16x16.png?t=1535725809466"})
                ), 
                React.createElement("body", null, 
                    React.createElement(NavBar, {navBar: this.props.navBar}), 
                    React.createElement(MainContent, null)
                )
            )
        );
    }
});