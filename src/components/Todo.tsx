
import { type TodoId, type Todo as TodoType } from '../types'
import '../../node_modules/todomvc-app-css/index.css'

interface Props extends TodoType {
  onRemoveTodo: (id: TodoId) => void
  onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  disabled?: boolean
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo, disabled = false }) => {
  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompletedTodo({ id, completed: event.target.checked })
    if (!disabled) {
      onToggleCompletedTodo({ id, completed: event.target.checked });
    }
  }

  return (
    <div className='view'>
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckBox}
        disabled={disabled}
      />
      <label htmlFor="title">{title}</label>
      <button
        className="destroy"
        onClick={() => { onRemoveTodo({ id }) }}
      />
    </div>
  )
}
