import { useState } from 'react';
import { TaskField } from './components/TaskField';
import { ListItem } from './components/ListItem';

import './styles/App.scss';

export const App = () => {
  const [tasks, setTasks] = useState([
    {
      text: 'Изучить ReactJS',
      completed: true,
    },
    {
      text: 'Разработать ToDo на ReactJS',
      completed: false,
    },
    {
      text: 'Деплой React-приложения',
      completed: true,
    },
    {
      text: 'Проверка автоматической сборки',
      completed: false,
    },
    {
      text: 'Загрузили проект на Vercel и Netlify',
      completed: true,
    },
  ]);

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIndex) =>
        index === curIndex
          ? { ...task, completed: !task.completed }
          : task,
      )
    );
  };

  const onRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, curIndex) => index !== curIndex));
  };

  const onAddTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <h4>Мои Задачи</h4>
      </div>
      <TaskField onAddTask={onAddTask} />

      <div className="todo__list">
        {tasks.map((task, index) => (
          <ListItem
            key={task.text + index}
            index={index}
            text={task.text}
            completed={task.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}


