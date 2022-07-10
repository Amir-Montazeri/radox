import { Box, Grid } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { SwiperComponent } from 'components';
import { containerStyles } from './rightSectionStyles';
import sampleSwiperItems from './sampleSwiperItems.json';

const config = {
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	modules: [Autoplay],
};

const RightSection = () => {
	return (
		<Grid item sx={containerStyles}>
			<SwiperComponent swiperConfig={config}>
				<SwiperSlide>
					{/* <Box
						sx={{
							background: `url(${homeBg})`,
							height: '100%',
							width: '100%',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						sx={{
							background: `url(${homeBg})`,
							height: '100%',
							width: '100%',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						sx={{
							background: `url(${homeBg})`,
							height: '100%',
							width: '100%',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						sx={{
							background: `url(${homeBg})`,
							height: '100%',
							width: '100%',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						sx={{
							background: `url(${homeBg})`,
							height: '100%',
							width: '100%',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						sx={{
							background: `url(${homeBg})`,
							height: '100%',
							width: '100%',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						sx={{
							background: `url(${homeBg})`,
							height: '100%',
							width: '100%',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						sx={{
							background: `url(${homeBg})`,
							height: '100%',
							width: '100%',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Box
						sx={{
							background: `url(${homeBg})`,
							height: '100%',
							width: '100%',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/> */}
				</SwiperSlide>
			</SwiperComponent>
		</Grid>
	);
};

export default RightSection;
