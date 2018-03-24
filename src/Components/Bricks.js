import React, { Component } from 'react',
import { GridList, GridTile } from 'material-ui/GridList'

import bricks from '../data/bricks'
import Brick, BrickFunc from './Brick'
import'../styles/Bricks.css'

export default class extends Component {
    render () {
        const renderBricksComp = () => {
            return bricks.map(brick =>
                <GridTile className="tile">
                    <Brick brick={brick}/>
                </GridTile>
            )
        };
        const renderBricks = () => {
            return bricks.map(brick => BrickFunc(brick))
        };
        return (
            <div>
                Bricks as Component
                <GridList cols={5}>
                    {renderBricksComp()}
                </GridList>
            </div>

        )
    }
}
