import React, {Component} from 'react';
import got from './got.png';
import wolf from './wolf.jpg';
import lion from './lion.png'
import './Pictures.css'

class Pictures extends Component {


    render(){
        return(
            <div className = "Pictures">
                <img src = {wolf} className = {"picture-three"} alt = "wolf"/>
                <img src = {got} className = {"picture"} alt = "crown"/>
                <img src = {lion} className = {"picture-two"} alt = "lion"/>
            </div>
        )
    }
}

export default Pictures;