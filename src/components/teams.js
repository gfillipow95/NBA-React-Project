import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group';

const TEAM_URL = `http://localhost:3004/teams`;

const fadeAnimation = {
    transitionName: "fade",
    transitionAppear: true,
    transitionAppearTimeout: 500,
    transitionEnter: true,
    transitionEnterTimeout: 500,
    transitionLeave: true,
    transitionLeaveTimeout: 500
}

class Teams extends Component{

    constructor(props){
        super(props);

        this.state={
            teams: [],
            filtered: [],
            keyword: ''
        }
    }

    searchTeam = (event) => {
        const search = event.target.value;
        if(search !== ""){
            const list = this.state.teams.filter((item) => {
                return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
            });
            this.setState({
                filtered: list,
                keyword: search
            })
        }else{
            this.setState({
                filtered: this.state.teams,
                keyword: search
            })
        }
    }

    renderList = ({filtered}) => {
        return filtered.map((item)=>{
            return(
                <Link to={`/team/${item.name}`} key = {item.id} className="team_item">
                    <img alt={item.name} src={`/images/teams/${item.logo}`} />
                </Link>
            )
        })
    }

    fetchTeams(){
        fetch(TEAM_URL, {
            method: "GET"
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                teams: json,
                filtered: json
            })

        })
    }

    componentDidMount(){
        this.fetchTeams();
    }

    render(){
        return(
            <div className="teams-component">
                <div className="team-search">
                    <input value={this.state.keyword} type="text" placeholder="Search for a team" onChange={event => this.searchTeam(event)}/>
                </div>
                <div className="teams-container">
                    <CSSTransitionGroup {... fadeAnimation}>
                        {this.renderList(this.state)}
                    </CSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default Teams;