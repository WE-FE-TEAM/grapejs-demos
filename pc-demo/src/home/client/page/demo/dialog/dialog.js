/**
 * Created by jess on 16/4/26.
 */



'use strict';


const React = require('react');
const ReactDOM = require('react-dom');

const RDialog = require('common:widget/react-ui/RDialog/RDialog.js');


class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            dialogShowing : false
        };


        this.showDialog = this.showDialog.bind( this );
        this.hideDialog = this.hideDialog.bind( this );
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

    render(){

        let dialog = null;

        if( this.state.dialogShowing ){

            let dialogProps = {
                showing : true,
                zIndex : 333,
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

        return (
            <div>
                <div>
                    <button onClick={ this.showDialog }>显示弹窗</button>
                </div>
                { dialog }
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