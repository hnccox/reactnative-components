import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import AppButton from './AppButton';

export default {
  title: 'components/AppButton',
  component: AppButton,
  
} as ComponentMeta<typeof AppButton>;

export const Primary: ComponentStory<typeof AppButton> = args => (
  <AppButton {...args} />
);

Primary.args = {
  title: 'Primary'
};

export const Secondary: ComponentStory<typeof AppButton> = args => (
  <AppButton {...args} />
);

Secondary.args = {
  title: 'Secondary'
};
