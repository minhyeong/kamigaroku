import { Dispatch, SetStateAction, useState } from "react";
import type { NextPage } from "next";
import {
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props = {
  label: string;
  data: any;
  setValue: Dispatch<SetStateAction<string>>;
};

const Presenter: NextPage<Props> = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const JsonData: any = props.data;
  const data: string[] = Object.keys(JsonData[0]);
  let menu: JSX.Element[] = [];

  for (let i = 0; i < data.length; ++i) {
    const d: string = data[i];
    if (JsonData[0][d] === "Index") {
      menu.push(<ListSubheader key={d}>{d}</ListSubheader>);
    } else {
      menu.push(
        <MenuItem key={d} value={d}>
          {d}
        </MenuItem>
      );
    }
  }

  const onChange = (e: SelectChangeEvent<string>) => {
    setValue(e.target.value);
    props.setValue(e.target.value);
  };

  return (
    <>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={props.label}
        onChange={(e) => onChange(e)}
      >
        {menu}
      </Select>
    </>
  );
};

export default Presenter;
