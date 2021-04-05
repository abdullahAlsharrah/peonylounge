import { observer } from "mobx-react";
import React from "react";
import serviceStore from "../../stores/serviceStore";
import { ServiceContainer } from "../../styles";
// import MenuItem from "../Admin/Menu/MenuItem";
import ServiceItem from "./ServiceItem";
// import services from "./services";
const Service = () => {
  // if (serviceStore.loading) return <Spinner />;
  // const list = handleopen
  //   ? serviceStore.services
  //   : serviceStore.services.filter((service) => service.category === category);
  const serviceList = serviceStore.services.map(
    (service) => (
      // !menu ? (
      <ServiceItem
        service={service}
        key={`s${service.id}`}
        // handleopen={handleopen}
      />
    )
    // ) : (
    //   <MenuItem item={service} key={`s${service.id}`} />
    // )
  );
  return <ServiceContainer>{serviceList}</ServiceContainer>;
};

export default observer(Service);
// const styles = StyleSheet.create({
//   box: {
//     flex: 1,
//     flexDirection: "row",
//     flexWrap: "wrap",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 10,
//     // marginLeft: 15,
//   },
// });
