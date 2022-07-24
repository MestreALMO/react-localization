import {
  FormControl,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useCtxLanguageSelected } from "../../context/ctxLanguageSelected";

export const LanguageSelection = () => {
  const [ctxLanguageSelected, setCtxLanguageSelected] =
    useCtxLanguageSelected();

  return (
    <>
      <Typography>{ctxLanguageSelected}</Typography>

      {/* MUI */}
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Language</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={ctxLanguageSelected}
          label="Language"
          onChange={(e) => setCtxLanguageSelected(e.target.value)}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"pt"}>Português</MenuItem>
          <MenuItem value={"fr"}>Français</MenuItem>
        </Select>
      </FormControl>

      {/* HTML */}
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
