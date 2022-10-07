import React from 'react';
import {View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import tw from 'twrnc';

import Toggle from './Toggle';

export default {
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

export const Default: ComponentStory<typeof Toggle> = args => (
  <View style={tw`absolute`}>
    <Toggle {...args} />
  </View>
);

Default.args = {
	value: true,
	disabled: false,
	label: {
		title: 'Available to hire',
		description: 'Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.',
		position: 'left'
	},
	optionLabels: {
		checked: 'Enabled',
		unchecked: 'Disabled',
	},
	icons: {
		checked: 'check',
		unchecked: 'x-mark'
	},
};
