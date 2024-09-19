import React, { useEffect } from 'react';

export const CurrentDate = () => {
  useEffect(() => {
    function showDate() {
      const date = new Date();
      const t = date.getDate();
      const y = date.getFullYear();
      let m;
      switch (date.getMonth() + 1) {
        case 1:
          m = "January";
          break;
        case 2:
          m = "February";
          break;
        case 3:
          m = "March";
          break;
        case 4:
          m = "April";
          break;
        case 5:
          m = "May";
          break;
        case 6:
          m = "June";
          break;
        case 7:
          m = "July";
          break;
        case 8:
          m = "August";
          break;
        case 9:
          m = "September";
          break;
        case 10:
          m = "October";
          break;
        case 11:
          m = "November";
          break;
        case 12:
          m = "December";
          break;
      }

      let d;
      switch (date.getDay()) {
        case 0:
          d = "Sunday";
          break;
        case 1:
          d = "Monday";
          break;
        case 2:
          d = "Tuesday";
          break;
        case 3:
          d = "Wednesday";
          break;
        case 4:
          d = "Thursday";
          break;
        case 5:
          d = "Friday";
          break;
        case 6:
          d = "Saturday";
          break;
      }

      // Ensure the elements exist before setting innerHTML
      const yearEl = document.getElementById("year");
      const dayEl = document.getElementById("da");
      const monthEl = document.getElementById("mi");
      const weekdayEl = document.getElementById("day");

      if (yearEl && dayEl && monthEl && weekdayEl) {
        yearEl.innerHTML = y;
        dayEl.innerHTML = t;
        monthEl.innerHTML = m;
        weekdayEl.innerHTML = d;
      }
    }

    // Run initially
    showDate();

    // Update every 24 hours (86400000 ms = 24 hours)
    const intervalId = setInterval(showDate, 86400000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className='flex gap-2'>
      <span id="da" className='text-5xl'></span>
      <div>
      <h1 id='day' className='text-[10px]'>Monday</h1>
      <h1 id='mi' className='text-[10px]'>January</h1>
      <h1 id='year' className='text-[10px]'>2024</h1>
        
        
      </div>

    </div>
  );
}
