import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Calendar from './Calendar';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 20,
    left: 20,
    alignSelf: 'stretch',
  },
  'w-full': {
    width: '100%',
  },
  'w-1/2': {
    width: '50%',
  },
  'w-1/4': {
    width: '25%',
  },
  'w-3/4': {
    width: '75%',
  },
});

export default {
  title: 'components/Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

export const Default: ComponentStory<typeof Calendar> = args => (
  <View style={[styles.position, styles['w-3/4']]}>
    <Calendar {...args} />
  </View>
);

export const Year: ComponentStory<typeof Calendar> = args => (
  <View style={[styles.position, styles['w-1/2']]}>
    <Calendar {...args} />
  </View>
);

Default.args = {
  defaultView: 'year',
  views: ['day', 'week', 'month', 'year'],
};

Year.args = {
  defaultView: 'year',
  views: ['year'],
};
