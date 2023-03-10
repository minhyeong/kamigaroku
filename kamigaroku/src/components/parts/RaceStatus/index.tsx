import type { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import Presenter from "./presenter";

type Props = {
  label: string;
  data: number[];
};

const RaceStatusTable: NextPage<Props> = (props: Props) => {
  return (
    <>
      <Presenter label={props.label} data={props.data} />
    </>
  );
};

export default RaceStatusTable;
