import { useTranslation } from "../../hooks/useTranslation";

export const TranslateThis = () => {
  const translation = useTranslation();

  return (
    <>
      <div>{translation.homePara}</div>hey
    </>
  );
};
