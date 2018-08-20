import { BusinessLookUp } from "./BusinessLookUp";
import { BusinessService } from "./BusinessService";

export class BusinessDelegate {
    private lookupService: BusinessLookUp = new BusinessLookUp();
    private businessService: BusinessService;
    private serviceType: string;
 
    public setServiceType(serviceType: string): void{
       this.serviceType = serviceType;
    }
 
    public doTask(): void{
       this.businessService = this.lookupService.getBusinessService(this.serviceType);
       this.businessService.doProcessing();		
    }
 }