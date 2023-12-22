// CalendarComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // You can perform any additional actions when the date changes
  };

  return (
    <div>
      <h2>My Calendar</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <p>Selected Date: {selectedDate.toDateString()}</p>
    </div>
  );
};

export default MyCalendar;
