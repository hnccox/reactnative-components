import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type Props = {
  onPress: (e: GestureResponderEvent) => any;
  title: string;
  switchType: string;
};

const SwitchComponent = ({onPress, switchType = 'default'}: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.switch,
        switchType && styles[switchType],
        // switchType && styles[`${switchType}${isEnabled}`],
      ]}>
      <Switch
        trackColor={{
          false: 'rgb(229, 231, 235)',
          true: 'rgb(37, 99, 235)',
        }}
        thumbColor={isEnabled ? 'rgb(255, 255, 255)' : 'rgb(255, 255, 255)'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </TouchableOpacity>
  );
};

const styles: Record<string, any> = StyleSheet.create({
  switch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 6,
    overflow: 'hidden',
  },
  default: {
    backgroundColor: 'transparent',
  },
  primary: {
    borderColor: '#007bff',
    backgroundColor: '#007bff',
  },
  primaryfalse: {
    borderColor: '#007bff',
    backgroundColor: '#007bff',
  },
  primarytrue: {
    borderColor: '#007bff',
    backgroundColor: 'transparent',
  },
  secondary: {
    borderColor: '#6c757d',
    backgroundColor: '#6c757d',
  },
  secondaryfalse: {
    borderColor: '#6c757d',
    backgroundColor: '#6c757d',
  },
  secondarytrue: {
    borderColor: '#6c757d',
    backgroundColor: 'transparent',
  },
  success: {
    borderColor: '#28a745',
    backgroundColor: '#28a745',
  },
  successfalse: {
    borderColor: '#28a745',
    backgroundColor: '#28a745',
  },
  successtrue: {
    borderColor: '#28a745',
    backgroundColor: 'transparent',
  },
  danger: {
    borderColor: '#dc3545',
    backgroundColor: '#dc3545',
  },
  warning: {
    borderColor: '#ffc107',
    backgroundColor: '#ffc107',
  },
  info: {
    borderColor: '#17a2b8',
    backgroundColor: '#17a2b8',
  },
  light: {
    borderColor: '#f8f9fa',
    backgroundColor: '#f8f9fa',
  },
  dark: {
    borderColor: '#343a40',
    backgroundColor: '#343a40',
  },
  link: {
    backgroundColor: 'transparent',
  },
});

export default SwitchComponent;
