import React, { useState } from "react";
import Header from '../components/Header';
import PDFViewer from '../components/PDFViewer';

const Home: React.FC = () => {

  return (
    <>
      <Header />
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="w-1/5 h-full bg-black border-r p-4 flex flex-col shadow-md">
          <div className="flex-1 overflow-y-auto space-y-3">
            <div className="bg-gray-background-dark p-2 rounded-lg self-start max-w-xs cursor-pointer">
              <label className="text-white">Option one</label>
            </div>
            <div className="bg-gray-background-dark p-2 rounded-lg self-end max-w-xs cursor-pointer">
              <label className="text-white">Option two</label>
            </div>
            <div className="bg-gray-background-dark p-2 rounded-lg self-start max-w-xs cursor-pointer">
              <label className="text-white">Option three</label>
            </div>
          </div>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        <div className="w-4/5 h-full">
          <PDFViewer />
        </div>
      </div>
    </>
  );
};

export default Home;
