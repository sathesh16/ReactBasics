import React from 'react'

function PropGear() {
    const firstGear = {
        minspeed: 0,
        maxspeed: 25
    };
    const secondgear = () => {
        alert("Second gear speed min speed is 25kmph and max speed is 40kmph");
    }
    return (
        <>
            <FirstGear obj={firstGear} />
            <SecondGear obj={secondgear} />
            <h6>End of props program</h6>

        </>
    )
}

export default PropGear

function FirstGear(props) {
    return (
        <>
            <h3>This is minimum speed {props.obj.minspeed}kmph and the max speed {props.obj.maxspeed}kmph</h3>
        </>
    )

}


function SecondGear(props) {
    return (
        <>
            <button onClick={props.obj}>Second Gear</button>
        </>
    )
}