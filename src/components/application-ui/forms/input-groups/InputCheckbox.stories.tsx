import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import tw from 'twrnc';

import InputCheckbox from './InputCheckbox';

export default {
  component: InputCheckbox,
} as ComponentMeta<typeof InputCheckbox>;

export const InputCheckboxDefault: ComponentStory<typeof InputCheckbox> = args => (
  <View style={tw`absolute`}>
    <InputCheckbox {...args} />
  </View>
);