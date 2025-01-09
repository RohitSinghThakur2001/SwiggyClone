import React, { useContext } from "react";
import UserContext from "../utilities/UserContext";
function Footer() {
  let { user, setUser } = useContext(UserContext);

  return (
    <div className="flex justify-center items-center p-4 border border-zinc-500">
      All Rights are reserved to {user.username}
    </div>
  );
}

export default Footer;
