import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

type Props = {
	elementText?: string;
};

const App = ({elementText}: Props) => {

  const [dimensions, setDimensions] = useState({window, screen});
	const [elementDimensions, setElementDimensions] = useState({ x:0, y:0, width:0, height: 0 });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });

  return (
    <View style={styles.container}>
			<View 						
				onLayout={(event) => {
					setElementDimensions(event.nativeEvent.layout);
				}}
				style={{flex: 1, backgroundColor: "pink"}}
			>
				<Text style={[styles.header]}>{elementText}</Text>
			</View>
			{Object.entries(elementDimensions).map(([elmkey, value]) => (
				<Text key={elmkey.toString()}>
					{elmkey} - {value}
				</Text>
			))}
      <Text style={styles.header}>Window Dimensions</Text>
      {Object.entries(dimensions.window).map(([wndkey, value]) => (
        <Text key={wndkey.toString()}>
          {wndkey} - {value}
        </Text>
      ))}
      <Text style={styles.header}>Screen Dimensions</Text>
      {Object.entries(dimensions.screen).map(([scrnkey, value]) => (
        <Text key={scrnkey.toString()}>
          {scrnkey} - {value}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
		flexDirection: 'column',
  },
  header: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default App;
