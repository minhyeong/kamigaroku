import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { NextPage } from "next";
import RaceStatusTable from "../parts/RaceStatus";
import RaceData from "../../storage/race.json";
import TitleData from "../../storage/title.json";

type Props = {
  race: string;
  type: string;
  mainTitle: string;
  level: number;
};

export const Status: NextPage<Props> = (props: Props) => {
  //#region 主能力の計算
  const GetRaceData = (data: any) => {
    if (props.race != "None" && props.type != "None") {
      const d: any = data[props.race][props.type];
      return [d.体, d.敏, d.知, d.幸, d.精];
    } else return [0, 0, 0, 0, 0];
  };

  const raceStatus: number[] = GetRaceData(RaceData[0]); // 後で型を作ること

  // 主能力値
  // ※初期値+1のやつと、成長分を加味すること。
  // ※判定のとして体力とかは別途計算
  const mainStatus: number[] = [
    raceStatus[0], // 体力
    raceStatus[1], // 敏捷
    raceStatus[2], // 知性
    raceStatus[3], // 精神
    raceStatus[4], // 幸運
    Math.ceil(raceStatus[0] / 2), // 物D
    Math.ceil(raceStatus[2] / 2), // 魔D
    raceStatus[1] + 5, // 行動値
    raceStatus[0] + raceStatus[4] + props.level * 3, // 生命力
  ];

  // 主能力値補正
  const equMainStatus: number[] = [0, 0, 0, 0, 0]; // 装備補正
  const talentMainStatus: number[] = [0, 0, 0, 0, 0]; // タレント補正

  // 判定としてのステータス
  let finalMainStatus: number[] = [];
  for (let i = 0; i < 5; ++i) {
    finalMainStatus.push(
      mainStatus[i] + equMainStatus[i] + talentMainStatus[i]
    );
  }

  //#endregion 主能力の計算

  /*********************************************************************/
  //#region 副能力の計算

  const GetTitleData = (data: any) => {
    if (props.mainTitle != "None") {
      const d: any = data[props.mainTitle];
      return [d.命, d.回, d.発, d.抵, d.看, d.物, d.魔, d.行, d.生];
    } else return [0, 0, 0, 0, 0, 0, 0, 0, 0];
  };

  // 副能力値補正
  const titleStatus: number[] = GetTitleData(TitleData[0]); // 後で型を作ること
  const equSubStatus: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 装備補正
  const talentSubStatus: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // タレント補正

  // 副能力最終
  let buttleStatus: number[] = [];

  for (let i = 0; i < 9; ++i) {
    buttleStatus.push(
      mainStatus[i] + titleStatus[i] + equSubStatus[i] + talentSubStatus[i]
    );
  }

  //#endregion 副能力の計算

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ width: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">主能力</TableCell>
              <TableCell align="right">体力</TableCell>
              <TableCell align="right">敏捷</TableCell>
              <TableCell align="right">知性</TableCell>
              <TableCell align="right">精神</TableCell>
              <TableCell align="right">幸運</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <RaceStatusTable label={""} data={finalMainStatus} />
            <RaceStatusTable label={"種族ﾀｲﾌﾟ"} data={raceStatus} />
            <RaceStatusTable label={"装備補正"} data={equMainStatus} />
            <RaceStatusTable label={"ﾀﾚﾝﾄ補正"} data={talentMainStatus} />
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">副能力</TableCell>
              <TableCell align="right">命中</TableCell>
              <TableCell align="right">回避</TableCell>
              <TableCell align="right">発動</TableCell>
              <TableCell align="right">抵抗</TableCell>
              <TableCell align="right">看破</TableCell>
              <TableCell align="right">物D</TableCell>
              <TableCell align="right">魔D</TableCell>
              <TableCell align="right">行動</TableCell>
              <TableCell align="right">生命</TableCell>
            </TableRow>
            <RaceStatusTable label={""} data={buttleStatus} />
            <RaceStatusTable label={"称号修正"} data={titleStatus} />
            <RaceStatusTable label={"装備補正"} data={equSubStatus} />
            <RaceStatusTable label={"ﾀﾚﾝﾄ補正"} data={talentSubStatus} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
