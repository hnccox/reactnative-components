import React from 'react';
import useState from 'storybook-addon-state';
import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {BottomSheet} from './BottomSheet';

export default {
  title: 'components/BottomSheet',
  component: BottomSheet,
} as ComponentMeta<typeof BottomSheet>;

export const Bottom: ComponentStory<typeof BottomSheet> = () => {
  const [showBottomSheet, setShowBottomSheet] = useState(
    'showBottomSheet',
    false,
  );

  const hide = () => {
    setShowBottomSheet(false);
  };

  return (
    <View style={styles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            setShowBottomSheet(true);
          }}
          style={styles.showButton}>
          <Text style={styles.buttonText}>Show bottom sheet</Text>
        </Pressable>

        <BottomSheet show={true} height={300} onOuterClick={hide}>
          <View style={styles.bottomSheetContent}>
            <Text style={styles.bottomSheetText}>Hey boys, hey girls!</Text>
            <Pressable onPress={hide} style={styles.bottomSheetCloseButton}>
              <Text style={styles.buttonText}>X Close</Text>
            </Pressable>
          </View>
        </BottomSheet>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    height: '100%',
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  showButton: {
    marginTop: 48,
    padding: 16,
    backgroundColor: 'mediumspringgreen',
    alignSelf: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
  },
  bottomSheetContent: {
    padding: 40,
    alignItems: 'center',
  },
  bottomSheetText: {
    fontSize: 24,
    marginBottom: 80,
  },
  bottomSheetCloseButton: {
    padding: 16,
    backgroundColor: 'deeppink',
    borderRadius: 8,
  },
});
