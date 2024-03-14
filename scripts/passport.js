window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: '2QgyEYq8qD2TUJ01RshDIeQQJxNzATrS',
    redirectUri: 'https://koi-daring-guinea.ngrok-free.app',
    logoutRedirectUri: 'https://koi-daring-guinea.ngrok-free.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

