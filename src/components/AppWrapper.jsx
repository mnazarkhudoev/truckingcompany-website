import AOS from "aos";
import { useEffect } from "react";
function AppWrapper({
  children
}) {
  useEffect(() => {
    AOS.init();
  });
  return <>{children}</>;
}
export default AppWrapper;