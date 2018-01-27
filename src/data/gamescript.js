import * as Events from './events'

export const CHAT_A = 'agentA'
export const CHAT_B = 'agentB'

export default {
  chapters: {
    'intro1': [
      {
        chat: CHAT_A,
        text: '*** INCOMING TRANSMISSION... ***',
      },
      {
        chat: CHAT_A,
        text: 'Agent 045, you have now been activated. Please respond.'
      },
      {
        chat: CHAT_A,
        choices: [
          {
            text: 'Uh, I think you have the wrong number',
            goto: 'intro2'
          },
          {
            text: 'This is Agent 045, waiting command',
            goto: 'intro2'
          }
        ]
      }
    ],

    'intro2': [
      {
        chat: CHAT_A,
        text: 'Ah good, you’re there. We have a situation here that we need you immediate assistance with.'
      },
      {
        chat: CHAT_A,
        text: 'We’ve been locked out of remote access points in your area that we need reconnected to asap.'
      },
      {
        chat: CHAT_B,
        text: '(Here is a random AgentB message)'
      },
      {
        chat: CHAT_A,
        text: 'We need you to locate the access points, get pass the encryption software, and wire through the information packs directly via uplink.'
      },
      {
        chat: CHAT_A,
        text: 'Unfortunately due to the hack, we don’t have exact geolocations, only images of the locations in question, but they’re all near by and should be easy enough to find, given your familiarity with the area.',
        event: Events.SEND_INITIAL_PHOTOS
      },
      {
        chat: CHAT_A,
        choices: [
          {
            text: 'What do you mean by "the hack"?',
            goto: 'intro3',
          },
          {
            text: 'What is this?!',
            goto: 'intro3',
          }
        ]
      }
    ],

    'intro3': [
      {
        chat: CHAT_A,
        text: 'We don’t have time for questions right now Agent 045, please get the information packets as soon as possible. The security of the entire world is at stake.'
      },
      {
        chat: CHAT_A,
        text: 'Check your photo tab, there you’ll find the 5 remote access points we need you to reconnect to command.'
      },
      {
        chat: CHAT_A,
        text: 'We’ll contact you again when you’ve reached access point 1.'
      },
      {
        chat: CHAT_A,
        choices: [
          {
            text: 'O...k?',
            goto: null,
          },
          {
            text: 'Understood command, over and out',
            goto: null
          }
        ]
      }
    ]
  }
}