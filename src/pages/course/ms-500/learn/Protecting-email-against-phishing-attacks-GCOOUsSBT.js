/* eslint react/jsx-no-undef: "off", no-tabs: "off", no-irregular-whitespace: "off" */
import {h, Component} from 'preact'
import Page from '../../../../components/page'
import ContentsRead from '../../../../components/contents-read'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import {getDoc} from '../../../../components/firebase/get-doc'
import saveDoc from '../../../../components/firebase/save-doc'
import {onAuthStateChanged} from '../../../../components/firebase/on-auth-state-changed'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import Box from '@mui/material/Box'

const isBrowser = () => typeof window !== 'undefined'

const marginTop24Style = {
  marginTop: '24px'
}
let bottomOfArticle

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.setHasCompletedContent = this.setHasCompletedContent.bind(this)
    this.getUid = this.getUid.bind(this)
    this.addScroll = this.addScroll.bind(this)

    this.state = {
      isTrackScrolling: false,
      path: '/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT',
      article: {description: 'Blocking phishing attacks is a multi-part defense. Let\'s dig right into the settings and options to set up a defense.', featuredImage: 'https://i.ibb.co/GCjZHWg/edit-actions.png', id: 'GCOOUsSBT', datePublished: '2022/5/26', publish: true, slug: 'Protecting-email-against-phishing-attacks-GCOOUsSBT', sectionId: 'QScYfSu74', images: ['https://i.ibb.co/56sH69m/Anti-Phishing-settings.png', 'https://i.ibb.co/Y2Krcjb/phishing-email-threshold.png', 'https://i.ibb.co/1sSkMdP/impersonated-senders.png', 'https://i.ibb.co/Pz8CrW9/add-trusted-senders.png', 'https://i.ibb.co/wpdbkQT/mailbox-intelligence.png', 'https://i.ibb.co/yBfSvs8/intelligence-for-impersonation-protection.png', 'https://i.ibb.co/b6NhKGS/spoof-intelligence.png', 'https://i.ibb.co/xgR2tcd/tenant-allow-block-spoofing-link.png', 'https://i.ibb.co/st5Z8tq/allow-spoofing.png', 'https://i.ibb.co/jWYyVNS/edit-antiphishing-actions.png', 'https://i.ibb.co/0JyDW5R/spoofing-via.png', 'https://i.ibb.co/PCHLNdd/question-mark-image.png', 'https://i.ibb.co/567WyrD/appears-similiar-warning-message.png', 'https://i.ibb.co/r27V974/first-contant-warning.png', 'https://i.ibb.co/GCjZHWg/edit-actions.png', 'https://i.ibb.co/GCjZHWg/edit-actions.png'], article: {blocks: [{type: 'unstyled', key: 'c6vkr', depth: 0, inlineStyleRanges: [], entityRanges: [{offset: 243, key: 0, length: 33}], text: 'Phishing is "A technique for attempting to acquire sensitive data, such as bank account numbers, through a fraudulent solicitation in email or on a website, in which the perpetrator masquerades as a legitimate business or reputable person." - Computer Security Resource Center', data: {}}, {key: '8704g', inlineStyleRanges: [], text: 'Blocking phishing attacks is a multi-part defense. Let\'s dig right into the settings and options to set up a defense.', depth: 0, entityRanges: [], data: {}, type: 'unstyled'}, {text: 'Finding the Anti-phishing settings', type: 'header-two', depth: 0, entityRanges: [], key: '3jjn0', inlineStyleRanges: [], data: {}}, {entityRanges: [{offset: 70, key: 1, length: 13}], depth: 0, inlineStyleRanges: [], data: {}, text: '1. Open Microsoft 365 Defender > Policies & rules > Threat policies > Anti-phishing.', key: '5gn2d', type: 'unstyled'}, {entityRanges: [], inlineStyleRanges: [], key: '1rrkm', type: 'unstyled', text: '2. Click the Office365 AntiPhish Default (Default) policy.', depth: 0, data: {}}, {key: 'clnt', type: 'atomic', text: ' ', depth: 0, entityRanges: [{length: 1, offset: 0, key: 2}], data: {}, inlineStyleRanges: []}, {inlineStyleRanges: [{offset: 9, length: 24, style: 'BOLD'}], type: 'unstyled', text: '3. Click Edit protection settings.', key: '3387o', entityRanges: [], depth: 0, data: {}}, {text: 'From here you\'ll see the anti-phishing settings for your environment.', key: '5p8e5', depth: 0, inlineStyleRanges: [], entityRanges: [], type: 'unstyled', data: {}}, {entityRanges: [], key: '5go8n', type: 'header-three', depth: 0, text: 'Phishing email threshold', data: {}, inlineStyleRanges: []}, {type: 'atomic', depth: 0, inlineStyleRanges: [], text: ' ', entityRanges: [{offset: 0, key: 3, length: 1}], key: '6s9h3', data: {}}, {type: 'unstyled', depth: 0, data: {}, inlineStyleRanges: [], text: 'The phishing email threshold controls the sensitivity for applying machine learning to messages to determine what is considered phishing. The standard level is the least restrictive which will block the least amount of phishing emails. Most aggressive will block the most phishing emails but may catch some good emails too.', key: '25isl', entityRanges: []}, {key: '3qpii', depth: 0, text: 'Enable users to protect', inlineStyleRanges: [], type: 'header-three', entityRanges: [], data: {}}, {depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], data: {}, inlineStyleRanges: [], type: 'atomic', text: ' ', key: 'phn8'}, {key: 'fs7ei', type: 'unstyled', entityRanges: [], data: {}, text: 'This iswebsitewebsite where you can enable anti-impersonation. In short, if your CEO\'s name is Ben Franklin and email is ben.franklin@gitbit.org you can add both of those to the "Enable users to protect" field, and then any emails from Ben.Franklin@gmail.com would be blocked from coming into your organization.', inlineStyleRanges: [], depth: 0}, {text: 'Add trusted senders and domains', type: 'header-three', inlineStyleRanges: [], entityRanges: [], data: {}, key: 'ct542', depth: 0}, {key: 'dggmt', depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], type: 'atomic', data: {}, inlineStyleRanges: [], text: ' '}, {text: 'So now you\'ve set up a few users to stop impersonation attacks but now the CEO (Ben Franklin) is attempting to send emails to himself using his Gmail account (Ben.F*******@gmail.com) but he\'s getting blocked because Microsoft believes it\'s an impersonation attempt. Not to worry. We can whitelist the email using the Add trusted senders and domains section.', data: {}, depth: 0, type: 'unstyled', inlineStyleRanges: [{style: 'color-rgb(33,37,41)', length: 357, offset: 0}, {offset: 0, length: 357, style: 'bgcolor-rgb(255,255,255)'}, {offset: 0, length: 357, style: 'fontsize-16'}, {length: 357, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0}], entityRanges: [], key: '75p7v'}, {text: 'Mailbox Intelligence', type: 'header-three', data: {}, inlineStyleRanges: [], depth: 0, entityRanges: [], key: 'en33f'}, {key: '84qsq', depth: 0, inlineStyleRanges: [], entityRanges: [{length: 1, offset: 0, key: 6}], data: {}, type: 'atomic', text: ' '}, {key: '3tca9', data: {}, type: 'unstyled', text: 'Mailbox intelligence will also help catch acceptable impersonated users. In short, it will scan the user\'s mailbox to see if the user has sent or received from the user before. If they have then it won\'t flag the email as impersonation.', inlineStyleRanges: [], entityRanges: [], depth: 0}, {key: '90gp', entityRanges: [], type: 'unstyled', data: {}, depth: 0, inlineStyleRanges: [{length: 251, offset: 0, style: 'ITALIC'}], text: 'Note: The mailbox has to be located in Microsoft 365 for Mailbox Intelligence to work. So if you have on-premises mailboxes and you want to enable mailbox intelligence for those mailboxes they\'ll need to be migrated to Microsoft 365\'s Exchange Online.'}, {entityRanges: [], key: 'a5boc', depth: 0, data: {}, type: 'header-four', inlineStyleRanges: [{style: 'ITALIC', offset: 0, length: 41}], text: 'Intelligence for impersonation protection'}, {entityRanges: [{offset: 0, length: 1, key: 7}], type: 'atomic', depth: 0, data: {}, key: 'bffon', inlineStyleRanges: [], text: ' '}, {key: '1burs', type: 'unstyled', text: 'By enabling this setting you\'re allowing mailbox intelligence to take action on emails it deems are impersonated emails. It\'s recommended to enable this setting. I\'ll show you where to set the actions in the section below labeled "Setting actions to take on phishing emails"', entityRanges: [], inlineStyleRanges: [], depth: 0, data: {}}, {depth: 0, inlineStyleRanges: [], type: 'header-three', entityRanges: [], key: 'a2a8o', data: {}, text: 'Spoof Intelligence'}, {type: 'atomic', depth: 0, inlineStyleRanges: [], entityRanges: [{offset: 0, key: 8, length: 1}], data: {}, text: ' ', key: 'ct90u'}, {inlineStyleRanges: [], key: '6uqq3', entityRanges: [], depth: 0, type: 'unstyled', text: 'Spoofing is the creation of an email with an incorrect sender / from address. For example, if you\'re mailbox is set up in Microsoft 365 and you send an email from Microsoft 365 as yourself that isn\'t spoofing. But if someone sends an email pretending to be you but isn\'t from your authorized sending environment then those emails would be considered spoofed. Enable the spoof intelligence to block emails that aren\'t sent from the authorized email environment.', data: {}}, {inlineStyleRanges: [], type: 'header-four', entityRanges: [], key: '21vib', depth: 0, data: {}, text: 'Allowed spoofing'}, {depth: 0, data: {}, type: 'unstyled', entityRanges: [], inlineStyleRanges: [], key: 'c6f06', text: 'Sometimes, spoofing is acceptable. For example, you may receive a newsletter that comes from another email environment but isn\'t authorized as the sender\'s email server. They are actually from the sender but they aren\'t from their approved email environment. To allow someone to spoof perform the following:'}, {key: '6bs74', inlineStyleRanges: [], entityRanges: [], type: 'unstyled', text: '1. Click Tenant Allow/Block List Spoofing page.', depth: 0, data: {}}, {type: 'atomic', key: '9qcm1', depth: 0, data: {}, inlineStyleRanges: [], entityRanges: [{key: 9, offset: 0, length: 1}], text: ' '}, {type: 'unstyled', depth: 0, inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 3}, {style: 'BOLD', length: 12, offset: 22}, {style: 'BOLD', length: 22, offset: 39}, {length: 10, offset: 83, style: 'BOLD'}, {length: 13, offset: 104, style: 'BOLD'}, {offset: 125, style: 'BOLD', length: 3}], entityRanges: [], data: {}, text: '2. Click Add. Add the spoofed user and sending infrastructure to the list. Set the spoof type and click Allow / Block. Click Add.', key: '5sirm'}, {key: 'aknrf', data: {}, entityRanges: [{key: 10, offset: 0, length: 1}], depth: 0, inlineStyleRanges: [], text: ' ', type: 'atomic'}, {depth: 0, text: 'Settings the antiphishing actions', data: {}, type: 'header-two', entityRanges: [], inlineStyleRanges: [], key: '67jo0'}, {type: 'unstyled', key: 'fn0qk', inlineStyleRanges: [], text: 'To set what happens when a phishing attempt is found perform the following:', data: {}, entityRanges: [], depth: 0}, {depth: 0, data: {'text-align': 'left'}, key: 'dcvhs', entityRanges: [{offset: 70, key: 11, length: 13}], inlineStyleRanges: [{offset: 0, style: 'color-rgb(33,37,41)', length: 84}, {length: 84, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {style: 'fontsize-16', offset: 0, length: 84}, {length: 84, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {style: 'color-rgb(13,110,253)', length: 13, offset: 70}, {length: 13, style: 'UNDERLINE', offset: 70}], text: '1. Open Microsoft 365 Defender > Policies & rules > Threat policies > Anti-phishing.', type: 'unstyled'}, {entityRanges: [], depth: 0, text: '2. Click the Office365 AntiPhish Default (Default) policy.', data: {'text-align': 'left'}, key: '3lb7h', inlineStyleRanges: [{length: 58, style: 'color-rgb(33,37,41)', offset: 0}, {length: 58, style: 'bgcolor-rgb(255,255,255)', offset: 0}, {offset: 0, style: 'fontsize-16', length: 58}, {length: 58, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0}], type: 'unstyled'}, {depth: 0, inlineStyleRanges: [{style: 'color-rgb(33,37,41)', length: 38, offset: 0}, {length: 38, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {offset: 0, length: 38, style: 'fontsize-16'}, {length: 38, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 12, offset: 25, style: 'BOLD'}], text: '3. Scroll down and click Edit actions.', type: 'unstyled', data: {}, entityRanges: [], key: '767pc'}, {data: {}, entityRanges: [{offset: 0, key: 12, length: 1}], key: '1pl5i', inlineStyleRanges: [], text: ' ', depth: 0, type: 'atomic'}, {entityRanges: [], text: '', inlineStyleRanges: [], key: 'd15c5', depth: 0, data: {}, type: 'unstyled'}, {type: 'atomic', text: ' ', key: '1n65j', depth: 0, inlineStyleRanges: [], entityRanges: [{key: 13, length: 1, offset: 0}], data: {}}, {data: {}, text: 'If message is detected as an impersonated user: This is where you can set what happens when a message is sent from an impersonated user.', depth: 0, entityRanges: [], key: 'fa824', inlineStyleRanges: [{offset: 0, length: 46, style: 'BOLD'}], type: 'unstyled'}, {entityRanges: [], key: '8gup4', depth: 0, data: {}, text: 'If message is detected as an impersonated domain: This is where you can set what happens when a message is sent from an impersonated domain.', type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', length: 48, offset: 0}]}, {type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', offset: 0, length: 52}], text: 'If Mailbox Intelligence detects an impersonated user: This is where you can set what happens when mailbox intelligence detects a phishing attempt. ', data: {}, entityRanges: [], key: 'a4fki', depth: 0}, {text: 'If message is detected as spoof: This setting allows you to handle messages that are seen as spoofs.', type: 'unstyled', depth: 0, data: {}, inlineStyleRanges: [{length: 31, style: 'BOLD', offset: 0}], key: '58thq', entityRanges: []}, {inlineStyleRanges: [], text: 'The Safety tips & indicators section shows a message in Outlook stating there may be something not safe about the emails.', depth: 0, data: {}, type: 'unstyled', entityRanges: [], key: '2tlio'}, {entityRanges: [], inlineStyleRanges: [{length: 43, offset: 0, style: 'BOLD'}], text: 'Show first contact safety tip (Recommended) setting will show a message when you receive an email the first time from a user.', depth: 0, key: '1rm4l', data: {}, type: 'unstyled'}, {inlineStyleRanges: [], key: 'faktu', depth: 0, text: ' ', data: {}, type: 'atomic', entityRanges: [{length: 1, key: 14, offset: 0}]}, {entityRanges: [], text: 'Show user impersonation safety tip checkbox will show you a message when the name of the person you received an email from is similar to someone else you\'ve received an email from. The message will read "This sender appears to be similar to someone who previously sent you email, but may not be that person."', key: 'dt4fu', inlineStyleRanges: [{offset: 0, style: 'BOLD', length: 34}], type: 'unstyled', depth: 0, data: {}}, {data: {}, entityRanges: [{offset: 0, length: 1, key: 15}], inlineStyleRanges: [], text: ' ', type: 'atomic', key: '21e2g', depth: 0}, {text: 'The Show domain impersonation safety tip will show a message when you receive an email from an external domain that is similar to one of your own domains. The message will read "This sender might be impersonating a domain that\'s associated with your organization"', entityRanges: [], data: {}, depth: 0, type: 'unstyled', inlineStyleRanges: [{offset: 4, style: 'BOLD', length: 36}], key: '7mmd5'}, {key: 'c61bq', data: {}, inlineStyleRanges: [{style: 'BOLD', length: 53, offset: 4}], entityRanges: [], depth: 0, type: 'unstyled', text: 'The Show user impersonation unusual characters safety tip message will appear when there are unusual characters in the sender\'s email address. The message will read \nThe email address John.Gruber@Gitb1t.org includes unexpected letters or numbers. We recommend you don\'t interact with this message."'}, {type: 'unstyled', inlineStyleRanges: [{offset: 4, style: 'BOLD', length: 46}], depth: 0, key: 'bcd9t', text: 'The Show (?) for unauthenticated senders for spoof checkbox will add a question mark (?) to the sender\'s picture if the sender doesn\'t pass SPF or DKIM and the message fails to pass DMARC checks.', entityRanges: [], data: {}}, {type: 'atomic', entityRanges: [{key: 16, length: 1, offset: 0}], text: ' ', key: '2kog2', depth: 0, inlineStyleRanges: [], data: {}}, {inlineStyleRanges: [{length: 14, style: 'BOLD', offset: 4}], type: 'unstyled', text: 'The Show "via" tag will display a via in the from part of the message. For example, it will show Kendra.Gruber@gruber12.onmicrosoft.com via sendpulse.me', entityRanges: [], key: '7va6u', depth: 0, data: {}}, {depth: 0, entityRanges: [{length: 1, key: 17, offset: 0}], inlineStyleRanges: [], data: {}, key: 'cf2kq', text: ' ', type: 'atomic'}, {depth: 0, inlineStyleRanges: [], entityRanges: [], key: 'aqegr', type: 'unstyled', text: '\n', data: {}}], entityMap: {0: {mutability: 'MUTABLE', type: 'LINK', data: {url: 'https://csrc.nist.gov/glossary/term/phishing', targetOption: '_blank'}}, 1: {data: {targetOption: '_blank', url: 'https://security.microsoft.com/antiphishing'}, type: 'LINK', mutability: 'MUTABLE'}, 2: {type: 'IMAGE', data: {alignment: 'none', width: 'auto', alt: 'Anti-phishing email settings', src: 'https://i.ibb.co/56sH69m/Anti-Phishing-settings.png', height: 'auto'}, mutability: 'MUTABLE'}, 3: {data: {src: 'https://i.ibb.co/Y2Krcjb/phishing-email-threshold.png', alignment: 'none', width: 'auto', height: 'auto', alt: 'Phishing email threshold'}, type: 'IMAGE', mutability: 'MUTABLE'}, 4: {type: 'IMAGE', mutability: 'MUTABLE', data: {height: 'auto', alignment: 'none', src: 'https://i.ibb.co/1sSkMdP/impersonated-senders.png', width: 'auto', alt: 'Blocking users from being impersonated'}}, 5: {data: {height: 'auto', alt: 'Add trusted senders', src: 'https://i.ibb.co/Pz8CrW9/add-trusted-senders.png', alignment: 'none', width: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 6: {data: {width: 'auto', alt: 'Mailbox intelligence setting', src: 'https://i.ibb.co/wpdbkQT/mailbox-intelligence.png', height: 'auto', alignment: 'none'}, type: 'IMAGE', mutability: 'MUTABLE'}, 7: {mutability: 'MUTABLE', type: 'IMAGE', data: {alt: 'Intelligence for impersonation protection', width: 'auto', alignment: 'none', height: 'auto', src: 'https://i.ibb.co/yBfSvs8/intelligence-for-impersonation-protection.png'}}, 8: {type: 'IMAGE', data: {width: 'auto', alignment: 'none', alt: 'Spoof Intelligence', src: 'https://i.ibb.co/b6NhKGS/spoof-intelligence.png', height: 'auto'}, mutability: 'MUTABLE'}, 9: {type: 'IMAGE', data: {width: 'auto', src: 'https://i.ibb.co/xgR2tcd/tenant-allow-block-spoofing-link.png', alignment: 'none', height: 'auto', alt: 'Tenant allow/block list spoofing page'}, mutability: 'MUTABLE'}, 10: {type: 'IMAGE', data: {src: 'https://i.ibb.co/st5Z8tq/allow-spoofing.png', width: 'auto', alignment: 'none', alt: 'Allow spoofing', height: 'auto'}, mutability: 'MUTABLE'}, 11: {mutability: 'MUTABLE', data: {_map: {data: {title: '<span data-offset-key="5gn2d-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">Anti-phishing</span></span>', targetOption: '_blank', url: 'https://security.microsoft.com/antiphishing'}, type: 'LINK', mutability: 'MUTABLE'}, url: 'https://security.microsoft.com/antiphishing', targetOption: '_blank', title: '<span data-offset-key="5gn2d-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">Anti-phishing</span></span>'}, type: 'LINK'}, 12: {type: 'IMAGE', mutability: 'MUTABLE', data: {height: 'auto', alignment: 'none', alt: 'Edit antiphishing actions', width: 'auto', src: 'https://i.ibb.co/jWYyVNS/edit-antiphishing-actions.png'}}, 13: {mutability: 'MUTABLE', type: 'IMAGE', data: {height: 'auto', alignment: 'none', src: 'https://i.ibb.co/GCjZHWg/edit-actions.png', width: 'auto', alt: 'Edit antiphishing actions'}}, 14: {type: 'IMAGE', mutability: 'MUTABLE', data: {alt: 'First contact antiphishing email warning', src: 'https://i.ibb.co/r27V974/first-contant-warning.png', width: 'auto', alignment: 'none', height: 'auto'}}, 15: {data: {src: 'https://i.ibb.co/567WyrD/appears-similiar-warning-message.png', alignment: 'none', alt: 'appears similar to someone who previously send you email', height: 'auto', width: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 16: {type: 'IMAGE', mutability: 'MUTABLE', data: {alignment: 'none', width: 'auto', height: 'auto', src: 'https://i.ibb.co/PCHLNdd/question-mark-image.png', alt: 'Show (?) for unauthenticated senders for spoof'}}, 17: {data: {height: 'auto', src: 'https://i.ibb.co/0JyDW5R/spoofing-via.png', width: 'auto', alignment: 'none', alt: 'Spoofing Via'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, title: 'Protecting email against phishing attacks', type: 'article'},
      nextContentSlug: 'Simulating-attacks-with-Microsoft-365-GG4cMY8pK',
      previousContentSlug: 'Protect-your-email-environment-from-malicious-actors-6HUOr7qbL',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged(this.getUid)
    this.addScroll()
  }

  getUid(user) {
    if (user) {
      getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
        if (!userAcct.completedContent)
          userAcct.completedContent = []

        this.setState({userAcct})
      })
    }
  }

  addScroll() {
    if (isBrowser()) {
      const el = document.getElementById('bottom-of-article')
      const rect = el.getBoundingClientRect()
      bottomOfArticle = rect.top
      document.addEventListener('scroll', this.trackScrolling)
      this.setState({isTrackScrolling: true})
    }
  }

  componentWillUnmount() {
    if (isBrowser() && this.state.isTrackScrolling)
      document.removeEventListener('scroll', this.trackScrolling)

    this.onAuthStateChangedListener()
  }

  trackScrolling() {
    if (bottomOfArticle && bottomOfArticle <= window.scrollY+window.innerHeight)
      this.setHasCompletedContent(true)
  }

  setHasCompletedContent(val) {
    if (val === true) {
      document.removeEventListener('scroll', this.trackScrolling)
      this.setState({isTrackScrolling: false})

      if (this.state.userAcct.id) {
        const userAcct = this.state.userAcct

        if (!userAcct.completedContent.includes(this.state.article.id)) {
          userAcct.completedContent.push(this.state.article.id)
          this.setState({userAcct})
          saveDoc('courses/MS-500/users', userAcct)
        }
      }
    }
  }

  render() {
    const jsonLd = {
      headline: this.state.article.title,
      datePublished: this.state.article.datePublished,
      keywords: [
        'Microsoft',
        'Microsoft 365',
        'Office 365',
        'MS-500',
        'Microsoft 365 Security Administration'
      ],
      author: {
        '@type': 'Person',
        name: 'John Gruber',
        url: 'https://medium.com/@gruberjl'
      }
    }

    return (
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={this.state.article.featuredImage} canonical={this.state.path} title={this.state.article.title} description={this.state.article.description}>
        <main>
          <style>
            {`main, h1, h2, h3, h4, h5, h6, p, span, li, a {
                font-family: Roboto, Helvetica, Arial, sans-serif;
                margin-bottom: 0.35em;
                word-break: break-word;
              }
              h1 {
                font-weight: 400;
                font-size: 3rem;
                line-height: 1.167;
                letter-spacing: 0em;
              }
              h2 {
                font-weight: 400;
                font-size: 2.125rem;
                line-height: 1.235;
                letter-spacing: 0.00735em;
              }
              h3 {
                font-weight: 400;
                font-size: 1.5rem;
                line-height: 1.334;
                letter-spacing: 0em;
              }
              h4 {
                font-weight: 500;
                font-size: 1.25rem;
                line-height: 1.6;
                letter-spacing: 0.0075em;
              }
              p, span, li, a {
                font-size: 1rem;
                line-height: 1.5;
                letter-spacing: 0.00938em;
              }
              img {
                max-width: 100%;
                margin: 0 auto;
                display: block;
              }
            `}
          </style>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={9}>
                <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                <div><p>Phishing is "A technique for attempting to acquire sensitive data, such as bank account numbers, through a fraudulent solicitation in email or on a website, in which the perpetrator masquerades as a legitimate business or reputable person." - <a href="https://csrc.nist.gov/glossary/term/phishing" target="_blank" rel="noreferrer">Computer Security Resource Center</a></p>
                  <p>Blocking phishing attacks is a multi-part defense. Let's dig right into the settings and options to set up a defense.</p>
                  <h2>Finding the Anti-phishing settings</h2>
                  <p>1. Open Microsoft 365 Defender &gt; Policies &amp; rules &gt; Threat policies &gt; <a href="https://security.microsoft.com/antiphishing" target="_blank" rel="noreferrer">Anti-phishing</a>.</p>
                  <p>2. Click the Office365 AntiPhish Default (Default) policy.</p>
                  <div ><img src="https://i.ibb.co/56sH69m/Anti-Phishing-settings.png" alt="Anti-phishing email settings" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Edit protection settings</strong>.</p>
                  <p>From here you'll see the anti-phishing settings for your environment.</p>
                  <h3>Phishing email threshold</h3>
                  <div ><img src="https://i.ibb.co/Y2Krcjb/phishing-email-threshold.png" alt="Phishing email threshold" style="height: auto;width: auto" /></div>
                  <p>The phishing email threshold controls the sensitivity for applying machine learning to messages to determine what is considered phishing. The standard level is the least restrictive which will block the least amount of phishing emails. Most aggressive will block the most phishing emails but may catch some good emails too.</p>
                  <h3>Enable users to protect</h3>
                  <div ><img src="https://i.ibb.co/1sSkMdP/impersonated-senders.png" alt="Blocking users from being impersonated" style="height: auto;width: auto" /></div>
                  <p>This iswebsitewebsite where you can enable anti-impersonation. In short, if your CEO's name is Ben Franklin and email is ben.franklin@gitbit.org you can add both of those to the "Enable users to protect" field, and then any emails from Ben.Franklin@gmail.com would be blocked from coming into your organization.</p>
                  <h3>Add trusted senders and domains</h3>
                  <div ><img src="https://i.ibb.co/Pz8CrW9/add-trusted-senders.png" alt="Add trusted senders" style="height: auto;width: auto" /></div>
                  <p><span >So now you've set up a few users to stop impersonation attacks but now the CEO (Ben Franklin) is attempting to send emails to himself using his Gmail account (Ben.F*******@gmail.com) but he's getting blocked because Microsoft believes it's an impersonation attempt. Not to worry. We can whitelist the email using the Add trusted senders and domains section.</span></p>
                  <h3>Mailbox Intelligence</h3>
                  <div ><img src="https://i.ibb.co/wpdbkQT/mailbox-intelligence.png" alt="Mailbox intelligence setting" style="height: auto;width: auto" /></div>
                  <p>Mailbox intelligence will also help catch acceptable impersonated users. In short, it will scan the user's mailbox to see if the user has sent or received from the user before. If they have then it won't flag the email as impersonation.</p>
                  <p><em>Note: The mailbox has to be located in Microsoft 365 for Mailbox Intelligence to work. So if you have on-premises mailboxes and you want to enable mailbox intelligence for those mailboxes they'll need to be migrated to Microsoft 365's Exchange Online.</em></p>
                  <h4><em>Intelligence for impersonation protection</em></h4>
                  <div ><img src="https://i.ibb.co/yBfSvs8/intelligence-for-impersonation-protection.png" alt="Intelligence for impersonation protection" style="height: auto;width: auto" /></div>
                  <p>By enabling this setting you're allowing mailbox intelligence to take action on emails it deems are impersonated emails. It's recommended to enable this setting. I'll show you where to set the actions in the section below labeled "Setting actions to take on phishing emails"</p>
                  <h3>Spoof Intelligence</h3>
                  <div ><img src="https://i.ibb.co/b6NhKGS/spoof-intelligence.png" alt="Spoof Intelligence" style="height: auto;width: auto" /></div>
                  <p>Spoofing is the creation of an email with an incorrect sender / from address. For example, if you're mailbox is set up in Microsoft 365 and you send an email from Microsoft 365 as yourself that isn't spoofing. But if someone sends an email pretending to be you but isn't from your authorized sending environment then those emails would be considered spoofed. Enable the spoof intelligence to block emails that aren't sent from the authorized email environment.</p>
                  <h4>Allowed spoofing</h4>
                  <p>Sometimes, spoofing is acceptable. For example, you may receive a newsletter that comes from another email environment but isn't authorized as the sender's email server. They are actually from the sender but they aren't from their approved email environment. To allow someone to spoof perform the following:</p>
                  <p>1. Click Tenant Allow/Block List Spoofing page.</p>
                  <div ><img src="https://i.ibb.co/xgR2tcd/tenant-allow-block-spoofing-link.png" alt="Tenant allow/block list spoofing page" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Add</strong>. Add the <strong>spoofed user</strong> and <strong>sending infrastructure</strong> to the list. Set the <strong>spoof type</strong> and click <strong>Allow / Block</strong>. Click <strong>Add</strong>.</p>
                  <div ><img src="https://i.ibb.co/st5Z8tq/allow-spoofing.png" alt="Allow spoofing" style="height: auto;width: auto" /></div>
                  <h2>Settings the antiphishing actions</h2>
                  <p>To set what happens when a phishing attempt is found perform the following:</p>
                  <p ><span >1. Open Microsoft 365 Defender &gt; Policies &amp; rules &gt; Threat policies &gt; </span><a href="https://security.microsoft.com/antiphishing" target="_blank" rel="noreferrer"><span ><ins>Anti-phishing</ins></span></a><span >.</span></p>
                  <p ><span >2. Click the Office365 AntiPhish Default (Default) policy.</span></p>
                  <p><span >3. Scroll down and click <strong>Edit actions</strong>.</span></p>
                  <div ><img src="https://i.ibb.co/jWYyVNS/edit-antiphishing-actions.png" alt="Edit antiphishing actions" style="height: auto;width: auto" /></div>
                  <p />
                  <div ><img src="https://i.ibb.co/GCjZHWg/edit-actions.png" alt="Edit antiphishing actions" style="height: auto;width: auto" /></div>
                  <p><strong>If message is detected as an impersonated user</strong>: This is where you can set what happens when a message is sent from an impersonated user.</p>
                  <p><strong>If message is detected as an impersonated domain</strong>: This is where you can set what happens when a message is sent from an impersonated domain.</p>
                  <p><strong>If Mailbox Intelligence detects an impersonated user</strong>: This is where you can set what happens when mailbox intelligence detects a phishing attempt.&nbsp;</p>
                  <p><strong>If message is detected as spoof</strong>: This setting allows you to handle messages that are seen as spoofs.</p>
                  <p>The Safety tips &amp; indicators section shows a message in Outlook stating there may be something not safe about the emails.</p>
                  <p><strong>Show first contact safety tip (Recommended)</strong> setting will show a message when you receive an email the first time from a user.</p>
                  <div ><img src="https://i.ibb.co/r27V974/first-contant-warning.png" alt="First contact antiphishing email warning" style="height: auto;width: auto" /></div>
                  <p><strong>Show user impersonation safety tip</strong> checkbox will show you a message when the name of the person you received an email from is similar to someone else you've received an email from. The message will read "This sender appears to be similar to someone who previously sent you email, but may not be that person."</p>
                  <div ><img src="https://i.ibb.co/567WyrD/appears-similiar-warning-message.png" alt="appears similar to someone who previously send you email" style="height: auto;width: auto" /></div>
                  <p>The <strong>Show domain impersonation safety tip</strong> will show a message when you receive an email from an external domain that is similar to one of your own domains. The message will read "This sender might be impersonating a domain that's associated with your organization"</p>
                  <p>The <strong>Show user impersonation unusual characters safety tip</strong> message will appear when there are unusual characters in the sender's email address. The message will read <br />The email address John.Gruber@Gitb1t.org includes unexpected letters or numbers. We recommend you don't interact with this message."</p>
                  <p>The <strong>Show (?) for unauthenticated senders for spoof</strong> checkbox will add a question mark (?) to the sender's picture if the sender doesn't pass SPF or DKIM and the message fails to pass DMARC checks.</p>
                  <div ><img src="https://i.ibb.co/PCHLNdd/question-mark-image.png" alt="Show (?) for unauthenticated senders for spoof" style="height: auto;width: auto" /></div>
                  <p>The <strong>Show "via" tag</strong> will display a via in the from part of the message. For example, it will show Kendra.Gruber@gruber12.onmicrosoft.com via sendpulse.me</p>
                  <div ><img src="https://i.ibb.co/0JyDW5R/spoofing-via.png" alt="Spoofing Via" style="height: auto;width: auto" /></div>
                  <p><br /></p>
                </div>
                <div id="bottom-of-article" />
                <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 3}}>
                  <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
                  <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos />}>Next</Button>
                </Box>
              </Grid>
              <Grid item lg={3} sx={{mt: 3}}>
                <ContentsRead completedContent={this.state.userAcct.completedContent} />
              </Grid>
            </Grid>
          </Container>
        </main>
      </Page>
    )
  }
}

export default ArticlePage
