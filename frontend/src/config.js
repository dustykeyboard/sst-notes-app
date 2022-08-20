const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51LXAksIoesmmH3uVTYcEg9fBLQt4gZtD8LwTZv452dip2IZwNVW4axildodUO6Hw2DGlRVz3WLqLHcEYTMjtrkbI0015JpQ92Y",
  SENTRY_DSN:
    "https://79837bc4f9ad4c59a4889854bd21ccae@o1368802.ingest.sentry.io/6671643",
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
