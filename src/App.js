import React, {useEffect, useState} from 'react';
import './style.css';
import Navbar from './components/Header/Navbar';
import InputForm from'./components/InputForm/InputForm';
import ShowCalories from './components/Display/ShowCalories';

const getLocalData = () => {
  let data = localStorage.getItem('foodData');
  if(data) {
    return JSON.parse(localStorage.getItem('foodData'))
  } else {
    return[];
  }
}



 function App() {
 
  const [data, setData] = useState(getLocalData())
  const [count, setCount] = useState(0);

  
 
  useEffect(() => {
    let ctn = 0;
    for(const n of data) {
      ctn += n.calories;
    }

    setCount(ctn);
    localStorage.setItem('foodData', JSON.stringify(data));
  }, [data])  

const addFoodHander = (foodData) => {
setData((prevFood) => {
  return [foodData , ...prevFood];
});
}

const deleteItemHandler = (id) => {
setData(prevFood => {
const updateFood = prevFood.filter(element => element.id !== id);
return updateFood;
});
}

let content =  (
  <p style={{textAlign: 'center'}}>not data found</p>

);

if(data.length > 0) {
  content = (
     <ShowCalories data={data} onDeleteItem={deleteItemHandler} />
  )
} 

  return (
  <>
 <Navbar />
 <InputForm onAddFood={addFoodHander} Total={count}/>
 {content}
  </>
  );
}


export default App;