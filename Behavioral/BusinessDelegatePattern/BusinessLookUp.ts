import { BusinessService } from './BusinessService';
import { EJBService } from './EJBService';
import { JMSService } from './JMSService';

export class BusinessLookUp {
  public getBusinessService(serviceType: string): BusinessService {
    if (serviceType === 'EJB') {
      return new EJBService();
    }
    else if (serviceType === 'JMS') {
      return new JMSService();
    }
    else {
      return new JMSService();
    }
  }
}
