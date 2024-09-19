import { ModalState } from "@/store/types";

export default{
  updateModalState(state: ModalState , payload: {status: boolean, type: string}) {
    state.showModal = payload.status;
    state.modalType = payload.type;
  },
};

