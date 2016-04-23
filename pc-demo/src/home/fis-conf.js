/**
 * @file FIS 配置
 * @author wangcheng
 */

'use strict';

let path = require('path');

fis.set('namespace', 'home');

let url_prefix = '/n';
let projectDir = path.dirname(fis.project.getProjectPath());
let distDir = projectDir + '/../dist/';

fis.match('**', {
    deploy: fis.plugin('local-deliver', {
        to: distDir
    })
});

fis.match('**.{js,css,png,jpg,gif,jsx,scss,ts}', {
    domain: url_prefix
});
