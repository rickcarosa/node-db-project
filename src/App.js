import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './header/Header';
import PlayerList from './playerlist/PlayerList';
import Questions from './questions/Questions';
import QuestionModal from './questionmodal/QuestionModal';
import Pictures from './pictures/Pictures';
import Stars from './stars/Stars';

class App extends Component {
  constructor(){
    super()
    this.state ={
      characters: [],
      showModal: false,
      score: 0,
      list: [],
      name: '',
      baseUrl: "https://api.got.show/api/characters/",
      serverUrl: "http://localhost:3005",
      dateOfDeath: false
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.addOne = this.addOne.bind(this);
    this.reset = this.reset.bind(this);
    this.add = this.add.bind(this);
    this.updateName = this.updateName.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount(){
    var array = [];
    axios.get(`${this.state.baseUrl}`).then( response => {
      for(var i = 0; i < 10; i++){
        array.push(response.data[Math.trunc(Math.random() * 2028)])
      }
      this.setState({
        characters: array
      }) 
      console.log(this.state.characters)
    }); 
  }

  updateName(value){
    this.setState({
      name: value
    })
  }

  add = (users) => {
    axios.post(`${this.state.serverUrl}/api/players`, {name: users}).then( response => {
      this.setState({
        list: response.data,
      })
    })
  }
   
  addOne(string, character){
    let all = this.state.characters;
    let alive = [];
    let dead = [];

    all.map((char)=>{
      if (char.hasOwnProperty('dateOfDeath')){
        dead.push(char.name)
      }
      else {
        alive.push(char.name)
      }
    })

let scoreflag = false
    if(string === "alive"){
      if(alive.indexOf(character)!==-1){
       scoreflag = true
    } 
  }
    if(string === "dead"){
      if(dead.indexOf(character)!==-1){
          scoreflag = true
    } 
  }
      let player = { name: this.state.name, score: scoreflag ? this.state.score + 10 : this.state.score }
       console.log(player)
        axios.put(`${this.state.serverUrl}/api/players`, player).then( response => {
        this.setState({
            list: response.data
        }) 
    }) 
    this.setState({
      score: scoreflag ? this.state.score + 10 : this.state.score
    })
    this.toggleModal(); 
   }

  toggleModal(i){
    this.setState({
      showModal: !this.state.showModal, 
      question: i
    })
  }

  reset(){
    this.setState({
      score: 0
    })
  }

  delete(name){
    axios.delete(`${this.state.serverUrl}/api/players/${name}`).then( response => {
      this.setState({
        list: response.data
      })
    })
  }

  render() {
    return (
      <div className="App" >
        {
          this.state.showModal
          ?
          <QuestionModal toggle = {this.toggleModal} 
                         character = {this.state.characters[this.state.question]} 
                         addOne = {this.addOne}/>
          :
          null
        }
        <Header/>
        <Pictures/>
        <Stars/>
        <PlayerList serverUrl = {this.state.serverUrl} 
                    reset = {this.reset} 
                    score = {this.state.score}
                    name = {this.state.name}
                    add = {this.add}
                    list = {this.state.list}
                    updateName = {this.updateName}
                    delete = {this.delete}
                    rightUser = {this.rightUser}/>
        <Questions showModal = {this.state.showModal} togglez = {this.toggleModal}/>
    
        
      </div>
    );
  }
}

export default App;
