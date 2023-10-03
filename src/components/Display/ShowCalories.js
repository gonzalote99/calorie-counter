import React from 'react';
import Card from '../UI/Card';
import EachRecord from './EachRecord';

const ShowCalories = (props) => {

  return (
    <Card>
      <ul>
     {props.data.map((element) => {
       return (
         <EachRecord 
          key={Math.random()}
          food={element.foodname}
          calories={element.calories}
          id={element.id}
          onDelete={props.onDeleteItem}
  
         >
           <div className='items'>
               <div className='items__deteial'>
               <span>food:</span> {element.foodname} <span>calories: </span> {element.calories}
                  </div>
             </div>
             </EachRecord>
       )
     })}
        </ul>
      </Card>
  )
}

export default ShowCalories