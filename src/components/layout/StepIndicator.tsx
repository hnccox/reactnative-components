import * as React from 'react';
import {
	StyleSheet,
  View,
	Text
} from 'react-native';

import tw from 'twrnc'

type Props = {
  totalSteps: number;
	currentStep: number;
};

const StepIndicator = (props: Props) => {

	const totalSteps = props.totalSteps
	const currentStep = props.currentStep
	const steps: React.ReactNode[] = [];
	const [stepElements, setStepElements] = React.useState<any>();

	const Step = ({active = false}) => {
		return (
			<View style={[styles.step, active && styles[`active`]]} />
		);
	};

	React.useEffect(() => {
			for(let i = 0; i < totalSteps; i++) {
				steps.push(
					<Step key={i} active={(currentStep === i + 1) ? true : false} />
				)
			}
		setStepElements(steps);
	}, [currentStep])

	return (
		<>
			<View style={tw`flex flex-1 flex-row justify-center items-center`}>
				{stepElements}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
  step: {
		height: 5,
		width: 25,
		marginVertical: 3,
		marginHorizontal: 3,
		backgroundColor: '#EBEBED',
		borderRadius: 56,
  },
  active: {
		backgroundColor: '#31344A',
  },
});

export default StepIndicator;