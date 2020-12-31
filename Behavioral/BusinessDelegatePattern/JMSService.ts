import { BusinessService } from './BusinessService';

export class JMSService implements BusinessService {
  public doProcessing(): void {
    console.log('Processing task by invoking JMS Service');
  }
}
