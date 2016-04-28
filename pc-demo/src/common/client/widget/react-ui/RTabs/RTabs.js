/* Tab 组件*/


'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var cloneElement = React.cloneElement;


function noop(){}


var navItemClass = 'tab-nav-item';
var navItemSelectedClass = 'tab-nav-item-selected';

var TabNavItem = React.createClass({

    getDefaultProps : function(){
        return {
            index : 0,
            selected : false,
            className : '',
            onRequestChange : noop
        };
    },

    handleClick : function(){
        if( this.props.selected ){
            return;
        }
        this.props.onRequestChange( this.props.index, this );
    },

    render : function(){
        var props = this.props;
        var className = navItemClass + ' ' + props.className;
        if( props.selected ){
            className += ' ' + navItemSelectedClass;
        }

        return (
                <li className={className} onClick={this.handleClick}>{props.children}</li>
            );
    }

});


var navClass = 'tab-nav fn-clear';

var TabNav = React.createClass({

    getDefaultProps : function(){
        return {
            selectedIndex : 0,
            className : '',
            onRequestChange : noop
        };
    },

    getChildren : function(){
        let { selectedIndex, children, onRequestChange } = this.props;
        var out = React.Children.map( children, function( child, index ){
            var selected = index === selectedIndex;
            var key = 'nav-item-' + index;
            return cloneElement( child, {
                selected,
                key,
                index,
                onRequestChange
            } );
        }, this );

        return out;
    },

    render : function(){

        var props = this.props;

        var children = this.getChildren();

        var className = navClass + ' ' + props.className;

        return (
                <ul className={className}>{children}</ul>
            );
    }

});


var panelItemClass = 'tab-panel-item';
var panelItemSelectedClass = 'tab-panel-item-selected';

var TabPanelItem = React.createClass({

    getDefaultProps : function(){
        return {
            key : '',
            selected : false,
            className : ''
        };
    },

    render : function(){
        var props = this.props;
        var className = panelItemClass + ' ' + props.className;
        if( props.selected ){
            className += ' ' + panelItemSelectedClass;
        }

        return (
                <div className={className}>{props.children}</div>
            );
    }
});


var panelClass = 'tab-panel';

var TabPanel = React.createClass({

    getDefaultProps : function(){
        return {
            selectedIndex : 0,
            className : ''
        };
    },

    getChildren : function(){
        let { selectedIndex, children } = this.props;
        var out = React.Children.map( children, function( child, index ){
            var selected = index === selectedIndex;
            var key = 'panel-item-' + index;
            return cloneElement( child, {
                selected,
                key,
                index
            } );
        }, this );

        return out;
    },

    render : function(){
        var props = this.props;
        var className  = panelClass + ' ' + props.className;

        var children = this.getChildren();

        return (
                <div className={className}>{children}</div>
            );
    }

});


//

var tabClass = 'rui-tab';

var RTabs = React.createClass({

    getDefaultProps : function(){
        return {
            selectedIndex : 0,
            className : '',
            onRequestChange : noop
        };
    },


    getChildren : function(){
        let { children} = this.props;
        var selectedIndex = this.props.selectedIndex;
        var onNavClick = this.handleNavItemClick;
        var out = [];

        out = React.Children.map( children, function( child, index ){

            return cloneElement( child, {
                onRequestChange : onNavClick,
                selectedIndex : selectedIndex
            });
        } );

        return out;
    },

    handleNavItemClick : function( index ){
        if( this.props.selectedIndex === index ){
            return;
        }

        this.props.onRequestChange( index, this.props.selectedIndex );

    },

    render : function(){

        var children = this.getChildren();

        var className = tabClass + ' ' + ( this.props.className || '' );
        var id = this.props.id || '';

        return (
                <div id={ id } className={className}>{children}</div>
            );
    }

});




module.exports = {
    TabNavItem,
    TabNav,
    TabPanelItem,
    TabPanel,
    RTabs
};


