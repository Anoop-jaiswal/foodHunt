import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";

const useRestaurantsMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  fetchMenu = async () => {
    const menu = await fetch(RES_MENU_URL + resId);
    const jsonData = await menu.json();
    setResInfo(jsonData.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return resInfo;
};
export default useRestaurantsMenu;
