// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "drqegqvhs7avsvr23pjl0tabo",     // CognitoClientID
  "api_base_url": "https://z2kk2u3r2d.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-omasecond.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1t9r5rukcxwnx.amplifyapp.com"                                      // AmplifyURL
};

export default config;
