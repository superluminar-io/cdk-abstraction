import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class ConstructTwo extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new Bucket(this, "BucketTwo");
  }
}
