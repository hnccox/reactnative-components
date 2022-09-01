import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import AppSelectButton from './AppSelectButton';
// import { buttonTypes } from './AppSelectButton';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default {
  title: 'components/AppSelectButton',
  component: AppSelectButton,
	argTypes: { 
		// buttonType: { control: { type: 'select' }, options: buttonTypes } ,
	},
} as ComponentMeta<typeof AppSelectButton>;

export const Default: ComponentStory<typeof AppSelectButton> = args => (
  <View style={styles.position}>
    <AppSelectButton {...args} />
  </View>
);

Default.args = {
  buttonType: 'link',
	options: [
		{
		title: undefined,
		icon: 'bicycle',
		iconColor: 'hsl(233, 20%, 24%)',
		iconPosition: undefined
	},
	{
		title: undefined,
		icon: 'car',
		iconColor: 'hsl(230, 8%, 44%)',
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
		icon: 'person-walking',
		iconColor: 'hsl(230, 8%, 44%)',
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
		icon: 'person-walking',
		iconColor: 'hsl(230, 8%, 44%)',
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
		icon: 'person-walking',
		iconColor: 'hsl(230, 8%, 44%)',
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
