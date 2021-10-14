import "./styles.css";
import {Todo} from '../../todo/index';

export const AllTodosPage = () =>{
    const todos = [
        {
            text:"Walk my dog",
            date: "10/10/2021",
            color: "blue",
            isComplete: false
        },
        {
            text:"Buy Laundry Detergent",
            date: "10/10/2021",
            color: "blue",
            isComplete: false
        },
        {
            text:"Work Out",
            date: "10/10/2021",
            color: "blue",
            isComplete: false
        }        
    ];

    return(
        <div className="todos-container">
            { todos.map ((todo) => 
                <Todo text={todo.text} date={todo.date} color={todo.color} isComplete={todo.isComplete}></Todo>)
            }
        </div>
    );
}