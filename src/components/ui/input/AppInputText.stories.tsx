import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import AppInputText from './AppInputText';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default {
  title: 'components/InputText',
  component: AppInputText,
} as ComponentMeta<typeof AppInputText>;

export const User: ComponentStory<typeof AppInputText> = args => (
  <View style={styles.position}>
    <AppInputText {...args} />
  </View>
);

export const Password: ComponentStory<typeof AppInputText> = args => (
  <View style={styles.position}>
    <AppInputText {...args} />
  </View>
);

User.args = {
	icon: 'user',
	iconColor: '#31344A',
  placeholder: 'Gebruikersnaam'
};

Password.args = {
	icon: 'key',
	iconColor: '#31344A',
	placeholder: 'Wachtwoord'
}
