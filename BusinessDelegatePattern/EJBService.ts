import { BusinessService } from "./BusinessService";

export class EJBService implements BusinessService {
    public doProcessing(): void {
        console.log("Processing task by invoking EJB Service");
    }
}