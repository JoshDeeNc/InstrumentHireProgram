// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "37fmd4oh562pm2rk024vopkmcl",     // CognitoClientID
  "api_base_url": "https://hhdzaovee7.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-oma.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d162saqkes3fhp.amplifyapp.com"                                      // AmplifyURL
};

export default config;
