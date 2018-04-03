import React, {Component} from 'react';
import "./QuestionModal.css";



class QuestionModal extends Component {
  

    render(){

        return(
            <div className = "ModalBg">
                <div className = "TheModal">
                    
                   <div className = "Name"> {this.props.character.name} </div> <br/>
                    <button className = "Blue" onClick = {() => {this.props.addOne("alive", this.props.character.name)}}> Alive! </button>
                    <button className = "Red" onClick = {() => {this.props.addOne("dead", this.props.character.name)}}> Dead! </button>

                 </div>
                 
            </div>
        )
    }
}

export default QuestionModal;