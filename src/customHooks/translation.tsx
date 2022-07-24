//import React, { useState, useContext } from "react";
import LocalizedStrings from "react-localization";
import localization from "../localization";
import { useCtxLanguageSelected } from "../context/ctxLanguageSelected";

export const useTranslation = () => {
  const [ctxLanguageSelected, setCtxLanguageSelected] =
    useCtxLanguageSelected();
  let translation = new LocalizedStrings(localization);

  translation.setLanguage(ctxLanguageSelected);
  return translation;
};
