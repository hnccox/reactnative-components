import React from 'react';
import useState from 'storybook-addon-state';
import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {BottomPanel} from './BottomPanel';

export default {
  title: 'components/BottomPanel',
  component: BottomPanel,
} as ComponentMeta<typeof BottomPanel>;

export const Bottom: ComponentStory<typeof BottomPanel> = () => {
  const [showBottomPanel, setShowBottomPanel] = useState(
    'showBottomPanel',
    false,
  );

  const hide = () => {
    setShowBottomPanel(false);
  };

  return (
    <View style={styles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            setShowBottomPanel(true);
          }}
          style={styles.showButton}>
          <Text style={styles.buttonText}>Show bottom panel</Text>
        </Pressable>

        <BottomPanel
          show={showBottomPanel}
          height={600}
          onOuterClick={hide}
          onInnerClick={hide}>
          <View style={styles.bottomPanelContent}>
            <Text style={styles.bottomPanelText}>Hey boys, hey girls!</Text>
            <Pressable onPress={hide} style={styles.bottomPanelCloseButton}>
              <Text style={styles.buttonText}>X Close</Text>
            </Pressable>
          </View>
        </BottomPanel>
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
  bottomPanelContent: {
    padding: 40,
    alignItems: 'center',
  },
  bottomPanelText: {
    fontSize: 24,
    marginBottom: 80,
  },
  bottomPanelCloseButton: {
    padding: 16,
    backgroundColor: 'deeppink',
    borderRadius: 8,
  },
});
