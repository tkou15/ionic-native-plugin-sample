import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";

declare var HelloWorld: any;
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(public platform: Platform) {
    this.platform.ready().then(() => {
      HelloWorld.echo("ACN", this.successCallback, this.errorCallback);
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
