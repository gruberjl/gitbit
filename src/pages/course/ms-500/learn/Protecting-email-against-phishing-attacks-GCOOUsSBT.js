import { h, Component } from "preact"
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

const removePaddingStyle = {
  padding: '0px'
}

const marginTop24Style = {
  marginTop: '24px'
}

const listItemStyle = {
  border: 'none',
  paddingTop: '12px',
  paddingBottom: '12px'
}

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.setHasCompletedContent = this.setHasCompletedContent.bind(this)

    this.state = {
      isTrackScrolling: false,
      path: '/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT',
      article: {"datePublished":"2022/5/26","featuredImage":"https://i.ibb.co/GCjZHWg/edit-actions.png","type":"article","images":["https://i.ibb.co/56sH69m/Anti-Phishing-settings.png","https://i.ibb.co/Y2Krcjb/phishing-email-threshold.png","https://i.ibb.co/1sSkMdP/impersonated-senders.png","https://i.ibb.co/Pz8CrW9/add-trusted-senders.png","https://i.ibb.co/wpdbkQT/mailbox-intelligence.png","https://i.ibb.co/yBfSvs8/intelligence-for-impersonation-protection.png","https://i.ibb.co/b6NhKGS/spoof-intelligence.png","https://i.ibb.co/xgR2tcd/tenant-allow-block-spoofing-link.png","https://i.ibb.co/st5Z8tq/allow-spoofing.png","https://i.ibb.co/jWYyVNS/edit-antiphishing-actions.png","https://i.ibb.co/0JyDW5R/spoofing-via.png","https://i.ibb.co/PCHLNdd/question-mark-image.png","https://i.ibb.co/567WyrD/appears-similiar-warning-message.png","https://i.ibb.co/r27V974/first-contant-warning.png","https://i.ibb.co/GCjZHWg/edit-actions.png","https://i.ibb.co/GCjZHWg/edit-actions.png"],"article":{"blocks":[{"entityRanges":[{"length":33,"key":0,"offset":243}],"type":"unstyled","text":"Phishing is \"A technique for attempting to acquire sensitive data, such as bank account numbers, through a fraudulent solicitation in email or on a website, in which the perpetrator masquerades as a legitimate business or reputable person.\" - Computer Security Resource Center","data":{},"inlineStyleRanges":[],"key":"c6vkr","depth":0},{"entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","depth":0,"text":"Blocking phishing attacks is a multi-part defense. Let's dig right into the settings and options to set up a defense.","data":{},"key":"8704g"},{"entityRanges":[],"depth":0,"inlineStyleRanges":[],"text":"Finding the Anti-phishing settings","type":"header-two","key":"3jjn0","data":{}},{"text":"1. Open Microsoft 365 Defender > Policies & rules > Threat policies > Anti-phishing.","inlineStyleRanges":[],"key":"5gn2d","type":"unstyled","depth":0,"data":{},"entityRanges":[{"length":13,"key":1,"offset":70}]},{"type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"1rrkm","text":"2. Click the Office365 AntiPhish Default (Default) policy.","depth":0},{"key":"clnt","depth":0,"type":"atomic","inlineStyleRanges":[],"data":{},"text":" ","entityRanges":[{"length":1,"key":2,"offset":0}]},{"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":24}],"data":{},"text":"3. Click Edit protection settings.","depth":0,"type":"unstyled","entityRanges":[],"key":"3387o"},{"depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"5p8e5","text":"From here you'll see the anti-phishing settings for your environment.","type":"unstyled"},{"data":{},"type":"header-three","depth":0,"key":"5go8n","entityRanges":[],"inlineStyleRanges":[],"text":"Phishing email threshold"},{"type":"atomic","data":{},"text":" ","depth":0,"key":"6s9h3","entityRanges":[{"length":1,"key":3,"offset":0}],"inlineStyleRanges":[]},{"depth":0,"key":"25isl","text":"The phishing email threshold controls the sensitivity for applying machine learning to messages to determine what is considered phishing. The standard level is the least restrictive which will block the least amount of phishing emails. Most aggressive will block the most phishing emails but may catch some good emails too.","data":{},"entityRanges":[],"inlineStyleRanges":[],"type":"unstyled"},{"inlineStyleRanges":[],"key":"3qpii","depth":0,"entityRanges":[],"data":{},"type":"header-three","text":"Enable users to protect"},{"inlineStyleRanges":[],"type":"atomic","entityRanges":[{"offset":0,"length":1,"key":4}],"key":"phn8","depth":0,"data":{},"text":" "},{"depth":0,"key":"fs7ei","inlineStyleRanges":[],"data":{},"entityRanges":[],"text":"This iswebsitewebsite where you can enable anti-impersonation. In short, if your CEO's name is Ben Franklin and email is ben.franklin@gitbit.org you can add both of those to the \"Enable users to protect\" field, and then any emails from Ben.Franklin@gmail.com would be blocked from coming into your organization.","type":"unstyled"},{"type":"header-three","key":"ct542","inlineStyleRanges":[],"entityRanges":[],"depth":0,"text":"Add trusted senders and domains","data":{}},{"type":"atomic","data":{},"text":" ","inlineStyleRanges":[],"key":"dggmt","depth":0,"entityRanges":[{"offset":0,"length":1,"key":5}]},{"entityRanges":[],"depth":0,"type":"unstyled","key":"75p7v","inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":357,"offset":0},{"length":357,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","offset":0,"length":357},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":357}],"data":{},"text":"So now you've set up a few users to stop impersonation attacks but now the CEO (Ben Franklin) is attempting to send emails to himself using his Gmail account (Ben.F*******@gmail.com) but he's getting blocked because Microsoft believes it's an impersonation attempt. Not to worry. We can whitelist the email using the Add trusted senders and domains section."},{"inlineStyleRanges":[],"data":{},"key":"en33f","depth":0,"entityRanges":[],"type":"header-three","text":"Mailbox Intelligence"},{"data":{},"text":" ","key":"84qsq","depth":0,"entityRanges":[{"length":1,"offset":0,"key":6}],"inlineStyleRanges":[],"type":"atomic"},{"text":"Mailbox intelligence will also help catch acceptable impersonated users. In short, it will scan the user's mailbox to see if the user has sent or received from the user before. If they have then it won't flag the email as impersonation.","key":"3tca9","depth":0,"entityRanges":[],"data":{},"inlineStyleRanges":[],"type":"unstyled"},{"inlineStyleRanges":[{"style":"ITALIC","length":251,"offset":0}],"depth":0,"type":"unstyled","entityRanges":[],"key":"90gp","text":"Note: The mailbox has to be located in Microsoft 365 for Mailbox Intelligence to work. So if you have on-premises mailboxes and you want to enable mailbox intelligence for those mailboxes they'll need to be migrated to Microsoft 365's Exchange Online.","data":{}},{"depth":0,"inlineStyleRanges":[{"length":41,"style":"ITALIC","offset":0}],"text":"Intelligence for impersonation protection","data":{},"entityRanges":[],"key":"a5boc","type":"header-four"},{"type":"atomic","inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":7}],"depth":0,"key":"bffon","text":" ","data":{}},{"text":"By enabling this setting you're allowing mailbox intelligence to take action on emails it deems are impersonated emails. It's recommended to enable this setting. I'll show you where to set the actions in the section below labeled \"Setting actions to take on phishing emails\"","data":{},"inlineStyleRanges":[],"entityRanges":[],"key":"1burs","depth":0,"type":"unstyled"},{"depth":0,"entityRanges":[],"key":"a2a8o","data":{},"type":"header-three","text":"Spoof Intelligence","inlineStyleRanges":[]},{"type":"atomic","depth":0,"key":"ct90u","inlineStyleRanges":[],"data":{},"entityRanges":[{"key":8,"length":1,"offset":0}],"text":" "},{"inlineStyleRanges":[],"depth":0,"key":"6uqq3","entityRanges":[],"type":"unstyled","data":{},"text":"Spoofing is the creation of an email with an incorrect sender / from address. For example, if you're mailbox is set up in Microsoft 365 and you send an email from Microsoft 365 as yourself that isn't spoofing. But if someone sends an email pretending to be you but isn't from your authorized sending environment then those emails would be considered spoofed. Enable the spoof intelligence to block emails that aren't sent from the authorized email environment."},{"data":{},"entityRanges":[],"type":"header-four","inlineStyleRanges":[],"text":"Allowed spoofing","depth":0,"key":"21vib"},{"data":{},"entityRanges":[],"text":"Sometimes, spoofing is acceptable. For example, you may receive a newsletter that comes from another email environment but isn't authorized as the sender's email server. They are actually from the sender but they aren't from their approved email environment. To allow someone to spoof perform the following:","type":"unstyled","inlineStyleRanges":[],"key":"c6f06","depth":0},{"data":{},"text":"1. Click Tenant Allow/Block List Spoofing page.","inlineStyleRanges":[],"depth":0,"key":"6bs74","entityRanges":[],"type":"unstyled"},{"entityRanges":[{"length":1,"offset":0,"key":9}],"text":" ","depth":0,"type":"atomic","inlineStyleRanges":[],"key":"9qcm1","data":{}},{"type":"unstyled","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":3},{"offset":22,"style":"BOLD","length":12},{"style":"BOLD","length":22,"offset":39},{"style":"BOLD","length":10,"offset":83},{"style":"BOLD","length":13,"offset":104},{"length":3,"style":"BOLD","offset":125}],"entityRanges":[],"key":"5sirm","depth":0,"text":"2. Click Add. Add the spoofed user and sending infrastructure to the list. Set the spoof type and click Allow / Block. Click Add.","data":{}},{"text":" ","entityRanges":[{"length":1,"key":10,"offset":0}],"key":"aknrf","data":{},"depth":0,"type":"atomic","inlineStyleRanges":[]},{"key":"67jo0","text":"Settings the antiphishing actions","entityRanges":[],"depth":0,"data":{},"inlineStyleRanges":[],"type":"header-two"},{"inlineStyleRanges":[],"key":"fn0qk","data":{},"depth":0,"type":"unstyled","text":"To set what happens when a phishing attempt is found perform the following:","entityRanges":[]},{"entityRanges":[{"offset":70,"length":13,"key":11}],"depth":0,"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":0,"length":84},{"style":"bgcolor-rgb(255,255,255)","length":84,"offset":0},{"style":"fontsize-16","length":84,"offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":84},{"style":"color-rgb(13,110,253)","length":13,"offset":70},{"style":"UNDERLINE","length":13,"offset":70}],"text":"1. Open Microsoft 365 Defender > Policies & rules > Threat policies > Anti-phishing.","type":"unstyled","key":"dcvhs","data":{"text-align":"left"}},{"entityRanges":[],"data":{"text-align":"left"},"text":"2. Click the Office365 AntiPhish Default (Default) policy.","type":"unstyled","inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":58},{"style":"bgcolor-rgb(255,255,255)","length":58,"offset":0},{"style":"fontsize-16","length":58,"offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":58}],"depth":0,"key":"3lb7h"},{"text":"3. Scroll down and click Edit actions.","key":"767pc","data":{},"depth":0,"entityRanges":[],"type":"unstyled","inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":38,"offset":0},{"offset":0,"length":38,"style":"bgcolor-rgb(255,255,255)"},{"offset":0,"length":38,"style":"fontsize-16"},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":38,"offset":0},{"length":12,"style":"BOLD","offset":25}]},{"type":"atomic","depth":0,"key":"1pl5i","text":" ","inlineStyleRanges":[],"entityRanges":[{"length":1,"key":12,"offset":0}],"data":{}},{"data":{},"type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"key":"d15c5","depth":0,"text":""},{"entityRanges":[{"key":13,"length":1,"offset":0}],"depth":0,"key":"1n65j","data":{},"text":" ","type":"atomic","inlineStyleRanges":[]},{"inlineStyleRanges":[{"offset":0,"style":"BOLD","length":46}],"type":"unstyled","entityRanges":[],"key":"fa824","text":"If message is detected as an impersonated user: This is where you can set what happens when a message is sent from an impersonated user.","data":{},"depth":0},{"entityRanges":[],"data":{},"depth":0,"text":"If message is detected as an impersonated domain: This is where you can set what happens when a message is sent from an impersonated domain.","type":"unstyled","inlineStyleRanges":[{"length":48,"style":"BOLD","offset":0}],"key":"8gup4"},{"text":"If Mailbox Intelligence detects an impersonated user: This is where you can set what happens when mailbox intelligence detects a phishing attempt. ","type":"unstyled","depth":0,"key":"a4fki","entityRanges":[],"inlineStyleRanges":[{"length":52,"style":"BOLD","offset":0}],"data":{}},{"depth":0,"inlineStyleRanges":[{"offset":0,"style":"BOLD","length":31}],"data":{},"text":"If message is detected as spoof: This setting allows you to handle messages that are seen as spoofs.","type":"unstyled","entityRanges":[],"key":"58thq"},{"inlineStyleRanges":[],"key":"2tlio","data":{},"type":"unstyled","depth":0,"entityRanges":[],"text":"The Safety tips & indicators section shows a message in Outlook stating there may be something not safe about the emails."},{"entityRanges":[],"inlineStyleRanges":[{"length":43,"offset":0,"style":"BOLD"}],"text":"Show first contact safety tip (Recommended) setting will show a message when you receive an email the first time from a user.","data":{},"depth":0,"key":"1rm4l","type":"unstyled"},{"depth":0,"inlineStyleRanges":[],"data":{},"key":"faktu","text":" ","entityRanges":[{"length":1,"offset":0,"key":14}],"type":"atomic"},{"key":"dt4fu","depth":0,"type":"unstyled","data":{},"text":"Show user impersonation safety tip checkbox will show you a message when the name of the person you received an email from is similar to someone else you've received an email from. The message will read \"This sender appears to be similar to someone who previously sent you email, but may not be that person.\"","entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":34,"offset":0}]},{"text":" ","type":"atomic","key":"21e2g","inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":15}],"depth":0,"data":{}},{"text":"The Show domain impersonation safety tip will show a message when you receive an email from an external domain that is similar to one of your own domains. The message will read \"This sender might be impersonating a domain that's associated with your organization\"","key":"7mmd5","depth":0,"entityRanges":[],"data":{},"type":"unstyled","inlineStyleRanges":[{"offset":4,"style":"BOLD","length":36}]},{"text":"The Show user impersonation unusual characters safety tip message will appear when there are unusual characters in the sender's email address. The message will read \nThe email address John.Gruber@Gitb1t.org includes unexpected letters or numbers. We recommend you don't interact with this message.\"","key":"c61bq","entityRanges":[],"depth":0,"data":{},"inlineStyleRanges":[{"style":"BOLD","offset":4,"length":53}],"type":"unstyled"},{"inlineStyleRanges":[{"offset":4,"style":"BOLD","length":46}],"entityRanges":[],"depth":0,"type":"unstyled","key":"bcd9t","text":"The Show (?) for unauthenticated senders for spoof checkbox will add a question mark (?) to the sender's picture if the sender doesn't pass SPF or DKIM and the message fails to pass DMARC checks.","data":{}},{"depth":0,"entityRanges":[{"offset":0,"key":16,"length":1}],"key":"2kog2","inlineStyleRanges":[],"type":"atomic","data":{},"text":" "},{"depth":0,"entityRanges":[],"data":{},"inlineStyleRanges":[{"style":"BOLD","length":14,"offset":4}],"text":"The Show \"via\" tag will display a via in the from part of the message. For example, it will show Kendra.Gruber@gruber12.onmicrosoft.com via sendpulse.me","type":"unstyled","key":"7va6u"},{"inlineStyleRanges":[],"text":" ","data":{},"key":"cf2kq","depth":0,"type":"atomic","entityRanges":[{"key":17,"offset":0,"length":1}]},{"type":"unstyled","key":"aqegr","inlineStyleRanges":[],"data":{},"text":"\n","entityRanges":[],"depth":0}],"entityMap":{"0":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://csrc.nist.gov/glossary/term/phishing"}},"1":{"data":{"url":"https://security.microsoft.com/antiphishing","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"2":{"mutability":"MUTABLE","data":{"height":"auto","src":"https://i.ibb.co/56sH69m/Anti-Phishing-settings.png","alignment":"none","alt":"Anti-phishing email settings","width":"auto"},"type":"IMAGE"},"3":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","src":"https://i.ibb.co/Y2Krcjb/phishing-email-threshold.png","width":"auto","alt":"Phishing email threshold","height":"auto"}},"4":{"data":{"src":"https://i.ibb.co/1sSkMdP/impersonated-senders.png","width":"auto","alt":"Blocking users from being impersonated","alignment":"none","height":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"5":{"data":{"src":"https://i.ibb.co/Pz8CrW9/add-trusted-senders.png","width":"auto","alignment":"none","alt":"Add trusted senders","height":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"6":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Mailbox intelligence setting","height":"auto","src":"https://i.ibb.co/wpdbkQT/mailbox-intelligence.png","alignment":"none","width":"auto"}},"7":{"type":"IMAGE","data":{"alignment":"none","alt":"Intelligence for impersonation protection","src":"https://i.ibb.co/yBfSvs8/intelligence-for-impersonation-protection.png","height":"auto","width":"auto"},"mutability":"MUTABLE"},"8":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/b6NhKGS/spoof-intelligence.png","height":"auto","alignment":"none","alt":"Spoof Intelligence","width":"auto"}},"9":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","src":"https://i.ibb.co/xgR2tcd/tenant-allow-block-spoofing-link.png","alignment":"none","width":"auto","alt":"Tenant allow/block list spoofing page"}},"10":{"data":{"alt":"Allow spoofing","src":"https://i.ibb.co/st5Z8tq/allow-spoofing.png","height":"auto","alignment":"none","width":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"11":{"type":"LINK","data":{"targetOption":"_blank","title":"<span data-offset-key=\"5gn2d-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">Anti-phishing</span></span>","_map":{"mutability":"MUTABLE","data":{"url":"https://security.microsoft.com/antiphishing","title":"<span data-offset-key=\"5gn2d-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">Anti-phishing</span></span>","targetOption":"_blank"},"type":"LINK"},"url":"https://security.microsoft.com/antiphishing"},"mutability":"MUTABLE"},"12":{"data":{"height":"auto","width":"auto","alignment":"none","alt":"Edit antiphishing actions","src":"https://i.ibb.co/jWYyVNS/edit-antiphishing-actions.png"},"type":"IMAGE","mutability":"MUTABLE"},"13":{"mutability":"MUTABLE","type":"IMAGE","data":{"alt":"Edit antiphishing actions","width":"auto","height":"auto","alignment":"none","src":"https://i.ibb.co/GCjZHWg/edit-actions.png"}},"14":{"type":"IMAGE","data":{"alignment":"none","src":"https://i.ibb.co/r27V974/first-contant-warning.png","width":"auto","height":"auto","alt":"First contact antiphishing email warning"},"mutability":"MUTABLE"},"15":{"data":{"alignment":"none","width":"auto","src":"https://i.ibb.co/567WyrD/appears-similiar-warning-message.png","alt":"appears similar to someone who previously send you email","height":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"16":{"type":"IMAGE","mutability":"MUTABLE","data":{"alt":"Show (?) for unauthenticated senders for spoof","alignment":"none","width":"auto","height":"auto","src":"https://i.ibb.co/PCHLNdd/question-mark-image.png"}},"17":{"data":{"width":"auto","alignment":"none","src":"https://i.ibb.co/0JyDW5R/spoofing-via.png","alt":"Spoofing Via","height":"auto"},"mutability":"MUTABLE","type":"IMAGE"}}},"slug":"Protecting-email-against-phishing-attacks-GCOOUsSBT","sectionId":"QScYfSu74","publish":true,"title":"Protecting email against phishing attacks","id":"GCOOUsSBT","description":"Blocking phishing attacks is a multi-part defense. Let's dig right into the settings and options to set up a defense."},
      nextContentSlug: 'Simulating-attacks-with-Microsoft-365-GG4cMY8pK',
      previousContentSlug: 'Protect-your-email-environment-from-malicious-actors-6HUOr7qbL',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged((user) => {
      if (user) {
        getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
          if (!userAcct.completedContent) {
            userAcct.completedContent = []
          }
          this.setState({userAcct})
        })
      }
    })

    if (isBrowser()) {
      document.addEventListener('scroll', this.trackScrolling)
      this.setState({isTrackScrolling: true})
    }
  }

  componentWillUnmount() {
    if (isBrowser() && this.state.isTrackScrolling)
      document.removeEventListener('scroll', this.trackScrolling);

    this.onAuthStateChangedListener()
  }

  trackScrolling() {
    if (document.body.scrollHeight * .8 < window.innerHeight + window.scrollY) {
      this.setHasCompletedContent(true)
    }
  }

  setHasCompletedContent(val) {
    if (val === true) {
      document.removeEventListener('scroll', this.trackScrolling);
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
        "Microsoft",
        "Microsoft 365",
        "Office 365",
        'MS-500',
        'Microsoft 365 Security Administration'
      ],
      "author": {
        "@type": "Person",
        "name": "John Gruber",
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
                <div><p>Phishing is "A technique for attempting to acquire sensitive data, such as bank account numbers, through a fraudulent solicitation in email or on a website, in which the perpetrator masquerades as a legitimate business or reputable person." - <a href="https://csrc.nist.gov/glossary/term/phishing" target="_blank">Computer Security Resource Center</a></p>
<p>Blocking phishing attacks is a multi-part defense. Let's dig right into the settings and options to set up a defense.</p>
<h2>Finding the Anti-phishing settings</h2>
<p>1. Open Microsoft 365 Defender &gt; Policies &amp; rules &gt; Threat policies &gt; <a href="https://security.microsoft.com/antiphishing" target="_blank">Anti-phishing</a>.</p>
<p>2. Click the Office365 AntiPhish Default (Default) policy.</p>
<div ><img src="https://i.ibb.co/56sH69m/Anti-Phishing-settings.png" alt="Anti-phishing email settings" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Edit protection settings</strong>.</p>
<p>From here you'll see the anti-phishing settings for your environment.</p>
<h3>Phishing email threshold</h3>
<div ><img src="https://i.ibb.co/Y2Krcjb/phishing-email-threshold.png" alt="Phishing email threshold" style="height: auto;width: auto"/></div>
<p>The phishing email threshold controls the sensitivity for applying machine learning to messages to determine what is considered phishing. The standard level is the least restrictive which will block the least amount of phishing emails. Most aggressive will block the most phishing emails but may catch some good emails too.</p>
<h3>Enable users to protect</h3>
<div ><img src="https://i.ibb.co/1sSkMdP/impersonated-senders.png" alt="Blocking users from being impersonated" style="height: auto;width: auto"/></div>
<p>This iswebsitewebsite where you can enable anti-impersonation. In short, if your CEO's name is Ben Franklin and email is ben.franklin@gitbit.org you can add both of those to the "Enable users to protect" field, and then any emails from Ben.Franklin@gmail.com would be blocked from coming into your organization.</p>
<h3>Add trusted senders and domains</h3>
<div ><img src="https://i.ibb.co/Pz8CrW9/add-trusted-senders.png" alt="Add trusted senders" style="height: auto;width: auto"/></div>
<p><span >So now you've set up a few users to stop impersonation attacks but now the CEO (Ben Franklin) is attempting to send emails to himself using his Gmail account (Ben.F*******@gmail.com) but he's getting blocked because Microsoft believes it's an impersonation attempt. Not to worry. We can whitelist the email using the Add trusted senders and domains section.</span></p>
<h3>Mailbox Intelligence</h3>
<div ><img src="https://i.ibb.co/wpdbkQT/mailbox-intelligence.png" alt="Mailbox intelligence setting" style="height: auto;width: auto"/></div>
<p>Mailbox intelligence will also help catch acceptable impersonated users. In short, it will scan the user's mailbox to see if the user has sent or received from the user before. If they have then it won't flag the email as impersonation.</p>
<p><em>Note: The mailbox has to be located in Microsoft 365 for Mailbox Intelligence to work. So if you have on-premises mailboxes and you want to enable mailbox intelligence for those mailboxes they'll need to be migrated to Microsoft 365's Exchange Online.</em></p>
<h4><em>Intelligence for impersonation protection</em></h4>
<div ><img src="https://i.ibb.co/yBfSvs8/intelligence-for-impersonation-protection.png" alt="Intelligence for impersonation protection" style="height: auto;width: auto"/></div>
<p>By enabling this setting you're allowing mailbox intelligence to take action on emails it deems are impersonated emails. It's recommended to enable this setting. I'll show you where to set the actions in the section below labeled "Setting actions to take on phishing emails"</p>
<h3>Spoof Intelligence</h3>
<div ><img src="https://i.ibb.co/b6NhKGS/spoof-intelligence.png" alt="Spoof Intelligence" style="height: auto;width: auto"/></div>
<p>Spoofing is the creation of an email with an incorrect sender / from address. For example, if you're mailbox is set up in Microsoft 365 and you send an email from Microsoft 365 as yourself that isn't spoofing. But if someone sends an email pretending to be you but isn't from your authorized sending environment then those emails would be considered spoofed. Enable the spoof intelligence to block emails that aren't sent from the authorized email environment.</p>
<h4>Allowed spoofing</h4>
<p>Sometimes, spoofing is acceptable. For example, you may receive a newsletter that comes from another email environment but isn't authorized as the sender's email server. They are actually from the sender but they aren't from their approved email environment. To allow someone to spoof perform the following:</p>
<p>1. Click Tenant Allow/Block List Spoofing page.</p>
<div ><img src="https://i.ibb.co/xgR2tcd/tenant-allow-block-spoofing-link.png" alt="Tenant allow/block list spoofing page" style="height: auto;width: auto"/></div>
<p>2. Click <strong>Add</strong>. Add the <strong>spoofed user</strong> and <strong>sending infrastructure</strong> to the list. Set the <strong>spoof type</strong> and click <strong>Allow / Block</strong>. Click <strong>Add</strong>.</p>
<div ><img src="https://i.ibb.co/st5Z8tq/allow-spoofing.png" alt="Allow spoofing" style="height: auto;width: auto"/></div>
<h2>Settings the antiphishing actions</h2>
<p>To set what happens when a phishing attempt is found perform the following:</p>
<p ><span >1. Open Microsoft 365 Defender &gt; Policies &amp; rules &gt; Threat policies &gt; </span><a href="https://security.microsoft.com/antiphishing" target="_blank"><span ><ins>Anti-phishing</ins></span></a><span >.</span></p>
<p ><span >2. Click the Office365 AntiPhish Default (Default) policy.</span></p>
<p><span >3. Scroll down and click <strong>Edit actions</strong>.</span></p>
<div ><img src="https://i.ibb.co/jWYyVNS/edit-antiphishing-actions.png" alt="Edit antiphishing actions" style="height: auto;width: auto"/></div>
<p></p>
<div ><img src="https://i.ibb.co/GCjZHWg/edit-actions.png" alt="Edit antiphishing actions" style="height: auto;width: auto"/></div>
<p><strong>If message is detected as an impersonated user</strong>: This is where you can set what happens when a message is sent from an impersonated user.</p>
<p><strong>If message is detected as an impersonated domain</strong>: This is where you can set what happens when a message is sent from an impersonated domain.</p>
<p><strong>If Mailbox Intelligence detects an impersonated user</strong>: This is where you can set what happens when mailbox intelligence detects a phishing attempt.&nbsp;</p>
<p><strong>If message is detected as spoof</strong>: This setting allows you to handle messages that are seen as spoofs.</p>
<p>The Safety tips &amp; indicators section shows a message in Outlook stating there may be something not safe about the emails.</p>
<p><strong>Show first contact safety tip (Recommended)</strong> setting will show a message when you receive an email the first time from a user.</p>
<div ><img src="https://i.ibb.co/r27V974/first-contant-warning.png" alt="First contact antiphishing email warning" style="height: auto;width: auto"/></div>
<p><strong>Show user impersonation safety tip</strong> checkbox will show you a message when the name of the person you received an email from is similar to someone else you've received an email from. The message will read "This sender appears to be similar to someone who previously sent you email, but may not be that person."</p>
<div ><img src="https://i.ibb.co/567WyrD/appears-similiar-warning-message.png" alt="appears similar to someone who previously send you email" style="height: auto;width: auto"/></div>
<p>The <strong>Show domain impersonation safety tip</strong> will show a message when you receive an email from an external domain that is similar to one of your own domains. The message will read "This sender might be impersonating a domain that's associated with your organization"</p>
<p>The <strong>Show user impersonation unusual characters safety tip</strong> message will appear when there are unusual characters in the sender's email address. The message will read <br/>The email address John.Gruber@Gitb1t.org includes unexpected letters or numbers. We recommend you don't interact with this message."</p>
<p>The <strong>Show (?) for unauthenticated senders for spoof</strong> checkbox will add a question mark (?) to the sender's picture if the sender doesn't pass SPF or DKIM and the message fails to pass DMARC checks.</p>
<div ><img src="https://i.ibb.co/PCHLNdd/question-mark-image.png" alt="Show (?) for unauthenticated senders for spoof" style="height: auto;width: auto"/></div>
<p>The <strong>Show "via" tag</strong> will display a via in the from part of the message. For example, it will show Kendra.Gruber@gruber12.onmicrosoft.com via sendpulse.me</p>
<div ><img src="https://i.ibb.co/0JyDW5R/spoofing-via.png" alt="Spoofing Via" style="height: auto;width: auto"/></div>
<p><br/></p>
</div>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt:3 }}>
                  <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
                  <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/' : `/course/ms-500/learn/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos/>}>Next</Button>
                </Box>
              </Grid>
              <Grid item lg={3} sx={{ mt: 3 }}>
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
