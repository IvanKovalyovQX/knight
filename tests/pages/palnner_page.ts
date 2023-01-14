import { Locator, Page } from '@playwright/test';

export class PlannerPage {
    page: Page
    addSharedActionBtnFrameLocator: Locator;
    viewAllActionsBtnLocator: Locator;
    sharedActionNameLocator: Locator;
    addActionBtnLocator: Locator;
    addAppointmentBtnFrameLocator: Locator;
    showMoreBtnLocator: Locator;
    appointmentNameSelectLocator: Locator;
    appointmentNameTextLocator: Locator;
    noteTabLocator: Locator;
    noteTextFieldLocator: Locator;
    addAppointmentbtnLocator: Locator;
    addTodosBtnFrameLocator: Locator;
    todosNameSelectLocator: Locator;
    todosNameTextLocator: Locator;
    sharedSubmitBtnLocator: Locator;
    trackAllNowBtnLocator: Locator;
    moodBtnLocator: Locator;
    feelingBtnLocator: Locator;
    symptomBtnLocator: Locator;
    symptomScaleBtnLocator: Locator;
    trackAllTemeperetureBtnlocator: Locator;
    trackAllWeightBtnlocator: Locator;
    trackAllSleepBtnlocator: Locator;
    temperetureInputFiledLocator: Locator;
    weightInputFrildLocator: Locator;
    hoursInputFieldLocator: Locator;
    dailyTrackerSettingBtnLocator: Locator;
    dailyTrackerSettingTemperetureLocator: Locator;
    dailyTrackerSettingWeightLocator: Locator;
    dailyTrackerSettingBloodPressureLocator: Locator;
    dailyTrackerSettingSleepLocator: Locator;
    currentDateGridLocator: Locator;
    gridCellLocator: Locator;

    constructor(page:Page) {
        this.page = page
        this.addSharedActionBtnFrameLocator = page.locator('[data-testing="planner-card-title-action:{Shared Action Plan}"]')
        this.viewAllActionsBtnLocator = page.locator('//*[contains(text(), "View All Actions")]')
        this.sharedActionNameLocator = page.locator('.MuiBox-root.mui-style-1wysoo9')
        this.addActionBtnLocator = page.locator('//*[contains(text(), "Add Action")]')
        this.addAppointmentBtnFrameLocator = page.locator('[data-testing="planner-card-title-action:{Appointments}"]')
        this.showMoreBtnLocator = page.locator('//*[contains(text(), "Show More")]')
        this.appointmentNameSelectLocator = page.locator('.mui-style-1wysoo9')
        this.appointmentNameTextLocator = page.locator('.mui-style-xij5t8')
        this.noteTabLocator = page.locator('[aria-label="note"]')
        this.noteTextFieldLocator = page.locator('[placeholder="Add your notes here..."]')
        this.addAppointmentbtnLocator = page.locator('[data-testing="button-submit-appointment-details"]')
        this.addTodosBtnFrameLocator = page.locator('[data-testing="planner-card-title-action:{To-Dos}"]')
        this.todosNameSelectLocator = page.locator('.mui-style-1wysoo9')
        this.todosNameTextLocator = page.locator('.mui-style-xij5t8')
        this.sharedSubmitBtnLocator = page.locator('[data-testing="button-submit"]')
        this.trackAllNowBtnLocator = page.locator('//*[contains(text(),"Track All Now")]')
        this.moodBtnLocator = page.locator('.mui-style-3xdnyf')
        this.feelingBtnLocator = page.locator('.mui-style-16lexsi')
        this.symptomBtnLocator = page.locator('.mui-style-jlkg4a')
        this.symptomScaleBtnLocator = page.locator('.mui-style-1vp3lyt')
        this.trackAllTemeperetureBtnlocator = page.locator('//div[contains(text(),"Temperature")]')
        this.trackAllWeightBtnlocator = page.locator('//div[contains(text(),"Weight")]')
        this.trackAllSleepBtnlocator = page.locator('//div[contains(text(),"Sleep")]')
        this.temperetureInputFiledLocator = page.locator('#temperature')
        this.weightInputFrildLocator = page.locator('#weight')
        this.hoursInputFieldLocator = page.locator('#hours')
        this.dailyTrackerSettingBtnLocator = page.locator('[data-testing="planner-card-title-action:{Daily Tracker}"]')
        this.dailyTrackerSettingTemperetureLocator = page.locator('[data-testing="tracker-header:{Temperature}"]')
        this.dailyTrackerSettingWeightLocator = page.locator('[data-testing="tracker-header:{Weight}"]')
        this.dailyTrackerSettingBloodPressureLocator = page.locator('[data-testing="tracker-header:{Blood Pressure}"]')
        this.dailyTrackerSettingSleepLocator = page.locator('[data-testing="tracker-header:{Sleep}"]')
        this.currentDateGridLocator = page.locator('//button[@role="gridcell" and @aria-selected="true"]/div')
        this.gridCellLocator = page.locator('[role="gridcell"]')
    }

