import { ReactNode, createContext, useState } from "react";
import { Todo } from "../models/todo";

export const TodosContext = createContext
    <
    {
        items: Todo[],
        onAddToDo: (input:string) => void,
        onRemoveToDo: (input:string) => void, 
    }
    >
    ({
    items : [],
    onAddToDo: () => {},
    onRemoveToDo: () => {}
})

const TodosContextProvider = ({children} : {children: ReactNode}) => {

    const [todos, setTodos] = useState<Todo[]>([
        {
          id: new Date().toISOString(),
          text: 'Alma',
        },
        {
          id: new Date().toISOString(),
          text: 'Körte',
        },
        {
          id: new Date().toISOString(),
          text: 'Szőlő',
        },
    ] )
    
    
      const onAddToDo = (input:string) => {
        setTodos(prev => [
          ...prev,
          {
            id: new Date().toISOString(),
            text: input,
          }
        ])
      }
    
      const onRemoveToDo = (input: string) => {
        setTodos(prev => 
          prev.filter(item => item.text !== input)
        )
      }

      const initContextValue: {
        items: Todo[],
        onAddToDo: (input:string) => void,
        onRemoveToDo: (input:string) => void, 
    } = {
        items: todos,
        onAddToDo,
        onRemoveToDo
      }
    return (
        <TodosContext.Provider value={initContextValue}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;