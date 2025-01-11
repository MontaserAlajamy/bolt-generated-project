import React from 'react';
    import ReactDOM from 'react-dom';
    import './App.css';
    import TodoList from './TodoList';

    function App() {
      return (
        <div className="App">
          <h1>Basic Todo App</h1>
          <TodoList />
        </div>
      );
    }

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
