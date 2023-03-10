import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import type { NextPage } from "next";
import { TextField } from "@mui/material";

type Props = {
  label: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const Presenter: NextPage<Props> = (props: Props) => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    props.setValue(value);
  };

  return (
    <>
      <TextField
        id="outlined-multiline-flexible"
        label={props.label}
        multiline
        maxRows={4}
        value={value}
        onChange={(e) => onChange(e)}
        size="small"
      />
    </>
  );
};

export default Presenter;
