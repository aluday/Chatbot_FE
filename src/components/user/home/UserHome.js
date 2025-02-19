import React from "react";
import { Button, Input } from "../../common";
import ChatWidget from "../chat/ChatWidget"
import { Message } from "../../../assets/icons";

const UserHome = () => {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center border-2">
      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium 
                disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16
                bg-black
                hover:bg-gray-700 m-0 cursor-pointer 
                border-gray-200 bg-none p-0 normal-case leading-5 
                hover:text-gray-900"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
      >
        <Message />
      </button>

      <ChatWidget />
    </div>
  );
};

export default UserHome;
