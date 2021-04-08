import React from "react";
import RecieptItem from "./RecieptItem";
import { observer } from "mobx-react";
// import Device from "react-native-divice-detection";
import invoiceStore from "../../stores/invoiceStore";
import {
  FlexContainer,
  OfferTitle,
  ReceiptContainer,
  RecieptPriceTitle,
  RecieptServiceTitle,
} from "../../styles";
const RecieptList = () => {
  const [cash, setCash] = React.useState();
  const handleCheckout = () => {
    invoiceStore.setPhoneNumber(phoneNumber);
    invoiceStore.checkout();
    setPhoneNumber();
    setCash();
  };

  const list =
    //  route
    //   ? [
    //       ...route.params.invoice.services.map((service) => service),
    //       ...route.params.invoice.packages.map((apackage) => apackage),
    //       ...route.params.invoice.offers.map((offer) => offer),
    //     ]
    //   :
    invoiceStore.items;
  const recieptServiceList = list
    // .map((item) => ({
    //   ...serviceStore.services.find((service) => service.id === item.serviceId),
    //   ...productStore.products.find((product) => product.id === item.productId),
    //   ...offerStore.offers.find((offer) => offer.id === item.offerId),
    //   ...apackageStore.apackages.find(
    //     (apackage) => apackage.id === item.apackageId
    //   ),
    // }))
    .map((item) => (
      <RecieptItem
        item={item}
        key={item.name}
        // route={route ? route : null}
      />
    ));
  const [phoneNumber, setPhoneNumber] = React.useState();

  return (
    <ReceiptContainer>
      <FlexContainer>
        <p>Phone Number:</p>

        <input
          maxLength={8}
          onChange={(phoneNumber) => setPhoneNumber(phoneNumber.target.value)}
        />
      </FlexContainer>
      <FlexContainer>
        <RecieptServiceTitle>Service</RecieptServiceTitle>
        <RecieptPriceTitle>Price KD</RecieptPriceTitle>
      </FlexContainer>

      <div>{recieptServiceList}</div>

      <div>
        <button
          disabled={invoiceStore.items.length === 0 ? true : false}
          color={"white"}
          onClick={handleCheckout}
        >
          <p>Total {invoiceStore.totalPrice} KD</p>
        </button>
      </div>
      {/* {route ? null : (
          <>
            <Icon
              name="close"
              style={{
                color: "tomato",
                position: "absolute",
                top: 3,
                right: 2,
              }}
              onPress={handleCancel}
            />
          </>
        )} */}
      <FlexContainer>
        <OfferTitle>{invoiceStore.totalPrice}</OfferTitle>

        <input onChange={(cash) => setCash(cash.target.value)} />
        <OfferTitle>
          {invoiceStore.totalPrice ? cash - invoiceStore.totalPrice : 0}
        </OfferTitle>
      </FlexContainer>
    </ReceiptContainer>
  );
};

export default observer(RecieptList);
// const styles = StyleSheet.create({
//   text1: {
//     textAlign: "right",
//     fontSize: 15,
//     fontWeight: "700",
//   },
//   text: {
//     borderRightWidth: 2,
//     textAlign: "center",
//     width: "50%",
//     fontSize: 25,
//     // borderRightColor: "black",
//   },
//   total: {
//     borderBottomWidth: 2,
//     flexDirection: "row",
//     // position: "absolute",
//     // bottom: 50,
//     // right: 5,
//     // borderTopWidth: 2,
//   },
//   title: {
//     borderBottomWidth: 1,
//     flexDirection: "row",
//     marginBottom: 10,
//     marginHorizontal: 20,
//   },

//   container: {
//     padding: 10,
//     paddingTop: 20,
//     backgroundColor: "white",
//     // borderColor: "gray",
//     // borderWidth: 2,
//     height: "100%",
//     marginVertical: 10,
//     marginHorizontal: 10,
//     shadowColor: "black",
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowOpacity: 0.8,
//     shadowRadius: 3.25,

//     elevation: 5,
//   },
//   view: {
//     backgroundColor: "transparent",
//   },
//   button: {
//     fontSize: 20,
//     position: "absolute",
//     bottom: 0,
//     // left: 1,
//     width: "107.5%",
//     backgroundColor: "#2a9df4",
//     alignContent: "center",
//     alignItems: "center",
//     justifyContent: "center",
//     height: 70,
//   },
//   button1: {
//     width: 150,
//     backgroundColor: "tomato",
//     borderWidth: 2,
//     borderColor: "black",
//     alignContent: "center",
//     alignItems: "center",
//     justifyContent: "center",
//     left: 15,
//     marginRight: 5,
//   },
//   checkoutText: {
//     fontSize: 20,
//     color: "tomato",
//   },
//   cancelText: {
//     fontSize: 20,
//     color: "white",
//   },
// });
