import React,{Component} from 'react'

export default class Player extends Component{

    points(){
        return this.props.score === 1 ? 'point' : 'points'
    }

    render(){

        return(
            <div>
                <p>player : {this.props.name}</p>
                <p>has : {this.props.score} {this.points()}</p>
                <button>+1</button>
                <button>-1</button>
                <button>x</button>
            </div>
        )
    }

}
