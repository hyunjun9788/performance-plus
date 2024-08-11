// import { Calendar } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';

// document.addEventListener('DOMContentLoaded', function () {
//   const calendarEl: HTMLElement = document.getElementById('calendar')!;

//   const calendar = new Calendar(calendarEl, {
//     plugins: [dayGridPlugin],
//     // options here
//   });

//   calendar.render();
// });
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  return (
    <div className="mt-20 flex justify-center px-[15px]">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
      />
    </div>
  );
};

export default Calendar;
