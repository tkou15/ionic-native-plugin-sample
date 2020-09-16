
import Foundation
import UIKit

@objc(HelloWorld) class HelloWorld: CDVPlugin {
    // JavaScriptに公開する関数名を記述
    @objc(echo:)
    func echo(command: CDVInvokedUrlCommand) {
        
        let name = command.arguments.first as! String
        let message = "Hello, World !!! " + "Hello, " + name;
        
        // 返却するレスポンスを作成
        let result = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: message)
        
        // コールバック形式でレスポンスを返却
        self.commandDelegate!.send(result, callbackId: command.callbackId)
        
    }
}

