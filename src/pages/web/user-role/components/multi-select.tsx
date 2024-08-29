import React from 'react';
import Select, { MultiValue, ActionMeta } from 'react-select';

interface MultiSelectProps {
  options: string[];
  value: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, value, onChange }) => {
  return (
    <Select
      options={options.map(permission => ({ value: permission, label: permission }))}
      isMulti
      value={options
        .filter(option => value.includes(option))
        .map(option => ({ value: option, label: option }))}
      onChange={(selectedOptions: MultiValue<{ value: string; label: string }>, _: ActionMeta<unknown>) =>
        onChange(selectedOptions ? selectedOptions.map(option => option.value) : [])
      }
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};

export default MultiSelect;
