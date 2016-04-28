/**
 * Created by wangcheng on 16/4/14.
 */

'use strict';

module.exports = [
    {
        match : /^\/demo\/user\/listAction\/id\/(\d+)/,
        rewrite : "demo/user/setting/listAction/name/we-fe?id=$1"
    },
    {
        match : "/demo/listAction/10",
        rewrite : "demo/user/setting/listAction?id=10"
    }
];
