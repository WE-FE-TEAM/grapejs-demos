/**
 * react dialog demo
 * Created by jess on 16/4/26.
 */


'use strict';


class DemoController extends weDemo.ControllerBase {
    
    dialog1Action(){
        console.log('demo/dialog/dialog1');
        this.http.render('home/page/demo/dialog/dialog.tpl');
    }
}



module.exports = DemoController;