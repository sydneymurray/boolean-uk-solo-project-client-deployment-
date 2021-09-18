import useStore from "../hooks/useStore";
import React from "react";

import RegisterModal from "../components/RegisterModal";

const modals = {
  "": null,
  registerCustomer: RegisterModal,
}

export function ModalContainer() {
  const modal = useStore((store) => store.modal);
  const Modal = modals[modal];

  if (!Modal) return null;

  return <Modal />;
}

/*

import { useStore } from "../Hooks/Store";
import React from "react";

import SignUpModal from "../components/SignUpModal";

const modals = {
  "": null,
  newUser: SignUpModal,
}

export function ModalContainer() {
  const modal = useStore((store) => store.modal);
  const Modal = modals[modal];

  if (!Modal) return null;

  return <Modal />;
}

*/
