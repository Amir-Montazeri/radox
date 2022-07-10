import {
	AuthComponents,
	AuthForm,
	RegisterFooter,
	RegisterTextfieldFooter,
} from 'components';
import { buttonItems, textFieldItems } from './sampleDatas';

function Register() {
	return (
		<AuthComponents title='عضو جدید'>
			<AuthForm
				textFieldItems={textFieldItems}
				textFieldFooters={<RegisterTextfieldFooter />}
				buttonItems={buttonItems}
				footer={<RegisterFooter />}
			/>
		</AuthComponents>
	);
}

export default Register;
