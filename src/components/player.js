import React,{Component} from 'react'

export default class Player extends Component{
    constructor(props) {
        super(props);
        this.state = {
            score:this.props.score
        }
    }

    points(){
        return this.props.score === 1 ? 'point' : 'points'
    }
    addPoint(){
        const score = this.state.score
        this.setState({
            score : score+1
        })
    }
    removePoint(){
        const score = this.state.score
        this.setState({
            score : score-1
        })
    }

    render(){

        return(
            <div>
                <p>player : {this.props.name}</p>
                <p>has : {this.state.score} {this.points()}</p>
                <button onClick={this.addPoint.bind(this)}>+1</button>
                <button onClick={this.removePoint.bind(this)}>-1</button>
                <button>x</button>
            </div>
        )
    }

}
