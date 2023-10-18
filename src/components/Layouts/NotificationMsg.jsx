import React from "react";

const NotificationMsg = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-[50%] mx-auto rounded shadow-lg mt-16 p-3 bg-blue-400 mb-4">
      <h3 className="text-white font-bold font-inter">{children}</h3>
    </div>
  );
};

export default NotificationMsg;
