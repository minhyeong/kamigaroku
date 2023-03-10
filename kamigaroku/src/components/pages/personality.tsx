import { NextPage } from "next";
import { createTheme, Grid, ThemeProvider } from "@mui/material";
import { Theme } from "@emotion/react";

import GeneralSelect from "../parts/GeneralSelect";
import GeneralTextField from "../parts/GeneralTextField";
import RaceData from "../../storage/race.json";
import TitleData from "../../storage/title.json";
import GeneralImageUploader from "../parts/GeneralImageUploader";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  setCharName: Dispatch<SetStateAction<string>>;
  setPlName: Dispatch<SetStateAction<string>>;
  setOcc: Dispatch<SetStateAction<string>>;
  setAffi: Dispatch<SetStateAction<string>>;
  setRace: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<string>>;
  setMainTitle: Dispatch<SetStateAction<string>>;
  setSubTitle: Dispatch<SetStateAction<string>>;
};

export const Personality: NextPage<Props> = (props: Props) => {
  const sx: any = { m: 1, width: 200 }; // 後で型を合わせる
  const theme: Theme = createTheme({ typography: { fontSize: 12 } });
  const abilityType: { 戦士: string; 汎用: string; 魔法: string }[] = [
    { 戦士: "", 汎用: "", 魔法: "" },
  ];
  // Coincidence Data
  const [level, setLevel] = useState<string>("None");
  const [damyab, setAB] = useState<string>("None");
  const ab: { A: string; B: string }[] = [{ A: "", B: "" }];

  return (
    <>
      <Grid container>
        <ThemeProvider theme={theme}>
          <Grid>
            <Grid>
              <GeneralTextField
                label="世界干渉Lv"
                sx={sx}
                setValue={setLevel}
              />
              <GeneralTextField
                label="キャラクター名"
                sx={sx}
                setValue={props.setCharName}
              />
            </Grid>
            <Grid>
              <GeneralSelect
                label="種族"
                data={RaceData}
                sx={sx}
                setValue={props.setRace}
              />
              <GeneralTextField
                label="プレイヤー名"
                sx={sx}
                setValue={props.setPlName}
              />
            </Grid>
            <Grid>
              <GeneralSelect
                label="能力値タイプ"
                data={abilityType}
                sx={sx}
                setValue={props.setType}
              />
            </Grid>
            <Grid>
              <GeneralSelect
                label="メイン称号"
                data={TitleData}
                sx={sx}
                setValue={props.setMainTitle}
              />
              <GeneralSelect
                label="タイプ"
                data={ab}
                sx={sx}
                setValue={setAB}
              />
            </Grid>
            <Grid>
              <GeneralSelect
                label="サブ称号"
                data={TitleData}
                sx={sx}
                setValue={props.setSubTitle}
              />
              <GeneralSelect
                label="タイプ"
                data={ab}
                sx={sx}
                setValue={setAB}
              />
            </Grid>
            <Grid>
              <GeneralTextField label="所属" sx={sx} setValue={props.setAffi} />
              <GeneralTextField
                label="表の職業"
                sx={sx}
                setValue={props.setOcc}
              />
            </Grid>
          </Grid>
          <Grid>
            <GeneralImageUploader sx={{ m: 1, width: 220 }} />
          </Grid>
        </ThemeProvider>
      </Grid>
    </>
  );
};
