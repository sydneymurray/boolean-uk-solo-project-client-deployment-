import create from "zustand"
import {accountsURL, transactionsURL, customerURL} from "../components/data"

const useStore = create((set, get)=>({
  loggedInCustomer: null,
  setLoggedInCustomer: customer => set(state => ({ loggedInCustomer: customer })),
  modal: "",
  modalData: {},
  setModal: (modalName, modalData) => {
    set((store) => ({
      modal: modalName,
      modalData: modalData,
    }));
  }
}))
export default useStore

