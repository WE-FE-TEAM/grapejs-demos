/**
 * @file FIS 配置
 * @author wangcheng
 */

'use strict';

let path = require('path');

fis.set('namespace', 'home');


/**
 * 静态资源url前添加前缀
 */
let url_prefix = '/n';
fis.match('**.{js,c' +
    'ss,png,jpg,gif,jsx,scss,ts}', {
    domain: url_prefix
});

// //模块化支持
// fis.hook('commonjs', {
//     paths: {
//         react : './node_modules/react/react.js',
//         'react-dom' : './node_modules/react/index.js',
//         jquery : 'common:node_modules/jquery/dist/jquery.js'
//     },
//     extList: ['.js', '.es', '.ts', '.tsx', '.jsx']
// });

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
