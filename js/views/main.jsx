var React = require('react'),
    NavBar = require('./Navbar'),
    MainContent = require('./MainContent'),
    DOM = React.DOM, html = DOM.html, div = DOM.div, script = DOM.script;
    
module.exports = React.createClass({
    propTypes: {
        navBar: React.PropTypes.array.isRequired 
    },
    render: function() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/base.css"/>
                    <meta name="author" content="Diogo"/>
                    <title>Inspera Front-End Test</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
                    <link rel="shortcut icon" href="https://www.inspera.com/hubfs/Images/favicon16x16.png?t=1535725809466"/>
                </head>
                <body>
                    <NavBar navBar={this.props.navBar}/>
                    <MainContent />
                </body>
                {/* <script src="https://unpkg.com/react@0.14.8/dist/react.min.js"/> */}
                <script src="/build/main.js"/>
            </html>
        );
    }
});