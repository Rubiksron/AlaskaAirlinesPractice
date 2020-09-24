import React from 'react';
import TodoList from './TodoList';

//i could also pass in props here, but I would have to add props. to each function that I wished to use
const Form = ({ setInputText, todos, setTodos, inputText }) => {

  const inputTextHandler = (e) => {
    console.log('e: ', e.target.value);
    setInputText(e.target.value);
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        id: Math.random() * 1000
      }
    ]);
    setInputText("");
  }
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}

export default Form;