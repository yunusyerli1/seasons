import React from 'react'

class ErrorDisplay extends React.Component{
    state = {visibility : true}
    
    handleClick = e =>{
        e.preventDefault();
        this.setState({
            visibility : false
        });
    }
    barDisplay(){
        return (
        <div className="ui negative big message" >
                <i className="close icon" onClick = {this.handleClick}></i>
                <div className="header">
                    {this.props.errorMessage}
                </div>
                <p>Şu anda sayfa konum izni vermediğiniz için açılmıyor.</p>
        </div>)
    }
    render(){
    return (
        <div>
            {
            this.state.visibility?this.barDisplay() : null
            }
            <div>
                <i className="attention massive exclamation triangle icon"></i>    
                <p className = "reminder">Lütfen sayfayı yenileyin...</p>
                
            </div>
            
        </div>
    
    )
}
}
export default ErrorDisplay;