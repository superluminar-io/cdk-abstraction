import { Stack, StackProps } from "aws-cdk-lib";
import { CustomApp } from "../base";

import { WrapperBase } from ".";

type SingleProps = WrapperBase & StackProps;

export class Single extends Stack {
  constructor(scope: CustomApp, id: string, props: SingleProps) {
    super(scope, id, props);

    new props.obj(this, props.obj.name);
  }
}
