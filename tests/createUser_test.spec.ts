import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import { App } from './pages/app';
import { dataSet, defaultMessages } from './utils/dataSet';

const data = ['1', 
// '2', '3', '4', '5', '6', '7', '8', '9', '10',
// '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
// '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
// '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
// '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
// '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
// '61', '62', '63', '64', '65', '66', '67', '68', '69', '70',
// '71', '72', '73', '74', '75', '76', '77', '78', '79', '80',
// '81', '82', '83', '84', '85', '86', '87', '88', '89', '90',
// '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'
]
for (const dataUsage of data) {
  test(`Create user with random data = ${dataUsage}`, async ({ page }) => {
    const app = new App(page)
  
    let firstName = dataSet.firstName,
    lastName = dataSet.lastName,
    email = `${firstName}.${lastName}${Math.floor(Math.random()*1000)}@hellojasper.com`
  
    await app.signUpPage.open()
  
    await app.signUpPage.selectPatientType()
    await app.signUpPage.addPatientInfo(firstName, lastName, dataSet.dob, dataSet.zipCode)
    await app.signUpPage.addAccountInfo(email, dataSet.password)
    await app.signUpPage.selectDiagnosis(dataSet.dateOfDiagnosis)
    await app.signUpPage.completeOnboarding()
    await app.plannerPage.open()
    await app.plannerPage.addSharedAction()
    await app.plannerPage.addSharedAction()
    await app.plannerPage.addSharedAction()
    await app.plannerPage.addAppointment()
    await app.plannerPage.addAppointment()
    await app.plannerPage.addAppointment()
    await app.plannerPage.addTodos()
    await app.connectPage.open()
    await app.connectPage.addMessage('Hey')
    await app.connectPage.addMessage(defaultMessages)
    await app.connectPage.addMessage(defaultMessages)
    await app.plannerPage.open()
    await app.plannerPage.enableAllTrackers()
    await app.plannerPage.passTrackAllNowFlow()
    await app.plannerPage.addDailyTrackerSomePeriod()
  
  });
}
