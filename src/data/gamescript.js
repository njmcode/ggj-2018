import * as Events from './events'

/**
 * The game 'script'.
 * Defines 'chapters' of the story made up of a list of
 * chat messages.
 *
 * A message can have the following props:
 *
 *  - chat: which chat window this belongs to
 *  - text: text to be shown for the message
 *  - event: an event which the GameState can fire when this message is received
 *  - choices: an array of options for the player to choose from
 *
 * Choices can have the following:
 *
 *  - text: label for the option
 *  - goto: which chapter ID to go to when this option is selected
 *
 */

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
            goto: 'activated',
          },
          {
            text: 'This is Agent 045, waiting command',
            goto: 'activated',
          }
        ]
      }
    ],

    'activated': [
      {
        chat: CHAT_A,
        text: 'Ah good, you\'re there. We have a situation here that we need you immediate assistance with.'
      },
      {
        chat: CHAT_A,
        text: 'We\'ve been locked out of remote access points in your area that we need reconnected to asap.'
      },
      {
        chat: CHAT_A,
        text: 'We need you to locate the access points, get pass the encryption software, and wire through the information packs directly via uplink.'
      },
      {
        chat: CHAT_A,
        text: 'Unfortunately due to the hack, we don\'t have exact geolocations, only images of the locations in question, but they\'re all near by and should be easy enough to find, given your familiarity with the area.',
      },
      {
        chat: CHAT_A,
        choices: [
          {
            text: 'What do you mean by "the hack"?',
            goto: 'noquestions',
          },
          {
            text: 'What is this?!',
            goto: 'noquestions',
          }
        ]
      }
    ],

    'noquestions': [
      {
        chat: CHAT_A,
        text: 'We don\'t have time for questions right now Agent 045, please get the information packets as soon as possible. The security of the entire world is at stake.'
      },
      {
        chat: CHAT_A,
        text: 'Check your Media tab, there you\'ll find the 5 remote access points we need you to reconnect to command.',
        event: Events.EVT_SEND_INITIAL_PHOTOS
      },
      {
        chat: CHAT_A,
        text: 'When you find an access point, look for our logo, you\'ll find a password that you need to input to corresponding photo.'
      },
      {
        chat: CHAT_A,
        text: 'We\'ll contact you again when you\'ve reached access point 1.'
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
            goto: null,
          }
        ]
      }
    ],

    'tutorial': [
      {
        chat: CHAT_A,
        text: 'Well done Agent 045, this is excellent.'
      },
      {
        chat: CHAT_A,
        text: 'Now you just have to decode the access to enable us to download the package.'
      },
      {
        chat: CHAT_A,
        text: 'It should be extremely straightforward for someone of your elite skill set.'
      },
      {
        chat: CHAT_A,
        text: 'Simply slides the blocks into the right location and we should be granted access.'
      }
    ],

    'firstpuzzlecomplete': [
      {
        chat: CHAT_A,
        text: 'Perfect Agent 045, now please send the information packed to us over your secure network connection.'
      }
    ],

    'firstpuzzlesent': [
      {
        chat: CHAT_A,
        text: 'Fantastic work Agent 045, please proceed to the next package for more information.',
        event: Events.EVT_FIRST_NEWS_ARTICLE
      }
    ],

    'strangepackage': [
      {
        chat: CHAT_A,
      	choices: [
          {
            text: 'What is this text about?',
            goto: 'donotread',
          },
          {
            text: 'Sir, this packet is quite odd…',
            goto: 'donotread',
          }
        ]
      }
    ],

    'donotread': [
      {
        chat: CHAT_A,
        text: 'Agent 045, are you READING the highly CLASSIFIED information in these packets?!'
      },
      {
        chat: CHAT_A,
        text: 'Because we need you to access the files to send them to us, you\'ll inherently gain access, but I am stressing that these are HIGHLY CLASSIFIED FILES.'
      },
      {
        chat: CHAT_A,
        text: 'DO NOT READ THEM UNDER ANY CIRCUMSTANCES.'
      },
      {
        chat: CHAT_A,
        text: 'IT IS A FEDERAL OFFENCE TO READ THESE FILES WITHOUT THE CORRECT LEVEL OF AUTHORISATION.'
      },
      {
        chat: CHAT_A,
        text: 'Do no read the files, just send them straight to us, understand? That\'s a command soldier.'
      },
      {
        chat: CHAT_A,
        choices: [
          {
            text: 'Understood sir. ',
            goto: 'understoodrisk',
          },
          {
            text: 'Or what?',
            goto: 'yourownrisk',
          }
        ]
      }
    ],

    'understoodrisk': [
      {
        chat: CHAT_B,
        text: 'Agent 045. Do not trust Agent B.'
      },
      {
        chat: CHAT_B,
        choices: [
          {
            text: 'What to you mean?',
            goto: 'thewarning'
          },
          {
            text: 'I have no idea what you\'re talking about.',
            goto: 'thewarning'
          }
        ]
      }
    ],

    'yourownrisk': [
      {
        chat: CHAT_A,
        text: '…'
      },
      {
        chat: CHAT_A,
        text: 'Well, I guess there\'s nothing we can do, we need those files.'
      },
      {
        chat: CHAT_A,
        text: 'Read them at your own risk, just send them to us. We\'ll sort that issue once we get this resolved.'
      },
      {
        chat: CHAT_B,
        text: 'Agent 045. Do not trust Agent B.'
      },
      {
      	chat: CHAT_B,
        choices: [
          {
            text: 'What do you mean?',
            goto: 'thewarning',
          },
          {
            text: 'I have no idea what you\'re talking about.',
            goto: 'thewarning',
          }
        ]
      }
    ],

    'thewarning': [
      {
        chat: CHAT_B,
        text: 'You\'ve been warned.'
      },
      {
      	chat: CHAT_B,
        choices: [
          {
            text: 'Wait! I want to know what\'s going on!',
            goto: null,
          },
          {
            text: 'I don\'t know you, be gone scum.',
            event: Events.EVT_SECOND_NEWS_ARTICLE,
            goto: null,
          }
        ]
      }
    ],

    'readfile': [
      {
        chat: CHAT_B,
        text: 'Read the file.'
      },
      {
        chat: CHAT_B,
        text: 'Do you see the kind of information you\'re dealing with here.'
      },
      {
        chat: CHAT_B,
        text: 'Do you really trust this kind of information with Agent B?'
      },
      {
        chat: CHAT_B,
        text: 'Do you even know who they are?'
      },
      {
      	chat: CHAT_B,
        choices: [
          {
            text: 'Well who are you then?',
            goto: 'foolish',
          },
          {
            text: 'Do you know who they are?',
            goto: 'foolish',
          }
        ]
      }
    ],

    'foolish': [
      {
        chat: CHAT_B,
        text: 'Don\'t be foolish.'
      },
      {
        chat: CHAT_B,
        text: 'Keep your wits about you.'
      },
      {
        chat: CHAT_B,
        text: 'Don\'t blindly do what they tell you too.'
      },
      {
        chat: CHAT_B,
        text: 'Don\'t tell them about our conversation.'
      },
      {
        chat: CHAT_A,
        text: 'What was that?'
      },
      {
        chat: CHAT_A,
        text: 'Keep your wits about you.'
      },
      {
        chat: CHAT_A,
        text: 'Did you do something?'
      },
      {
      	chat: CHAT_A,
        choices: [
          {
            text: 'What do you mean?',
            goto: 'oddsignal',
          }
        ]
      }
    ],

    'oddsignal': [
      {
        chat: CHAT_A,
        text: ' I picked up an odd signal there.'
      },
      {
        chat: CHAT_A,
        text: 'It was very faint, but I thought I saw…'
      },
      {
        chat: CHAT_A,
        text: 'Maybe it was nothing. Did you see anything strange?'
      },
      {
      	chat: CHAT_A,
        choices: [
          {
            text: 'Nothing on this end.',
            goto: 'wisechoice',
          },
          {
            text: 'Do you mean Agent R?',
            goto: 'unwisechoice',
          }
        ]
      }
    ],

    'wisechoice': [
      {
        chat: CHAT_A,
        text: ' Ok. Just let me know if you anything comes up.'
      },
      {
        chat: CHAT_B,
        text: 'If you continue with this, I can share an extra information pack with you.'
      },
      {
        chat: CHAT_B,
        text: 'Keep up the pretense.'
      },
      {
      	chat: CHAT_B,
        choices: [
          {
            text: 'Who are you?',
            goto: 'goingon',
          },
          {
            text: 'What\'s going on?',
            event: Events.EVT_THIRD_NEWS_ARTICLE,
            goto: 'goingon',
          }
        ]
      }
    ],

    'goingon': [
      {
        chat: CHAT_B,
        text: ' That\'s not important right now. The safety of the world is at stake, just make it to the packets and I\'ll tell you what to do from there. '
      }
    ],

    'unwisechoice': [
      {
        chat: CHAT_A,
        text: ' Agent R?! DO NOT ENGAGE, I repeat, DO NOT ENGAGE with Agent R! They are not to be trusted! '
      },
      {
        chat: CHAT_A,
        text: 'Do not engage them under any circumstances. They are the enemy.'
      },
      {
        chat: CHAT_B,
        text: 'What have you done! Do you want to destroy us all?!'
      },
      {
        chat: CHAT_B,
        text: 'If you do as Agent B says, we\'re all doomed!'
      },
      {
      	chat: CHAT_B,
        choices: [
          {
            text: 'How am I meant to trust you?',
            goto: 'trust',
          },
          {
            text: 'Why?!',
            goto: 'trust',
          }
        ]
      }
    ],

    'trust': [
      {
        chat: CHAT_B,
        text: ' There\'s no time to explain right now, you just have to trust me.'
      },
      {
        chat: CHAT_B,
        text: ' Get to the next info packet. Act as normal.'
      },
      {
        chat: CHAT_B,
        text: ' If you\'re interested in saving the planet, you\'ll do as I say.',
        event: Events.EVT_THIRD_NEWS_ARTICLE,
      }
    ],

    'helloagents': [
      {
        chat: CHAT_B,
        text: 'Agent B: So, here you are.'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: I guess you found me.'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: We\'ve tracked you Agent R. You\'ve nowhere to hide.'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: We won\'t let you get a hold of the info packet.'
      },
      {
       	chat: CHAT_B,
        choices: [
          {
            text: 'You\'re damn right!',
            goto: 'agentb1',
          },
          {
            text: 'I don\'t think so.',
            goto: 'agentr1',
          }
        ]
      }
    ],

    'agentb1': [
      {
        chat: CHAT_B,
        text: 'Agent B: Ha!'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: 045… I thought you were better than this.'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: You\'re signing your own death warrant.'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: Don\'t be ridiculous.'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: Get to the last info point Agent 045.'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: Then we can annihilate this scum.'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: There\'s still time.'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: I hope that when the time comes, you\'ll make the right choice.'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: Idiot. '
      }
    ],

    'agentr1': [
      {
        chat: CHAT_B,
        text: 'Agent B: Excuse me??'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: I think you heard them B.'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: They won\'t be helping you anymore.'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: Are you an idiot?!'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: You\'ll be helping a physcopath!'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: This will start world war 3!'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: Don\'t waste your breath B. They\'ve made their choice.'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: We won\'t start a war, we\'ll be ending it.'
      },
        {
        chat: CHAT_B,
        text: 'Agent B: I beg of you, please. You still have time to change your mind.'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: When the time comes, send the pack to me.'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: Idiot.',
        event: Events.EVT_FOURTH_NEWS_ARTICLE
      }
    ],

    'bluepacket': [
      {
        chat: CHAT_B,
        text: 'Agent B: Well done Agent 045, you\'ve made the correct decision.'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: Oh god. What have you done.'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: Exactly what he was meant to, R.'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: I hope you\'ve enjoyed your time on this earth.'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: You will be rewarded Agent 045.'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: You\'ve doomed us all.',
        event: Events.EVT_FIFTHB_NEWS_ARTICLE
      }
    ],

    'redpacket': [
      {
        chat: CHAT_B,
        text: 'Agent R: Well done Agent 045, you\'ve made the correct decision.'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: Oh god. What have you done.'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: Exactly what he was meant to, R.'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: I hope you\'ve enjoyed your time on this earth.'
      },
      {
        chat: CHAT_B,
        text: 'Agent R: You will be rewarded Agent 045.'
      },
      {
        chat: CHAT_B,
        text: 'Agent B: You\'ve doomed us all.',
        event: Events.EVT_FIFTHR_NEWS_ARTICLE
      }
    ],

    'failstate1': [
      {
        chat: CHAT_A,
        text: '045! Be very careful, you\'ll get locked out if you try to hack the access point incorrectly.'
      }
    ],

    'failstate2': [
      {
        chat: CHAT_A,
        text: 'Agent. This is your last warning. DO NOT FAIL AGAIN.'
      }
    ],

    'failstate3': [
      {
        chat: CHAT_A,
        text: 'You\'ve proven yourself unable to handle this mission. You will not be contacted again.',
        event: Events.EVT_FAILGAME
      }
    ],

    'tempwin': [
      {
        chat: CHAT_A,
        text: 'Well done, Agent 045!'
      },
      {
        chat: CHAT_A,
        text: 'You\'ve proven yourself quite capable in the field.'
      },
      {
        chat: CHAT_A,
        text: 'We\'ll be in touch again soon.'
      },
      {
        chat: CHAT_A,
        text: '*** TRANSMISSION ENDED ***'
      }
    ]
  }
}