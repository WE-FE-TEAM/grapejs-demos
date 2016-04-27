/**
 * Created by jess on 16/4/26.
 */



'use strict';


const React = require('react');
const ReactDOM = require('react-dom');

const RDialog = require('common:widget/react-ui/RDialog/RDialog.js');

const RWeDialog = require('common:widget/react-ui/RWeDialog/RWeDialog.js');


class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            dialogShowing : false,
            dialogShowing2 : false
        };


        this.showDialog = this.showDialog.bind( this );
        this.hideDialog = this.hideDialog.bind( this );

        this.showWeDialog = this.showWeDialog.bind( this );
        this.hideWeDialog = this.hideWeDialog.bind( this );
    }

    showDialog(){
        this.setState({
            dialogShowing:true
        });
    }

    hideDialog(){
        this.setState({
            dialogShowing : false
        });
    }

    showWeDialog(){
        this.setState({
            dialogShowing2:true
        });
    }

    hideWeDialog(){
        this.setState({
            dialogShowing2 : false
        });
    }

    render(){

        let dialog = null;

        if( this.state.dialogShowing ){

            let dialogProps = {
                showing : true,
                zIndex : 333,
                isAutoCenter : true,
                isCloseOnMaskClick : false,
                dialog : {
                    id : 'demo-dialog',
                    className : 'demo-dialog-1',
                    style : {
                        width : 200,
                        height : 200
                    }
                },
                onRequestClose : this.hideDialog
            };

            dialog = <RDialog {...dialogProps}>
                <h1>这里是title</h1>
                <div style={ { textAlign : 'center', 'color' : 'orange'} }>
                    这里是内容
                </div>
            </RDialog>;
        }


        let weDialog = null;

        if( this.state.dialogShowing2 ){
            let weProps = {
                showing : true,
                title : '测试的title',
                onRequestClose : this.hideWeDialog
            };

            weDialog = <RWeDialog {...weProps}>
                <div>这里是内容</div>
            </RWeDialog>
        }

        return (
            <div>
                <div>
                    <button onClick={ this.showDialog }>显示弹窗</button>
                    <button onClick={ this.showWeDialog }>RWeDialog</button>
                </div>
                { dialog }
                { weDialog }
            </div>
        );
    }
}


let singleton = {

    init : function(){

        // alert('init');

        ReactDOM.render(
            <App />,
            document.getElementById('app')
        )

    }

};



module.exports = singleton;