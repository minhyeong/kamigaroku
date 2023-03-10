import { ChangeEvent, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";

type Props = {};

const ImageAcquisition: NextPage<Props> = () => {
  const initImg: string = "/myface.png";
  const [img, setImg] = useState<any>(initImg); // null 処理警告対策のため any

  const onChangeInputFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setImg(e.target!.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <label htmlFor="chara-img">
        <input
          accept="image/*"
          id="chara-img"
          type="file"
          onChange={(e) => onChangeInputFile(e)}
          hidden
        />
        <IconButton color="primary" component="span">
          <Image src={img} alt="キャラクター画像" width="200" height="225" />
        </IconButton>
      </label>
    </>
  );
};

export default ImageAcquisition;
