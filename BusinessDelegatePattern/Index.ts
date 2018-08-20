import { BusinessDelegate } from "./BusinessDelegate";
import { Client } from "./Client";

class BusinessDelegatePattern {
    public static main(args?: string[]): void {
        const businessDelegate: BusinessDelegate = new BusinessDelegate();
        businessDelegate.setServiceType("EJB");

        const client: Client = new Client(businessDelegate);
        client.doTask();

        businessDelegate.setServiceType("JMS");
        client.doTask();
    }
}

BusinessDelegatePattern.main();