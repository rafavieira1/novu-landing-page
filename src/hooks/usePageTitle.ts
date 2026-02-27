import { useEffect } from "react";

const APP_NAME = "Novu";

/**
 * Sets the document title to "{page} | Novu" whenever the page changes.
 */
const usePageTitle = (pageTitle: string) => {
  useEffect(() => {
    document.title = `${pageTitle} | ${APP_NAME}`;
    return () => {
      document.title = APP_NAME;
    };
  }, [pageTitle]);
};

export default usePageTitle;
