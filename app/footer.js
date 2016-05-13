var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <footer>
                <ul>
                	<li><a href="#home"><img src="../images/footer/footer_home_orange.png" /></a></li>
                	<li><a href="#map"><img src="../images/footer/footer_maps_black.png" /></a></li>
                	<li><a href="#schedule"><img src="../images/footer/footer_alarm_black.png" /></a></li>
                	<li><a href="#fav"><img src="../images/footer/footer_favorite_black.png" /></a></li>
                	<li><a href="#setting"><img src="../images/footer/footer_more_white.png" /></a></li>
                </ul>
            </footer>
        );
    }
    
});
    
module.exports = Footer;
