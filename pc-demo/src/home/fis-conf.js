/**
 * @file FIS 配置
 * @author wangcheng
 */

'use strict';

let path = require('path');

fis.set('namespace', 'home');

/**
 * 定制 grape release发布地址
 */
let projectDir = path.dirname(fis.project.getProjectPath());
let distDir = projectDir + '/../dist/';
fis.match('**', {
    deploy: fis.plugin('local-deliver', {
        to: fis.get('options.d') ||  fis.get('options.dest') || distDir
    })
});

/**
 * 静态资源url前添加前缀
 */
let url_prefix = '/n';
fis.match('**.{js,css,png,jpg,gif,jsx,scss,ts}', {
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


