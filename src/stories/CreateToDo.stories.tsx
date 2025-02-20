import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CreateTodo } from '../components/CreateTodo';

const meta = {
  title: 'Components/CreateTodo',
  component: CreateTodo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CreateTodo>;

export default meta;
type Story = StoryObj<typeof meta>;

const saveTodoAction = action('saveTodo');

export const Default: Story = {
  args: {
    saveTodo: saveTodoAction,
  },
};

export const WithPlaceholderText: Story = {
  args: {
    saveTodo: saveTodoAction,
  },
  parameters: {
    docs: {
      description: {
        story: 'Make sure the placeholder text appears correctly.',
      },},},
};

export const TypingAndSubmitting: Story = {
  args: {
    saveTodo: (todo) => alert(`Todo saved: ${todo.title}`),
  },
  parameters: {
    docs: {
      description: {
        story: 'Simulates user typing a task and submitting it',
      },},},
};