    async open() {
        await this.page.goto('/planner')
        await this.page.waitForLoadState('networkidle')
    }

    async addSharedAction() {
        await this.addSharedActionBtnFrameLocator.click()
        await this.viewAllActionsBtnLocator.nth(1).click()
        await this.sharedActionNameLocator.nth(Math.random()*20).click()
        await this.addActionBtnLocator.click()
        await this.page.waitForLoadState('networkidle')
    }

    async addAppointment() {
        await this.addAppointmentBtnFrameLocator.click()
        await this.showMoreBtnLocator.nth(0).click()
        await this.appointmentNameSelectLocator.nth(Math.random()*7).click()
        let appointmenText = await this.appointmentNameTextLocator.textContent()
        await this.noteTabLocator.click()
        await this.noteTextFieldLocator.fill(`My note for ${appointmenText}`)
        await this.addAppointmentbtnLocator.click()
    }

    async addTodos() {
        await this.addTodosBtnFrameLocator.click()
        await this.todosNameSelectLocator.nth(Math.random()*2).click()
        await this.noteTabLocator.click()
        let todoText = await this.todosNameTextLocator.textContent()
        await this.noteTextFieldLocator.fill(`My note for ${todoText}`)
        await this.sharedSubmitBtnLocator.click()
        await this.page.waitForLoadState('networkidle')
    }

    async enableAllTrackers() {
        await this.dailyTrackerSettingBtnLocator.click()
        await this.dailyTrackerSettingTemperetureLocator.click()
        await this.dailyTrackerSettingWeightLocator.click()
        await this.dailyTrackerSettingBloodPressureLocator.click()
        await this.dailyTrackerSettingSleepLocator.click()
        await this.sharedSubmitBtnLocator.click()
    }

    async passTrackAllNowFlow() {
        await this.trackAllNowBtnLocator.click()
        await this.moodBtnLocator.nth(Math.random()*4).click()
        await this.feelingBtnLocator.nth(Math.random()*14).click()
        await this.sharedSubmitBtnLocator.click()
        await this.symptomBtnLocator.nth(Math.random()*32).click()
        await this.symptomScaleBtnLocator.nth(Math.random()*4).click()
        await this.sharedSubmitBtnLocator.click()
        await this.trackAllTemeperetureBtnlocator.click()
        await this.temperetureInputFiledLocator.fill(`${Math.floor(Math.random()*(104 - 96) + 96)}`)
        await this.sharedSubmitBtnLocator.nth(0).click()   
        await this.temperetureInputFiledLocator.waitFor({state:'hidden'})
        await this.trackAllWeightBtnlocator.click()
        await this.weightInputFrildLocator.fill(`${Math.floor(Math.random()*(170 - 150) + 150)}`)
        await this.sharedSubmitBtnLocator.nth(0).click()
        await this.weightInputFrildLocator.waitFor({state:'hidden'})
        await this.trackAllSleepBtnlocator.click()
        await this.hoursInputFieldLocator.fill(`${Math.floor(Math.random()*(14 - 6) + 6)}`)
        await this.sharedSubmitBtnLocator.nth(0).click()
        await this.hoursInputFieldLocator.waitFor({state:'hidden'})
        await this.page.locator('[data-testing="button-submit"]', {hasText: 'Next'}).click()
        await this.page.locator('[data-testing="button-submit"]', {hasText: "Done"}).click()
        await this.page.locator('[data-testing="button-submit"]', {hasText: "Done"}).waitFor({state:'hidden'})
    }

    async addDailyTrackerSomePeriod(period = 7) {
        let date = Number(await this.currentDateGridLocator.textContent())
        console.log(date)
        for (let i = 1; i < period; i++) {
          let newDate = period - i
          if (newDate === 1) {
            break
          }
          await this.gridCellLocator.nth(newDate).click()
          await this.passTrackAllNowFlow()
        }
    }
}