// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "38gns4but5t18iqtamo94lfg2i",     // CognitoClientID
  "api_base_url": "https://lmgplgz8v9.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-omasecond.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d2ovrfx9go9jes.amplifyapp.com"                                      // AmplifyURL
};

export default config;
