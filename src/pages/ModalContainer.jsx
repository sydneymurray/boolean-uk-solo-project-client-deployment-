import useStore from "../hooks/useStore"
import React from "react"

import RegisterModal from "../components/RegisterModal"
import LoginModal from "../components/LoginModal"
import CustomerDetailsModal from "../components/CustomerDetailsModal"

const modals = {
  "": null,
  registerCustomer: RegisterModal,
  loginCustomer: LoginModal,
  customerDetails: CustomerDetailsModal
}

export function ModalContainer() {
  const modal = useStore((store) => store.modal);
  const Modal = modals[modal];

  if (!Modal) return null;

  return <Modal />;
}


