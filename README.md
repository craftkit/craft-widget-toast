# Toast for Craft-UIKit

Toast is a Craft-UIKit component that provides a simple way to display a message to the user. It is a non-intrusive message that appears on the screen for a short period of time and then disappears.

After duration time passed, callback will be called if it is provided. At this point, content of the toast will be `unloadView()`ed, but the toast itself will remain in the DOM, so you can use it again.

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
  toast() {
    const toast = new Craft.Widget.Toast();
    Craft.Core.Context.getRootViewController().appendView(toast);
    toast.show({
      message: "Hello World!",
      callback: () => {
        toast.removeFromParent();
        toast.unloadView();
      }
    });
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
  - `callback` (`function`): A callback function to execute when the toast message is dismissed.

## License

MIT
