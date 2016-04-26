/**
 * 请求用户相关的后端API的封装类
 * Created by jess on 16/4/26.
 */

'use strict';



const ServiceBase = require('./service-base');


const adapters = {};


const apiConf = {

    /* Account */
    getUnreadMsgCount: {
        url: '/getUnreadMailsCount.action',
        method: 'GET',
        dataType: 'json'
    },

    /*头部用户下拉菜单 */
    getHomePageUserInfoHttp: {
        url: '/getHomePageUserInfo.action',
        method: 'GET',
        dataType: 'json'
    },
    getHomePageUserInfoHttps: {
        url: '/account/getHomePageUserInfo.action',
        method: 'GET',
        dataType: 'json'
    }

};


let singleton = new ServiceBase( apiConf, adapters);


//封装获取头部用户信息接口, 屏蔽掉http/https
singleton.getHomePageUserInfo = function( data ){
    if( 'https:' == document.location.protocol.toLowerCase() ){
        return singleton.getHomePageUserInfoHttps( data );
    }
    return singleton.getHomePageUserInfoHttp( data );
};


module.exports = singleton;