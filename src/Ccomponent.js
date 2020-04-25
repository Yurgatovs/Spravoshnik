import React, { Component } from 'react'
import { render } from '@testing-library/react'

export default class Ccomponent extends Component {
    constructor (props) {
        super(props)

        this.state = {
            discription:" Описание статьи" 
        };
        this.handelClick = this.handelClick.bind(this);
    }   
    
    handelClick() {
    this.setState({
        name:"Changed"
    })
}





render() {
    return (
        <div>
            <h1>ClassComponent{this.state.discription}</h1>
            <button onClick={this.handlClick}>Click</button>
        </div>
    )
}
}