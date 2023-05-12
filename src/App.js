import queryString from 'query-string';
import './App.css';
import Pagination from './components/Pagination';
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
  const [pagination, setPagination] = useState({
    _limit: 10,
    _page: 1,
    _totalRows: 50,
  });
  const [filtered, setFiltered] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function getPostList() {
      try {
        const paramString = queryString.stringify(filtered);
        const requestUlr = `https://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUlr);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Get data failed.', error.message);
      }
    }

    getPostList();
  }, [filtered]);

  const handleOnPageChange = (newPage) => {
    setFiltered({
      ...filtered,
      _page: newPage,
    });
  };

  return (
    <div className="app">
      <h3>Todo List</h3>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList mainTodoList={todoList} onClickTodo={handleClick} />
      <h3>List Posts</h3>
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handleOnPageChange} />
    </div>
  );
}

export default App;
