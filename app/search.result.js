var React = require('react');

var SearchResult = React.createClass({
    render: function() {
        return (
            <div className="search-result">
            	<table>
                    <thead>
                        <tr>
                            <th> Num </th>
                            <th> Discription </th>
                            <th>  </th>
                        </tr>
                    </thead>

                    <tbody>
                      <tr><a href="#">
                            <td>8874</td>
                            <td>Takapuna</td>
                            <td><img src=" " /></td>
                        </a></tr>
                        <tr>
                            <td>887</td>
                            <td>Britomart</td>
                            <td><img src=" " /></td>
                        </tr>
                        <tr>
                            <td>8874</td>
                            <td>Takapuna</td>
                            <td><img src="" /></td>
                        </tr>
                        <tr>
                            <td>887</td>
                            <td>Britomart</td>
                            <td><img src=" " /></td>
                        </tr>
                        <tr>
                            <td>887</td>
                            <td>Britomart</td>
                            <td><img src=" " /></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
    
});
    
module.exports = SearchResult;
