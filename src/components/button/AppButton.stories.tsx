import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import AppButton from './AppButton';
import { buttonTypes } from './AppButton';
import { iconPositions } from './AppButton';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default {
  title: 'components/AppButton',
  component: AppButton,
	argTypes: { 
		buttonType: { control: { type: 'select' }, options: buttonTypes } ,
		iconPosition: { control: { type: 'select'} , options: iconPositions } ,
	},
} as ComponentMeta<typeof AppButton>;

export const Default: ComponentStory<typeof AppButton> = args => (
  <View style={styles.position}>
    <AppButton {...args} />
  </View>
);

export const Primary: ComponentStory<typeof AppButton> = args => (
  <View style={styles.position}>
    <AppButton {...args} />
  </View>
);

export const Secondary: ComponentStory<typeof AppButton> = args => (
  <View style={styles.position}>
    <AppButton {...args} />
  </View>
);

export const Success: ComponentStory<typeof AppButton> = args => (
  <View style={styles.position}>
    <AppButton {...args} />
  </View>
);

export const Danger: ComponentStory<typeof AppButton> = args => (
  <View style={styles.position}>
    <AppButton {...args} />
  </View>
);

export const Warning: ComponentStory<typeof AppButton> = args => (
  <View style={styles.position}>
    <AppButton {...args} />
  </View>
);

export const Info: ComponentStory<typeof AppButton> = args => (
  <View style={styles.position}>
    <AppButton {...args} />
  </View>
);

export const Light: ComponentStory<typeof AppButton> = args => (
  <View style={styles.position}>
    <AppButton {...args} />
  </View>
);

export const Dark: ComponentStory<typeof AppButton> = args => (
  <View style={styles.position}>
    <AppButton {...args} />
  </View>
);

export const Link: ComponentStory<typeof AppButton> = args => (
  <View style={styles.position}>
    <AppButton {...args} />
  </View>
);

Default.args = {
  title: 'Default',
  buttonType: 'default',
	icon: 'icons',
	iconPosition: 'left',
};

Primary.args = {
  title: 'Primary',
  buttonType: 'primary',
};

Secondary.args = {
  title: 'Secondary',
  buttonType: 'secondary',
};

Success.args = {
  title: 'Success',
  buttonType: 'success',
};

Danger.args = {
  title: 'Danger',
  buttonType: 'danger',
};

Warning.args = {
  title: 'Warning',
  buttonType: 'warning',
};

Info.args = {
  title: 'Info',
  buttonType: 'info',
};

Light.args = {
  title: 'Light',
  buttonType: 'light',
};

Dark.args = {
  title: 'Dark',
  buttonType: 'dark',
};

Link.args = {
  title: 'Link',
  buttonType: 'link',
};
