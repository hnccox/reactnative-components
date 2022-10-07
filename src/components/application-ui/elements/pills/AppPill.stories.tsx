import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import AppPill from './AppPill';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default {
  component: AppPill,
} as ComponentMeta<typeof AppPill>;

export const Primary: ComponentStory<typeof AppPill> = args => (
  <View style={styles.position}>
    <AppPill {...args} />
  </View>
);

export const Secondary: ComponentStory<typeof AppPill> = args => (
  <View style={styles.position}>
    <AppPill {...args} />
  </View>
);

export const Success: ComponentStory<typeof AppPill> = args => (
  <View style={styles.position}>
    <AppPill {...args} />
  </View>
);

export const Danger: ComponentStory<typeof AppPill> = args => (
  <View style={styles.position}>
    <AppPill {...args} />
  </View>
);

export const Warning: ComponentStory<typeof AppPill> = args => (
  <View style={styles.position}>
    <AppPill {...args} />
  </View>
);

export const Info: ComponentStory<typeof AppPill> = args => (
  <View style={styles.position}>
    <AppPill {...args} />
  </View>
);

export const Light: ComponentStory<typeof AppPill> = args => (
  <View style={styles.position}>
    <AppPill {...args} />
  </View>
);

export const Dark: ComponentStory<typeof AppPill> = args => (
  <View style={styles.position}>
    <AppPill {...args} />
  </View>
);

export const Link: ComponentStory<typeof AppPill> = args => (
  <View style={styles.position}>
    <AppPill {...args} />
  </View>
);

Primary.args = {
  title: 'Primary',
  pillType: 'primary',
};

Secondary.args = {
  title: 'Secondary',
  pillType: 'secondary',
};

Success.args = {
  title: 'Success',
  pillType: 'success',
};

Danger.args = {
  title: 'Danger',
  pillType: 'danger',
};

Warning.args = {
  title: 'Warning',
  pillType: 'warning',
};

Info.args = {
  title: 'Info',
  pillType: 'info',
};

Light.args = {
  title: 'Light',
  pillType: 'light',
};

Dark.args = {
  title: 'Dark',
  pillType: 'dark',
};

Link.args = {
  title: 'Link',
  pillType: 'link',
};
