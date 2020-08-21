import React from "react";
import ProfilPhoto from "./profile/ProfilPhoto";
import FullName from "./profile/FullName";
import Address from "./profile/Address";

const Main = () => {
  return (
    <div className="Main">
      <ProfilPhoto />
      <FullName />
      <Address />
    </div>
  );
};
export default Main;
