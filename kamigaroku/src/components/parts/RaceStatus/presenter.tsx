import { TableCell, TableRow } from "@mui/material";
import type { NextPage } from "next";

type Props = {
  label: string;
  data: number[];
};

const Presenter: NextPage<Props> = (props: Props) => {
  let menu: JSX.Element[] = [];

  for (let i = 0; i < props.data.length; ++i) {
    const d: number = props.data[i];
    menu.push(
      <TableCell key={props.label + i.toString()} align="right">
        {d}
      </TableCell>
    );
  }

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell key={props.label} component="th" scope="row">
          {props.label}
        </TableCell>
        {menu}
      </TableRow>
    </>
  );
};

export default Presenter;
