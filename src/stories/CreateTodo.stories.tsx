import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CreateTodo } from '../components/CreateTodo';
import { type TodoTitle } from '../types';

const meta = {
  title: 'Main/CreateTodo',
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

export const Prefilled: Story = {
  args: {
    saveTodo: saveTodoAction,
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector('input');
    if (input) {
      input.value = 'Sample Task';
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  },
};

export const Disabled: Story = {
  args: {
    saveTodo: saveTodoAction,
  },
  parameters: {
    controls: { disabled: true },
  },
};
