import { type FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { closePopup } from "store/slices/popup/popupSlice";
import { store } from "store/store";
import { ERRORS } from "./constants";
import { showPopup } from "./helpers";
import { httpStatusCodes } from "./httpRequestCodes";

/**
 * check if error is form rtk query
 * @param error - Error to check
 * @returns {true} - Returns is rtk query error type
 */
export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error;
}

export const isNetworkError = (error: any): boolean => {
  return (
    "error" in error &&
    error?.error?.toString() === "TypeError: Network request failed"
  );
};

/**
 * Shows an error popup
 * @param error - Error to handle it can be an error (thrown by WS) or error thrown in handle logic
 * @param confirmCallback - Callback to execute when pressing popup button (It can be a side logic to error)
 */
export const handleErrorPopUp = (
  error: Error | unknown,
  confirmCallback?: (() => void) | (() => Promise<void>),
  confirmText: string = ERRORS.confirmText
): void => {
  if (isFetchBaseQueryError(error)) {
    if (isNetworkError(error)) {
      showPopup(store.dispatch, {
        title: ERRORS.error,
        message: ERRORS.network,
        confirmCallback: () => {
          store.dispatch(closePopup());
        },
        confirmText: ERRORS.confirmText,
      });
    } else if (error?.status) {
      if (error.status === httpStatusCodes.UNAUTHORIZED) {
        showPopup(store.dispatch, {
          title: ERRORS.error,
          message: ERRORS.unauthorized,
          confirmCallback: () => {
            store.dispatch(closePopup());
          },
          confirmText: ERRORS.confirmText,
        });
      } else {
        showPopup(store.dispatch, {
          title: ERRORS.error,
          message: ERRORS.network_error_msg,
          confirmCallback,
          confirmText,
        });
      }
    } else {
      showPopup(store.dispatch, {
        title: ERRORS.error,
        message: ERRORS.server,
        confirmCallback,
        confirmText,
      });
    }
  } else {
    showPopup(store.dispatch, {
      title: ERRORS.error,
      message: ERRORS.unknown_error,
      confirmCallback,
      confirmText,
    });
  }
};
