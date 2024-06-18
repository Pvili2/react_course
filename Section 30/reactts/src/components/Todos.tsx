import React, {useContext} from 'react'
import { Todo } from '../models/todo'
import TodosItem from './TodosItem'
import classes from './Todos.module.css'
import { TodosContext } from '../store/todos-context'



const Todos = () => {

  const {items} = useContext(TodosContext)
  return (
    <ul className={classes.todos}>
        {items.map(item => {
            return <TodosItem key={item.id}>{item.text}</TodosItem>
        })}
    </ul>
  )
}

export default Todos