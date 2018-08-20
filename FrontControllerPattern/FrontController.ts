import { Dispatcher } from "./Dispatcher";

export class FrontController {

    private dispatcher: Dispatcher;

    public constructor() {
        this.dispatcher = new Dispatcher();
    }

    private isAuthenticUser(): boolean {
        console.log("User is authenticated successfully.");
        return true;
    }

    private trackRequest(request: string): void {
        console.log("Page requested: " + request);
    }

    public dispatchRequest(request: string): void {
        //log each request
        this.trackRequest(request);

        //authenticate the user
        if (this.isAuthenticUser()) {
            this.dispatcher.dispatch(request);
        }
    }
}