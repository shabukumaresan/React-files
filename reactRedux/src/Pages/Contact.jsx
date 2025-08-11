import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
// import Navbar from '../components/Navbar'
import {setFruit} from "../slices/fruitsSlice";


const Contact = () => {
  const dispatch = useDispatch();

  const [fruit, setFruitInfo] = useState({name: ""});

  const handChange = (event) => {
    const {name, value} = event.target;

    setFruitInfo ((currFruitInfo) => {
      return {
        ...currFruitInfo,
        [name]: value,
      }
    })
  }

  const addFruit = (event) => {
    event.preventDefault()
    dispatch(setFruit(fruit));
  }
  
  return (
    <div>
        {/* <Navbar /> */}
        <h1>Fruit :</h1>
        <form action="">
        <input 
        type="text"
        name="name"
        value={fruit.name}
        placeholder="Enter a fruit"
        // onChange={(event) => setfruitInfo(event.target.value)} 
        onChange = {handChange}
        />
        <button onClick={addFruit}>Add Fruit</button>
        </form>
    </div>
  )
}

export default Contact