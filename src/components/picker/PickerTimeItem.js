import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import appointmentStore from "../../stores/appointmentStore";

const PickerTimeItem = ({ hour, setAppointment, appointment }) => {
  //   console.log(d);
  const appoint = appointmentStore.appointments
    .map(({ date, time }) => ({
      date,
      time,
    }))
    .find(
      (app) => (parseInt(app.time) === hour) & (app.date === appointment.date)
    );
  //   console.log(appoint);
  //   console.log(time);

  //   const appoint = appointmentStore.appointments.map((appo) => appo);

  console.log(appoint);

  return (
    <AppointmentButton
      onClick={
        appoint
          ? parseInt(appoint.time) === hour
            ? null
            : () => setAppointment({ ...appointment, time: hour })
          : () => setAppointment({ ...appointment, time: hour })
      }
      style={{
        height: 40,
        width: 80,

        backgroundColor: appoint
          ? (parseInt(appoint.time) === hour) &
            (appoint.date === appointment.date)
            ? "gray"
            : appointment.time === hour
            ? "tomato"
            : "#c39e81"
          : appointment.time === hour
          ? "tomato"
          : "#c39e81",
        border: 2,
        borderRadius: 5,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        display: "flex",
        margin: 5,
      }}
    >
      {hour}
      {hour === 11 ? " AM" : " PM"}
    </AppointmentButton>
  );
};

export default observer(PickerTimeItem);
const AppointmentButton = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
