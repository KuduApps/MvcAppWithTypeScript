/// <reference path="../typings/jquery/jquery.d.ts" />

module FooterUpdater {
    class MessageCreater {
        constructor() {
            console.log("getting constructed");
        }

        public getMessage(): string {
            return "Hello, TypeScript Footer!";
        }

        protected protectedFunction() {
            console.log("protected function");
        }
    }
    export function SendMessageFromTypeScript() {
        var tuple: [number, string] = [1, "string"];
        var msgCreator = new MessageCreater();
        tuple[1] = msgCreator.getMessage();
      $("#message-from-typescript").text(tuple[1]);
   }

   SendMessageFromTypeScript();
}
