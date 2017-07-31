import React,{Component} from 'react'
import axios from 'axios'
import Player from './player'

export default class PlayersList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            players: []
        }
    }

    componentDidMount() {
       axios.get('players.js')
             .then(res => {
               console.log(res.data)
               this.setState({ players:res.data });
             });
    }
    handleSubmit(e){
        e.preventDefault();
        let playerName = e.target.name.value
        const players = this.state.players
        players.push({
            _id:4545,
            name:playerName,
            score:0
        })
        this.setState({players})
    }
    render(){

        return(
            <div>
                {this.state.players.map((player)=>{
                    return <Player name={player.name} key={player._id} score={player.score}/>
                })}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="name"/>
                    <button>add player</button>
                </form>
            </div>
        )
    }

}
