import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type RootState } from "../../store";

export interface PopupConfig {
  isVisible: boolean;
  title: string;
  message?: string;
  confirmText?: string;
  confirmCallback?: () => void;
}

interface PopupConfigState {
  popupConfig: PopupConfig;
}
const initialState: PopupConfigState = {
  popupConfig: { title: "", isVisible: false },
};

export const popupSlice = createSlice({
  name: "popUp",
  initialState,
  reducers: {
    setPopupConfig: (
      state: PopupConfigState,
      action: PayloadAction<PopupConfig>
    ) => {
      state.popupConfig = action.payload;
    },
    closePopup: (state: PopupConfigState) => {
      state.popupConfig.isVisible = false;
      state.popupConfig.confirmCallback = undefined;
    },
  },
});
// Export popup actions
export const { setPopupConfig, closePopup } = popupSlice.actions;

// Export popup state selector
export const selectPopupConfig = (state: RootState): PopupConfig =>
  state.popup.popupConfig;

export default popupSlice;
