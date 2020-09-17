import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { HelloWorldPlugin } from "@ionic-native/hello-world-plugin/ngx";
// declare var HelloWorld: any;
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(public platform: Platform, public helloworld: HelloWorldPlugin) {
    this.platform.ready().then(() => {
      this.helloworld.echo("ACN").then((message) => {
        this.successCallback(message);
      });
    });
  }
  //成功時の処理
  successCallback(message) {
    alert(message);
  }
  //エラー時の処理
  errorCallback() {
    alert("hello error");
  }
}
