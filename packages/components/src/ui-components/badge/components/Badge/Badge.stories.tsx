import { Story } from '@storybook/react';
import * as React from 'react';

import Badge, { BadgeProps } from './Badge';

export default {
  title: 'Core/Components/Badge/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['default', 'info', 'warning', 'critical', 'success', 'active'],
    },
    size: {
      options: ['sm', 'md'],
    },
    children: {
      control: 'text',
    },
  },
};

const Template: Story<React.PropsWithChildren<BadgeProps>> = args => <Badge {...args} />;

export const BasicExample = Template.bind({});
BasicExample.args = {
  variant: 'default',
  size: 'md',
  children: 'example',
};

// export const WithIcon: Story<React.PropsWithChildren<BadgeProps>> = args => {
//   return <Badge icon={} {...args} />;
// };
// WithIcon.args = {
//   variant: 'critical',
//   size: 'md',
//   children: 'example',
// };
