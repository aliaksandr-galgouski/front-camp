import { Url } from "url";

export interface News {
  id: number;

  title: string;
  date: string,

  imgPath?: string;
  shortLines: string;
  fullText: string;  
}