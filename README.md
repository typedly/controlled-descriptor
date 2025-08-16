
<a href="https://www.typescriptlang.org/">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=400&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    width="20%"
    title="@typedly/controlled-descriptor - A TypeScript type definitions package for controlled property descriptor."
  />
</a>

## typedly/controlled-descriptor

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

A **TypeScript** type definitions package for **controlled property descriptor**.

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - [Interfaces](#interfaces)
    - `ControlledPropertyDescriptor`
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)
- [Related packages](#related-packages)

## Installation

### 1. Install peer dependencies

```bash
npm install @typedly/controller @typedly/descriptor --save-peer
```

### 2. Install the package

```bash
npm install @typedly/controlled-descriptor --save-peer
```

## Api

```typescript
import {
  // Interface.
  ControlledPropertyDescriptor
} from '@typedly/controlled-descriptor';
```

## Interfaces

### `ControlledPropertyDescriptor`

```typescript
import { ControlledPropertyDescriptor } from '@typedly/controlled-descriptor';
```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)
- [GitHub](https://github.com/sponsors/angular-package/sponsorships?sponsor=sciborrudnicki&tier_id=83618)
- [DonorBox](https://donorbox.org/become-a-sponsor-to-the-angular-package?default_interval=o)
- [Patreon](https://www.patreon.com/checkout/angularpackage?rid=0&fan_landing=true&view_as=public)

or via Trust Wallet

- [XLM](https://link.trustwallet.com/send?coin=148&address=GAFFFB7H3LG42O6JA63FJDRK4PP4JCNEOPHLGLLFH625X2KFYQ4UYVM4)
- [USDT (BEP20)](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94&token_id=0x55d398326f99059fF775485246999027B3197955)
- [ETH](https://link.trustwallet.com/send?coin=60&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [BTC](https://link.trustwallet.com/send?coin=0&address=bc1qnf709336tfl57ta5mfkf4t9fndhx7agxvv9svn)
- [BNB](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

## Related packages

- **[@typescript-package/chain-descriptor](https://github.com/typescript-package/chain-descriptor)**: A **TypeScript** library for chain property descriptor.
- **[@typescript-package/controlled-descriptor](https://github.com/typescript-package/controlled-descriptor)**: A **TypeScript** library for controlled property descriptor.
- **[@typescript-package/controller](https://github.com/typescript-package/controller)**: A **TypeScript** package with for various kind of controllers.
- **[@typescript-package/descriptor-chain](https://github.com/typescript-package/descriptor-chain)**: A **TypeScript** library for property descriptor chain.
- **[@typescript-package/descriptor](https://github.com/typescript-package/descriptor)**: A **TypeScript** library for property descriptor.
- **[@typescript-package/descriptors](https://github.com/typescript-package/descriptors)**: A **TypeScript** library for property descriptors.
- **[@typescript-package/property](https://github.com/typescript-package/property)**: A **TypeScript** package with features to handle object properties.
- **[@typescript-package/wrap-descriptor](https://github.com/typescript-package/wrap-descriptor)**: A **TypeScript** package for wrapping object descriptors.
- **[@typescript-package/wrap-property](https://github.com/typescript-package/wrap-property)**: A **TypeScript** package for wrapping object properties.
- **[@typescript-package/wrapped-descriptor](https://github.com/typescript-package/wrapped-descriptor)**: A lightweight **TypeScript** library for wrapped property descriptor.
- **[@xtypescript/property](https://github.com/xtypescript/property)** - A comprehensive, reactive **TypeScript** library for precise and extensible object property control.

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/controlled-descriptor
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/controlled-descriptor
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/controlled-descriptor
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/controlled-descriptor
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/controlled-descriptor/issues
  [typedly-forks]: https://github.com/typedly/controlled-descriptor/network
  [typedly-license]: https://github.com/typedly/controlled-descriptor/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/controlled-descriptor/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fcontrolled-descriptor.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Fcontrolled-descriptor

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
