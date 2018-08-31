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

var NavBar = React.createClass({
    propTypes: {
        navBar: React.PropTypes.array // The JSON array returned from js/model/NavModel.getNavBarItems passed on from main
    },
    getInitialState: () => {
        return {navCollapsed: "true"};
    },
    _onToggleNav() {
        // this.setState({ navCollapsed: !this.state.navCollapsed });
        this.setState({ navCollapsed: "false" });
    },
    render: function() {
        var navBar = this.props.navBar;
        const items = navBar.map((number,index) =>
            <NavItem item={navBar[index]} key={index}/>
        );
        const {navCollapsed} = this.state
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            {navCollapsed}
                <img className="navbar-brand" src="https://ias.inspera.no/file/cil/mp_logo/file"/>
                <button aria-expanded='false' className='navbar-toggler ml-auto hidden-sm-up float-xs-right' onClick={this._onToggleNav} type='button' >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
                    <ul className="navbar-nav mr-auto">
                        {items}
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = NavBar;