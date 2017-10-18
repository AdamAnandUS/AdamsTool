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
    private _sbiTerminal: StatusBarItem;
    private _sbiDbgStart: StatusBarItem;
    private _sbiFoldAll: StatusBarItem;
    private _sbiUnFoldAll: StatusBarItem;

    public SetupAdamsTool() {

        // Create as needed
        if (!this._sbiBack) {
            this._sbiBack = window.createStatusBarItem(StatusBarAlignment.Left);
            this._sbiBack.text = '$(arrow-left)';
            this._sbiBack.tooltip = 'Go Back';
            this._sbiBack.command = 'workbench.action.navigateBack';
            this._sbiBack.color = 'yellow';
            this._sbiBack.show();
        }
        if (!this._sbiLast) {
            this._sbiLast = window.createStatusBarItem(StatusBarAlignment.Left);
            this._sbiLast.text = '$(arrow-down)';
            this._sbiLast.tooltip = 'Go to last cursor location';
            this._sbiLast.command = 'workbench.action.navigateLast';
            this._sbiLast.color = 'yellow';
            this._sbiLast.show();
        }
        if (!this._sbiNext) {
            this._sbiNext = window.createStatusBarItem(StatusBarAlignment.Left);
            this._sbiNext.text = '$(arrow-right)';
            this._sbiNext.tooltip = 'Go Forward';
            this._sbiNext.command = 'workbench.action.navigateForward';
            this._sbiNext.color = 'yellow';
            this._sbiNext.show();
        }
        if (!this._sbiTerminal) {
            this._sbiTerminal = window.createStatusBarItem(StatusBarAlignment.Left);
            this._sbiTerminal.text = '$(browser)';
            this._sbiTerminal.tooltip = 'Open Integrated Terminal';
            this._sbiTerminal.command = 'workbench.action.terminal.new';
            this._sbiTerminal.color = 'yellow';
            this._sbiTerminal.show();
        }
        if (!this._sbiDbgStart) {
            this._sbiDbgStart = window.createStatusBarItem(StatusBarAlignment.Left);
            this._sbiDbgStart.text = '$(triangle-right)';
            this._sbiDbgStart.tooltip = 'Start debugging';
            this._sbiDbgStart.command = 'workbench.action.debug.start';
            this._sbiDbgStart.color = 'yellow';
            this._sbiDbgStart.show();
        }
        if (!this._sbiFoldAll) {
            this._sbiFoldAll = window.createStatusBarItem(StatusBarAlignment.Left);
            this._sbiFoldAll.text = '$(diff-added)';
            this._sbiFoldAll.tooltip = 'Fold all source code';
            this._sbiFoldAll.command = 'editor.foldAll';
            this._sbiFoldAll.color = 'yellow';
            this._sbiFoldAll.show();
        }
        if (!this._sbiUnFoldAll) {
            this._sbiUnFoldAll = window.createStatusBarItem(StatusBarAlignment.Left);
            this._sbiUnFoldAll.text = '$(diff-removed)';
            this._sbiUnFoldAll.tooltip = 'Unfold all source code';
            this._sbiUnFoldAll.command = 'editor.unfoldAll';
            this._sbiUnFoldAll.color = 'yellow';
            this._sbiUnFoldAll.show();
        }

    }

    public dispose() {
        this._sbiBack.dispose();
        this._sbiLast.dispose();
        this._sbiNext.dispose();
        this._sbiTerminal.dispose();
        this._sbiDbgStart.dispose();
        this._sbiFoldAll.dispose();
        this._sbiUnFoldAll.dispose();
    }

}

// this method is called when your extension is deactivated
export function deactivate() {
    adamsTool = null;
}