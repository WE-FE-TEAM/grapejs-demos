/**
 * Created by jess on 16/4/26.
 */

'use strict';


var $ = require('jquery');
var service = require('common:widget/ui/service/service-factory.js');

var userService = service.getService('user');

var defaultAvatarURL = __uri('./assets/default-avatar-78.png');

var header = {
    init: function () {
        var authenticated = $.trim($('#header-helper-authenticated').text()) == 'true';
        if (authenticated) {
            getUserInfo.initMsg();
            getUserInfo.initUserInfo();
        }
    }
};

var getUserInfo = {
    getHomePageUserInfoCallBack : function (requestStatus, out){
        if( requestStatus === userService.STATUS.ERROR ){
            return;
        }
        var rsp = out.data;
        if (rsp.retResult != 'success' || rsp.status == '-1') {
            return;
        }
        if ($.trim(rsp.userAvatar)) {
            $('#he-userAvatar').attr('src', rsp.userAvatar);
            $('.he-userAvatar-class').attr('src', rsp.userAvatar);
        } else {
            $('#he-userAvatar').attr('src', defaultAvatarURL);
            $('.he-userAvatar-class').attr('src', defaultAvatarURL);
        }
    },
    initUserInfo : function () {

        userService.getHomePageUserInfo({ timeout : 5000 } ).then( getUserInfo.getHomePageUserInfoCallBack )

    },
    initMsg : function () {
        var $msg = $('#header-msgcount');
        var $mail = $(".account-menu .org");
        userService.getUnreadMsgCount(null).then(function (requestStatus, out) {
            if( requestStatus === userService.STATUS.ERROR ){
                return;
            }
            var rsp = out.data;
            var count = rsp.count;
            if (count >= 100) {
                $msg.text('');
                $msg.removeClass('msgcount-icon').addClass('msgcountmore-icon');
                $msg.show();
            } else if (count > 0 && count < 100) {
                $msg.text(count);
                $msg.show();
            }
            if(count > 0) {
                $mail.show();
                $mail.text("（"+count+"）");
            }
        });
    }
};


module.exports = header;