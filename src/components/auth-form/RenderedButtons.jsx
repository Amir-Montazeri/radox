import { Box, Button } from '@mui/material';

const RenderedButtons = ({ items }) =>
	items.map(({ title, type, color, bgcolor, width }) => {
		return (
			<Box key={title}>
				<Button type={type} sx={{ width, color, bgcolor }}>
					{title}
				</Button>
			</Box>
		);
	});

export default RenderedButtons;
