import React from 'react';
import './EachRecord.css'

const EachRecord = (props) => {
const onDeleteHandler = () => {
  props.onDelete(props.id);
}

return (
  <li className='each-person'>
     {props.children}
     <i className='icon fas fa-trash ' onClick={onDeleteHandler} />
    </li>
)
}

export default EachRecord

