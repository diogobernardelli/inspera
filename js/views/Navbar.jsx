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
        navBar: React.PropTypes.array, // The JSON array returned from js/model/NavModel.getNavBarItems passed on from main
        initialState: React.PropTypes.number
    },
    getInitialState: function() {
        return {
            navCollapsed: this.props.initialState
        };
    },
    _onToggleNav() {
        this.setState({ navCollapsed: !this.state.navCollapsed });
    },
    
    render: function() {
        var navBar = this.props.navBar;
        const items = _.map(navBar, (item,index) => (
            <NavItem item={item} key={index}/> 
        ));
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <img className="navbar-brand" src="https://ias.inspera.no/file/cil/mp_logo/file"/>
                <button aria-expanded='false' className='navbar-toggler ml-auto hidden-sm-up float-xs-right' onClick={ this._onToggleNav } type='button' >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={ (this.state.navCollapsed ? 'collapse' : '' ) + ' navbar-collapse'}>
                    <ul className="navbar-nav mr-auto">
                        { items }
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = NavBar;