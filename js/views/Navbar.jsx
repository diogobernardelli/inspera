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
            <NavItem item={item} key={index}/> 
        ));
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            {this.state.navCollapsed}
                {/* <img className="navbar-brand" src="https://ias.inspera.no/file/cil/mp_logo/file"/> */}
                <a href="#" onClick={this.onToggleNav}>aeaseeae</a>
                <button aria-expanded='false' className='navbar-toggler ml-auto hidden-sm-up float-xs-right' onClick={this.onToggleNav} type='button' >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={(this.state.navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
                    <ul className="navbar-nav mr-auto">
                        {items}
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = NavBar;