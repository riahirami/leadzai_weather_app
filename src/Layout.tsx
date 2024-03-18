import { CustomLoader } from "components/CustomLoader/CustomLoader";
import CustomPopup from "components/CustomPopup/CustomPopup";
import Overlay from "components/Overlay/Overlay";
import Homepage from "pages/Home";
import { useAppSelector } from "store/hooks";
import { SelectLoader } from "store/slices/loader/loaderSlice";
import { selectPopupConfig } from "store/slices/popup/popupSlice";

const Layout = (): JSX.Element => {
  const popupConfig = useAppSelector(selectPopupConfig);
  const loader = useAppSelector(SelectLoader);

  return (
    <div>
      {popupConfig.isVisible && <CustomPopup popupConfig={popupConfig} />}
      {loader.isVisible && (
        <>
          <Overlay />
          <CustomLoader />
        </>
      )}
      <Homepage />
    </div>
  );
};

export default Layout;
