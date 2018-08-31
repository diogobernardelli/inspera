var React = require('react'),
    NavBar = require('./Navbar'),
    MainContent = require('./MainContent');
module.exports = React.createClass({
    propTypes: {
        navBar: React.PropTypes.array.isRequired // The JSON returned from js/model/NavModel.getNavBarItems passed from server.js
    },
    render: function() {
        return (
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/base.css"/>
                    <meta name="author" content="Diogo"/>
                    <title>Inspera Front-End Test</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
                    
                    {/* <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> */}

                    <link rel="shortcut icon" href="https://www.inspera.com/hubfs/Images/favicon16x16.png?t=1535725809466"/>
                </head>
                <body>
                    <NavBar navBar={this.props.navBar}/>
                    <MainContent />
                </body>
            </html>
        );
    }
});