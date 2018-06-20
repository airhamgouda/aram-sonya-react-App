import React from 'react';
import parks from './parks.json'

export default function DogPark(props) {
    let holding = []

    for (let i = 0; i < parks.length; i++) {
        let element =
            < div className="dog-park" >
                <button onClick={props.onClick}>{parks[i].name}</button>
                <span>Counter: {props.count}</span>
            </div >



        holding.push(element)

    }

    console.log(holding)

    return
    <div>
        holding
    </div>

    // return (
    //     <div className="dog-park">
    //         <button onClick={props.onClick}>Thinful Dog Park</button>
    //         <span>Counter: {props.count}</span>
    //     </div>
    // )




} 