import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onAddTodo: () => {},
  },
  parameters: {
    docs: {
      storyDescription: 'Default Header and color.',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ filter: 'invert(1)' }}>
        <div className="todoapp h1">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const Primary: Story = {
  args: {
    onAddTodo: () => {},
  },
  parameters: {
    docs: {
      storyDescription: 'Oblique, Larger Header with a different color',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ fontSize: '32px', padding: '20px', textAlign: 'center', color: '#57b83f', fontStyle: 'oblique' }}>
        <div style={{ filter: 'invert(1)' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export const Secondary: Story = {
  args: {
    onAddTodo: () => {},
  },

  parameters: {
    docs: {
      storyDescription: 'Italic, Smaller Header with a different color',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ fontSize: '12px', padding: '10px', textAlign: 'center', color: '#f279ff', fontStyle: 'italic' }}>
        <div style={{ filter: 'invert(1)' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};
