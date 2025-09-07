import React, { useState } from "react";
import Header from '../components/Header';
import PDFViewer from '../components/PDFViewer';

const Home: React.FC = () => {

  // This can be populated from API, just ChatGPT, 
  // signifies history of searches
  const optionsDict = {
    opt1: "Dynamic option 1",
    opt2: "Dynamic option 2",
    opt3: "Dynamic option 3",
    opt4: "Dynamic option 4",
    opt5: "Dynamic option 5",
    opt6: "Dynamic option 6",
    opt7: "Dynamic option 7",
    opt8: "Dynamic option 8",
    opt9: "Dynamic option 9",
    opt10: "Dynamic option 10",
  };

  return (
    <>
      <Header />
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="w-1/5 h-full bg-black border-r p-4 flex flex-col shadow-md">
          <div className="flex-1 overflow-y-auto space-y-6">

            {/* Static Options available for user */}
            <div className="space-y-3">
              <div className="bg-gray-background-dark p-2 rounded-lg max-w-xs cursor-pointer">
                <label className="text-white">Option 1</label>
              </div>
              <div className="bg-gray-background-dark p-2 rounded-lg max-w-xs cursor-pointer">
                <label className="text-white">Option 2</label>
              </div>
              <div className="bg-gray-background-dark p-2 rounded-lg max-w-xs cursor-pointer">
                <label className="text-white">Option 3</label>
              </div>
            </div>

            <div className="space-y-3 mt-10 mb-10">
              <div className="bg-gray-background-dark p-2 rounded-lg max-w-xs cursor-pointer">
                <label className="text-white">Option 4</label>
              </div>
              <div className="bg-gray-background-dark p-2 rounded-lg max-w-xs cursor-pointer">
                <label className="text-white">Option 5</label>
              </div>
            </div>

            <div className="space-y-3 mt-10 mb-10">
              {Object.entries(optionsDict).map(([key, value], index) => (
                <div
                  key={key}
                  className="bg-gray-background-dark p-2 rounded-lg max-w-xs cursor-pointer"
                >
                  <label className="text-white">{value}</label>
                </div>
              ))}
            </div>
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
