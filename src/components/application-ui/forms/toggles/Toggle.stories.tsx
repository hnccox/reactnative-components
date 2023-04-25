import React from 'react';
import { View } from 'react-native';
import Card from '../../layout/panels/Card';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import tw from 'twrnc';

import Toggle from './Toggle';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
	title: 'Forms/Toggles',
	component: Toggle,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	// argTypes: {
	// },
} as ComponentMeta<typeof Toggle>;

// const ToggleTemplate: ComponentStory<typeof Toggle> = (args) => {

// 	return (
// 		<View style={[tw.style('flex flex-row justify-center items-center')]}>
// 			<Card><Toggle {...args} /></Card>
// 		</View>
// 	)
// }

export const Default: ComponentStory<typeof Toggle> = args => (
	<View style={tw`flex flex-row items-center justify-center m-5`}>
		<Card>
			<Toggle {...args} />
		</Card>
	</View>
);

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
	value: true,
	disabled: false,
	size: 'auto',
	label: {
		title: 'Available to hire',
		description:
			'Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.',
		position: 'right',
	},
	optionLabels: {
		checked: 'Enabled',
		unchecked: 'Disabled',
		position: 'inner',
	},
	icons: {
		checked: 'check',
		unchecked: 'xmark',
	},
};
