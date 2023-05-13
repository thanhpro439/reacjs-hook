import React, { useEffect, useState } from 'react';

const getCurrentClock = (date) => {
  const hh = `0${date.getHours()}`.slice(-2);
  const mm = `0${date.getMinutes()}`.slice(-2);
  const ss = `0${date.getSeconds()}`.slice(-2);

  return `${hh}:${mm}:${ss}`;
};

function Clock() {
  const [currentTime, getCurrentTime] = useState('');

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const date = new Date();
      const timeString = getCurrentClock(date);
      getCurrentTime(timeString);
    }, 1000);

    return () => {
      // Clear when unmount
      clearInterval(clockInterval);
    };
  }, []);

  return <div>{currentTime}</div>;
}

export default Clock;
