import React, {Component} from 'react';

const TEAM_URL = `http://localhost:3004/teams`;

class Poll extends Component{

    constructor(props){
        super(props);

        this.state = {
            polls: []
        }
    }

    getPollTeams(){
        fetch(`${TEAM_URL}?poll=true&_sort=count&_order=desc`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                polls: json
            })
        })
    }

    componentDidMount(){
        this.getPollTeams();
    }

    addCount(newCount, teamId){
        fetch(`${TEAM_URL}/${teamId}`, {
            method: "PATCH",
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({count : newCount + 1})
        })
        .then(() => {
            this.getPollTeams();
        })
    }

    generatePolls(){
        const places = ["1st", "2nd", "3rd"];
        return(
            this.state.polls.map((item, index)=>{
                return(
                    <div key={item.id} className="team-poll" onClick={()=>this.addCount(item.count, item.id)}>
                        <img src={`/images/teams/${item.logo}`} alt={`${item.name}`} />
                        <h3>{places[index]}</h3>
                        <div>{item.count} Votes</div>
                    </div>
                )
            })
        )
    }

    render(){
        return(
            <div className="poll-home">
                <h4>Who will be the next champion?</h4>
                <div className="poll-container">
                    {this.generatePolls()}
                </div>
            </div>
        )
    }
}

export default Poll;