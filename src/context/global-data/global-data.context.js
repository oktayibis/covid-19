import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const _SUMMARY_DATA_API = "https://api.covid19api.com/summary";

export const GlobalDataContext = createContext();

// Context Provider Component
export const GlobalDataProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    data: {},
    countries: [],
    isLoaded: false,
    date: "",
    time: "",
  });

  useEffect(() => {
    axios.get(_SUMMARY_DATA_API).then((response) => {
      const receivedData = response.data;
      setGlobalData({
        data: receivedData.Global,
        countries: receivedData.Countries,
        isLoaded: true,
        date: new Date(receivedData.Date).toDateString(),
        time: new Date(receivedData.Date).toTimeString(),
      });
    });
  }, [globalData]);
  return (
    <GlobalDataContext.Provider value={globalData}>
      {children}
    </GlobalDataContext.Provider>
  );
};
