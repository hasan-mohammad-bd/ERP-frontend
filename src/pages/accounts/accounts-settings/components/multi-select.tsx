import React from "react";
import Select, { MultiValue } from "react-select";

interface Option {
	value: number;
	label: string;
}

interface MultiSelectProps {
	options: Option[];
	value: number[];
	onChange: (value: number[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
	options,
	value,
	onChange,
}) => {
	const handleChange = (
		selectedOptions: MultiValue<Option>
		// actionMeta: ActionMeta<Option>
	) => {
		if (selectedOptions) {
			onChange(selectedOptions.map((option) => option.value));
		} else {
			onChange([]);
		}
	};

	const selectedOptions = options.filter((option) =>
		value.includes(option.value)
	);

	return (
		<Select
			isMulti
			options={options}
			value={selectedOptions}
			onChange={handleChange}
			className="react-select-container"
			classNamePrefix="react-select"
		/>
	);
};

export default MultiSelect;
