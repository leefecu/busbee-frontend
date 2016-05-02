var React = require('react');

var SearchResult = React.createClass({
    render: function() {
        return (
            <div className="search-result">
            	<ul>
            		<li>result 1</li>
            		<li>result 2</li>
            		<li>result 3</li>
            	</ul>
            </div>
        );
    }
    
});
    
module.exports = SearchResult;
