import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const CreateAppointment = () => {
  const { t } = useTranslation("createAppointments");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const timeSlots = [
    "8:00 - 9:00",
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
  ];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSlotClick = (slot) => {
    if (selectedSlots.includes(slot)) {
      setSelectedSlots(selectedSlots.filter((s) => s !== slot));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const handleSaveAppointment = () => {
    if (selectedDate && selectedSlots.length > 0) {
      const newAppointments = selectedSlots.map((slot) => ({
        date: selectedDate,
        time: slot,
        slot: 0,
      }));
      setAppointments([...appointments, ...newAppointments]);
      setSelectedSlots([]);
    } else {
      alert("Please select a date and at least one time slot.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">{t("title")}</h2>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">{t("date")}</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="p-2 border border-gray-300 rounded-md w-full sm:w-auto text-black"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">{t("hour")}</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              onClick={() => handleSlotClick(slot)}
              className={`px-4 py-2 border rounded-md ${
                selectedSlots.includes(slot)
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleSaveAppointment}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Lưu lại
      </button>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">{t("appointmentList")}</h3>
        {appointments.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="px-4 py-2 border">{t("dateList")}</th>
                  <th className="px-4 py-2 border">{t("hourList")}</th>
                  <th className="px-4 py-2 border">{t("numberBook")}</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border">{appointment.date}</td>
                    <td className="px-4 py-2 border">{appointment.time}</td>
                    <td className="px-4 py-2 border">{appointment.slot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600">{t("noAppointments")}</p>
        )}
      </div>
    </div>
  );
};

export default CreateAppointment;
