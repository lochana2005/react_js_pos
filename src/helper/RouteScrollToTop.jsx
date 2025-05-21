import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const RouteScrollToTop = () => {
  const pathname = useLocation();

  useEffect(() => {
    console.warn = () => {};

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default RouteScrollToTop;
