import './App.css';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';

function App() {
  const mainTodoList = [
    {
      id: Math.trunc(Math.random() * 1000),
      title: 'Learn English',
    },
    {
      id: Math.trunc(Math.random() * 1000),
      title: 'Learn JS',
    },
    {
      id: Math.trunc(Math.random() * 1000),
      title: 'Learn Reacjs',
    },
  ];

  const [todoList, setTodoList] = useState(mainTodoList);
  const handleClick = (todo, index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleSubmit = (newTodo) => {
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function getPostList() {
      try {
        const requestUlr =
          'https://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUlr);
        const responseJSON = await response.json();
        const { data } = responseJSON;
        console.log(data);
        setPostList(data);
      } catch (error) {
        console.log('Get data failed.', error.message);
      }
    }

    getPostList();
  }, []);

  return (
    <div className="app">
      <h3>Todo List</h3>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList mainTodoList={todoList} onClickTodo={handleClick} />
      <h3>List Posts</h3>
      <PostList posts={postList} />
    </div>
  );
}

export default App;
