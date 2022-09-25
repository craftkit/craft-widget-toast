# Toast for Craft-UIKit

Toast is a Craft-UIKit component that provides a simple way to display a message to the user. It is a non-intrusive message that appears on the screen for a short period of time and then disappears.

## Installation

```bash
npm install @craftkit/craft-widget-toast
```

## Usage

```js
import * as Craft from "@craftkit/craft-uikit";
import * as Toast from "@craftkit/craft-widget-toast";
Craft.usePackage(Toast);

class Page extends Craft.UI.View {
  constructor(options) {
    this.views = {
      toast: null,
    };
  }

  viewDidLoad(callback) {
    this.views.toast = new Craft.Widget.Toast();
    this.appendView(this.views.toast);

    if (callback) {
      callback();
    }
  }

  toast() {
    this.views.toast.show("Hello World!");
  }

  template(componentId) {
    return `
      <div id="root">
        <button onclick="${componentId}.toast()">Toast</button>
      </div>
    `;
  }
}
```

## API

### `Toast#show(options)`

Displays a toast message.

#### Arguments

- `options` (`string` | `object`): The message to display or an object with the following properties:
  - `title` (`string`): The title of the toast message.
  - `message` (`string`): The message to display.
  - `color` (`string`): The color of the toast message.
  - `opacity` (`number`): The opacity of the toast message.
  - `duration` (`number`): The duration in milliseconds to display the toast message. Defaults to `3000`.

## License

MIT
