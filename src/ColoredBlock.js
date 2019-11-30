import React from 'react';
import ChangeColorButton from './ChangeColorButton.js';

class ColoredBlock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'red'
        };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor() {
        let newColor = this.state.color ==='red' ? 'blue'  : 'red';  
        this.setState({
            color: newColor
        });
    }
    render() {
        return(
            <div style={{height: '200px', width: '200px', backgroundColor: this.state.backgroundColor}}>
                <ChangeColorButton></ChangeColorButton>
            </div>
        )
    }
}

export default ColoredBlock;