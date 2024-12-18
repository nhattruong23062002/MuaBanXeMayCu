import React from "react";

const AppointmentCard = ({ id, name, phone, time, initials, color }) => {
  return (
    <div className="appointment-card">
      <p>
        <b>{id}</b> {name}
      </p>
      <p>{phone}</p>
      <p>{time}</p>
      <div className="initials" style={{ backgroundColor: color }}>
        {initials}
      </div>
    </div>
  );
};

export default AppointmentCard;
