/**
 * 遮罩浮层,不考虑 IE6/7
 * Created by jess on 15/8/31.
 */


var $ = require('common:widget/lib/jquery/jquery');
var EventEmitter = require('common:widget/lib/EventEmitter/EventEmitter.js');


/**
 *
 * @param args {Object}
 * @param args.cssClass {String} 遮罩上的自定义css class
 * @param args.width {String} 宽度
 * @param args.height {String} 高度
 * @param args.zIndex {Int} 遮罩层的 z-index
 * @constructor
 */
function Mask( args ){

    var config = $.extend( {
        cssClass : '',
        width : '100%',
        height : '100%',
        zIndex : 9888,
        parentNode : document.body
    }, args || {});

    this.config = config;

    this.$el = null;
}

$.extend( Mask.prototype, EventEmitter.prototype );

$.extend( Mask.prototype, {

    _setup : function(){
        var conf = this.config;
        var $el = $('<div class="j-mask ' + conf.cssClass + '"></div>').css({
            width : conf.width,
            height : conf.height,
            'z-index' : conf.zIndex
        });

        var that = this;
        this.onClick = function(){
            that.trigger('click');
        };

        $el.on('click', this.onClick);

        $el.appendTo( conf.parentNode );

        this.$el = $el;
    },

    show : function(){
        if( ! this.$el ){
            this._setup();
        }
        this.$el.show();
        return this;
    },

    hide : function(){
        if( this.$el ){
            this.$el.hide();
        }
        return this;
    },

    destroy : function(){
        if( this.$el ){
            this.$el.off('click', this.onClick );
            this.onClick = null;
            this.$el.remove();
            this.$el = null;
        }
    }
} );

module.exports = Mask;
