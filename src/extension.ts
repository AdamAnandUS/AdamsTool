'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { window, commands, StatusBarItem, StatusBarAlignment, workspace } from 'vscode';

let adamsTool = null;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Performs Initialization
    InitAdamsTool();

    // Add to a list of disposables which are disposed when this extension is deactivated.
    context.subscriptions.push(adamsTool);
    //context.subscriptions.push(disposable);
}

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
    private _sbiBack: StatusBarItem;
    private _sbiLast: StatusBarItem;
    private _sbiNext: StatusBarItem;

    public SetupAdamsTool() {

        // Create as needed
        if (!this._sbiBack) {
            this._sbiBack = window.createStatusBarItem(StatusBarAlignment.Left);
            this._sbiBack.text = '$(arrow-left)';
            this._sbiBack.tooltip = 'Go Back';
            this._sbiBack.command = 'workbench.action.navigateBack';
            this._sbiBack.show();
        }
        if (!this._sbiLast) {
            this._sbiLast = window.createStatusBarItem(StatusBarAlignment.Left);
            this._sbiLast.text = '$(arrow-down)';
            this._sbiLast.tooltip = 'Go to last cursor location';
            this._sbiLast.command = 'workbench.action.navigateLast';
            this._sbiLast.show();
        }
        if (!this._sbiNext) {
            this._sbiNext = window.createStatusBarItem(StatusBarAlignment.Left);
            this._sbiNext.text = '$(arrow-right)';
            this._sbiNext.tooltip = 'Go Forward';
            this._sbiNext.command = 'workbench.action.navigateForward';
            this._sbiNext.show();
        }

    }

    public dispose() {
        this._sbiBack.dispose();
        this._sbiLast.dispose();
        this._sbiNext.dispose();
    }

}

// this method is called when your extension is deactivated
export function deactivate() {
    adamsTool = null;
}