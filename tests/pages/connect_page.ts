import { Locator, Page } from '@playwright/test';

export class ConnectPage {
    page: Page
    messageInputFieldLocator: Locator;

    constructor(page: Page) {
        this.page = page
        this.messageInputFieldLocator = page.locator('[data-testid="message-input"]')
    }

    async open() {
        await this.page.goto('/connect')
        await this.page.waitForLoadState('networkidle')
    }

    async addMessage(message: string) {
        await this.messageInputFieldLocator.fill(message)
        await this.page.keyboard.press('Enter')
    }
}