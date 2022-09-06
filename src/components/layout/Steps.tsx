import * as React from 'react';
import {
  View,
	Text
} from 'react-native';

import tw from 'twrnc'
import StepIndicator from './StepIndicator'

type Props = {
  totalSteps: number;
	currentStep: number;
};

const Steps = (props: Props) => {

	const totalSteps = props.totalSteps
	const currentStep = props.currentStep
	const steps: React.ReactNode[] = [];
	const [stepElements, setStepElements] = React.useState<any>();

	React.useEffect(() => {
			for(let i = 0; i < totalSteps; i++) {
				steps.push(
					<StepIndicator active={(currentStep === i + 1) ? true : false} />
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

export default Steps;