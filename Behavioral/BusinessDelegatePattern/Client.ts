import { BusinessDelegate } from './BusinessDelegate';

export class Client {

  public businessService: BusinessDelegate;

  public constructor(businessService: BusinessDelegate) {
    this.businessService = businessService;
  }

  public doTask(): void {
    this.businessService.doTask();
  }
}
