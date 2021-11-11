import { useState, useEffect } from 'react'

export default function Modal(props) {

    const [modalCar, setModalCar] = useState([])

    function xHandler() {
    }
    useEffect(() => {
    setModalCar(props.state)}, [props.state])

    if(modalCar.length > 0)  {
        let colorlist = modalCar[4].map(color =>
        <h1 style={{color:color}}>{color}</h1>)
    return (
        <div className="bigmodal">
             <button onClick={() => setModalCar([])} id="xbutton">x</button>
        <div className="carmodal">
           
            <img src={modalCar[0]} className="cphoto"/>
        <div className="infomodal">
            <h1>Range: {modalCar[5].distance} {modalCar[5].unit}</h1>
            <h1>Price: {modalCar[3]}</h1>
            <h1>Colors:</h1>
            {colorlist}
            
        </div>

        </div>
        </div>)
}
else {return null}
}