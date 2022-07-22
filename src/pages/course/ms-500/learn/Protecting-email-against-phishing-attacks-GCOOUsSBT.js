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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [{key: 0, length: 33, offset: 243}], inlineStyleRanges: [], key: 'c6vkr', text: 'Phishing is "A technique for attempting to acquire sensitive data, such as bank account numbers, through a fraudulent solicitation in email or on a website, in which the perpetrator masquerades as a legitimate business or reputable person." - Computer Security Resource Center', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8704g', text: 'Blocking phishing attacks is a multi-part defense. Let\'s dig right into the settings and options to set up a defense.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3jjn0', text: 'Finding the Anti-phishing settings', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 13, offset: 70}], inlineStyleRanges: [], key: '5gn2d', text: '1. Open Microsoft 365 Defender > Policies & rules > Threat policies > Anti-phishing.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1rrkm', text: '2. Click the Office365 AntiPhish Default (Default) policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: 'clnt', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 24, offset: 9, style: 'BOLD'}], key: '3387o', text: '3. Click Edit protection settings.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5p8e5', text: 'From here you\'ll see the anti-phishing settings for your environment.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5go8n', text: 'Phishing email threshold', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: '6s9h3', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '25isl', text: 'The phishing email threshold controls the sensitivity for applying machine learning to messages to determine what is considered phishing. The standard level is the least restrictive which will block the least amount of phishing emails. Most aggressive will block the most phishing emails but may catch some good emails too.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3qpii', text: 'Enable users to protect', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: 'phn8', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fs7ei', text: 'This iswebsitewebsite where you can enable anti-impersonation. In short, if your CEO\'s name is Ben Franklin and email is ben.franklin@gitbit.org you can add both of those to the "Enable users to protect" field, and then any emails from Ben.Franklin@gmail.com would be blocked from coming into your organization.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ct542', text: 'Add trusted senders and domains', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: 'dggmt', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 357, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 357, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 357, offset: 0, style: 'fontsize-16'}, {length: 357, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '75p7v', text: 'So now you\'ve set up a few users to stop impersonation attacks but now the CEO (Ben Franklin) is attempting to send emails to himself using his Gmail account (Ben.F*******@gmail.com) but he\'s getting blocked because Microsoft believes it\'s an impersonation attempt. Not to worry. We can whitelist the email using the Add trusted senders and domains section.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'en33f', text: 'Mailbox Intelligence', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '84qsq', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3tca9', text: 'Mailbox intelligence will also help catch acceptable impersonated users. In short, it will scan the user\'s mailbox to see if the user has sent or received from the user before. If they have then it won\'t flag the email as impersonation.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 251, offset: 0, style: 'ITALIC'}], key: '90gp', text: 'Note: The mailbox has to be located in Microsoft 365 for Mailbox Intelligence to work. So if you have on-premises mailboxes and you want to enable mailbox intelligence for those mailboxes they\'ll need to be migrated to Microsoft 365\'s Exchange Online.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 41, offset: 0, style: 'ITALIC'}], key: 'a5boc', text: 'Intelligence for impersonation protection', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: 'bffon', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1burs', text: 'By enabling this setting you\'re allowing mailbox intelligence to take action on emails it deems are impersonated emails. It\'s recommended to enable this setting. I\'ll show you where to set the actions in the section below labeled "Setting actions to take on phishing emails"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a2a8o', text: 'Spoof Intelligence', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ct90u', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6uqq3', text: 'Spoofing is the creation of an email with an incorrect sender / from address. For example, if you\'re mailbox is set up in Microsoft 365 and you send an email from Microsoft 365 as yourself that isn\'t spoofing. But if someone sends an email pretending to be you but isn\'t from your authorized sending environment then those emails would be considered spoofed. Enable the spoof intelligence to block emails that aren\'t sent from the authorized email environment.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '21vib', text: 'Allowed spoofing', type: 'header-four'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c6f06', text: 'Sometimes, spoofing is acceptable. For example, you may receive a newsletter that comes from another email environment but isn\'t authorized as the sender\'s email server. They are actually from the sender but they aren\'t from their approved email environment. To allow someone to spoof perform the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6bs74', text: '1. Click Tenant Allow/Block List Spoofing page.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '9qcm1', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 3, offset: 9, style: 'BOLD'}, {length: 12, offset: 22, style: 'BOLD'}, {length: 22, offset: 39, style: 'BOLD'}, {length: 10, offset: 83, style: 'BOLD'}, {length: 13, offset: 104, style: 'BOLD'}, {length: 3, offset: 125, style: 'BOLD'}], key: '5sirm', text: '2. Click Add. Add the spoofed user and sending infrastructure to the list. Set the spoof type and click Allow / Block. Click Add.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: 'aknrf', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '67jo0', text: 'Settings the antiphishing actions', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fn0qk', text: 'To set what happens when a phishing attempt is found perform the following:', type: 'unstyled'}, {data: {'text-align': 'left'}, depth: 0, entityRanges: [{key: 11, length: 13, offset: 70}], inlineStyleRanges: [{length: 84, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 84, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 84, offset: 0, style: 'fontsize-16'}, {length: 84, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 13, offset: 70, style: 'color-rgb(13,110,253)'}, {length: 13, offset: 70, style: 'UNDERLINE'}], key: 'dcvhs', text: '1. Open Microsoft 365 Defender > Policies & rules > Threat policies > Anti-phishing.', type: 'unstyled'}, {data: {'text-align': 'left'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 58, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 58, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 58, offset: 0, style: 'fontsize-16'}, {length: 58, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '3lb7h', text: '2. Click the Office365 AntiPhish Default (Default) policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 38, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 38, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 38, offset: 0, style: 'fontsize-16'}, {length: 38, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 12, offset: 25, style: 'BOLD'}], key: '767pc', text: '3. Scroll down and click Edit actions.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: '1pl5i', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd15c5', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 13, length: 1, offset: 0}], inlineStyleRanges: [], key: '1n65j', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 46, offset: 0, style: 'BOLD'}], key: 'fa824', text: 'If message is detected as an impersonated user: This is where you can set what happens when a message is sent from an impersonated user.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 48, offset: 0, style: 'BOLD'}], key: '8gup4', text: 'If message is detected as an impersonated domain: This is where you can set what happens when a message is sent from an impersonated domain.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 52, offset: 0, style: 'BOLD'}], key: 'a4fki', text: 'If Mailbox Intelligence detects an impersonated user: This is where you can set what happens when mailbox intelligence detects a phishing attempt. ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 31, offset: 0, style: 'BOLD'}], key: '58thq', text: 'If message is detected as spoof: This setting allows you to handle messages that are seen as spoofs.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2tlio', text: 'The Safety tips & indicators section shows a message in Outlook stating there may be something not safe about the emails.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 43, offset: 0, style: 'BOLD'}], key: '1rm4l', text: 'Show first contact safety tip (Recommended) setting will show a message when you receive an email the first time from a user.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: 'faktu', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 34, offset: 0, style: 'BOLD'}], key: 'dt4fu', text: 'Show user impersonation safety tip checkbox will show you a message when the name of the person you received an email from is similar to someone else you\'ve received an email from. The message will read "This sender appears to be similar to someone who previously sent you email, but may not be that person."', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 15, length: 1, offset: 0}], inlineStyleRanges: [], key: '21e2g', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 36, offset: 4, style: 'BOLD'}], key: '7mmd5', text: 'The Show domain impersonation safety tip will show a message when you receive an email from an external domain that is similar to one of your own domains. The message will read "This sender might be impersonating a domain that\'s associated with your organization"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 53, offset: 4, style: 'BOLD'}], key: 'c61bq', text: 'The Show user impersonation unusual characters safety tip message will appear when there are unusual characters in the sender\'s email address. The message will read \nThe email address John.Gruber@Gitb1t.org includes unexpected letters or numbers. We recommend you don\'t interact with this message."', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 46, offset: 4, style: 'BOLD'}], key: 'bcd9t', text: 'The Show (?) for unauthenticated senders for spoof checkbox will add a question mark (?) to the sender\'s picture if the sender doesn\'t pass SPF or DKIM and the message fails to pass DMARC checks.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 16, length: 1, offset: 0}], inlineStyleRanges: [], key: '2kog2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 14, offset: 4, style: 'BOLD'}], key: '7va6u', text: 'The Show "via" tag will display a via in the from part of the message. For example, it will show Kendra.Gruber@gruber12.onmicrosoft.com via sendpulse.me', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], key: 'cf2kq', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aqegr', text: '\n', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://csrc.nist.gov/glossary/term/phishing'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {targetOption: '_blank', url: 'https://security.microsoft.com/antiphishing'}, mutability: 'MUTABLE', type: 'LINK'}, 10: {data: {alignment: 'none', alt: 'Allow spoofing', height: 'auto', src: 'https://i.ibb.co/st5Z8tq/allow-spoofing.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {_map: {data: {targetOption: '_blank', title: '<span data-offset-key="5gn2d-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">Anti-phishing</span></span>', url: 'https://security.microsoft.com/antiphishing'}, mutability: 'MUTABLE', type: 'LINK'}, targetOption: '_blank', title: '<span data-offset-key="5gn2d-1-0" style="box-sizing: border-box;"><span data-text="true" style="box-sizing: border-box;">Anti-phishing</span></span>', url: 'https://security.microsoft.com/antiphishing'}, mutability: 'MUTABLE', type: 'LINK'}, 12: {data: {alignment: 'none', alt: 'Edit antiphishing actions', height: 'auto', src: 'https://i.ibb.co/jWYyVNS/edit-antiphishing-actions.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {data: {alignment: 'none', alt: 'Edit antiphishing actions', height: 'auto', src: 'https://i.ibb.co/GCjZHWg/edit-actions.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 14: {data: {alignment: 'none', alt: 'First contact antiphishing email warning', height: 'auto', src: 'https://i.ibb.co/r27V974/first-contant-warning.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {data: {alignment: 'none', alt: 'appears similar to someone who previously send you email', height: 'auto', src: 'https://i.ibb.co/567WyrD/appears-similiar-warning-message.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 16: {data: {alignment: 'none', alt: 'Show (?) for unauthenticated senders for spoof', height: 'auto', src: 'https://i.ibb.co/PCHLNdd/question-mark-image.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 17: {data: {alignment: 'none', alt: 'Spoofing Via', height: 'auto', src: 'https://i.ibb.co/0JyDW5R/spoofing-via.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Anti-phishing email settings', height: 'auto', src: 'https://i.ibb.co/56sH69m/Anti-Phishing-settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Phishing email threshold', height: 'auto', src: 'https://i.ibb.co/Y2Krcjb/phishing-email-threshold.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Blocking users from being impersonated', height: 'auto', src: 'https://i.ibb.co/1sSkMdP/impersonated-senders.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Add trusted senders', height: 'auto', src: 'https://i.ibb.co/Pz8CrW9/add-trusted-senders.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Mailbox intelligence setting', height: 'auto', src: 'https://i.ibb.co/wpdbkQT/mailbox-intelligence.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Intelligence for impersonation protection', height: 'auto', src: 'https://i.ibb.co/yBfSvs8/intelligence-for-impersonation-protection.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'Spoof Intelligence', height: 'auto', src: 'https://i.ibb.co/b6NhKGS/spoof-intelligence.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Tenant allow/block list spoofing page', height: 'auto', src: 'https://i.ibb.co/xgR2tcd/tenant-allow-block-spoofing-link.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/5/26', description: 'Blocking phishing attacks is a multi-part defense. Let\'s dig right into the settings and options to set up a defense.', featuredImage: 'https://i.ibb.co/GCjZHWg/edit-actions.png', id: 'GCOOUsSBT', images: ['https://i.ibb.co/56sH69m/Anti-Phishing-settings.png', 'https://i.ibb.co/Y2Krcjb/phishing-email-threshold.png', 'https://i.ibb.co/1sSkMdP/impersonated-senders.png', 'https://i.ibb.co/Pz8CrW9/add-trusted-senders.png', 'https://i.ibb.co/wpdbkQT/mailbox-intelligence.png', 'https://i.ibb.co/yBfSvs8/intelligence-for-impersonation-protection.png', 'https://i.ibb.co/b6NhKGS/spoof-intelligence.png', 'https://i.ibb.co/xgR2tcd/tenant-allow-block-spoofing-link.png', 'https://i.ibb.co/st5Z8tq/allow-spoofing.png', 'https://i.ibb.co/jWYyVNS/edit-antiphishing-actions.png', 'https://i.ibb.co/0JyDW5R/spoofing-via.png', 'https://i.ibb.co/PCHLNdd/question-mark-image.png', 'https://i.ibb.co/567WyrD/appears-similiar-warning-message.png', 'https://i.ibb.co/r27V974/first-contant-warning.png', 'https://i.ibb.co/GCjZHWg/edit-actions.png', 'https://i.ibb.co/GCjZHWg/edit-actions.png'], publish: true, sectionId: 'QScYfSu74', slug: 'Protecting-email-against-phishing-attacks-GCOOUsSBT', title: 'Protecting email against phishing attacks', type: 'article'},
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
