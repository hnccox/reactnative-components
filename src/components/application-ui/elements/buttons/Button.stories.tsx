import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Button from './Button';
import { buttonStyles } from './Button';
import { iconPositions } from './Button';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default {
  title: 'application-ui/elements/buttons',
  component: Button,
	argTypes: { 
		buttonStyle: { control: { type: 'select' }, options: buttonStyles } ,
		iconPosition: { control: { type: 'select'} , options: iconPositions } ,
	},
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = args => (
  <View style={styles.position}>
    <Button {...args} />
  </View>
);

export const Primary: ComponentStory<typeof Button> = args => (
  <View style={styles.position}>
    <Button {...args} />
  </View>
);

export const Secondary: ComponentStory<typeof Button> = args => (
  <View style={styles.position}>
    <Button {...args} />
  </View>
);

export const Success: ComponentStory<typeof Button> = args => (
  <View style={styles.position}>
    <Button {...args} />
  </View>
);

export const Danger: ComponentStory<typeof Button> = args => (
  <View style={styles.position}>
    <Button {...args} />
  </View>
);

export const Warning: ComponentStory<typeof Button> = args => (
  <View style={styles.position}>
    <Button {...args} />
  </View>
);

export const Info: ComponentStory<typeof Button> = args => (
  <View style={styles.position}>
    <Button {...args} />
  </View>
);

export const Light: ComponentStory<typeof Button> = args => (
  <View style={styles.position}>
    <Button {...args} />
  </View>
);

export const Dark: ComponentStory<typeof Button> = args => (
  <View style={styles.position}>
    <Button {...args} />
  </View>
);

export const Link: ComponentStory<typeof Button> = args => (
  <View style={styles.position}>
    <Button {...args} />
  </View>
);

Default.args = {
  label: 'Default',
  buttonStyle: 'default',
	icon: 'icons',
	iconPosition: 'left',
};

Primary.args = {
  label: 'Primary',
  buttonStyle: 'primary',
};

Secondary.args = {
  label: 'Secondary',
  buttonStyle: 'secondary',
};

Success.args = {
  label: 'Success',
  buttonStyle: 'success',
};

Danger.args = {
  label: 'Danger',
  buttonStyle: 'danger',
};

Warning.args = {
  label: 'Warning',
  buttonStyle: 'warning',
};

Info.args = {
  label: 'Info',
  buttonStyle: 'info',
};

Light.args = {
  label: 'Light',
  buttonStyle: 'light',
};

Dark.args = {
  label: 'Dark',
  buttonStyle: 'dark',
};

Link.args = {
  label: 'Link',
  buttonStyle: 'link',
};
