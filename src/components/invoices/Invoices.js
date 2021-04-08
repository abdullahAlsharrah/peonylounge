import { observer } from "mobx-react";
import React from "react";
// import costStore from "../../stores/costStore";
// import employeeStore from "../../stores/employeeStore";
import invoiceStore from "../../stores/invoiceStore";
import InvoiceItem from "./InvoiceItem";
import {
  InvoiceStyleView,
  InvoiceStyleContent,
  InvoiceTotal,
} from "../../styles";

const Invoices = ({ month }) => {
  const d = new Date();

  const list =
    // month;
    // ? invoiceStore.invoices.filter(
    //     (invoice) =>
    //       (new Date(invoice.createdAt).getMonth() === month - 1) &
    //       (new Date(invoice.createdAt).getFullYear() === d.getFullYear())
    //   )
    // :
    invoiceStore.invoices.filter(
      (invoice) =>
        (new Date(invoice.createdAt).getDate() === d.getDate()) &
        (new Date(invoice.createdAt).getFullYear() === d.getFullYear())
    );
  const invoicesList = list.map((invoice) => (
    <InvoiceItem invoice={invoice} key={invoice.id} />
  ));
  const totalInvoicesPrice = () => {
    let total = 0;
    list.forEach((invoice) => {
      total += invoice.price;
    });

    return total;
  };
  // const totalCost = () => {
  //   let total = 0;
  //   costStore.costs
  //     // .filter(
  //     //   (cost) =>

  //     //     (new Date(cost.createdAt).getFullYear() === new Date().getFullYear())
  //     // )
  //     .forEach((cost) => (total += cost.price));
  //   employeeStore.employees
  //     // .filter(
  //     //   (employee) => new Date(employee.createdAt).getMonth() <= month - 1
  //     // )
  //     .forEach((employee) => (total += employee.salary));
  //   return total;
  // };

  return (
    <InvoiceStyleContent>
      <InvoiceTotal>Today's Incomes: {totalInvoicesPrice()} KD</InvoiceTotal>

      <InvoiceStyleView>
        <p>No.</p>
        <p>Phone No.</p>

        <p>Serv : Prod</p>

        <p> Total KD</p>
      </InvoiceStyleView>
      {invoicesList}
    </InvoiceStyleContent>
  );
};

export default observer(Invoices);
