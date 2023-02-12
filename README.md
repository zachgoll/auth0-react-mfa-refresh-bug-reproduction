This repo is a reproduction of the MFA + refresh tokens error for `auth0-react` library.

## Reproduction steps

### Create the tenant

#### With deploy client

1. Create new tenant
2. Create M2M application
3. `cp auth0/config.example.json auth0/config.json` and add M2M app credentials to it
4. Run `yarn auth0:import` to re-create tenant from this repo

#### Manual

1. Create SPA app
2. Enable OTP MFA in Security settings
3. Create custom API, enable refresh tokens, set lifetime of token to short duration

### Start apps

1. `yarn install`
2. `yarn dev` to start Next app
3. `yarn dev:server` to start Express API

### Trigger error

1. Sign up to app and login
2. With network tab open, click "Make API Call" button in app (this should work fine since MFA isn't enabled yet)
3. Go to Auth0 dashboard and update the user's metadata to `{ "useMFA": true }`
4. Logout user, log back in, setup MFA
5. Wait 10 seconds for token to expire (see `tenant.yaml`)
6. Click "Make API Call" (this should throw a `Error: MFA Required` error)
