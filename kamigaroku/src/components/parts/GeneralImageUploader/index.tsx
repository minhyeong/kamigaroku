import { FormControl, SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import { NextPage } from "next";
import ImageAcquisition from "./presenter";

type Props = { sx: SxProps<Theme> };

const GeneralImageUploader: NextPage<Props> = (props: Props) => {
  return (
    <>
      <FormControl size="small" sx={props.sx}>
        <ImageAcquisition />
      </FormControl>
    </>
  );
};

export default GeneralImageUploader;
