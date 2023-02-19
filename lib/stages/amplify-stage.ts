import { CfnOutput, cfnTagToCloudFormation, Construct, Stage, StageProps } from '@aws-cdk/core';
// IMPORT AMPLIFY EXPORTED BACKEND HERE
import { AmplifyExportedBackend } from '@aws-amplify/cdk-exported-backend';
import * as path from 'path'
import * as cdk from '@aws-cdk/core'

export class AmplifyStage extends Stage {
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);
    
const service = new MyAmplifyStack(this, 'AmplifyStack', {
  env: {
    account: "746119014624", // or for example: "172387324923"
    region: "us-west-2", // or "us-east-1"
  }
});

    // ADD AMPLIFY EXPORTED BACKEND STACK HERE
 //    const amplifyStack = new AmplifyExportedBackend(this, "amplifyexportedbackend", {
     // path: path.resolve(__dirname, '..', 'amplify-export-mytodoapp'),
    //  amplifyEnvironment: "dev"
   // })

    const amplifyBackend = new AmplifyExportedBackend(this, "amplifyExportedBackend", {
  amplifyEnvironment: cdk.Stack.of(this).region + cdk.Stack.of(this).account,
  path: path.resolve(__dirname, '..', 'amplify-export-mytodoapp')
})
  }
}
