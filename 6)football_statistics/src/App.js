import React, { Component } from 'react'
import Player from './Players';
import Team from './Teams';
import { Col, Container, Row } from 'reactstrap';

export default class App extends Component {
  state = {
    currentTeam : "",
    players : [],
  };

  changeTeam = (team)=>{
    this.setState({currentTeam:team.teamName});
    this.getPlayers(team.id)
  };

  getPlayers = (teamId) => {
    let url = "http://localhost:3000/players"
    if(teamId){
      url += "?teamId="+teamId
    }

    fetch(url)
    .then((response)=>response.json())
    .then((data)=>this.setState({players:data}))
  }

  componentDidMount() {
    this.getPlayers()
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <p>Takımlar</p>
            <Team changeTeam={this.changeTeam} currentTeam={this.state.currentTeam}/>
          </Col>
          <Col xs="9">
            <h2 className='text-center'>Takımın En Golcü 4 Oyuncusu</h2>
            <Player players={this.state.players} currentTeam={this.state.currentTeam}/>
          </Col>
        </Row>
      </Container>
    )
  }
}
