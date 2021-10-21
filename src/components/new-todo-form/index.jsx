import { useForm } from 'react-hook-form';
import { Input } from '../input-field';
import { v1 as uuidv1 } from 'uuid';
import { useContext } from 'react';
import { TodosContext } from '../../context/todos-context';
import { useHistory } from 'react-router-dom';

import './styles.css';

export const NewTodoForm = () => {

    const todoContext = useContext(TodosContext);
    let history = useHistory();

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        const todo = data;
        todo.id = uuidv1();
        todo.isComplete = false;
        todoContext.addTodo(todo);

        console.log("Added new todo: ", todo);

        //navigate to home page
        history.push("/");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/*add input fields*/}
            <Input
                type="text"
                name="title"
                label="Todo (e.g do laundry)"
                errors={errors}
                register={register}
                validationSchema={
                    {
                        required: "Todo text is required",
                        minLength: {
                            value: 3,
                            message: "Please enter at least 3 characters"
                        }
                    }
                }
                required
                />

                <Input
                type="date"
                name="date"
                label="Due Date"
                errors={errors}
                register={register}
                validationSchema={
                    {
                        required: "Todo deadline is required"
                    }
                }
                required
                />
            <input type="submit"/>
        </form>
    );
}