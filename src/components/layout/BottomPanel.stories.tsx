import React from 'react';
import useState from 'storybook-addon-state';
import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {BottomPanel} from './BottomPanel';
import AppButton from '../button/AppButton';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

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

  const buttonType = 'primary';

  return (
    <View style={styles.safeAreaView}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={{width: '50%'}}>
          <AppButton
            {...{
              onPress: () => setShowBottomPanel(true),
              title: 'Open Panel',
              buttonType: 'primary',
            }}
          />
          {/* <Pressable
          onPress={() => {
            setShowBottomPanel(true);
          }}
          style={styles.showButton}>
          <Text style={styles.buttonText}>Show bottom panel</Text>
        </Pressable> */}
        </View>

        <BottomPanel
          show={showBottomPanel}
          height={600}
          onOuterClick={hide}
          onInnerClick={hide}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                paddingTop: 8,
                borderBottomColor: 'gray',
                borderBottomWidth: 6,
                borderBottomLeftRadius: 3,
                borderBottomRightRadius: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                width: 100,
              }}
            />
          </View>
          <View style={styles.bottomPanelContent}>
            <Text style={styles.bottomPanelText}>Hey boys, hey girls!</Text>
            <Pressable
              onPress={hide}
              style={[styles.button, buttonType && styles[buttonType]]}>
              <FontAwesomeIcon icon="fa-solid fa-rectangle-xmark" as IconProp />

              {/* <Text
                style={[
                  styles.buttonText,
                  buttonType && styles[`${buttonType}Text`],
                ]}>
                X Close
              </Text> */}
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
  bottomPanelContent: {
    padding: 40,
    alignItems: 'center',
  },
  bottomPanelText: {
    fontSize: 24,
    marginBottom: 80,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 45,
    overflow: 'hidden',
  },
  buttonText: {
    fontFamily: 'Geomanist-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    textAlign: 'center',
  },
  primary: {
    borderColor: '#007bff',
    backgroundColor: '#007bff',
  },
  primaryText: {
    color: '#fff',
  },
});
