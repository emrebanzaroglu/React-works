import React, { Component } from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap';

export default class Teams extends Component {
    
  state = {
    teams : []
  }

  componentDidMount() {
    this.getTeams();
  };

  getTeams = () => {
    fetch("http://localhost:3000/teams")
    .then((response)=>response.json())
    .then((data)=>this.setState({teams:data}))
  }

  render() {
    return (
        <ListGroup>
          {this.state.teams.map((team)=>(
            <ListGroupItem 
            onClick={()=>this.props.changeTeam(team)} 
            key={team.id}
            >
              {team.teamName}
            </ListGroupItem>
          ))}
       </ListGroup>
    )
  }
}

