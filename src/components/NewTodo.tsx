import React, { useRef } from "react";
import "../styles/NewTodo.css";

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({onAddTodo}) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        if (enteredText) {
            onAddTodo(enteredText)
            textInputRef.current!.value = "";
        } else {
            alert("Write a valid input!")
        }
    }

    return (
    <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
            <button type="submit">ADD TO DO</button>
    </form>
    )
}

export default NewTodo;