import { Theme } from "@emotion/react";
import { FormControl, SxProps } from "@mui/material";
import type { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import Presenter from "./presenter";

type Props = {
  label: string;
  data: any;
  sx: SxProps<Theme>;
  setValue: Dispatch<SetStateAction<string>>;
};

const GeneralSelect: NextPage<Props> = (props: Props) => {
  return (
    <>
      <FormControl size="small" sx={props.sx}>
        <Presenter
          label={props.label}
          data={props.data}
          setValue={props.setValue}
        />
      </FormControl>
    </>
  );
};

export default GeneralSelect;
