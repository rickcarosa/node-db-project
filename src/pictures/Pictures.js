import React, {Component} from 'react';
import got from './got.jpg';
import images from './images.jpeg';
import './Pictures.css'

class Pictures extends Component {


    render(){
        return(
            <div>
                <img src = {got} className = {"picture"} alt = "crown"/>
                <img src = {images} className = {"picture-two"} alt = "animals"/>
            </div>
        )
    }
}

export default Pictures;