import { createContext, useContext, useEffect, useState } from "react";

const CtxLanguageSelectedContext = createContext({});

export default function CtxLanguageSelectedProvider({ children }: any) {
  const [ctxLanguageSelected, setCtxLanguageSelected] = useState("en");

  useEffect(() => {
    setCtxLanguageSelected(window.navigator.language.slice(0, 2));
  }, []);

  return (
    <CtxLanguageSelectedContext.Provider
      value={{ ctxLanguageSelected, setCtxLanguageSelected }}
    >
      {children}
    </CtxLanguageSelectedContext.Provider>
  );
}

export const useCtxLanguageSelected = () => {
  const context = useContext(CtxLanguageSelectedContext);
  const { ctxLanguageSelected, setCtxLanguageSelected }: any = context;
  return [ctxLanguageSelected, setCtxLanguageSelected];
};
