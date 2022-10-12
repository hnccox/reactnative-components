import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import tw from 'twrnc';

import Input from './Input';

export default {
	title: 'application-ui/forms/input-groups/input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const InputButton: ComponentStory<typeof Input> = args => (
  <View style={tw`absolute`}>
    <Input {...args} />
  </View>
);