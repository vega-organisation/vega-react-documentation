import { useState } from 'react';
import { PhoneNumberInput } from 'vega-react-components';

export default function PhoneNumberInputDemo() {
	const [value, setValue] = useState<string | undefined>();
	return (
		<div className="vega-preview vega-preview--column">
			<PhoneNumberInput
				label="Phone Number"
				defaultCountry="FR"
				value={value}
				onChange={setValue}
			/>
		</div>
	);
}
