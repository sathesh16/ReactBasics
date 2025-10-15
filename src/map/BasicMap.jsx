import React, { useEffect, useState } from 'react'

function BasicMap() {

    const [data, setData] = useState([]);

    // async function callData() {
    //     const rawData = await fetch('https://fakestoreapi.com/products')
    //     const jsonData = await rawData.json()

    //     setData(jsonData)
    // }

    async function callData() {
        try {
            const apidata = await fetch('https://fakestoreapi.com/products')
            const jsonData = await apidata.json()
            setData(jsonData)

        } catch (error) {
            console.error(error);

        }
    }

    useEffect(() => {
        callData()
    }, [])

    console.log(data)


    return (
        <div>
            <h3>Product info:</h3>
            <ul>
                {data.map((ele) => (
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
                        {ele.title} has rating {ele.rating.rate}
                    </div>
                ))
                }
            </ul >


            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <h3>products that have more than 4 rating out of 5</h3>
                {
                    data.map((ele) => {
                        if (ele.rating.rate > 4) {
                            console.log(ele.title);

                            return (<div>{ele.title} has a rating of {ele.rating.rate}</div>)
                        }
                    })
                }
            </div>

        </div >
    )
}

export default BasicMap
