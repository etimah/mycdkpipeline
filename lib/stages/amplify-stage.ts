import { CfnOutput, cfnTagToCloudFormation, Construct, Stage, StageProps } from '@aws-cdk/core';
// IMPORT AMPLIFY EXPORTED BACKEND HERE
import { AmplifyExportedBackend } from '@aws-amplify/cdk-exported-backend';
import { MyAmplifyStack } from '@aws-amplify/amplify-cli';
import * as path from 'path'
import * as cdk from '@aws-cdk/core'

export class AmplifyStage extends Stage {
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new MyAmplifyStack(this, 'AmplifyStack', {
  env: {
    account: "746119014624",
    region: "us-west-2",
  }
});
    
    // ADD AMPLIFY EXPORTED BACKEND STACK HERE
     const amplifyStack = new AmplifyExportedBackend(this, "amplifyexportedbackend", {
      path: path.resolve(__dirname, '..', 'amplify-export-mytodoapp'),
      amplifyEnvironment: cdk.Stack.of(this).region + cdk.Stack.of(this).account
     // amplifyEnvironment: "dev"
    })
  }
}
