import React, {Component} from 'react';
import axios from 'axios';
import './PlayerList.css';


class PlayerList extends Component {
   
    
    componentDidMount(){
      axios.get(`${this.props.serverUrl}/api/players`).then( response => {
        this.setState({
          players: response.data
        })
      })
    } 

    render(){

      let list = this.props.list.map( ( element, index ) => {
        return (
          <h3 key={ index }> { element.name }: {element.score} </h3>
        )
      })

        return(
        <div className = "PlayerList">
            
            <input 
            placeholder = "Player Name"
            onChange = { (event) => this.props.updateName(event.target.value)} />
            <button className = "Add" onClick = {() => {this.props.add(this.props.name); this.props.reset()}}> Add Name </button>
            <button className = "Delete" onClick = {() => {this.props.delete(this.props.name)}}> Delete Name </button>
            <br/>
            <br/>
            {list}
        </div>
        );
    }
}

export default PlayerList;