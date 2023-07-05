# stylelint-config-vaadin

> Stylelint shareable config for the Vaadin CSS style guide

## Installation

```
$ npm install --save-dev stylelint-config-vaadin
```

or

```
$ yarn add --dev stylelint-config-vaadin
```

## Usage

Once the `stylelint-config-vaadin` package is installed, you can use it by specifying `stylelint-config-vaadin` in the [`extends`](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#extends) section of your [stylelint configuration](http://stylelint.io/user-guide/configuration/).

```js
{
  "extends": "stylelint-config-vaadin",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

Apache License 2.0
