import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Die from './Die'
import '../Styles/dice.css';

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sideState: 2
        }
    }
    render () {
        return (
            <Paper className="paper">
                Dice Form
                <form>
                    Set Number of Sides:
                    <TextField type="number" className="numPicker"
                               id="dicesides"
                               // style={{width: "5%"}}
                               onChange={(event) => this.setState({sideState: event.target.value}) }
                               min="2" max="20" step="1"
                               />

                </form>
                <Die numSides={this.state.sideState}/>
            </Paper>
        )
    }
}