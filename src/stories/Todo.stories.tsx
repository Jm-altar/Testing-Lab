import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Todo } from '../components/Todo';

const meta = {
  title: 'Main/Todo',
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


//Stories
export const Default: Story = {
  args: {
    id: '1',
    title: 'Do Something task',
    completed: false, 
    onRemoveTodo,
    onToggleCompletedTodo,
  },
  argTypes: {
    completed: { control: 'boolean' },
  },
};


export const Completed: Story = {
  args: {
    id: '2',
    title: 'Do Something task',
    completed: true,
    onRemoveTodo,
    onToggleCompletedTodo,
  },
  argTypes: {
    completed: { control: 'boolean' },
  },
};


export const Disabled: Story = {
  args: {
    id: '3',
    title: 'Do Something task',
    completed: false,
    onRemoveTodo,
    onToggleCompletedTodo,
  },
  argTypes: {
    completed: { control: 'boolean', disabled: true },
  },
  parameters: {
    controls: { disabled: true }, 
  },

  render: (args) => <Todo {...args} completed={args.completed} disabled={true} />
};
``
