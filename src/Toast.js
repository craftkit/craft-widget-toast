
import * as Craft from '@craftkit/craft-uikit';

import { ToastPanel } from './ToastPanel.js';

/** 
 * Toast 
 * 
 * @packagename TicketForge.Framework.Toast
 * 
 * @example
 * 
 * const toast = new Toast();
 * this.appendView(toast);
 * toast.show("Hello World");
 * 
 * const toast = new TicketForge.Framework.Toast({
 *     title    : "My first toast",
 *     message  : "This is my first toast",
 *     color    : "green",
 *     opacity  : 0.8,
 *     duration : 3000
 * });
 * toast.show();
 * 
 */
export class Toast extends Craft.UI.View {

    /**
     * Toast constructor
     * 
     * @param {Object} options - options
     */
    constructor(options) {
        super();
        this.packagename = "TicketForge.Framework.Toast";
        if (!options) { options = {}; }
    }

    show(options) {
        if (options instanceof String) {
            options = { message: options };
        }
        if (!options) { options = {}; }
        let panel = new ToastPanel(options);
        this.appendView(panel);
    }

    /**
     * style
     * @protected
     */
    style(componentId) {
        return `
            :host {
                position: fixed;
                min-width: 250px;
                height: auto;
                bottom: 20px;
                right: 20px;
            }
			.root {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
				box-sizing: border-box;
			}
		`;
    }

    /**
     * template
     * @protected
     */
    template(componentId) {
        return `
			<div class="root">
			</div>
		`;
    }

}
