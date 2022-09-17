import { IVueModel } from "./IVueModel";

export interface IVueComponent extends IVueModel {
  template: string;
  busEvents?: Record<string, Function> | undefined;
  //props: Array<string> | Record<string, PropOptions>; 
}