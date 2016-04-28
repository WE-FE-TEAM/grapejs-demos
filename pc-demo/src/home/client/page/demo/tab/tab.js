/**
 * Created by jess on 16/4/28.
 */


'use strict';



var React = require('react');
var ReactDOM = require('react-dom');


var TabWrap = require('common:widget/react-ui/RTabs/RTabs.js');

var TabNavItem = TabWrap.TabNavItem;
var TabNav = TabWrap.TabNav;
var TabPanelItem = TabWrap.TabPanelItem;
var TabPanel = TabWrap.TabPanel;
var RTabs = TabWrap.RTabs;


class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            selectedIndex : 0
        };


        this.onTabRequestChange = this.onTabRequestChange.bind( this );
    }

    onTabRequestChange(index, lastIndex){
        this.setState({
            selectedIndex : index
        });
    }


    render(){

        let navItemClass = 'demo-tab-nav-item';

        return (
            <RTabs id="demo-tab" className="demo-tab-class" onRequestChange={this.onTabRequestChange} selectedIndex={this.state.selectedIndex}>
                <TabNav>
                    <TabNavItem className={navItemClass}>基金概况</TabNavItem>
                    <TabNavItem className={navItemClass}>基金经理</TabNavItem>
                    <TabNavItem className={navItemClass}>须知</TabNavItem>
                    <TabNavItem className={navItemClass}>常见问题</TabNavItem>
                </TabNav>
                <TabPanel>
                    <TabPanelItem className="fund-detail-panel-item">
                        这里是 基金概况
                    </TabPanelItem>
                    <TabPanelItem className="fund-detail-panel-item">
                        基金经理的详情
                    </TabPanelItem>
                    <TabPanelItem className="fund-detail-panel-item">
                        333
                    </TabPanelItem>
                    <TabPanelItem className="fund-detail-panel-item">
                        4444
                    </TabPanelItem>
                </TabPanel>
            </RTabs>
        );
    }
}



let singleton = {

    init : function(){

        ReactDOM.render( <App />, document.getElementById('app') );
    }

};



module.exports = singleton;