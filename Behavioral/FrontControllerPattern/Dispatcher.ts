import { StudentView } from './StudentView';
import { HomeView } from './HomeView';

export class Dispatcher {
    private studentView: StudentView;
    private homeView: HomeView;

    public constructor() {
        this.studentView = new StudentView();
        this.homeView = new HomeView();
    }

    public dispatch(request: string): void {
        if (request === 'STUDENT') {
            this.studentView.show();
        }
        else {
            this.homeView.show();
        }
    }
}