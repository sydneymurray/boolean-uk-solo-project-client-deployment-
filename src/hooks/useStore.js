import create from "zustand"

const useStore = create((set, get)=>({
  loggedInCustomer: null,
  setLoggedInCustomer: customer => set(state => ({loggedInCustomer: customer})),
  modal: "",
  modalData: {},
  setModal: (modalName, modalData) => {
    set(store => ({modal: modalName, modalData: modalData}))},
  accountStatement: null,
  setAccountStatement: statement => set(state => ({accountStatement: statement})),
}))
export default useStore

