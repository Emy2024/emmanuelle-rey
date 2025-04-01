// Hook personnalisé pour remettre le scroll à 0 pour chaque page.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop(){

  const { pathname } = useLocation(); // pathname est une propriété de useLocation()

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, [pathname]);

  return null;

}
export default ScrollToTop;
