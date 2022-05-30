// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import AppModal from './AppModal';

export default {
  title: 'components/AppModal',
  component: AppModal,
  
} as ComponentMeta<typeof AppModal>;

export const Primary: ComponentStory<typeof AppModal> = args => (
  <AppModal {...args} />
);

Primary.args = {
  title: 'Primary',
  class: 'primary'
};

export const Secondary: ComponentStory<typeof AppModal> = args => (
  <AppModal {...args} />
);

Secondary.args = {
  title: 'Secondary',
  class: 'secondary'
};
