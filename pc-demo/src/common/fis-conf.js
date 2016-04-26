/**
 * @file FIS 配置
 * @author wangcheng
 */

'use strict';

let path = require('path');

fis.set('namespace', 'common');

/**
 * 静态资源url前添加前缀
 */
let url_prefix = '/n';
fis.match('**.{js,c' +
    'ss,png,jpg,gif,jsx,scss,ts}', {
    domain: url_prefix
});


/**
 * 打包策略 :
 *     node_modules资源打包
 *     widget资源打包
 */
fis.media('prod')
    .match("/node_modules/**.{js,jsx}", {
        packTo : '/${static}/pkg/${namespace}_nm.js'
    })
    .match("/client/widget/**.{js,jsx,ts}", {
        packTo : '/${static}/pkg/${namespace}_wdg.js'
    })
    .match('/client/widget/(**.{css,scss})', {
        packTo : '/${static}/pkg/${namespace}_wdg.css'
    });
