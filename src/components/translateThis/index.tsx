import { useTranslation } from "../../customHooks/translation";

export const TranslateThis = () => {
  const translation = useTranslation();

  return (
    <>
      <div>{translation.homePara}</div>hey
    </>
  );
};
