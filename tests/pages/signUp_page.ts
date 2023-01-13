import { Locator, Page } from '@playwright/test';

export class SignUpPage {
    page: Page
    patientTypeLocator: Locator;
    firstNameFieldLocator: Locator;
    lastNameFieldLocator: Locator;
    dateFieldLocator: Locator;
    zipCodeFieldLocator: Locator;
    submitButtonLocator: Locator;
    emailFieldLocator: Locator;
    passwordFieldLocator: Locator;
    confirmPasswordFieldLocator: Locator;
    tosCheckboxLocator: Locator;
    diagnosisFieldLocator: Locator;
    diagnosisStageLocator: Locator;
    addTreatmentBtnLocator: Locator;

    constructor(page: Page) {
        this.page = page
        this.patientTypeLocator = page.locator('[data-testing="select-patient-recently-diagnosed"]')
        this.firstNameFieldLocator = page.locator('#first-name')
        this.lastNameFieldLocator = page.locator('#last-name')
        this.dateFieldLocator = page.locator('[placeholder="mm/dd/yyyy"]')
        this.zipCodeFieldLocator = page.locator('#zip-code')
        this.submitButtonLocator = page.locator('[data-testing="button-submit"]')
        this.emailFieldLocator = page.locator('#email')
        this.passwordFieldLocator = page.locator('#password')
        this.confirmPasswordFieldLocator = page.locator('#passwordConfirmation')
        this.tosCheckboxLocator = page.locator('#sms-consent')
        this.diagnosisFieldLocator = page.locator('[type="checkbox"]')
        this.diagnosisStageLocator = page.locator('.MuiChip-label')
        this.addTreatmentBtnLocator = page.locator('[data-testing="button-add-treatment"]')
    }

    async open() {
        await this.page.goto('/signup');
    }

    async selectPatientType() {
        await this.patientTypeLocator.click()
    }

    async addPatientInfo(firstName: string, lastName: string, dob: string, zipCode: string) {
        await this.firstNameFieldLocator.fill(firstName)
        await this.lastNameFieldLocator.fill(lastName)
        await this.dateFieldLocator.fill(dob)
        await this.zipCodeFieldLocator.fill(zipCode)
        await this.submitButtonLocator.click()
        await this.page.waitForLoadState('networkidle')
    }

    async addAccountInfo(email: string, password: string) {
        await this.emailFieldLocator.fill(email)
        await this.passwordFieldLocator.fill(password)
        await this.confirmPasswordFieldLocator.fill(password)
        await this.tosCheckboxLocator.click()
        await this.submitButtonLocator.click()
        await this.page.waitForLoadState('networkidle')
    }

    async selectDiagnosis(dateOfDiagnosis: string) {
        await this.diagnosisFieldLocator.nth(Math.random()*10).click()
        await this.dateFieldLocator.fill(dateOfDiagnosis)
        await this.diagnosisStageLocator.nth(Math.random()*5).click()
        await this.submitButtonLocator.click()
        await this.page.waitForLoadState('networkidle')
    }

    async completeOnboarding() {
        await this.page.waitForSelector('h1')
        await this.submitButtonLocator.click()
        await this.page.waitForLoadState('networkidle')

        await this.addTreatmentBtnLocator.waitFor()
        await this.submitButtonLocator.click()
        await this.page.waitForLoadState('networkidle')
        await this.page.waitForSelector('h1')
        await this.submitButtonLocator.click()
        await this.page.waitForLoadState('networkidle')
        await this.page.waitForSelector('//*[contains(text(), "Track how ")]')
    }

}