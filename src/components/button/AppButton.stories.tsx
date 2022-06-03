import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import AppButton from './AppButton';

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
} as ComponentMeta<typeof AppButton>;

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

Primary.args = {
  title: 'Primary',
  btnType: 'primary',
};

Secondary.args = {
  title: 'Secondary',
  btnType: 'secondary',
};

Success.args = {
  title: 'Success',
  btnType: 'success',
};

Danger.args = {
  title: 'Danger',
  btnType: 'danger',
};

Warning.args = {
  title: 'Warning',
  btnType: 'warning',
};

Info.args = {
  title: 'Info',
  btnType: 'info',
};

Light.args = {
  title: 'Light',
  btnType: 'light',
};

Dark.args = {
  title: 'Dark',
  btnType: 'dark',
};

Link.args = {
  title: 'Link',
  btnType: 'link',
};
