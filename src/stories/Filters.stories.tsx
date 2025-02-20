import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Footer } from '../components/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

const handleFilterChangeAction = action('Filter changed');
const onClearCompletedAction = action('Clear completed clicked');

export const DefaultFooter: Story = {
  args: {
    activeCount: 3,
    completedCount: 2,
    onClearCompleted: onClearCompletedAction,
    filterSelected: 'all',
    handleFilterChange: handleFilterChangeAction,
  },
  parameters: {
    docs: {
      description: {
        story: 'The default footer with 3 active tasks and 2 completed tasks.',
      },
    },
  },
};

export const NoCompletedTasks: Story = {
  args: {
    activeCount: 3,
    completedCount: 0,
    onClearCompleted: onClearCompletedAction,
    filterSelected: 'active',
    handleFilterChange: handleFilterChangeAction,
  },
};

export const AllTasksCompleted: Story = {
  args: {
    activeCount: 0,
    completedCount: 5,
    onClearCompleted: onClearCompletedAction,
    filterSelected: 'completed',
    handleFilterChange: handleFilterChangeAction,
  },
};
