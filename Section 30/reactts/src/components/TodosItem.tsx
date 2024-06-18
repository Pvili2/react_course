import  { ReactNode, useContext } from 'react'
import classes from './TodosItem.module.css'
import { TodosContext } from '../store/todos-context'

type Props = {
    children: ReactNode,
}

const TodosItem = ({children}: Props) => {
    const {onRemoveToDo} = useContext(TodosContext)
    const handleClick = () => {
        onRemoveToDo(children!.toString())
    }
  return (
    <li onClick={handleClick} className={classes.item}>{children}</li>
  )
}

export default TodosItem