import React from 'react';

function Questions (props) {

        return(
            <div className = "Questions">

                
                <button onClick = {() => props.togglez(0)}> Question <br/> #1 </button>
                <button onClick = {() => props.togglez(1)}> Question <br/> #2 </button>
                <button onClick = {() => props.togglez(2)}> Question <br/> #3 </button>
                <button onClick = {() => props.togglez(3)}> Question <br/> #4 </button>
                <button onClick = {() => props.togglez(4)}> Question <br/> #5 </button>
                <button onClick = {() => props.togglez(5)}> Question <br/> #6 </button>
                <button onClick = {() => props.togglez(6)}> Question <br/> #7 </button>
                <button onClick = {() => props.togglez(7)}> Question <br/> #8 </button>
                <button onClick = {() => props.togglez(8)}> Question <br/> #9 </button>
                <button onClick = {() => props.togglez(9)}> Question <br/> #10 </button>
               
                
            </div>
        )
    }

export default Questions;