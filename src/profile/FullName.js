import React from "react";

const FullName = () => {
  const name = "Hamza Zahmoul";
  return (
    <div>
      <h2
        style={{
          background: "turquoise",
          borderRadius: 20,
          textAlign: "center",
        }}
      >
        {name}
      </h2>
    </div>
  );
};
export default FullName;
