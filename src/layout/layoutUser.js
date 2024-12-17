import React from "react";
import Header from "./header";

function LayoutUser({ children }) {
  return (
    <div>
      <Header />
      <main className="max-w-800px">
        {children}
      </main>
    </div>
  );
}

export default LayoutUser;
