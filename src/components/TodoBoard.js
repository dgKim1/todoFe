import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, toggleComplete, deleteItem }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((item, index) => (
          <TodoItem
            item={item}
            key={index}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        ))
      ) : (
        <h2>There is no item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
