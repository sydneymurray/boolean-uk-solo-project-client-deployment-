import useStore from "../hooks/useStore"
import React from "react"

import RegisterModal from "../components/RegisterModal"
import LoginModal from "../components/LoginModal"
import CustomerDetailsModal from "../components/CustomerDetailsModal"
import PaymentModal from "../components/PaymentModal"
import PayInModal from "../components/PayInModal"
import LoanModal from "../components/LoanModal"

const modals = {
  "": null,
  registerCustomer: RegisterModal,
  loginCustomer: LoginModal,
  customerDetails: CustomerDetailsModal,
  payment: PaymentModal,
  payIn: PayInModal,
  loan: LoanModal,
}

export function ModalContainer() {
  const modal = useStore((store) => store.modal);
  const Modal = modals[modal];

  if (!Modal) return null;

  return <Modal />;
}


