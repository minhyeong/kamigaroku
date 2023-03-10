import { FormControl, SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import type { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import Presenter from "./presenter";

type Props = {
  label: string;
  sx: SxProps<Theme>;
  setValue: Dispatch<SetStateAction<string>>;
};

const GeneralTextField: NextPage<Props> = (props: Props) => {
  return (
    <>
      <FormControl size="small" sx={props.sx}>
        <Presenter label={props.label} setValue={props.setValue} />
      </FormControl>
    </>
  );
};

export default GeneralTextField;
