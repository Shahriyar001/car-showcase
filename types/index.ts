import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handeClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchMenufacturerProps {
  menufacturer: string;
  setMenufacturer: (menufacturer: string) => void;
}
