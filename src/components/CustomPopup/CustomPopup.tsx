import { useAppDispatch } from "store/hooks";
import { closePopup } from "store/slices/popup/popupSlice";
import { StyledPopUpContainer } from "./CustomPopup.styles";
import { PopupProps } from "./CustomPopup.type";

const CustomPopup = ({ popupConfig }: PopupProps) => {
  const dispatch = useAppDispatch();

  const onConfirmButtonPress = (): void => {
    dispatch(closePopup());
    popupConfig.confirmCallback?.();
  };

  return (
    <StyledPopUpContainer>
      <div className="popup-body">
        <h1>{popupConfig.title}</h1>
        <h3>{popupConfig.message}</h3>
        <button onClick={onConfirmButtonPress}>
          {popupConfig.confirmText}
        </button>
      </div>
    </StyledPopUpContainer>
  );
};

export default CustomPopup;
