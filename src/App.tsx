import { useState } from 'react';
import { Todos } from './components/Todos';
import { type TodoTitle, type FilterValue, type TodoId, type Todo as TodoType } from './types';
import { TODO_FILTERS } from './consts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const mockTodos = [
  {
    id: '1',
    title: 'Hello World 1234',
    completed: true,
  },
  {
    id: '2',
    title: 'Do something here',
    completed: true,
  },
  {
    id: '3',
    title: 'A random task',
    completed: true,
  },
];

const App = ({ todos: initialTodos = [], filterSelected: initialFilterSelected = TODO_FILTERS.ALL }: any): JSX.Element => {
  const [todos, setTodos] = useState(initialTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(initialFilterSelected);

  const hadleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed);
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

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter(todo => {
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

export default App;
