import { NestedStack, NestedStackProps, Stack } from "aws-cdk-lib";
import { WrapperBase } from ".";

type NestedProps = WrapperBase & NestedStackProps;

export class Nested extends NestedStack {
  constructor(scope: Stack, id: string, props: NestedProps) {
    super(scope, id, props);

    new props.obj(this, props.obj.name);
  }
}
