import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Todo } from '../components/Todo'

const meta = {
  title: 'Todo',
  component: Todo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Todo>;

export default meta;
type Story = StoryObj<typeof meta>;

const onRemoveTodo = action('onRemoveTodo');
const onToggleCompletedTodo = action('onToggleCompletedTodo');

export const Done: Story = {
    args: {
      id: '1',
      title: 'Task Done!',
      completed: true,
      onRemoveTodo,
      onToggleCompletedTodo,
    },
  };
  
  export const Not_Done: Story = {
    args: {
      id: '2',
      title: 'Task Pending',
      completed: false,
      onRemoveTodo,
      onToggleCompletedTodo,
    },
  };