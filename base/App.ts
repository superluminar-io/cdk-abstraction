import { App, Stack, StageSynthesisOptions } from "aws-cdk-lib";
import { Construct } from "constructs";
import { ApplicationStack } from "../stacks/Application";
import { Nested, Single } from "../wrapper";

export enum ConstructMode {
  Inline,
  Nested,
  Single,
}

export interface CustomAppProps {
  mode: ConstructMode;
  account: string;
  region: string;
}

export class CustomApp extends App {
  private constructs: Array<typeof Construct> = [];
  private main: Stack;
  private mode: ConstructMode;

  constructor({ account, mode, region }: CustomAppProps) {
    super({
      context: {
        account,
        region,
      },
    });

    this.mode = mode;
  }

  private get env() {
    return {
      account: this.node.tryGetContext("account") as string,
      region: this.node.tryGetContext("region") as string,
    };
  }

  private injectConstruct(obj: typeof Construct) {
    switch (this.mode) {
      case ConstructMode.Inline:
        new obj(this.main, obj.name);
        break;
      case ConstructMode.Nested:
        new Nested(this.main, obj.name, { obj });
        break;
      case ConstructMode.Single:
        new Single(this, `Application-${obj.name}`, { obj, env: this.env });
        break;
    }
  }

  public synth(options?: StageSynthesisOptions) {
    this.main = new ApplicationStack(this, "Application", {
      env: this.env,
    });

    this.constructs.forEach((obj) => {
      this.injectConstruct(obj);
    });

    return super.synth(options);
  }

  public addConstruct(obj: typeof Construct) {
    this.constructs.push(obj);
  }
}
