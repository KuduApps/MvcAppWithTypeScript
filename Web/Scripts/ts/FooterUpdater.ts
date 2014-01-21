/// <reference path="../typings/jquery/jquery.d.ts" />

module FooterUpdater {
   export function SendMessageFromTypeScript() {
      var theMessage = "Hello, TypeScript Footer!";
      $("#message-from-typescript").text(theMessage);
   }

   SendMessageFromTypeScript();
}
