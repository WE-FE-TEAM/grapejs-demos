var React = require('react');

var ReactDom = require('react-dom');

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});


module.exports = CommentBox;