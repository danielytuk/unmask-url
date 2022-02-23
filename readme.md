
# unmask-url

Deshorten a short link, and reveal where it's truly going.

## Installation

```js
# using npm
npm install unmask-url

# using yarn
yarn add unmask-url
```

## Usage

```js
# using require
const unmask = require('unmask-url');

# using import
import unmask from 'unmask-url';
```

## Example

### Using promises:

```js
unmask('dis.gd/report').then(data => console.log(data))
```

### Using async/await:

```js
const revealURL = async function () {
  const data = await unmask('dis.gd/report')
  console.log(data);
};

revealURL();
```

## Response
```js
{
  url: 'dis.gd/report',
  result: 'https://support.discord.com/hc/en-us/requests/new?ticket_form_id=360000029731',
  journey: 'http://dis.gd/report >> http://support.discord.com/hc/en-us/requests/new?ticket_form_id=360000029731'
}
```

# Support
<p><a href="https://www.buymeacoffee.com/danielytuk"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="buy-me-a-coffee" /></a><a href="https://www.paypal.me/dytukmedia"> <img align="left" src="https://i.ibb.co/fdpj8p8/paypal-donate-button.png" height="50" width="210" alt="paypal" /></a><a href="https://www.patreon.com/danielytuk"> <img align="left" src="https://i.ibb.co/hZVcbq9/patreon-button.png" height="50" width="210" alt="patreon" /></a></p>