import React, { useState } from 'react'

function StateGear() {

    const [currentGear, setCurrentGear] = useState(1);
    const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [id, setId] = useState(0);

    const [vehicleData, setVehicleData] = useState([])

    function rmStateObj(id) {
        setVehicleData(vehicleData.filter((vehicle) =>
            vehicle.id !== id
        ))
    }


    return (
        <>
            <h6>Start of state program</h6>
            <h4> the current gear is {currentGear} </h4>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
                {/*using updater function to update gears*/}
                <button onClick={() => setCurrentGear(prev => prev - 1)}>Switch to {currentGear - 1}</button>
                <div>{currentGear}</div>
                <button onClick={() => setCurrentGear(prev => prev + 1)}>Switch to {currentGear + 1}</button>
            </div>

            <h4>Switch statement: <SpeedAdvice gear={currentGear} /></h4>

            <h4>Updating object</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '5px' }}><input type='text' onChange={(inp) => setName(inp.target.value)} /></div>
                <div style={{ display: 'flex', gap: '5px' }}><input type='text' onChange={(inp) => setCompanyName(inp.target.value)} /></div>

                <div style={{ display: 'flex', gap: '5px' }}><button onClick={() => {
                    setVehicleData([
                        ...vehicleData,
                        { id: id, name: name, manufacturer: companyName }
                    ])
                    setId(id + 1)
                }} value={"Add"}>Add</button></div>


                <div style={{ display: 'flex', gap: '5px' }}>
                    <ul>
                        {vehicleData.map((ele) => {
                            return <><div style={{ display: 'flex', gap: '10px' }}>{ele.name} by {ele.manufacturer} {ele.id} <button onClick={() => rmStateObj(ele.id)}>Remove</button></div></>
                        })}
                    </ul>
                </div>
            </div>


        </>
    )
}

export default StateGear


function SpeedAdvice(props) {
    switch (props.gear) {
        case 1:
            return "Maintain Speed between 0 to 20";
        case 2:
            return "Maintain Speed between 20 to 40";
        case 3:
            return "Maintain Speed between 40 to 70";
        case 4:
            return "Maintain Speed between 70 to 90";

        default:
            break;
    }
}

