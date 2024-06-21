const { useState, useEffect } = require("react");

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    addEventListener("offline", () => setOnlineStatus(false));
    addEventListener("online", () => setOnlineStatus(true));
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
