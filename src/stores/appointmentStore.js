import { makeAutoObservable, runInAction } from "mobx";
import instance from "./instance";

class AppointmentStore {
  appointments = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchAppointments = async () => {
    try {
      // runInAction(() => {
      const response = await instance.get("/appointments");
      this.appointments = response.data;
      runInAction(() => {
        this.loading = false;
      }); //   });
    } catch (error) {
      console.log("fetching problem", error);
    }
  };
  getAppointmentById = (appointmentId) => {
    runInAction(() => {
      this.appointments.find((appointment) => appointment.id === appointmentId);
    });
  };
  creatAppointment = async (newItem) => {
    try {
      const res = await instance.post("/appointments", newItem);
      runInAction(() => {
        this.appointments.push(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteAppointment = async (appointmentId) => {
    try {
      await instance.delete(`/appointments/${appointmentId}`);
      runInAction(() => {
        this.appointments = this.appointments.filter(
          (appointment) => appointment.id !== appointmentId
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
}
const appointmentStore = new AppointmentStore();
appointmentStore.fetchAppointments();
export default appointmentStore;
