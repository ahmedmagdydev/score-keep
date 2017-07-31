import React,{Component} from 'react'
import axios from 'axios'
import Player from './player'

export default class PlayersList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            sort:null
        }
    }

    componentDidMount() {
       axios.get('players.js')
         .then(res => {
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
     toggleSort() {
      const sortDesc = (a, b) => b.score - a.score;
      const sortAsc = (a, b) => a.score - b.score;

      this.setState({
        players: this.state.players.sort(this.state.sort === 'desc' ? sortAsc : sortDesc),
        sort: this.state.sort === 'desc' ? 'asc' : 'desc'
      });
    }
    render(){

        return(
            <div>
            <button onClick={this.toggleSort.bind(this)}>sort</button>
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
