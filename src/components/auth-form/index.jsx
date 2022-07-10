import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import RenderedButtons from './RenderedButtons';
import RenderedTextFields from './RenderedTextFields';

const AuthForm = ({
	textFieldItems,
	textFieldFooters,
	buttonItems,
	footer,
}) => {
	const [innerValue, setInnerValues] = useState({});

	useEffect(() => {
		for (const item in textFieldItems) {
			setInnerValues(prevState => ({
				...prevState,
				[textFieldItems[item]['name']]: '',
			}));
		}
	}, [textFieldItems]);

	return (
		<Box>
			<RenderedTextFields
				values={innerValue}
				setValue={setInnerValues}
				items={textFieldItems}
			/>
			{textFieldFooters}
			<RenderedButtons items={buttonItems} />
			{footer}
		</Box>
	);
};

export default AuthForm;
