import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import AppSwitch from './AppSwitch';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default {
  title: 'components/AppSwitch',
  component: AppSwitch,
} as ComponentMeta<typeof AppSwitch>;

export const Primary: ComponentStory<typeof AppSwitch> = args => (
  <View style={styles.position}>
    <AppSwitch {...args} />
  </View>
);

export const Secondary: ComponentStory<typeof AppSwitch> = args => (
  <View style={styles.position}>
    <AppSwitch {...args} />
  </View>
);

export const Success: ComponentStory<typeof AppSwitch> = args => (
  <View style={styles.position}>
    <AppSwitch {...args} />
  </View>
);

export const Danger: ComponentStory<typeof AppSwitch> = args => (
  <View style={styles.position}>
    <AppSwitch {...args} />
  </View>
);

export const Warning: ComponentStory<typeof AppSwitch> = args => (
  <View style={styles.position}>
    <AppSwitch {...args} />
  </View>
);

export const Info: ComponentStory<typeof AppSwitch> = args => (
  <View style={styles.position}>
    <AppSwitch {...args} />
  </View>
);

export const Light: ComponentStory<typeof AppSwitch> = args => (
  <View style={styles.position}>
    <AppSwitch {...args} />
  </View>
);

export const Dark: ComponentStory<typeof AppSwitch> = args => (
  <View style={styles.position}>
    <AppSwitch {...args} />
  </View>
);

export const Link: ComponentStory<typeof AppSwitch> = args => (
  <View style={styles.position}>
    <AppSwitch {...args} />
  </View>
);

Primary.args = {
  title: 'Primary',
  switchType: 'primary',
  onPress: () => {
    console.log('hi');
    return 'hi';
  },
};

Secondary.args = {
  title: 'Secondary',
  switchType: 'secondary',
};

Success.args = {
  title: 'Success',
  switchType: 'success',
};

Danger.args = {
  title: 'Danger',
  switchType: 'danger',
};

Warning.args = {
  title: 'Warning',
  switchType: 'warning',
};

Info.args = {
  title: 'Info',
  switchType: 'info',
};

Light.args = {
  title: 'Light',
  switchType: 'light',
};

Dark.args = {
  title: 'Dark',
  switchType: 'dark',
};

Link.args = {
  title: 'Link',
  switchType: 'link',
};
