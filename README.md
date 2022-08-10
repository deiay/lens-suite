A react library built to empower web3 developers to onboard users and manage user data completely on chain.

Hosted at: https://lens-suite.vercel.app/

### Features

- Quickly setup an on chain user management system with a few lines of code
- Specify the fields that your application needs to function, and these fields will automatically be retrieved from the users Lens profile if present, or otherwise requested from the user and then written to their Lens profile

### Setup

1. Specify the fields needed for an application

```typescript
const PROFILE_CONFIG: ProfileConfig = {
  requiredFields: ["bio", "name"],
};
```

2. Hook up `wagmi`, `rainbowkit`, and `profile` providers

```
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
          <ProfileProvider config={PROFILE_CONFIG}>
            <Header />
            <Component {...pageProps} />
          </ProfileProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
```

3. Access profile data

```
const MyComponent = () => {
  const { profile } = useProfile()

  return <ProfileCard name={profile.name} {...profile} />
}
```

### Implementation Details

1. When a user connects their wallet, the `ProfileProvider` queries lens for a profile associated with the user address
2. a) If a profile exists, and it includes all the metadata necessary for the application, the provider will render the resulting app, with the user profile data in context
3. b) If a profile exists, but it is missing some of the metadata necessary for the application, the provider will render a modal asking the user for the remaining information. It will then write that information to their lens profile
4. c) If a profile doesn't exist, it will prompt the user to enter a handle. It will create a new lens profile for the user with the handle provided
5. This process is run every time a user connects, so it's easy to require additional fields in the future

## Development

Create a file at the root level called `.env.local`. Add the following contents

```
NEXT_PUBLIC_LENS_API_URL=https://api-mumbai.lens.dev
```

Run the development server:

```bash
yarn
yarn dev
```
