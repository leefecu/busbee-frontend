var React = require('react');
var MainSearch = require('./main_search.js');
var Footer = require('./footer.js');

var App = React.createClass({
    render: function() {
        return (
            <div className="busbee">               
                <MainSearch />
                
            </div>
        );
    }
    
});
    
module.exports = App;
