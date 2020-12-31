import { BusinessDelegate } from './BusinessDelegate';
import { Client } from './Client';

class BusinessDelegatePattern {
  public static main(args?: string[]): void {
    const businessDelegate: BusinessDelegate = new BusinessDelegate();
    const client: Client = new Client(businessDelegate);

    businessDelegate.setServiceType('EJB');
    client.doTask();

    businessDelegate.setServiceType('JMS');
    client.doTask();
  }
}

BusinessDelegatePattern.main();
