import React from 'react';
import { Text, View } from 'react-native';
import Card from '../../layout/panels/Card';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import tw from 'twrnc';

import Toggle from './Toggle';

export default {
	title: 'application-ui/forms/toggles',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const ToggleTemplate: ComponentStory<typeof Toggle> = (args) => {

	return (
		<View style={[tw.style('flex flex-row justify-center items-center')]}>
			<Card><Toggle {...args} /></Card>
		</View>
	)
}

export const ToggleComponent = ToggleTemplate.bind({});

ToggleComponent.args = {
	value: false,
	label: {
		title: 'Available to hire',
		description: 'Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.'
	},
	optionLabels: {
		checked: 'Enabled',
		unchecked: 'Disabled',
		position: 'outer'
	},
	icons: {
		checked: 'check',
		unchecked: 'xmark'
	},
};
