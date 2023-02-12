function multifactorAuthentication(user, context, callback) {
  if (user.user_metadata && user.user_metadata.useMFA) {
    context.multifactor = {
      provider: "any",
      allowRememberBrowser: false,
    };
  }

  callback(null, user, context);
}
