 // Don't commit this file to your public repos. This config is for first-run
    exports.creds = {
    mongoose_auth_local: 'mongodb://localhost/tasklist', // Your mongo auth uri goes here
    audience: 'https://skwantoso.com/webapp-nodejs', // the Audience is the App URL when you registered the application.
    identityMetadata: 'https://login.microsoftonline.com/common/.well-known/openid-configuration' // Replace the text after p= with your specific policy.
  };
