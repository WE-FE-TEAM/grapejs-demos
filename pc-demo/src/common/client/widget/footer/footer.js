/**
 * Created by jess on 16/4/26.
 */

'use strict';

var $ = require('common:widget/lib/jquery/jquery');
var Dialog = require('common:widget/ui/dialog/dialog.js');

var hideTimer = null;
$(".fixed-download").hover(function(){
    $(this).addClass('hover');
    clearTimeout(hideTimer);
    $('.download-app-wrap').show();
    $('.download-app-wrap-opacity').show();
},function(){
    hideTimer = setTimeout(function(){
        $('.download-app-wrap').hide();
        $('.download-app-wrap-opacity').hide();
        $('.fixed-download').removeClass('hover');
    },100);
});

//返回顶部
window.onscroll=function()
{
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop>=100){
        $('.fixed-goTop').show();
    }else{
        $('.fixed-goTop').hide();
    }
};

$(function(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop>=100){
        $('.fixed-goTop').show();
    }

    if ($("#wexinBtn").length && $("#weixin-content").length) {

        var dialog = Dialog.modalDialog({
            content : $('#weixin-content'),
            width : '350px'
        });

        $('#wexinBtn').on('click', function(){
            dialog.show();
        } );
        
    }
});

$('.fixed-goTop').click(function(){
    upMove($(this)[0]);
});


var $height = $('.friendlink').height();
var $oldHeight = $('.ui-footer-narrow-hide').height();
var $snowTop = 'icon-footer-snow-top';
var $mainBottom = $('.main-content');
var $heightVal;

$('.icon-footer-snow-down').on('click',function(){

    $heightVal = $height - $oldHeight;
    if($(this).hasClass($snowTop)){
        $('.ui-footer-narrow-hide').animate({height: $oldHeight});
        $mainBottom.animate({paddingBottom: 330});
    }else{
        $('.ui-footer-narrow-hide').animate({height: $height});
        $mainBottom.animate({paddingBottom: 330 + $heightVal});
    }

    $(this).toggleClass($snowTop);

});


function upMove(obj) {
    var timer=null;
    clearInterval(timer);
    var speed=0;
    var cur=0;
    timer=setInterval(function() {
        cur=document.documentElement.scrollTop||document.body.scrollTop;
        speed=Math.floor((0-cur)/8);
        if(cur==0) {
            clearInterval(timer);
        }else{
            document.documentElement.scrollTop=document.body.scrollTop=cur+speed;
        }
    },10);
}
