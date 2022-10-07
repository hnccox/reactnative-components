import React, {useState} from 'react';
import {
	Dimensions,
	useWindowDimensions,
  Text,
	View,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';

// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { IconProp } from "@fortawesome/fontawesome-svg-core";

// export const buttonStyles = ["default", "primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"] as const
// export const iconPositions = ["top", "left", "right", "bottom"] as const

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
const { height, width } = useWindowDimensions();

// type Props = {
// 	value?: boolean;
// 	name?: string;
// 	disabled?: boolean;
// 	icons?: object;
//   label?: any;
// 	optionLabels?: any;
// };

const Toggle = ({value = true, disabled = true, label, optionLabels, icons}: any) => {

	const [isEnabled, setIsEnabled] = useState(value);
	const [isDisabled, setIsDisabled] = useState(disabled);

	const [dimensions, setDimensions] = useState({window, screen});
	// const [toggleDimensions, setToggleDimensions] = useState({ x:0, y:0, width:0, height: 0 });
	const [toggleHeight, setToggleHeight] = useState(0);


  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener(
  //     'change',
  //     ({window, screen}) => {
  //       setDimensions({window, screen});
  //     },
  //   );
  //   return () => subscription?.remove();
  // });

  return (
		<>
			{/* SwitchGroup */ }
			<View
				style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 200}]}>

				<View style={[tw`flex flex-grow flex-col`]}>
					<Text style={[tw`text-sm font-medium text-gray-900`]}>{label.title}</Text>
					<Text style={[tw`text-sm text-gray-500`]}>{label.description}</Text>
				</View>

				{/* Switch */}
				<TouchableOpacity
					onPress={() => setIsEnabled(!isEnabled)}
					style={[tw.style(isDisabled ? {'bg-indigo-300': isEnabled, 'bg-gray-300': !isEnabled} : {'bg-indigo-600': isEnabled, 'bg-gray-200': !isEnabled}, 'relative inline-flex flex-row h-6 w-full flex-shrink-0 flex-grow cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')]}
					disabled={isDisabled}
				>
							
							{/* <Text style={[tw`sr-only invisible`]}>Use setting</Text> */}
							<Text>      
								{/* { toggleDimensions.x } */}
							</Text>

							<View style={[tw.style('pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'), isEnabled ? { transform: [{translateX: 180}]} : { transform: [{translateX: 0}]}]}>

								<View style={[tw.style('opacity-0 ease-out duration-100 absolute inset-0 flex flex-col h-full w-full items-center justify-center transition-opacity')]} aria-hidden="true">
									<Text></Text>
								</View>

							</View>
							
							{ isEnabled && <Text style={[tw.style('absolute w-full text-start text-white pl-2'), {direction: 'ltr'}]}>{optionLabels.checked}</Text> }
							{ !isEnabled && <Text style={[tw.style('absolute w-full text-end text-white pr-2'), {direction: 'rtl'}]}>{optionLabels.unchecked}</Text> }
							
				</TouchableOpacity>
			</View>
		</>
  );
};

// const styles: Record<string, any> = StyleSheet.create({
//   button: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 6,
//     paddingVertical: 15,
//     paddingHorizontal: 45,
//     overflow: 'hidden',
//   },
//   buttonText: {
//     fontFamily: 'Geomanist-Bold',
//     fontStyle: 'normal',
//     fontWeight: 'normal',
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   default: {
//     backgroundColor: 'hsl(360, 100%, 100%)',
//   },
//   defaultText: {
//     color: 'hsl(360, 0%, 0%)',
//   },
//   primary: {
//     borderColor: 'hsl(211, 100%, 50%)',
//     backgroundColor: 'hsl(211, 100%, 50%)',
//   },
//   primaryText: {
//     color: 'hsl(0, 0%, 100%)',
//   },
//   secondary: {
//     borderColor: 'hsl(208, 7%, 46%)',
//     backgroundColor: 'hsl(208, 7%, 46%)'
//   },
//   secondaryText: {
//     color: 'hsl(0, 0%, 100%)',
//   },
//   success: {
//     borderColor: 'hsl(134, 61%, 41%)',
//     backgroundColor: 'hsl(134, 61%, 41%)',
//   },
//   successText: {
//     color: 'hsl(0, 0%, 100%)',
//   },
//   danger: {
//     borderColor: 'hsl(354, 70%, 54%)',
//     backgroundColor: 'hsl(354, 70%, 54%)',
//   },
//   dangerText: {
//     color: 'hsl(0, 0%, 100%)',
//   },
//   warning: {
//     borderColor: 'hsl(45, 100%, 51%)',
//     backgroundColor: 'hsl(45, 100%, 51%)',
//   },
//   warningText: {
//     color: 'hsl(210, 11%, 15%)',
//   },
//   info: {
//     borderColor: 'hsl(188, 78%, 41%)',
//     backgroundColor: 'hsl(188, 78%, 41%)',
//   },
//   infoText: {
//     color: 'hsl(0, 0%, 100%)',
//   },
//   light: {
//     borderColor: 'hsl(210, 17%, 98%)',
//     backgroundColor: 'hsl(210, 17%, 98%)',
//   },
//   lightText: {
//     color: 'hsl(210, 11%, 15%)',
//   },
//   dark: {
//     borderColor: 'hsl(210, 10%, 23%)',
//     backgroundColor: 'hsl(210, 10%, 23%)',
//   },
//   darkText: {
//     color: 'hsl(0, 0%, 100%)',
//   },
//   link: {
//     backgroundColor: 'transparent',
//   },
//   linkText: {
//     fontWeight: '400',
//     color: 'hsl(211, 100%, 50%)',
//   }
// });

export default Toggle;