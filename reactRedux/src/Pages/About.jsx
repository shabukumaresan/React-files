import React from 'react'
// import Navbar from '../components/Navbar'
import {useDispatch, useSelector} from "react-redux";
import { deleteFruit } from '../slices/fruitsSlice';

const About = () => {
  const fruits = useSelector((state) => state.fruitsInfo.fruits);
  const dispatch = useDispatch();
  console.log(fruits);

  const deleteFruitName = (index) => {
    dispatch(deleteFruit(index))
  }
  return (
    <div>
      <h1>Fruit Names</h1>
      {fruits?.map((fruit,index)=>{
        return (
          <div key={index}>
          <h2>{fruit.name}</h2>
          <button onClick={() => deleteFruitName(index)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default About