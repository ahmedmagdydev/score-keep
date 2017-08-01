import React,{Component} from 'react'
import axios from 'axios'
import FlipMove from 'react-flip-move';

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
        })
         .catch(function (error) {
             console.log(error);
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
        e.target.name.value=''
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
        return score === 1 ? 'point' : 'points'
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
            <br/>
            <div className="form-horizontal">
                <div className="row">
                    <div className="col-sm-6">
                        <button className="btn btn-primary" onClick={this.toggleSort.bind(this)}>sort</button>
                    </div>
                    <div className="col-sm-6">
                            <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">

                            <div className="col-sm-7">
                                <input className="form-control " type="text" name="name"/>
                            </div>

                            <div className="col-sm-5">
                                <button className="btn btn-primary ">add player</button>
                            </div>
                        </div>
                            </form>
                    </div>
                </div>
            </div>
              <FlipMove duration={400} easing="ease-out">
                {this.state.players.map((player,index)=>{
                    return (
                        <div className="panel panel-default" key={player._id}>
                          <div className="panel-body">
                            <p>player : {player.name}</p>
                            <p>has : {player.score} {(this.points(player.score))}
                            </p>
                          </div>
                          <div className="panel-footer"><button className="btn btn-primary" onClick={this.addPoint.bind(this,index,player.score)}>+1
                            </button>
                            <button className="btn btn-primary" onClick={this.removePoint.bind(this,index,player.score)}>-1</button>
                            <button className="btn btn-primary">x</button></div>
                        </div>

                        )
                })}
                 </FlipMove>

            </div>
        )
    }

}
