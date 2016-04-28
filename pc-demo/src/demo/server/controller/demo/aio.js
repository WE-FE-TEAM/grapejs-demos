/**
 * react dialog demo
 * Created by jess on 16/4/26.
 */


'use strict';


class DemoController extends weDemo.ControllerBase {
    
    tabAction(){
        // console.log('demo/dialog/dialog1');
        this.http.render('demo/page/demo/tab/tab.tpl');
    }
}



module.exports = DemoController;