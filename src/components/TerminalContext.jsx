import React, { createContext, useContext, useState } from 'react';

const TerminalContext = createContext();

export const useTerminalContext = () => useContext(TerminalContext);

export const TerminalProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);

  return (
    <TerminalContext.Provider value={{ history, setHistory, historyIndex, setHistoryIndex }}>
      {children}
    </TerminalContext.Provider>
  );
};
