import React, { useEffect, useState } from "react";

const Counters = ({ targetValues, duration }) => {
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    remarks: 0,
    pending: 0,
  });

  useEffect(() => {
    const frameRate = 16;
    const step = duration / frameRate;

    const increments = {
      years: targetValues.years / step,
      projects: targetValues.projects / step,
      remarks: targetValues.remarks / step,
      pending: targetValues.pending / step,
    };

    const animateCounters = () => {
      setCounters((prev) => {
        let updated = { ...prev };

        for (let key in increments) {
          if (prev[key] < targetValues[key]) {
            updated[key] = Math.min(
              prev[key] + increments[key],
              targetValues[key]
            );
          }
        }

        return updated;
      });
    };

    const interval = setInterval(animateCounters, frameRate);

    return () => clearInterval(interval);
  }, [targetValues, duration]);

  return (
    <div>
      <p>Years: {counters.years}</p>
      <p>Projects: {counters.projects}</p>
      <p>Remarks: {counters.remarks}</p>
      <p>Pending: {counters.pending}</p>
    </div>
  );
};

export default Counters;