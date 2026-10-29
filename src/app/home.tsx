import { useState } from 'react';
import { Host,Text, DateTimePicker } from '@expo/ui/jetpack-compose';

export default function DatePickerExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Host
      matchContents={{ vertical: true }}
      style={{ width: '100%' }}>
        <Text>Testing Date Picker</Text>
      <DateTimePicker
        onDateSelected={date => {
          setSelectedDate(date);
        }}
        displayedComponents="date"
        initialDate={selectedDate.toISOString()}
        variant="input"
      />
    </Host>
  );
}
