import { App, Stack, StackProps } from "aws-cdk-lib";

export type ApplicationStackProps = StackProps;

export class ApplicationStack extends Stack {
  constructor(scope: App, id: string, props?: ApplicationStackProps) {
    super(scope, id, props);
  }
}
