import './App.css';
import { useState } from 'react'
import Grid from './grid';
import { useEffect } from 'react/cjs/react.development';


function App() {

  const [carList, setCarList] = useState({})

async function apiReader()  {

  

  let url = "https://6157228e8f7ea600179850e4.mockapi.io/api/vehicles"

  await fetch(url)
  .then(res => res.json())
  .then(resjson => setCarList(resjson))

}

useEffect(() => {
  apiReader()
}, [])


  return (
    <div>
      <h1 id="title">COOL CARS</h1>
    <div id="gridholder">
      <Grid state={carList}/>
    </div>
    </div>
    );
}

export default App;
