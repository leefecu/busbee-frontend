var React = require('react');
var Header = require('./header.js');
var SearchResult = require('./search.result.js');
var Footer = require('./footer.js');

var App = React.createClass({
    render: function() {
        return (
            <div className="busbee">
                <Header />
                <SearchResult />
                <Footer />
            </div>
        );
    }
    
});
    
module.exports = App;
