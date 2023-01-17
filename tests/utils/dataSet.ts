import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';


const config: Config = {
    dictionaries: [names]
  }

const messages = [
  'How are you doing?',
  'Can we schedule a call?',
  'I need to talk',
  'I have some questions',
  'I have some questions how to use specific functionality',
  'I feel myself bad',
  'I’m so depressed. I just need someone to talk to.”',
  'Let’s have a call and I suggest you some improvements that will help to other users” → “I have some ideas for improvements that might help other users!',
  'I feel myself very painful',
  'I’m feeling depressed.',
  'Can you please help me invite my Caregiver?',
  'I need emergency right now',
  'Can you please recommend some articles related to my cancer?',
  'Can you recommend me some articles that will tell me what to expect with this new treatment I’m about to begin?',
  'Can I get some advice on finding a good cancer specialist?',
  'I want to invite my friend to this app and be in contact with hi, do we have this opportunity” → “I’d like to invite my friend to this app so we can talk here. Is that possible?'
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



