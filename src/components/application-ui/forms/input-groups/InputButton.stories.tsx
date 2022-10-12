import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import tw from 'twrnc';

import InputButton from './InputButton';

export default {
	title: 'application-ui/forms/input-groups/inputbutton',
  component: InputButton,
} as ComponentMeta<typeof InputButton>;

export const InputButtonDefault: ComponentStory<typeof InputButton> = args => (
  <View style={tw`absolute`}>
    <InputButton {...args} />
  </View>
);