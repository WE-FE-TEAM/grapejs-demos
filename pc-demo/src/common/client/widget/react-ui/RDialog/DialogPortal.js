/**
 * 实际封装弹窗的React组件
 * Created by jess on 16/4/26.
 */


'use strict';


const React = require('react');


function noop(){}

class DialogPortal extends React.Component{

    constructor(props){
        super(props);

        this.onMaskClick = this.onMaskClick.bind( this );
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
                <div {...dialogProps}></div>
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