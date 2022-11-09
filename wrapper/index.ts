import { Construct } from "constructs";

export interface WrapperBase {
  obj: typeof Construct;
}

export { Nested } from "./Nested";
export { Single } from "./Single";
