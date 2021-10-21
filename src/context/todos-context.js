import React, {useState} from 'react';

export const TodosContext = React.createContext(
    {
        todos: [],
        addTodo: () => {},
        deleteTodo: () => {},
        updateTodo: () => {}
    }
);

export const TodosContextProvider = (props) => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        let oldTodos = todos;
        oldTodos.push(todo);
        setTodos(oldTodos);
    }

    //delete Todo

    //update Todo

    return (
        <TodosContext.Provider value={{todos: todos, addTodo: addTodo}}>
            {props.children}
        </TodosContext.Provider>
    )
}