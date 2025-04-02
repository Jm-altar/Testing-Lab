import { useEffect, useState } from 'react';
import { Todos } from './components/Todos';
import { type TodoTitle, type FilterValue, type TodoId, type Todo as TodoType } from './types';
import { TODO_FILTERS } from './consts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { getTodos } from './actions/todo';
import { Todo } from './types/todo.type';

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterSelected, setFilterSelected] = useState<FilterValue>();

  const hadleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo: { id: string; }) => todo.id !== id);
    setTodos(newTodos);
  };

  // const handleCompleted = (
  //   { id, completed }: Pick<TodoType, 'id' | 'completed'>
  // ): void => {
  //   const newTodos = todos.map((todo: { id: string; }) => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         completed,
  //       };
  //     }
  //     return todo;
  //   });
  //   setTodos(newTodos);
  // };

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo: { completed: any; }) => !todo.completed);
    setTodos(newTodos);
  };

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo: { completed: any; }) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo: { completed: any; }) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={hadleRemove}
        onToggleCompletedTodo={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleRemoveAllCompleted}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};