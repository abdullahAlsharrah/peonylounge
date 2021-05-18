import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { Grid } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";
import { useState } from "react";
import PickerTimeItem from "./PickerTimeItem";
import appointmentStore from "../../stores/appointmentStore";
import { observer } from "mobx-react";

const PickerTime = () => {
  let dtFormat = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const [appointment, setAppointment] = useState({
    name: "",
    phoneNumber: "",
    time: "",
    date: dtFormat.format(new Date()),
  });
  const handleDateChange = (_date) => {
    setAppointment({ ...appointment, date: dtFormat.format(_date) });
  };

  const hours = [11, 12, 1, 2, 3, 4, 5];
  console.log(appointment);
  const hoursList = hours.map((hour) => (
    <PickerTimeItem
      hour={hour}
      setAppointment={setAppointment}
      key={hour}
      appointment={appointment}
      dtFormat={dtFormat}
    />
  ));
  const handleChange = (event) => {
    setAppointment({ ...appointment, [event.target.name]: event.target.value });
  };
  const handleAdd = () => {
    appointmentStore.creatAppointment(appointment);
    alert(`تم حجز موعد يوم ${appointment.date} الساعه ${appointment.time}`);
    setAppointment({
      name: "",
      phoneNumber: "",
      time: "",
      date: new Date(),
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <input
          placeholder={"Name"}
          name="name"
          value={appointment.name}
          style={{
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0,
            height: 40,
            margin: 5,
          }}
          onChange={handleChange}
          required
        />

        <input
          placeholder={"Phone Number"}
          value={appointment.phoneNumber}
          name="phoneNumber"
          style={{
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0,
            height: 40,
            margin: 5,
          }}
          type="number"
          required
          onChange={handleChange}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={appointment.date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          {hoursList}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          //   flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <button
          style={{
            height: 40,
            margin: 20,
            width: 80,
            backgroundColor: "#222",
            color: "White",
            fontSize: 20,
            borderRadius: 5,
          }}
          onClick={() => handleAdd()}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default observer(PickerTime);
