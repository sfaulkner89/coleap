import "./App.css"
import { useEffect, useState } from 'react'
import Modal from "./modal"

export default function Grid(props) {

    const [carPicked, setCarPicked] = useState([])
    const [carMaker, setCarMaker] = useState()

    let carlist = []

    for(let i=0;i<props.state.length; i++)  {
        let infolist = []
        let car = props.state[i]
        infolist.push(car.photo)
        infolist.push(car.make)
        infolist.push(car.model)
        infolist.push(car.price)
        infolist.push(car.colors)
        infolist.push(car.range)
        carlist.push(infolist)
        
    }
    let carmap = carlist.map(car =>
        <div className="grid-item" onClick={() => setCarPicked(car)}>
       <div className="phototd">
           <img src={car[0]} className="cphoto" />
       </div>
       
       <div className="infotd">
           <h1>Make: {car[1]}</h1>
           <h1>Model: {car[2]}</h1>
           <h1>Price: {car[3]}</h1>
       </div>
       </div>)
       useEffect(() => {setCarMaker(carmap)})
       


    return (
    <div className="grid-cont">
     {carMaker}
    <Modal state={carPicked}/>
     </div>)

}  