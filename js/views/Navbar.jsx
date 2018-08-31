var React = require('react'),
    _ = require('underscore');


var NavItem = React.createClass({
    propTypes: {
        item: React.PropTypes.object // One nav item in the navBar array
    },
    render: function() {
        var item = this.props.item;
        return (
            <li className="nav-item">
                <a className="nav-link" href={item.url} target={(item.newTab ? '_blank' : '_self')}>
                    {item.title}
                </a>
            </li>
        );
    }
});

module.exports = React.createClass({
    propTypes: {
        navBar: React.PropTypes.array // The JSON array returned from js/model/NavModel.getNavBarItems passed on from main
    },
    render: function() {
        var items = [],
            navBar = this.props.navBar;
        for (var i = 0; i < navBar.length; i++) {
            items.push(<NavItem item={navBar[i]} key={i}/>);
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <img className="navbar-brand" src="https://ias.inspera.no/file/cil/mp_logo/file"/>
                <button className="navbar-toggler ml-auto hidden-sm-up float-xs-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto">
                        {items}
                    </ul>
                </div>
            </nav>
        );
    }
});