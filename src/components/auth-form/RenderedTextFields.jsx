import { Grid, TextField } from '@mui/material';

const RenderedTextFields = ({ items, values, setValue }) => {
	const handleTextFieldChanged = data => {
		const { value, name } = data.target;
		setValue({ ...values, [name]: value });
	};

	return items.map(({ name, placeholder, type, icon }) => (
		<Grid container key={name}>
			<Grid item>
				<TextField
					name={name}
					value={values[name] ?? ''}
					onChange={handleTextFieldChanged}
					placeholder={placeholder}
					type={type}
				/>
			</Grid>
			<Grid item>{icon}</Grid>
		</Grid>
	));
};

export default RenderedTextFields;
