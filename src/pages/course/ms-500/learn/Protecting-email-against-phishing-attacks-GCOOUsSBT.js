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
      article: {"article":{"entityMap":{"0":{"data":{"targetOption":"_blank","url":"https://csrc.nist.gov/glossary/term/phishing"},"type":"LINK","mutability":"MUTABLE"},"1":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://security.microsoft.com/antiphishing"}},"2":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","width":"auto","alignment":"none","src":"https://i.ibb.co/56sH69m/Anti-Phishing-settings.png","alt":"Anti-phishing email settings"}},"3":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/Y2Krcjb/phishing-email-threshold.png","alignment":"none","width":"auto","alt":"Phishing email threshold","height":"auto"}},"4":{"data":{"alt":"Blocking users from being impersonated","width":"auto","height":"auto","alignment":"none","src":"https://i.ibb.co/1sSkMdP/impersonated-senders.png"},"type":"IMAGE","mutability":"MUTABLE"},"5":{"data":{"alignment":"none","width":"auto","height":"auto","alt":"Add trusted senders","src":"https://i.ibb.co/Pz8CrW9/add-trusted-senders.png"},"type":"IMAGE","mutability":"MUTABLE"},"6":{"type":"IMAGE","data":{"src":"https://i.ibb.co/wpdbkQT/mailbox-intelligence.png","width":"auto","alignment":"none","alt":"Mailbox intelligence setting","height":"auto"},"mutability":"MUTABLE"},"7":{"data":{"height":"auto","alt":"Intelligence for impersonation protection","width":"auto","src":"https://i.ibb.co/yBfSvs8/intelligence-for-impersonation-protection.png","alignment":"none"},"mutability":"MUTABLE","type":"IMAGE"},"8":{"data":{"alignment":"none","height":"auto","width":"auto","alt":"Spoof Intelligence","src":"https://i.ibb.co/b6NhKGS/spoof-intelligence.png"},"type":"IMAGE","mutability":"MUTABLE"},"9":{"mutability":"MUTABLE","data":{"alignment":"none","width":"auto","src":"https://i.ibb.co/xgR2tcd/tenant-allow-block-spoofing-link.png","height":"auto","alt":"Tenant allow/block list spoofing page"},"type":"IMAGE"},"10":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","width":"auto","src":"https://i.ibb.co/st5Z8tq/allow-spoofing.png","alt":"Allow spoofing","height":"auto"}},"11":{"type":"LINK","mutability":"MUTABLE","data":{"title":"<span data-offset-key=\"5gn2d-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">Anti-phishing</span></span>","targetOption":"_blank","url":"https://security.microsoft.com/antiphishing","_map":{"type":"LINK","data":{"url":"https://security.microsoft.com/antiphishing","targetOption":"_blank","title":"<span data-offset-key=\"5gn2d-1-0\" style=\"box-sizing: border-box;\"><span data-text=\"true\" style=\"box-sizing: border-box;\">Anti-phishing</span></span>"},"mutability":"MUTABLE"}}},"12":{"type":"IMAGE","data":{"height":"auto","width":"auto","src":"https://i.ibb.co/jWYyVNS/edit-antiphishing-actions.png","alignment":"none","alt":"Edit antiphishing actions"},"mutability":"MUTABLE"},"13":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","width":"auto","alt":"Edit antiphishing actions","alignment":"none","src":"https://i.ibb.co/GCjZHWg/edit-actions.png"}},"14":{"data":{"height":"auto","alt":"First contact antiphishing email warning","width":"auto","alignment":"none","src":"https://i.ibb.co/r27V974/first-contant-warning.png"},"type":"IMAGE","mutability":"MUTABLE"},"15":{"data":{"height":"auto","width":"auto","src":"https://i.ibb.co/567WyrD/appears-similiar-warning-message.png","alignment":"none","alt":"appears similar to someone who previously send you email"},"type":"IMAGE","mutability":"MUTABLE"},"16":{"data":{"alignment":"none","alt":"Show (?) for unauthenticated senders for spoof","height":"auto","width":"auto","src":"https://i.ibb.co/PCHLNdd/question-mark-image.png"},"type":"IMAGE","mutability":"MUTABLE"},"17":{"mutability":"MUTABLE","data":{"height":"auto","alt":"Spoofing Via","width":"auto","src":"https://i.ibb.co/0JyDW5R/spoofing-via.png","alignment":"none"},"type":"IMAGE"}},"blocks":[{"text":"Phishing is \"A technique for attempting to acquire sensitive data, such as bank account numbers, through a fraudulent solicitation in email or on a website, in which the perpetrator masquerades as a legitimate business or reputable person.\" - Computer Security Resource Center","data":{},"entityRanges":[{"key":0,"length":33,"offset":243}],"depth":0,"type":"unstyled","key":"c6vkr","inlineStyleRanges":[]},{"entityRanges":[],"key":"8704g","text":"Blocking phishing attacks is a multi-part defense. Let's dig right into the settings and options to set up a defense.","depth":0,"inlineStyleRanges":[],"type":"unstyled","data":{}},{"entityRanges":[],"text":"Finding the Anti-phishing settings","inlineStyleRanges":[],"key":"3jjn0","depth":0,"type":"header-two","data":{}},{"type":"unstyled","key":"5gn2d","inlineStyleRanges":[],"data":{},"entityRanges":[{"length":13,"offset":70,"key":1}],"depth":0,"text":"1. Open Microsoft 365 Defender > Policies & rules > Threat policies > Anti-phishing."},{"depth":0,"text":"2. Click the Office365 AntiPhish Default (Default) policy.","data":{},"entityRanges":[],"key":"1rrkm","type":"unstyled","inlineStyleRanges":[]},{"entityRanges":[{"length":1,"offset":0,"key":2}],"depth":0,"inlineStyleRanges":[],"type":"atomic","key":"clnt","text":" ","data":{}},{"type":"unstyled","inlineStyleRanges":[{"length":24,"offset":9,"style":"BOLD"}],"depth":0,"key":"3387o","entityRanges":[],"text":"3. Click Edit protection settings.","data":{}},{"depth":0,"entityRanges":[],"text":"From here you'll see the anti-phishing settings for your environment.","inlineStyleRanges":[],"type":"unstyled","data":{},"key":"5p8e5"},{"entityRanges":[],"text":"Phishing email threshold","depth":0,"type":"header-three","inlineStyleRanges":[],"data":{},"key":"5go8n"},{"key":"6s9h3","data":{},"type":"atomic","inlineStyleRanges":[],"depth":0,"entityRanges":[{"length":1,"offset":0,"key":3}],"text":" "},{"depth":0,"inlineStyleRanges":[],"data":{},"type":"unstyled","key":"25isl","text":"The phishing email threshold controls the sensitivity for applying machine learning to messages to determine what is considered phishing. The standard level is the least restrictive which will block the least amount of phishing emails. Most aggressive will block the most phishing emails but may catch some good emails too.","entityRanges":[]},{"entityRanges":[],"text":"Enable users to protect","key":"3qpii","inlineStyleRanges":[],"data":{},"depth":0,"type":"header-three"},{"entityRanges":[{"key":4,"length":1,"offset":0}],"text":" ","type":"atomic","depth":0,"data":{},"inlineStyleRanges":[],"key":"phn8"},{"key":"fs7ei","type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"text":"This iswebsitewebsite where you can enable anti-impersonation. In short, if your CEO's name is Ben Franklin and email is ben.franklin@gitbit.org you can add both of those to the \"Enable users to protect\" field, and then any emails from Ben.Franklin@gmail.com would be blocked from coming into your organization.","depth":0,"data":{}},{"type":"header-three","key":"ct542","inlineStyleRanges":[],"entityRanges":[],"depth":0,"data":{},"text":"Add trusted senders and domains"},{"entityRanges":[{"key":5,"length":1,"offset":0}],"key":"dggmt","data":{},"text":" ","inlineStyleRanges":[],"depth":0,"type":"atomic"},{"type":"unstyled","depth":0,"entityRanges":[],"text":"So now you've set up a few users to stop impersonation attacks but now the CEO (Ben Franklin) is attempting to send emails to himself using his Gmail account (Ben.F*******@gmail.com) but he's getting blocked because Microsoft believes it's an impersonation attempt. Not to worry. We can whitelist the email using the Add trusted senders and domains section.","data":{},"key":"75p7v","inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":357,"offset":0},{"length":357,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"length":357,"style":"fontsize-16","offset":0},{"length":357,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0}]},{"type":"header-three","entityRanges":[],"key":"en33f","data":{},"depth":0,"text":"Mailbox Intelligence","inlineStyleRanges":[]},{"text":" ","data":{},"inlineStyleRanges":[],"key":"84qsq","depth":0,"entityRanges":[{"key":6,"length":1,"offset":0}],"type":"atomic"},{"inlineStyleRanges":[],"type":"unstyled","key":"3tca9","entityRanges":[],"depth":0,"data":{},"text":"Mailbox intelligence will also help catch acceptable impersonated users. In short, it will scan the user's mailbox to see if the user has sent or received from the user before. If they have then it won't flag the email as impersonation."},{"key":"90gp","type":"unstyled","text":"Note: The mailbox has to be located in Microsoft 365 for Mailbox Intelligence to work. So if you have on-premises mailboxes and you want to enable mailbox intelligence for those mailboxes they'll need to be migrated to Microsoft 365's Exchange Online.","depth":0,"inlineStyleRanges":[{"length":251,"offset":0,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"entityRanges":[],"type":"header-four","key":"a5boc","depth":0,"text":"Intelligence for impersonation protection","data":{},"inlineStyleRanges":[{"style":"ITALIC","offset":0,"length":41}]},{"key":"bffon","inlineStyleRanges":[],"text":" ","entityRanges":[{"length":1,"offset":0,"key":7}],"depth":0,"data":{},"type":"atomic"},{"text":"By enabling this setting you're allowing mailbox intelligence to take action on emails it deems are impersonated emails. It's recommended to enable this setting. I'll show you where to set the actions in the section below labeled \"Setting actions to take on phishing emails\"","entityRanges":[],"inlineStyleRanges":[],"data":{},"depth":0,"key":"1burs","type":"unstyled"},{"entityRanges":[],"text":"Spoof Intelligence","data":{},"inlineStyleRanges":[],"type":"header-three","key":"a2a8o","depth":0},{"entityRanges":[{"key":8,"length":1,"offset":0}],"inlineStyleRanges":[],"data":{},"key":"ct90u","depth":0,"type":"atomic","text":" "},{"entityRanges":[],"inlineStyleRanges":[],"key":"6uqq3","type":"unstyled","depth":0,"text":"Spoofing is the creation of an email with an incorrect sender / from address. For example, if you're mailbox is set up in Microsoft 365 and you send an email from Microsoft 365 as yourself that isn't spoofing. But if someone sends an email pretending to be you but isn't from your authorized sending environment then those emails would be considered spoofed. Enable the spoof intelligence to block emails that aren't sent from the authorized email environment.","data":{}},{"entityRanges":[],"text":"Allowed spoofing","key":"21vib","data":{},"inlineStyleRanges":[],"depth":0,"type":"header-four"},{"type":"unstyled","text":"Sometimes, spoofing is acceptable. For example, you may receive a newsletter that comes from another email environment but isn't authorized as the sender's email server. They are actually from the sender but they aren't from their approved email environment. To allow someone to spoof perform the following:","entityRanges":[],"key":"c6f06","depth":0,"inlineStyleRanges":[],"data":{}},{"text":"1. Click Tenant Allow/Block List Spoofing page.","key":"6bs74","data":{},"entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"unstyled"},{"inlineStyleRanges":[],"entityRanges":[{"key":9,"length":1,"offset":0}],"depth":0,"type":"atomic","key":"9qcm1","text":" ","data":{}},{"key":"5sirm","text":"2. Click Add. Add the spoofed user and sending infrastructure to the list. Set the spoof type and click Allow / Block. Click Add.","depth":0,"inlineStyleRanges":[{"length":3,"offset":9,"style":"BOLD"},{"offset":22,"style":"BOLD","length":12},{"style":"BOLD","offset":39,"length":22},{"offset":83,"style":"BOLD","length":10},{"style":"BOLD","offset":104,"length":13},{"style":"BOLD","length":3,"offset":125}],"data":{},"entityRanges":[],"type":"unstyled"},{"entityRanges":[{"length":1,"key":10,"offset":0}],"type":"atomic","key":"aknrf","depth":0,"data":{},"text":" ","inlineStyleRanges":[]},{"type":"header-two","inlineStyleRanges":[],"text":"Settings the antiphishing actions","depth":0,"entityRanges":[],"key":"67jo0","data":{}},{"key":"fn0qk","inlineStyleRanges":[],"text":"To set what happens when a phishing attempt is found perform the following:","type":"unstyled","data":{},"entityRanges":[],"depth":0},{"inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":84},{"offset":0,"style":"bgcolor-rgb(255,255,255)","length":84},{"length":84,"offset":0,"style":"fontsize-16"},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":84},{"offset":70,"style":"color-rgb(13,110,253)","length":13},{"length":13,"offset":70,"style":"UNDERLINE"}],"key":"dcvhs","entityRanges":[{"length":13,"key":11,"offset":70}],"data":{"text-align":"left"},"text":"1. Open Microsoft 365 Defender > Policies & rules > Threat policies > Anti-phishing.","depth":0,"type":"unstyled"},{"data":{"text-align":"left"},"inlineStyleRanges":[{"length":58,"style":"color-rgb(33,37,41)","offset":0},{"length":58,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","length":58,"offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":58}],"type":"unstyled","key":"3lb7h","text":"2. Click the Office365 AntiPhish Default (Default) policy.","entityRanges":[],"depth":0},{"depth":0,"text":"3. Scroll down and click Edit actions.","inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":38},{"length":38,"style":"bgcolor-rgb(255,255,255)","offset":0},{"style":"fontsize-16","length":38,"offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":38,"offset":0},{"offset":25,"style":"BOLD","length":12}],"type":"unstyled","key":"767pc","data":{},"entityRanges":[]},{"text":" ","data":{},"entityRanges":[{"length":1,"offset":0,"key":12}],"inlineStyleRanges":[],"type":"atomic","key":"1pl5i","depth":0},{"data":{},"key":"d15c5","inlineStyleRanges":[],"text":"","entityRanges":[],"depth":0,"type":"unstyled"},{"inlineStyleRanges":[],"type":"atomic","key":"1n65j","data":{},"entityRanges":[{"key":13,"length":1,"offset":0}],"text":" ","depth":0},{"entityRanges":[],"key":"fa824","text":"If message is detected as an impersonated user: This is where you can set what happens when a message is sent from an impersonated user.","data":{},"inlineStyleRanges":[{"length":46,"style":"BOLD","offset":0}],"depth":0,"type":"unstyled"},{"depth":0,"text":"If message is detected as an impersonated domain: This is where you can set what happens when a message is sent from an impersonated domain.","entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":48,"offset":0}],"type":"unstyled","key":"8gup4","data":{}},{"key":"a4fki","data":{},"type":"unstyled","entityRanges":[],"text":"If Mailbox Intelligence detects an impersonated user: This is where you can set what happens when mailbox intelligence detects a phishing attempt. ","inlineStyleRanges":[{"length":52,"offset":0,"style":"BOLD"}],"depth":0},{"depth":0,"inlineStyleRanges":[{"style":"BOLD","length":31,"offset":0}],"data":{},"type":"unstyled","text":"If message is detected as spoof: This setting allows you to handle messages that are seen as spoofs.","entityRanges":[],"key":"58thq"},{"entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","key":"2tlio","data":{},"depth":0,"text":"The Safety tips & indicators section shows a message in Outlook stating there may be something not safe about the emails."},{"type":"unstyled","inlineStyleRanges":[{"length":43,"offset":0,"style":"BOLD"}],"data":{},"entityRanges":[],"key":"1rm4l","depth":0,"text":"Show first contact safety tip (Recommended) setting will show a message when you receive an email the first time from a user."},{"depth":0,"data":{},"inlineStyleRanges":[],"type":"atomic","entityRanges":[{"length":1,"offset":0,"key":14}],"key":"faktu","text":" "},{"type":"unstyled","inlineStyleRanges":[{"length":34,"style":"BOLD","offset":0}],"depth":0,"text":"Show user impersonation safety tip checkbox will show you a message when the name of the person you received an email from is similar to someone else you've received an email from. The message will read \"This sender appears to be similar to someone who previously sent you email, but may not be that person.\"","key":"dt4fu","entityRanges":[],"data":{}},{"type":"atomic","key":"21e2g","text":" ","inlineStyleRanges":[],"entityRanges":[{"key":15,"offset":0,"length":1}],"data":{},"depth":0},{"inlineStyleRanges":[{"style":"BOLD","length":36,"offset":4}],"text":"The Show domain impersonation safety tip will show a message when you receive an email from an external domain that is similar to one of your own domains. The message will read \"This sender might be impersonating a domain that's associated with your organization\"","type":"unstyled","depth":0,"data":{},"entityRanges":[],"key":"7mmd5"},{"key":"c61bq","depth":0,"data":{},"type":"unstyled","inlineStyleRanges":[{"offset":4,"style":"BOLD","length":53}],"entityRanges":[],"text":"The Show user impersonation unusual characters safety tip message will appear when there are unusual characters in the sender's email address. The message will read \nThe email address John.Gruber@Gitb1t.org includes unexpected letters or numbers. We recommend you don't interact with this message.\""},{"key":"bcd9t","text":"The Show (?) for unauthenticated senders for spoof checkbox will add a question mark (?) to the sender's picture if the sender doesn't pass SPF or DKIM and the message fails to pass DMARC checks.","depth":0,"data":{},"inlineStyleRanges":[{"style":"BOLD","length":46,"offset":4}],"type":"unstyled","entityRanges":[]},{"depth":0,"inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":16}],"data":{},"type":"atomic","key":"2kog2","text":" "},{"data":{},"type":"unstyled","key":"7va6u","depth":0,"text":"The Show \"via\" tag will display a via in the from part of the message. For example, it will show Kendra.Gruber@gruber12.onmicrosoft.com via sendpulse.me","entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":14,"offset":4}]},{"key":"cf2kq","type":"atomic","text":" ","data":{},"entityRanges":[{"length":1,"key":17,"offset":0}],"inlineStyleRanges":[],"depth":0},{"entityRanges":[],"data":{},"inlineStyleRanges":[],"depth":0,"text":"\n","type":"unstyled","key":"aqegr"}]},"id":"GCOOUsSBT","featuredImage":"https://i.ibb.co/GCjZHWg/edit-actions.png","datePublished":"2022/5/26","slug":"Protecting-email-against-phishing-attacks-GCOOUsSBT","type":"article","sectionId":"QScYfSu74","title":"Protecting email against phishing attacks","publish":true,"images":["https://i.ibb.co/56sH69m/Anti-Phishing-settings.png","https://i.ibb.co/Y2Krcjb/phishing-email-threshold.png","https://i.ibb.co/1sSkMdP/impersonated-senders.png","https://i.ibb.co/Pz8CrW9/add-trusted-senders.png","https://i.ibb.co/wpdbkQT/mailbox-intelligence.png","https://i.ibb.co/yBfSvs8/intelligence-for-impersonation-protection.png","https://i.ibb.co/b6NhKGS/spoof-intelligence.png","https://i.ibb.co/xgR2tcd/tenant-allow-block-spoofing-link.png","https://i.ibb.co/st5Z8tq/allow-spoofing.png","https://i.ibb.co/jWYyVNS/edit-antiphishing-actions.png","https://i.ibb.co/0JyDW5R/spoofing-via.png","https://i.ibb.co/PCHLNdd/question-mark-image.png","https://i.ibb.co/567WyrD/appears-similiar-warning-message.png","https://i.ibb.co/r27V974/first-contant-warning.png","https://i.ibb.co/GCjZHWg/edit-actions.png","https://i.ibb.co/GCjZHWg/edit-actions.png"],"description":"Blocking phishing attacks is a multi-part defense. Let's dig right into the settings and options to set up a defense."},
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
