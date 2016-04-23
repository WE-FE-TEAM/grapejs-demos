
require('./message-append.scss');

console.log("from message.js");

var a = require('./a.js');
a.test();

var $ = require("jquery");

console.log($);

var React = require('react');

var ReactDom = require('react-dom');

var CommentBox = require('./comment-ui.jsx');

ReactDom.render(
    <CommentBox />,
    document.getElementById('react-wrapper')
);

console.log(React);

