import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import tw from 'twrnc';
import { styles }	 from '../../../../constants/globalStyles';
import OptionSlider from './OptionSlider';
// import { buttonTypes } from './OptionSlider';

export default {
	title: 'application-ui/elements/option-slider',
  component: OptionSlider,
	argTypes: { 
		// buttonType: { control: { type: 'select' }, options: buttonTypes } ,
	},
} as ComponentMeta<typeof OptionSlider>;

export const Default: ComponentStory<typeof OptionSlider> = (args: JSX.IntrinsicAttributes & { buttonType?: "default" | "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link" | undefined; options: { title?: string | undefined; icon?: string | undefined; iconColor?: string | undefined; iconPosition?: "bottom" | "right" | "top" | "left" | undefined; }[]; }) => (
  <View style={tw`absolute top-2 left-20`}>
    <OptionSlider {...args} />
  </View>
);

Default.args = {
  buttonType: 'link',
	options: [
		{
			title: undefined,
			icon: 'bicycle',
			iconColor: 'hsl(230, 8%, 44%)',
			iconPosition: undefined
		},
		{
			title: undefined,
			icon: 'car',
			iconColor: 'hsl(230, 8%, 44%)',		// unselected: hsl(230, 8%, 44%), selected: hsl(233, 20%, 24%)
			iconPosition: undefined
		},
		{
			title: undefined,
			icon: 'person-walking',
			iconColor: 'hsl(230, 8%, 44%)',
			iconPosition: undefined
		},
		{
			title: undefined,
			icon: 'car',
			iconColor: 'hsl(230, 8%, 44%)',		// unselected: hsl(230, 8%, 44%), selected: hsl(233, 20%, 24%)
			iconPosition: undefined
		},
		{
			title: undefined,
			icon: 'person-walking',
			iconColor: 'hsl(230, 8%, 44%)',
			iconPosition: undefined
		}
	]
};

