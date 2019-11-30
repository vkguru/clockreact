import React from 'react';

class Button extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick  = this.handleClick.bind(this);
    }
    handleClick(event) {
        console.log(this);
    }

    render(){
        return(
            <button onClick= {this.handleClick}>
                Click me
            </button>
        );
    }

}

export default Button;