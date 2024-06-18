import { FormEvent, useContext, useRef } from "react";
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context";
type Props = {
}

const NewTodo = ({}: Props) => {

    const {onAddToDo} = useContext(TodosContext)
    const todoTextInput = useRef<HTMLInputElement>(null);
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        
        const enteredText = todoTextInput.current!.value;

        if (enteredText.trim().length === 0) {
            //throw error

            return;
        }

        onAddToDo(enteredText)
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="text">Todo Text</label>
        <input ref={todoTextInput} type="text"  id='text'/>
        <button>Add Todo!</button>
    </form>
  )
}

export default NewTodo