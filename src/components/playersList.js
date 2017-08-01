import React,{Component} from 'react'
import axios from 'axios'

export default class PlayersList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            sort:null,
            _id:5456465
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
        const _id = this.state._id
        players.push({
            _id:this.state._id,
            name:playerName,
            score:0
        })
        this.setState({players,_id:_id+1})
    }
     toggleSort() {
      const sortDesc = (a, b) => b.score - a.score;
      const sortAsc = (a, b) => a.score - b.score;

      this.setState({
        players: this.state.players.sort(this.state.sort === 'sortDesc' ? sortAsc : sortDesc),
        sort: this.state.sort === 'sortDesc' ? 'sortAsc' : 'sortDesc'
      });
    }

    points(score){
        return this.score === 1 ? 'point' : 'points'
    }
    addPoint(i,score){

        const players = this.state.players
        const playerPoints = players[i]
        players[i] = {...playerPoints,score:score+1}

        this.setState({
            players
        })
    }
    removePoint(i,score){
        const players = this.state.players
        const playerPoints = players[i]
        players[i] = {...playerPoints,score:score-1}

        this.setState({
            players
        })
    }
    render(){

        return(
            <div>
            <button onClick={this.toggleSort.bind(this)}>sort</button>
                {this.state.players.map((player,index)=>{
                    return (
                        <div key={player._id}>
                            <p>player : {player.name}</p>
                            <p>has : {player.score} {this.points(player.score)}</p>
                            <button onClick={this.addPoint.bind(this,index,player.score)}>+1
                            </button>
                            <button onClick={this.removePoint.bind(this,index,player.score)}>-1</button>
                            <button>x</button>
                        </div>
                        )
                })}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="name"/>
                    <button>add player</button>
                </form>
            </div>
        )
    }

}
