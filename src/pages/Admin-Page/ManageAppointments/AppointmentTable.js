import React from "react";
import AppointmentCard from "./AppointmentCard";

const AppointmentTable = () => {
  return (
    <div className="appointment-table">
      {/* Cột Khách Hẹn */}
      <div className="column">
        <h4>Khách hẹn</h4>
        <AppointmentCard
          id="10033"
          name="Anh Kiều"
          phone="0935647894"
          time="13:00 - 30 min"
          initials="AK"
          color="pink"
        />
        <AppointmentCard
          id="10233"
          name="Nhật Trường"
          phone="0926222354"
          time="15:00 - 30 min"
          initials="NT"
          color="purple"
        />
        <button className="add-appointment-btn">Xem thêm lịch hẹn</button>
      </div>

      {/* Cột Khách Đang Chờ */}
      <div className="column">
        <h5>Khách đang chờ</h5>
        <AppointmentCard
          id="25647"
          name="Quốc Nga"
          phone="0935647894"
          time="9h - 15/12/2024"
          initials="QN"
          color="violet"
        />
        <AppointmentCard
          id="25476"
          name="Thị Bình"
          phone="0935647894"
          time="10h - 17/12/2024"
          initials="AK"
          color="pink"
        />
        <button className="add-appointment-btn">Xem thêm lịch hẹn</button>
      </div>

      {/* Cột Khách Hoàn Thành */}
      <div className="column">
        <h6>Khách hoàn thành</h6>
        <AppointmentCard
          id="11233"
          name="Giang Mai"
          phone="0935647894"
          time="9/10/2024"
          initials="GM"
          color="lightblue"
        />
        <AppointmentCard
          id="14033"
          name="Văn Long"
          phone="0935647894"
          time="9/9/2024"
          initials="VL"
          color="lightgreen"
        />
        <button className="add-appointment-btn">Xem thêm lịch hẹn</button>
      </div>
    </div>
  );
};

export default AppointmentTable;
