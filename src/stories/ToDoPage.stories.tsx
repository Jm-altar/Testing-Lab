import { Meta, StoryObj } from '@storybook/react';
import App from '../App';
import { FILTER_BUTTONS, TODO_FILTERS } from '../consts';

const meta: Meta<typeof App> = {
  title: 'Pages/Todo-List',
  component: App,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NoTasks: Story = {
  args: {
    todos: [],
  },
  decorators: [
    (Story) => (
      <div style={{ filter: 'invert(1)' }}>
          <Story />
      </div>
    ),
  ],
};

export const ActiveTasks: Story = {
    args: {
        todos: [
        { id: '1', title: 'Hello World 1234', completed: false },
        { id: '2', title: 'Do something here', completed: false},
        { id: '3', title: 'A random task', completed: false },
        ],
        filterSelected: TODO_FILTERS.ACTIVE,
    },
        decorators: [
        (Story) => (
        <div style={{ filter: 'invert(1)' }}>
            <Story />
        </div>
        ),
    ],
};
  

export const CompletedTasks: Story = {
  args: {
    todos: [
      { id: '1', title: 'Hello World 1234', completed: true },
      { id: '2', title: 'Do something here', completed: true },
      { id: '3', title: 'A random task', completed: true },
    ],
    filterSelected: TODO_FILTERS.COMPLETED,
  },
  decorators: [
    (Story) => (
      <div style={{ filter: 'invert(1)' }}>
          <Story />
      </div>
    ),
  ],
};