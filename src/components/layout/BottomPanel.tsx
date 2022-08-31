import * as React from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

const DEFAULT_HEIGHT = 300;

// interface Props {
//   children: React.ReactNode;
//   show: boolean;
//   height?: number | string;
//   onOuterClick?: () => void;
//   onInnerClick?: () => void;
// }

type Props = {
  children: React.ReactNode;
  show: boolean;
  height?: number | string;
  onOuterClick?: () => void;
  onInnerClick?: () => void;
};

export function BottomPanel({
  children,
  show,
  height = DEFAULT_HEIGHT,
  onOuterClick,
  onInnerClick,
}: Props) {
  const {height: screenHeight} = useWindowDimensions();
  const animatedValue = React.useRef(new Animated.Value(0));
  const bottom = animatedValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-height, 0],
  });

  React.useEffect(() => {
    if (show) {
      Animated.timing(animatedValue.current, {
        toValue: 1,
        duration: 350,
        // Accelerate then decelerate - https://cubic-bezier.com/#.28,0,.63,1
        easing: Easing.bezier(0.28, 0, 0.63, 1),
        useNativeDriver: false, // 'bottom' is not supported by native animated module
      }).start();
    } else {
      Animated.timing(animatedValue.current, {
        toValue: 0,
        duration: 250,
        // Accelerate - https://easings.net/#easeInCubic
        easing: Easing.cubic,
        useNativeDriver: false,
      }).start();
    }
  }, [show]);

  return (
    <>
      {/* Outer semitransparent overlay - remove it if you don't want it */}
      {show && (
        <Pressable
          onPress={onOuterClick}
          style={[styles.outerOverlay, {height: screenHeight}]}>
          <View />
        </Pressable>
      )}
      <Animated.View style={[styles.bottomPanel, {height, bottom}]}>
        <Pressable onPress={onInnerClick} style={[{height: screenHeight}]}>
          <View>{children}</View>
        </Pressable>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  outerOverlay: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    backgroundColor: 'black',
    opacity: 0.3,
  },
  bottomPanel: {
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    zIndex: 1,
    // Here you can set a common style for all bottom sheets, or nothing if you
    // want different designs
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
