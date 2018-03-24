import React, { Component } from 'react'
import Die from '../Components/Die'
import Dieform from '../Components/Dieform';

export default class extends Component {
    render () {
        return (
            <div>
                <Die numSides="6"/>
                <hr/>
                <Dieform/>
            </div>
        )
    }
}