/**
 * 实际封装弹窗的React组件
 * Created by jess on 16/4/26.
 */


'use strict';


const React = require('react');
const ReactDOM = require('react-dom');

const $ = require('common:widget/lib/jquery/jquery');


function noop(){}

class DialogPortal extends React.Component{

    constructor(props){

        super(props);

        let dialogStyle = this.props.dialog.style || {};

        this.state = {
            clientWidth : 0,
            clientHeight : 0,
            dialogWidth : dialogStyle.width || 'auto',
            dialogHeight : dialogStyle.height || 'auto',
            dialogLeft : dialogStyle.left || 0,
            dialogTop : dialogStyle.top || 0
        };

        this.onMaskClick = this.onMaskClick.bind( this );
    }

    componentDidMount(){
        if( this.props.isAutoCenter ){
            this.autoCenter();
        }
    }

    autoCenter(){

        let $win = $(window);

        var clientWidth = $win.width();
        var clientHeight = $win.height();
        var dialogWidth = $( this.refs.dialog ).width();
        var dialogHeight = $( this.refs.dialog ).height();

        if( clientHeight !== this.state.clientHeight
            || clientWidth !== this.state.clientWidth
            || dialogWidth !== this.state.dialogWidth
            || dialogHeight !== this.state.dialogHeight
        ){
            //需要重新设置对话框的居中
            let left = $win.scrollLeft() + ( clientWidth - dialogWidth ) / 2;
            let top = $win.scrollTop() + ( clientHeight - dialogHeight ) / 2;

            this.setState({
                clientWidth : clientWidth,
                clientHeight : clientHeight,
                dialogWidth : dialogWidth,
                dialogHeight : dialogHeight,
                dialogLeft : left,
                dialogTop : top
            });
        }
    }

    onMaskClick(e){
        if( this.props.isCloseOnMaskClick ){
            this.props.onRequestClose();
        }
    }




    render(){
        let props = this.props;

        let zIndex = parseInt( props.zIndex, 10 );

        let containerStyle = {
            display : 'block'
        };

        if( ! props.showing ){
            containerStyle.display = 'none';
        }

        let mask = null;

        if( props.isModal ){
            let maskProps = props.mask || {};
            let maskStyle = maskProps.style || {};
            if( ! maskStyle.hasOwnProperty('zIndex') && zIndex ){
                maskStyle['zIndex'] = zIndex;
            }
            maskProps.className = ( maskProps.className || '') + ' r-dialog-mask ';
            maskProps.style = maskStyle;
            maskProps.onClick = this.onMaskClick;
            mask = <div {...maskProps}></div>;
        }

        let dialogProps = props.dialog || {};
        let dialogStyle = dialogProps.style || {};
        if( ! dialogStyle.hasOwnProperty('zIndex') && zIndex ){
            dialogStyle['zIndex'] = zIndex + 1;
        }
        dialogProps.style = dialogStyle;
        dialogProps.className = ( dialogProps.className || '') + ' r-dialog-wrap ';


        return (
            <div className="r-dialog-portal" style={ containerStyle }>
                { mask }
                <div ref="dialog" {...dialogProps}>
                    { props.children }
                </div>
            </div>
        );
    }
}

DialogPortal.defaultProps = {

    showing : false,
    //是否带mask
    isModal : true,
    //点击mask, 是否触发关闭弹窗动作
    isCloseOnMaskClick : false,
    //是否自动在可视区域居中
    isAutoCenter : false,
    zIndex : 20,
    dialog : {
        className : '',
        id : '',
        style : {

        }
    },
    mask : {
        className : '',
        id : '',
        style : {}
    },

    onRequestClose : noop
};

module.exports = DialogPortal;