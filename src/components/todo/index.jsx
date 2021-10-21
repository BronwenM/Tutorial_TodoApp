import PropTypes from "prop-types";
import React, {useState, useEffect, useContext} from 'react';
import { TodosContext } from "../../context/todos-context";
import {GoTrashcan, GoCheck} from 'react-icons/go';

import './styles.css'

export const Todo = (props) => {

    const todosContext = useContext(TodosContext);

    const [isComplete, setIsComplete] = useState(false);

    //on init of component grab the is complete property from the global state
    useEffect( () => {
        setIsComplete(props.isComplete);
    }, []);

    useEffect( () => {
        //every time isComplete is updated, call the code below
        todosContext.updateTodo(props.todoID, isComplete);
    },[isComplete]);

    const toggleCompleteTodo = () => {
        setIsComplete (!isComplete);
    };

    const deleteTodo = ()=> {
        todosContext.deleteTodo(props.todoID);

    }
    return (
        <div className={`todo ${props.color}`} style={ isComplete ? {opacity:0.5} : {} }>
            <div>
                <p className="todo-text">{ props.text }</p>
                <p className="todo-date">{props.date}</p>
            </div>
            

            <div>
                <button className="todo-complete" onClick = {toggleCompleteTodo}>
                    <GoCheck className="todo-icon" style={{ fontSize: "35px"}}/>
                </button>
                <button className="todo-remove" onClick={deleteTodo}>
                    <GoTrashcan className="todo-icon" style={{ fontSize: "35px"}}/>
                </button>
            </div>
        </div>
    );
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    color: PropTypes.string,
    priority: PropTypes.bool,
    isComplete: PropTypes.bool.isRequired
}

Todo.defaultProps = {
    text: "",
    date: "",
    color: "gray",
    priority: false,
    isComplete: false
}