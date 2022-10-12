import React from 'react';
import {View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import tw from 'twrnc';

import Switch from './Switch';

export default {
	title: 'application-ui/forms/toggles/switches',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Primary: ComponentStory<typeof Switch> = args => (
  <View style={tw`absolute`}>
    <Switch {...args} />
  </View>
);

export const Secondary: ComponentStory<typeof Switch> = args => (
  <View style={tw`absolute`}>
    <Switch {...args} />
  </View>
);

export const Success: ComponentStory<typeof Switch> = args => (
  <View style={tw`absolute`}>
    <Switch {...args} />
  </View>
);

export const Danger: ComponentStory<typeof Switch> = args => (
  <View style={tw`absolute`}>
    <Switch {...args} />
  </View>
);

export const Warning: ComponentStory<typeof Switch> = args => (
  <View style={tw`absolute`}>
    <Switch {...args} />
  </View>
);

export const Info: ComponentStory<typeof Switch> = args => (
  <View style={tw`absolute`}>
    <Switch {...args} />
  </View>
);

export const Light: ComponentStory<typeof Switch> = args => (
  <View style={tw`absolute`}>
    <Switch {...args} />
  </View>
);

export const Dark: ComponentStory<typeof Switch> = args => (
  <View style={tw`absolute`}>
    <Switch {...args} />
  </View>
);

export const Link: ComponentStory<typeof Switch> = args => (
  <View style={tw`absolute`}>
    <Switch {...args} />
  </View>
);

Primary.args = {
  title: 'Primary',
  switchType: 'primary',
  onPress: () => {
    console.log('hi');
    return 'hi';
  },
};

Secondary.args = {
  title: 'Secondary',
  switchType: 'secondary',
};

Success.args = {
  title: 'Success',
  switchType: 'success',
};

Danger.args = {
  title: 'Danger',
  switchType: 'danger',
};

Warning.args = {
  title: 'Warning',
  switchType: 'warning',
};

Info.args = {
  title: 'Info',
  switchType: 'info',
};

Light.args = {
  title: 'Light',
  switchType: 'light',
};

Dark.args = {
  title: 'Dark',
  switchType: 'dark',
};

Link.args = {
  title: 'Link',
  switchType: 'link',
};
