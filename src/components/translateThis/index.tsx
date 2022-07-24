import { useTranslation } from "../../customHooks/translation";

export const TranslateThis = () => {
  const translation = useTranslation();

  return (
    <>
      <div>{translation.aboutPara}</div>hey
    </>
  );
};
