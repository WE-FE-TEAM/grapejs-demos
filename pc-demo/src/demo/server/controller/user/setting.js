/**
 * Created by jess on 16/4/15.
 */


'use strict';


class UserSetting extends weDemo.ControllerBase {


    listAction(){
        this.http.res.end('UserSetting.list');
    }

    detailAction(){
        this.http.res.end('UserSetting.detail');
    }

    indexAction(){
        this.http.res.render('demo/page/index.tpl');
    }
}



module.exports = UserSetting;