declare module 'react-datepicker' {
    import * as React from 'react';
  
    export interface DatePickerProps {
      selected?: Date | null;
      onChange?: (date: Date | null) => void;
      dateFormat?: string;
      showMonthYearPicker?: boolean;
      placeholderText?: string;
      className?: string;
    }
  
    export class DatePicker extends React.Component<DatePickerProps> {}
    export default DatePicker;
  }
