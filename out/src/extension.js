'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
let adamsTool = null;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Performs Initialization
    InitAdamsTool();
    // Add to a list of disposables which are disposed when this extension is deactivated.
    context.subscriptions.push(adamsTool);
    //context.subscriptions.push(disposable);
}
exports.activate = activate;
function InitAdamsTool() {
    if (adamsTool == null) {
        adamsTool = new AdamsTool();
        adamsTool.SetupAdamsTool();
        // This message should show only when installed
        // window.showInformationMessage('Congratulations, extension "AdamsTool" is now active. You should see three arrows in the statusbar.');
    }
}
// AdamsTool Class
class AdamsTool {
    SetupAdamsTool() {
        // Create as needed
        if (!this._sbiBack) {
            this._sbiBack = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Left);
            this._sbiBack.text = '$(arrow-left)';
            this._sbiBack.tooltip = 'Go Back';
            this._sbiBack.command = 'workbench.action.navigateBack';
            this._sbiBack.show();
        }
        if (!this._sbiLast) {
            this._sbiLast = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Left);
            this._sbiLast.text = '$(arrow-down)';
            this._sbiLast.tooltip = 'Go to last cursor location';
            this._sbiLast.command = 'workbench.action.navigateLast';
            this._sbiLast.show();
        }
        if (!this._sbiNext) {
            this._sbiNext = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Left);
            this._sbiNext.text = '$(arrow-right)';
            this._sbiNext.tooltip = 'Go Forward';
            this._sbiNext.command = 'workbench.action.navigateForward';
            this._sbiNext.show();
        }
    }
    dispose() {
        this._sbiBack.dispose();
        this._sbiLast.dispose();
        this._sbiNext.dispose();
    }
}
// this method is called when your extension is deactivated
function deactivate() {
    adamsTool = null;
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map