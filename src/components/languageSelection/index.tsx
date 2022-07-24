import { Typography } from "@mui/material";
import { useCtxLanguageSelected } from "../../context/ctxLanguageSelected";

export const LanguageSelection = () => {
  const [ctxLanguageSelected, setCtxLanguageSelected] =
    useCtxLanguageSelected();

  return (
    <>
      <Typography>{ctxLanguageSelected}</Typography>

      <select
        value={ctxLanguageSelected}
        onChange={(e) => setCtxLanguageSelected(e.target.value)}
      >
        <option value="en">En- English</option>
        <option value="pt">Pt- Potuguês</option>
        <option value="fr">Fr- Français</option>
      </select>
    </>
  );
};
