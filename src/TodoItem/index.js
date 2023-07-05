

import './TodoItem.css'
import React from 'react';
//importamos iconos
import { CheckIcon } from '../TodoIcon/CheckIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'



function TodoItem(props) {
    return (
      <li className="TodoItem">
        <span className={`Icon Icon-check  ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}  

        >
            <CheckIcon />
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
            {props.text}    
        </p>
        <span className="Icon Icon-delete" onClick={props.onDelete}
        >
            <DeleteIcon />
        </span>

      </li>
    );
  }

    export { TodoItem };