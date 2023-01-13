import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';


const config: Config = {
    dictionaries: [names]
  }

const messages = [
  'How are you doing?',
  'Lets schedule a call',
  'I need to talk',
  'I have some questions',
  'I have some questions how to use specific functionality',
  'I feel myself bad',
  'I feel myself very painful',
  'I feel myself depressed',
  'I need emergency right now',
  'Can yo suggest me some articles related to my treatment',
  'Can yo suggest me good cancer specialist',
]

export const defaultMessages: string = uniqueNamesGenerator({
  dictionaries: [messages]
})

export const dataSet = {
    
    firstName: `${uniqueNamesGenerator(config)}`,
    lastName: `${uniqueNamesGenerator(config)}`,
    dob: `0101${Math.random() * (2000 - 1940) + 1940}`,
    dateOfDiagnosis: `0101${Math.random() * (2022 - 2015) + 2015}`,
    zipCode: `12345`,
    password: '123456'
}



