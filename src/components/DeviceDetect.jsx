import { useEffect } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  browserName,
  CustomView,
  useDeviceSelectors,
} from "react-device-detect";


const DeviceDetect = () => {
  const [selectors, data] = useDeviceSelectors(window.navigator.userAgent);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       console.log("Latitude is :", position.coords.latitude);
//       console.log("Longitude is :", position.coords.longitude);
//     });
//   }, [])

//   console.log(selectors);
  return (
    <>
      <div className="">
        <BrowserView>
          <h1>This is rendered only in browser</h1>
        </BrowserView>
        <MobileView>
          <h1>This is rendered only on mobile</h1>
        </MobileView>
        <CustomView condition={browserName === "Chrome"}>
          <div>...content</div>
        </CustomView>
      </div>
    </>
  );
};

export default DeviceDetect;
