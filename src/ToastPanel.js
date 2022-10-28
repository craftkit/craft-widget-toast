
import * as Craft from '@craftkit/craft-uikit';

export class ToastPanel extends Craft.UI.View {
    /**
     * ToastPanel constructor
     * 
     * @param {Object} options - options
     * @param {string} options.title - title
     * @param {string} options.message - message
     * @param {string} options.color - color
     * @param {string} options.textColor - text color
     * @param {number} options.opacity - opacity
     * @param {number} options.duration - duration
     * @param {function} options.callback - callback
     */
    constructor(options) {
        super();
        this.packagename = "Craft.Widget.ToastPanel";

        if (!options) { options = {}; }

        this.title = options.title || "";
        this.message = options.message || "";
        this.color = options.color || "#333333";
        this.textColor = options.textColor || "white";
        this.opacity = options.opacity || 0.8;
        this.duration = options.duration || 3000;
        this.callback = options.callback;
    }

    viewDidAppear(callback) {
        this.root.style.visibility = "visible";
        Craft.Core.Transition.animate({
            element: this.root,
            properties: { "opacity": this.opacity },
            duration: 100,
            callback: () => {
                setTimeout(() => {
                    Craft.Core.Transition.animate({
                        element: this.root,
                        properties: { "opacity": 0 },
                        duration: 100,
                        callback: () => {
                            if (this.callback) {
                                this.callback();
                            }
                            this.unloadView();
                        }
                    });
                }, this.duration);
            }
        });
        if (callback) { callback(); }
    }

    /**
     * style
     * @protected
     */
    style(componentId) {
        return `
            :host {
            }
			.root {
                visibility: hidden;
                display: flex;
                flex-direction: column;
				box-sizing: border-box;
                margin-top: 10px;
                padding: 10px;
                border-radius: 5px;
                background-color: ${this.color};
                opacity: 0.1;
                color: ${this.textColor};
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }
            .show {
                transform: translateY(-10px);
            }
            .title {
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 5px;
            }
            .message {
                font-size: 14px;
                font-weight: normal;
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
                <div id="title">${this.title}</div>
                <div id="message">${this.message}</div>
			</div>
		`;
    }
}
