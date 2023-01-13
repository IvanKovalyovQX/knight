import { Page } from '@playwright/test';
import { ConnectPage } from './connect_page';
import { PlannerPage } from './palnner_page';
import { SignUpPage } from './signUp_page';

export class App {
    page: Page
    signUpPage: SignUpPage;
    plannerPage: PlannerPage;
    connectPage: ConnectPage;

    constructor(page: Page) {
        this.page = page
        this.signUpPage = new SignUpPage(page)
        this.plannerPage = new PlannerPage(page)
        this.connectPage = new ConnectPage(page)
    }

}