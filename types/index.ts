import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handeClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
