import React, { useState } from 'react';

    function TodoList() {
      const [todos, setTodos] = useState([
        { id: 1, text: 'Buy milk', completed: false },
        { id: 2, text: 'Walk the dog', completed: false },
        { id: 3, text: 'Do laundry', completed: false },
      ]);

      const handleToggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }));
      };

      const handleAddTodo = (text) => {
        setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
      };

      return (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleCompleted(todo.id)}
              />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
            </li>
          ))}
          <li>
            <input
              type="text"
              placeholder="Add new todo"
              onChange={(e) => handleAddTodo(e.target.value)}
            />
          </li>
        </ul>
      );
    }
