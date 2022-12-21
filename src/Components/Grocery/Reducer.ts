export interface State {
  items: string[];
  isEdit: boolean;
  editId?: number;
}

export interface ModalState {
  isModal: boolean;
  modalText: string;
  color: "red" | "green";
}

export type Actions =
  | { type: "add"; text: string }
  | { type: "remove"; text: string }
  | { type: "edit mode"; bool: boolean; id: number }
  | { type: "edit"; text: string }
  | { type: "clear" };

export type ModalAction =
  | { type: "remove" }
  | { type: "edit" }
  | { type: "add" }
  | { type: "open" }
  | { type: "close" }
  | { type: "clear" };

export const modalReducer = (
  state: ModalState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case "remove":
      return { ...state, modalText: "Delete Items", color: "red" };
    case "edit":
      return { ...state, modalText: "Value Changed", color: "green" };
    case "add":
      return { ...state, modalText: "Add Item", color: "green" };
    case "clear":
      return { ...state, modalText: "Empty List", color: "red" };
    case "open":
      return { ...state, isModal: true };
    case "close":
      return { ...state, isModal: false };
  }
};

export const itemsReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "add":
      return { ...state, items: [...state.items, action.text] };
    case "remove":
      return {
        ...state,
        items: state.items.filter((text) => text !== action.text),
      };
    case "edit mode":
      return { ...state, isEdit: action.bool, editId: action.id };
    case "edit":
      if (state.editId !== undefined) {
        state.items[state.editId] = action.text;
      }
      return state;
    case "clear":
      return { ...state, items: [] };
    default:
      return state;
  }
};
