import React, {Component} from 'react';
import axios from 'axios';
import './Stars.css';

class Stars extends Component {
    constructor(){
        super()
        this.state = {
            stars: [],
            secondUrl: "https://anapioficeandfire.com/api/characters/"            
        }
    }

    componentDidMount(){
        axios.get(`${this.state.secondUrl}?name=jon snow`).then( response => {
            console.log(response.data)
            this.setState({
                stars: response.data
            })
        })
    }

    // componentDidMount(){
    //     axios.get(`${this.state.secondUrl}?name=daenerys targaryen`).then( response => {
    //         console.log(response.data)
    //         this.setState({
    //             stars: response.data
    //         })
    //     })
    // }


    render(){
        let stars = this.state.stars.map((c,i) => {
            return <div key = {i}> {c.name} </div>
        })
        return(
            <span className = "stars"> {stars} </span>
        )
    }
}

export default Stars;