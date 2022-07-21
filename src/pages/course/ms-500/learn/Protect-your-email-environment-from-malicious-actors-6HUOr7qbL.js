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
      path: '/course/ms-500/learn/Protect-your-email-environment-from-malicious-actors-6HUOr7qbL',
      article: {"description":"Email is one of the most targeted attack vectors in your environment, and there are many moving pieces. There are spam and phishing attacks. And there isn't one size fits in terms of how they attack. They can use malware, attachments, and links.","title":"Protect your email and Office environment from malicious actors","images":["https://i.ibb.co/yP4FgXv/Anti-spam-inbound-policy-Default.png","https://i.ibb.co/hF9wf0j/information-i.png","https://i.ibb.co/4KMB8dW/connection-filter-settings.png","https://i.ibb.co/mXw10nR/Anti-spam-outbound-policy-Default.png","https://i.ibb.co/xGx3RSY/block-URL-in-Microsoft-365.png","https://i.ibb.co/Dw9Hb9L/Track-when-users-click-protected-links.png","https://i.ibb.co/tKrgbvt/create-a-new-safe-attachment-policy.png","https://i.ibb.co/jMBdS0g/protect-all-domains-from-unsafe-attachments.png","https://i.ibb.co/zncV4XL/configure-the-safe-attachment-policy.png","https://i.ibb.co/VVBFQsk/Safe-Attachments-unknown-malware-response.png","https://i.ibb.co/V9y9b8z/start-a-message-trace.png","https://i.ibb.co/wCXzsMM/view-message-trace-results.png","https://i.ibb.co/p14jV0N/Message-trace-results.png","https://i.ibb.co/Df0KQVp/Reports.png","https://i.ibb.co/S5tCBZ7/anti-malware-settings.png"],"featuredImage":"https://i.ibb.co/Df0KQVp/Reports.png","id":"6HUOr7qbL","slug":"Protect-your-email-environment-from-malicious-actors-6HUOr7qbL","publish":true,"sectionId":"QScYfSu74","type":"article","article":{"blocks":[{"type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"key":"82g9e","depth":0,"text":"Email is one of the most targeted attack vectors in your environment, and there are many moving pieces. There are spam and phishing attacks. And there isn't one size fits in terms of how they attack. They can use malware, attachments, and links. Anyway, if you're reading about the MS-500 then I'm sure you're aware of the security issues related to email. So without wasting a lot of time let's jump into the defenses.","data":{}},{"key":"2l56n","text":"Before we talk about each policy let's talk about defaults. By default messages that contain word-filtered content is directed to the user's junk email folder. In short, spam. Spam is unwanted, unsolicited email that gets sent out in bulk. Phishing emails are fraudulent messages designed to trick someone into revealing sensitive information or installing malicious software. In short, spam is junk email while phishing attacks are more malicious. Phishing messages are directed to the junk folder or the quarantine depending on the confidence level. High confidence phishing emails, in other words, emails that Microsoft 365 is confident it is phishing will go to the quarantine while messages that Microsoft 365 is not 100% positive is phishing will go to the junk email folder.","inlineStyleRanges":[],"entityRanges":[],"type":"unstyled","depth":0,"data":{}},{"key":"17l8q","type":"header-two","inlineStyleRanges":[],"text":"Anti-spam","depth":0,"data":{},"entityRanges":[]},{"text":"First up on the list is anti-spam. There are 3 distinct policies for anti-spam: inbound, connection, and outbound.","type":"unstyled","depth":0,"data":{},"key":"fcitb","inlineStyleRanges":[],"entityRanges":[]},{"type":"header-three","data":{},"inlineStyleRanges":[],"entityRanges":[],"depth":0,"text":"Anti-spam inbound policy","key":"1lc3n"},{"text":"The anti-spam inbound policy is exactly what it sounds like. It filters inbound (or messages coming into your organization) for spam. Now, you may think that only inbound spam is managed in this policy. That would be a fair assumption but also incorrect. The anti-spam inbound policy also tells Microsoft 365 how to handle phishing emails. It also tells Microsoft 365 how long to store emails in the quarantine before they get deleted. Let's jump in and look at the settings.","type":"unstyled","entityRanges":[],"key":"6qil7","depth":0,"inlineStyleRanges":[],"data":{}},{"inlineStyleRanges":[],"text":"How to edit the default anti-spam inbound policy","data":{},"entityRanges":[],"type":"header-four","key":"4v5mo","depth":0},{"entityRanges":[{"length":9,"key":0,"offset":84}],"depth":0,"type":"unstyled","inlineStyleRanges":[],"key":"5educ","data":{},"text":"1. Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Anti-spam . Click Anti-spam inbound policy (default)."},{"depth":0,"type":"atomic","entityRanges":[{"offset":0,"key":1,"length":1}],"inlineStyleRanges":[],"data":{},"key":"42ej8","text":" "},{"key":"96bnf","data":{},"inlineStyleRanges":[{"style":"BOLD","length":1,"offset":131}],"text":"There are a lot of properties that can be set so I won't go over each one but know there is more information if you hover over the I next to some of the properties.","type":"unstyled","entityRanges":[],"depth":0},{"key":"engbl","depth":0,"data":{},"text":" ","inlineStyleRanges":[],"entityRanges":[{"length":1,"key":2,"offset":0}],"type":"atomic"},{"entityRanges":[],"type":"unstyled","depth":0,"data":{},"inlineStyleRanges":[],"text":"Notice there are four sections: description, spam threshold and properties, actions, and allowed/blocked senders and domains.","key":"2bpac"},{"depth":0,"type":"unstyled","text":"The description is simply the description that admins will see when they open the policy.","data":{},"inlineStyleRanges":[{"length":12,"offset":30,"style":"BOLD"}],"key":"3lv2n","entityRanges":[]},{"depth":0,"data":{},"text":"The spam threshold and properties will tell Microsoft 365 when to mark an email as spam. For example, there's a bulk email threshold slider. To flag, more emails as spam drag the slider to a lower number. To flag, fewer emails as spam slide the slider to a high number.","type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":30,"offset":4}],"key":"7qu66","entityRanges":[]},{"type":"unstyled","data":{},"key":"cddk","text":"The actions section will tell Microsoft 365 what to do when it finds a message that's spam, phishing, or bulk email. For example, you may want the email to go to the user's junk email folder or you may want the email to go to the quarantine. The actions section is where you'll find the retain spam in quarantine for this many days setting.","inlineStyleRanges":[{"length":8,"style":"BOLD","offset":4},{"offset":287,"style":"BOLD","length":44}],"entityRanges":[],"depth":0},{"depth":0,"key":"33vl9","type":"unstyled","data":{},"entityRanges":[],"inlineStyleRanges":[{"length":35,"style":"BOLD","offset":4},{"style":"BOLD","offset":267,"length":15}],"text":"The allowed/blocked senders and domains tell Microsoft to either allow a sender through the filters or block them. For example, let's say you are a partner of GitBit and want all emails from GitBit to be allowed through the spam filters. Simply add GitBit.org to the Allowed domains section."},{"key":"1a0to","entityRanges":[],"data":{},"text":"Connection filter","inlineStyleRanges":[],"type":"header-three","depth":0},{"inlineStyleRanges":[{"style":"BOLD","length":17,"offset":365}],"entityRanges":[],"text":"The connection filter is where you can tell Microsoft to allow emails through or block emails from specific IP addresses. Maybe you are receiving a lot of spam from a particular address. Add it to the IP block list. The connection filter also has a \"safe list\". In short, Microsoft verifies some IP addresses are particularly safe to allow through. By checking the Turn on safe list you are telling Microsoft to manage your allowed list (along with your custom added IP addresses)","type":"unstyled","data":{},"depth":0,"key":"6umnk"},{"entityRanges":[],"data":{},"type":"unstyled","key":"euok1","depth":0,"inlineStyleRanges":[],"text":""},{"entityRanges":[{"offset":0,"key":3,"length":1}],"key":"dlvtd","type":"atomic","depth":0,"inlineStyleRanges":[],"data":{},"text":" "},{"depth":0,"inlineStyleRanges":[],"type":"header-three","data":{},"text":"Anti-spam outbound policy (Default)","entityRanges":[],"key":"4nj87"},{"key":"698j5","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{},"text":"Microsoft doesn't just protect you from the world. Microsoft also protects the world from you. In short, if you or your devices continually get hacked and send out spam messages you can limit how many messages a user can send per hour or per day. That way if a user account gets hacked and starts sending out massive amounts of emails you can automatically lock down that account.","type":"unstyled"},{"inlineStyleRanges":[],"data":{},"type":"atomic","entityRanges":[{"key":4,"length":1,"offset":0}],"key":"d38tf","text":" ","depth":0},{"entityRanges":[],"type":"unstyled","data":{},"text":"In the outbound spam policy, you'll also find the automatic forwarding setting. In short, malicious users will a lot of times gain access to one of your mailboxes and they'll set up forwarding to automatically forward all emails received by the mailbox to their own mailboxes (that are outside your environment). This setting will either allow the automatic forwarding or block the automatic forwarding. It's up to you. By default, it blocks the automatic forwarding. So if a user wants to forward their work email to their Gmail and you want to allow them to do it you'll need to adjust the outbound policy automatic forwarding.","inlineStyleRanges":[{"offset":50,"style":"BOLD","length":20}],"key":"26mtr","depth":0},{"text":"Safe attachments","key":"jngb","type":"header-two","depth":0,"entityRanges":[],"inlineStyleRanges":[],"data":{}},{"type":"unstyled","depth":0,"inlineStyleRanges":[{"style":"ITALIC","length":10,"offset":258}],"key":"6fg92","entityRanges":[],"text":"Safe attachments provide an additional layer of security for any attachments coming into your environment. In short, Microsoft can check attachments in a virtual environment to detect any malicious actions the attachments may cause. This process is known as detonation.","data":{}},{"inlineStyleRanges":[],"depth":0,"data":{},"text":"What licenses are required?","key":"7fqpo","entityRanges":[],"type":"header-three"},{"depth":0,"entityRanges":[],"key":"fc09m","data":{},"text":"Safe attachments are available to any organization that has Microsoft Defender for Office 365 plan 1 or Microsoft Defender for Office 365 plan 2 licenses.","inlineStyleRanges":[],"type":"unstyled"},{"text":"How to configure safe attachments","key":"cjcek","data":{},"inlineStyleRanges":[],"entityRanges":[],"type":"header-three","depth":0},{"type":"unstyled","inlineStyleRanges":[],"text":"Anyway, let's configure a safe attachment policy to replace malicious attachments.","key":"5165q","data":{},"entityRanges":[],"depth":0},{"inlineStyleRanges":[{"style":"BOLD","offset":9,"length":35},{"length":16,"offset":47,"style":"BOLD"},{"length":15,"style":"BOLD","offset":66},{"length":16,"style":"BOLD","offset":84},{"length":6,"offset":108,"style":"BOLD"}],"entityRanges":[{"offset":84,"key":5,"length":16}],"key":"769sr","depth":0,"type":"unstyled","data":{},"text":"1. Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Safe attachments. Click Create."},{"inlineStyleRanges":[],"text":" ","key":"fdpja","entityRanges":[{"key":6,"length":1,"offset":0}],"type":"atomic","data":{},"depth":0},{"text":"2. Name the policy \"replace unsafe attachments\" Click Next.","entityRanges":[],"inlineStyleRanges":[{"offset":20,"style":"BOLD","length":26},{"offset":54,"style":"BOLD","length":4}],"type":"unstyled","depth":0,"key":"28a0j","data":{}},{"data":{},"entityRanges":[],"type":"unstyled","key":"fgfuc","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":8,"offset":37},{"style":"BOLD","length":4,"offset":60}],"text":"3. Add each of your domains into the Domains section. Click Next."},{"inlineStyleRanges":[],"text":" ","entityRanges":[{"length":1,"key":7,"offset":0}],"type":"atomic","depth":0,"data":{},"key":"akfoc"},{"text":"4. set Safe Attachments unknown malware response to Replace. Set the quarantine policy to DefaultFullAccessPolicy. Click Enable redirect. Enter your email address in the Send messages that contain blocked... Click Next.","depth":0,"data":{},"inlineStyleRanges":[],"type":"unstyled","key":"44fi4","entityRanges":[]},{"entityRanges":[{"length":1,"key":8,"offset":0}],"key":"b1cs8","type":"atomic","depth":0,"text":" ","data":{},"inlineStyleRanges":[]},{"depth":0,"key":"bkumj","data":{},"type":"unstyled","text":"6. Click Submit.","entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":6,"offset":9}]},{"depth":0,"inlineStyleRanges":[],"data":{},"text":"That's it. Now you've created a policy that will remove malicious attachments but deliver the email to the user's inbox.","key":"9eigp","type":"unstyled","entityRanges":[]},{"text":"Safe attachments unknown malware response","type":"header-three","entityRanges":[],"key":"18qmq","data":{},"depth":0,"inlineStyleRanges":[]},{"inlineStyleRanges":[],"depth":0,"key":"40bvq","data":{},"text":"Did you notice there were 5 options for what happens to unknown malware in attachments? Here's a quick run down of the options:","type":"unstyled","entityRanges":[]},{"data":{},"key":"dq2a5","entityRanges":[{"offset":0,"key":9,"length":1}],"inlineStyleRanges":[],"depth":0,"text":" ","type":"atomic"},{"entityRanges":[],"text":"Off: Disables the safe attachments policy. This is useful if you don't want safe attachments to run on a mailbox or two. Be careful configuring this setting to your entire tenant.","type":"unordered-list-item","data":{},"depth":0,"key":"3cnh7","inlineStyleRanges":[{"length":3,"style":"BOLD","offset":0}]},{"data":{},"inlineStyleRanges":[{"length":7,"style":"BOLD","offset":0}],"key":"894hd","type":"unordered-list-item","depth":0,"text":"Monitor: Scans the attachments and delivers them even if malware is found and tracks the results. This is useful if you want to see if attachments are making it through without blocking them. Be careful configuring this setting for your entire tenant.","entityRanges":[]},{"text":"Block: Block all emails that have malware detected. This is common and most likely the best option.","entityRanges":[],"depth":0,"inlineStyleRanges":[{"length":5,"style":"BOLD","offset":0}],"data":{},"type":"unordered-list-item","key":"dfhde"},{"type":"unordered-list-item","inlineStyleRanges":[{"offset":0,"style":"BOLD","length":7}],"entityRanges":[],"data":{},"depth":0,"key":"8bh5d","text":"Replace: Remove the attachment but deliver the email anyway. This is good if you have a user or two that receives a lot of attachments that are getting blocked but the user needs to know that the email was blocked."},{"depth":0,"text":"Dynamic delivery: Sometimes safe attachments cause there to be a delay in the email delivery. When you're having users complain that there is a delay when receiving emails with attachments then this option may be for you. In short, the email will be delivered automatically to the user's inbox and then after the scanning is complete the attachment will show up.","key":"952nd","inlineStyleRanges":[{"style":"BOLD","length":16,"offset":0}],"entityRanges":[],"data":{},"type":"unordered-list-item"},{"key":"atc1u","type":"header-three","inlineStyleRanges":[],"text":"How to monitor what attachments are removed","entityRanges":[],"depth":0,"data":{}},{"inlineStyleRanges":[],"text":"There are two places to see what happens to emails/attachments. The first is the Message Trace in the Exchange admin center. The second is in the reports section of the Microsoft Defender admin center.","depth":0,"data":{},"type":"unstyled","entityRanges":[],"key":"c7mrr"},{"entityRanges":[],"inlineStyleRanges":[],"key":"4i00o","depth":0,"text":"How to monitor emails in Message Trace","type":"header-three","data":{}},{"text":"1. Go to Exchange admin center > Mail flow > Message trace. Click Start a trace. Enter the senders or recipients' email in the space provided. Click Search.","depth":0,"data":{},"type":"unstyled","key":"747pk","inlineStyleRanges":[{"style":"BOLD","offset":9,"length":21},{"style":"BOLD","offset":33,"length":9},{"style":"BOLD","offset":45,"length":13},{"style":"BOLD","offset":66,"length":13},{"style":"BOLD","offset":91,"length":8},{"style":"BOLD","offset":102,"length":10},{"style":"BOLD","length":6,"offset":149}],"entityRanges":[{"key":10,"offset":45,"length":13}]},{"inlineStyleRanges":[],"key":"9nvla","type":"atomic","entityRanges":[{"length":1,"offset":0,"key":11}],"text":" ","depth":0,"data":{}},{"text":"2. Click the message you want to view. Expand Message events. Click the Send event.","entityRanges":[],"inlineStyleRanges":[{"length":8,"style":"BOLD","offset":13},{"style":"BOLD","offset":46,"length":14},{"length":5,"style":"BOLD","offset":72}],"type":"unstyled","data":{},"depth":0,"key":"6bpla"},{"entityRanges":[{"length":1,"key":12,"offset":0}],"key":"6fta1","depth":0,"inlineStyleRanges":[],"type":"atomic","text":" ","data":{}},{"data":{},"text":"How to view messages in the Microsoft 365 Defender reports","entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"header-three","key":"33s0h"},{"inlineStyleRanges":[],"data":{},"text":"1. Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Safe attachments > Reports.","type":"unstyled","entityRanges":[{"offset":103,"key":13,"length":7}],"key":"b6oba","depth":0},{"key":"346eo","data":{},"text":" ","inlineStyleRanges":[],"type":"atomic","entityRanges":[{"offset":0,"key":14,"length":1}],"depth":0},{"key":"623tt","type":"header-two","text":"Safe links","inlineStyleRanges":[],"entityRanges":[],"depth":0,"data":{}},{"data":{},"inlineStyleRanges":[],"depth":0,"key":"5voiv","type":"unstyled","entityRanges":[],"text":"Safe links are used to protect your users against malicious links. Safe Links isn't just for email though. It will protect your users from malicious links in emails, and office apps. For example, if a user plugs in a USB drive with a Word document into their computer and the Word document has a link to a malicious site then safe links will protect the user."},{"type":"unstyled","key":"f1fce","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{},"text":"You can manually add URLs to a block / allow list. For example, let's say you want to block any of your users from accessing a link to contoso.com. How do we block it?"},{"depth":0,"type":"header-three","key":"7binl","entityRanges":[],"data":{},"text":"How to block malicious URLs manually","inlineStyleRanges":[]},{"entityRanges":[],"key":"dpf7n","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":35},{"style":"BOLD","length":16,"offset":47},{"length":15,"offset":66,"style":"BOLD"},{"style":"BOLD","length":23,"offset":84},{"style":"BOLD","offset":110,"length":5},{"style":"BOLD","offset":117,"length":5},{"style":"BOLD","length":23,"offset":144},{"offset":186,"style":"BOLD","length":24},{"length":3,"style":"BOLD","offset":257}],"text":"1. Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Tenant Allow/Block List > URLs > Block. Add the URL to the \"Add URLs with wildcards\" section. Set the Remove block entry after to the number of days to block the URL. Click Add.","type":"unstyled","depth":0,"data":{}},{"inlineStyleRanges":[],"key":"f1j55","text":" ","type":"atomic","entityRanges":[{"key":15,"offset":0,"length":1}],"depth":0,"data":{}},{"inlineStyleRanges":[],"entityRanges":[],"data":{},"text":"Understanding block URLs","type":"header-three","depth":0,"key":"1pooc"},{"text":"Blocking URLs can be a bit tricky but powerful. For instance, you can use wildcards. Let's take a couple of examples.","type":"unstyled","key":"402ef","data":{},"entityRanges":[],"inlineStyleRanges":[],"depth":0},{"type":"unstyled","text":"*.contoso.com would block all subdomains of contoso.com. It would block www.contoso.com, ftp.contoso.com, 1.www.contoso.com, etc. It would not block contoso.com.","depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[],"key":"40usb"},{"data":{},"key":"ctj9j","text":"malware.*com would be invalid and not block anything.","type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"depth":0},{"inlineStyleRanges":[{"length":40,"offset":15,"style":"color-rgb(33,37,41)"},{"length":40,"style":"bgcolor-rgb(255,255,255)","offset":15},{"style":"fontsize-16","offset":15,"length":40},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":15,"length":40}],"key":"13m2b","data":{},"text":"*.phishing.*.* would be invalid and not block anything.","type":"unstyled","depth":0,"entityRanges":[]},{"data":{},"type":"header-three","inlineStyleRanges":[],"text":"How to track when users click links","key":"eep1u","depth":0,"entityRanges":[]},{"text":"By default when a user clicks a link it isn't tracked. In short, you'll never know when a user clicks the link. Let's change that so we can monitor who's clicking bad links.","entityRanges":[],"depth":0,"data":{},"inlineStyleRanges":[],"type":"unstyled","key":"caql4"},{"depth":0,"entityRanges":[],"type":"unstyled","key":"537ap","inlineStyleRanges":[{"length":199,"offset":0,"style":"color-rgb(33,37,41)"},{"style":"bgcolor-rgb(255,255,255)","length":199,"offset":0},{"length":199,"offset":0,"style":"fontsize-16"},{"length":199,"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"},{"offset":9,"length":35,"style":"BOLD"},{"style":"BOLD","offset":47,"length":16},{"style":"BOLD","offset":66,"length":15},{"style":"BOLD","length":64,"offset":122},{"offset":194,"style":"BOLD","length":4}],"data":{},"text":"1. Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Safe links > Global settings. Disable Do not track when users click protected links in Office 365 apps. Click Save."},{"type":"atomic","entityRanges":[{"key":16,"length":1,"offset":0}],"text":" ","key":"ck5ir","data":{},"depth":0,"inlineStyleRanges":[]},{"text":"Phishing protection","inlineStyleRanges":[],"type":"header-two","key":"f46k","depth":0,"data":{},"entityRanges":[]},{"entityRanges":[{"key":17,"offset":94,"length":94}],"type":"unstyled","text":"anti-phishing became a little too big for this article so it's been moved to its own section. https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT.","key":"f3456","data":{},"inlineStyleRanges":[],"depth":0},{"text":"Anti-malware","inlineStyleRanges":[],"key":"60d9d","entityRanges":[],"type":"header-two","data":{},"depth":0},{"type":"unstyled","text":"Anti-malware is your standard attachment filtering service. It provides common attachment filtering so you can block exes, isos, etc. It also has a zero-hour purge feature which will delete attachments that make it to the inbox and then are found to be malicious. Finally, you can edit who's notified when a message is found to contain malware.","key":"db52s","inlineStyleRanges":[],"entityRanges":[],"depth":0,"data":{}},{"inlineStyleRanges":[],"entityRanges":[],"type":"header-three","key":"24knp","depth":0,"data":{},"text":"How to edit the anti-malware settings"},{"text":"1. Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Anti-malware. Click the Default (default) policy. Click Edit protection settings.","key":"8t4qe","data":{},"inlineStyleRanges":[{"length":35,"offset":9,"style":"BOLD"},{"style":"BOLD","offset":47,"length":16},{"length":15,"style":"BOLD","offset":66},{"length":12,"offset":84,"style":"BOLD"},{"offset":108,"style":"BOLD","length":17},{"style":"BOLD","length":24,"offset":140}],"type":"unstyled","entityRanges":[],"depth":0},{"type":"atomic","depth":0,"entityRanges":[{"offset":0,"key":18,"length":1}],"inlineStyleRanges":[],"text":" ","data":{},"key":"4b5fj"},{"depth":0,"entityRanges":[],"type":"unstyled","data":{},"key":"8tqnm","inlineStyleRanges":[],"text":""}],"entityMap":{"0":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://security.microsoft.com/antispam"}},"1":{"type":"IMAGE","data":{"alt":"Anti-spam inbound policy (Default)","alignment":"none","height":"auto","src":"https://i.ibb.co/yP4FgXv/Anti-spam-inbound-policy-Default.png","width":"auto"},"mutability":"MUTABLE"},"2":{"data":{"src":"https://i.ibb.co/hF9wf0j/information-i.png","height":"auto","alt":"Information I","alignment":"none","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"3":{"data":{"width":"auto","alignment":"none","height":"auto","alt":"connection filter settings","src":"https://i.ibb.co/4KMB8dW/connection-filter-settings.png"},"mutability":"MUTABLE","type":"IMAGE"},"4":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","src":"https://i.ibb.co/mXw10nR/Anti-spam-outbound-policy-Default.png","alt":"Anti-spam outbound policy","height":"auto","width":"auto"}},"5":{"type":"LINK","data":{"targetOption":"_blank","alignment":"left","src":"https://i.ibb.co/tKrgbvt/create-a-new-safe-attachment-policy.png","alt":"Create a new safe attachment policy","url":"https://security.microsoft.com/safeattachmentv2","width":"auto","height":"auto"},"mutability":"MUTABLE"},"6":{"data":{"alt":"Create a new safe attachment policy","width":"auto","alignment":"none","height":"auto","src":"https://i.ibb.co/tKrgbvt/create-a-new-safe-attachment-policy.png"},"type":"IMAGE","mutability":"MUTABLE"},"7":{"type":"IMAGE","data":{"alt":"Add all your domains to the domains list in your safe attachments policy","width":"auto","alignment":"none","src":"https://i.ibb.co/jMBdS0g/protect-all-domains-from-unsafe-attachments.png","height":"auto"},"mutability":"MUTABLE"},"8":{"mutability":"MUTABLE","type":"IMAGE","data":{"height":"auto","alignment":"none","alt":"Configure the safe attachment policy","src":"https://i.ibb.co/zncV4XL/configure-the-safe-attachment-policy.png","width":"auto"}},"9":{"type":"IMAGE","data":{"alignment":"none","src":"https://i.ibb.co/VVBFQsk/Safe-Attachments-unknown-malware-response.png","alt":"Safe Attachments unknown malware response","height":"auto","width":"auto"},"mutability":"MUTABLE"},"10":{"type":"LINK","mutability":"MUTABLE","data":{"alignment":"left","alt":"How to block a URL in Microsoft 365","src":"https://i.ibb.co/xGx3RSY/block-URL-in-Microsoft-365.png","width":"auto","url":"https://admin.exchange.microsoft.com/#/messagetrace","height":"auto","targetOption":"_blank"}},"11":{"mutability":"MUTABLE","data":{"alt":"Start a message trace","alignment":"none","src":"https://i.ibb.co/V9y9b8z/start-a-message-trace.png","height":"auto","width":"auto"},"type":"IMAGE"},"12":{"mutability":"MUTABLE","type":"IMAGE","data":{"height":"auto","width":"auto","src":"https://i.ibb.co/p14jV0N/Message-trace-results.png","alignment":"none","alt":"View message trace results"}},"13":{"data":{"url":"https://security.microsoft.com/reports/TPSEmailMalwareReportATP","src":"https://i.ibb.co/wCXzsMM/view-message-trace-results.png","targetOption":"_blank","alt":"View the message trace results","height":"auto","width":"auto","alignment":"left"},"type":"LINK","mutability":"MUTABLE"},"14":{"data":{"src":"https://i.ibb.co/Df0KQVp/Reports.png","alt":"Threat protection status report","alignment":"none","width":"auto","height":"auto","targetOption":"_blank","url":"https://security.microsoft.com/reports/TPSEmailMalwareReportATP"},"mutability":"MUTABLE","type":"IMAGE"},"15":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","height":"auto","alt":"How to block a URL in Microsoft 365","width":"auto","src":"https://i.ibb.co/xGx3RSY/block-URL-in-Microsoft-365.png"}},"16":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","height":"auto","alignment":"none","alt":"Enable tracking when a user clicks a protected URL","src":"https://i.ibb.co/Dw9Hb9L/Track-when-users-click-protected-links.png"}},"17":{"data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT"},"type":"LINK","mutability":"MUTABLE"},"18":{"mutability":"MUTABLE","type":"IMAGE","data":{"height":"auto","width":"auto","src":"https://i.ibb.co/S5tCBZ7/anti-malware-settings.png","alt":"Anti-malware settings","alignment":"none"}}}},"datePublished":"2022/6/23"},
      nextContentSlug: 'Protecting-email-against-phishing-attacks-GCOOUsSBT',
      previousContentSlug: 'Whats-Microsoft-Defender-for-Office-365-EnPyp7ukN',
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
                <div><p>Email is one of the most targeted attack vectors in your environment, and there are many moving pieces. There are spam and phishing attacks. And there isn't one size fits in terms of how they attack. They can use malware, attachments, and links. Anyway, if you're reading about the MS-500 then I'm sure you're aware of the security issues related to email. So without wasting a lot of time let's jump into the defenses.</p>
<p>Before we talk about each policy let's talk about defaults. By default messages that contain word-filtered content is directed to the user's junk email folder. In short, spam. Spam is unwanted, unsolicited email that gets sent out in bulk. Phishing emails are fraudulent messages designed to trick someone into revealing sensitive information or installing malicious software. In short, spam is junk email while phishing attacks are more malicious. Phishing messages are directed to the junk folder or the quarantine depending on the confidence level. High confidence phishing emails, in other words, emails that Microsoft 365 is confident it is phishing will go to the quarantine while messages that Microsoft 365 is not 100% positive is phishing will go to the junk email folder.</p>
<h2>Anti-spam</h2>
<p>First up on the list is anti-spam. There are 3 distinct policies for anti-spam: inbound, connection, and outbound.</p>
<h3>Anti-spam inbound policy</h3>
<p>The anti-spam inbound policy is exactly what it sounds like. It filters inbound (or messages coming into your organization) for spam. Now, you may think that only inbound spam is managed in this policy. That would be a fair assumption but also incorrect. The anti-spam inbound policy also tells Microsoft 365 how to handle phishing emails. It also tells Microsoft 365 how long to store emails in the quarantine before they get deleted. Let's jump in and look at the settings.</p>
<h4>How to edit the default anti-spam inbound policy</h4>
<p>1. Go to Microsoft 365 Defender admin center &gt; Policies &amp; rules &gt; Threat policies &gt; <a href="https://security.microsoft.com/antispam" target="_blank">Anti-spam</a> . Click Anti-spam inbound policy (default).</p>
<div ><img src="https://i.ibb.co/yP4FgXv/Anti-spam-inbound-policy-Default.png" alt="Anti-spam inbound policy (Default)" style="height: auto;width: auto"/></div>
<p>There are a lot of properties that can be set so I won't go over each one but know there is more information if you hover over the <strong>I</strong> next to some of the properties.</p>
<div ><img src="https://i.ibb.co/hF9wf0j/information-i.png" alt="Information I" style="height: auto;width: auto"/></div>
<p>Notice there are four sections: description, spam threshold and properties, actions, and allowed/blocked senders and domains.</p>
<p>The description is simply the <strong>description </strong>that admins will see when they open the policy.</p>
<p>The <strong>spam threshold and properties </strong>will tell Microsoft 365 when to mark an email as spam. For example, there's a bulk email threshold slider. To flag, more emails as spam drag the slider to a lower number. To flag, fewer emails as spam slide the slider to a high number.</p>
<p>The <strong>actions </strong>section will tell Microsoft 365 what to do when it finds a message that's spam, phishing, or bulk email. For example, you may want the email to go to the user's junk email folder or you may want the email to go to the quarantine. The actions section is where you'll find the <strong>retain spam in quarantine for this many days</strong> setting.</p>
<p>The <strong>allowed/blocked senders and domains</strong> tell Microsoft to either allow a sender through the filters or block them. For example, let's say you are a partner of GitBit and want all emails from GitBit to be allowed through the spam filters. Simply add GitBit.org to the <strong>Allowed domains</strong> section.</p>
<h3>Connection filter</h3>
<p>The connection filter is where you can tell Microsoft to allow emails through or block emails from specific IP addresses. Maybe you are receiving a lot of spam from a particular address. Add it to the IP block list. The connection filter also has a "safe list". In short, Microsoft verifies some IP addresses are particularly safe to allow through. By checking the <strong>Turn on safe list</strong> you are telling Microsoft to manage your allowed list (along with your custom added IP addresses)</p>
<p></p>
<div ><img src="https://i.ibb.co/4KMB8dW/connection-filter-settings.png" alt="connection filter settings" style="height: auto;width: auto"/></div>
<h3>Anti-spam outbound policy (Default)</h3>
<p>Microsoft doesn't just protect you from the world. Microsoft also protects the world from you. In short, if you or your devices continually get hacked and send out spam messages you can limit how many messages a user can send per hour or per day. That way if a user account gets hacked and starts sending out massive amounts of emails you can automatically lock down that account.</p>
<div ><img src="https://i.ibb.co/mXw10nR/Anti-spam-outbound-policy-Default.png" alt="Anti-spam outbound policy" style="height: auto;width: auto"/></div>
<p>In the outbound spam policy, you'll also find the <strong>automatic forwarding</strong> setting. In short, malicious users will a lot of times gain access to one of your mailboxes and they'll set up forwarding to automatically forward all emails received by the mailbox to their own mailboxes (that are outside your environment). This setting will either allow the automatic forwarding or block the automatic forwarding. It's up to you. By default, it blocks the automatic forwarding. So if a user wants to forward their work email to their Gmail and you want to allow them to do it you'll need to adjust the outbound policy automatic forwarding.</p>
<h2>Safe attachments</h2>
<p>Safe attachments provide an additional layer of security for any attachments coming into your environment. In short, Microsoft can check attachments in a virtual environment to detect any malicious actions the attachments may cause. This process is known as <em>detonation</em>.</p>
<h3>What licenses are required?</h3>
<p>Safe attachments are available to any organization that has Microsoft Defender for Office 365 plan 1 or Microsoft Defender for Office 365 plan 2 licenses.</p>
<h3>How to configure safe attachments</h3>
<p>Anyway, let's configure a safe attachment policy to replace malicious attachments.</p>
<p>1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Policies &amp; rules</strong> &gt; <strong>Threat policies</strong> &gt; <a href="https://security.microsoft.com/safeattachmentv2" target="_blank"><strong>Safe attachments</strong></a>. Click <strong>Create</strong>.</p>
<div ><img src="https://i.ibb.co/tKrgbvt/create-a-new-safe-attachment-policy.png" alt="Create a new safe attachment policy" style="height: auto;width: auto"/></div>
<p>2. Name the policy "<strong>replace unsafe attachments</strong>" Click <strong>Next</strong>.</p>
<p>3. Add each of your domains into the <strong>Domains </strong>section. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/jMBdS0g/protect-all-domains-from-unsafe-attachments.png" alt="Add all your domains to the domains list in your safe attachments policy" style="height: auto;width: auto"/></div>
<p>4. set Safe Attachments unknown malware response to Replace. Set the quarantine policy to DefaultFullAccessPolicy. Click Enable redirect. Enter your email address in the Send messages that contain blocked... Click Next.</p>
<div ><img src="https://i.ibb.co/zncV4XL/configure-the-safe-attachment-policy.png" alt="Configure the safe attachment policy" style="height: auto;width: auto"/></div>
<p>6. Click <strong>Submit</strong>.</p>
<p>That's it. Now you've created a policy that will remove malicious attachments but deliver the email to the user's inbox.</p>
<h3>Safe attachments unknown malware response</h3>
<p>Did you notice there were 5 options for what happens to unknown malware in attachments? Here's a quick run down of the options:</p>
<div ><img src="https://i.ibb.co/VVBFQsk/Safe-Attachments-unknown-malware-response.png" alt="Safe Attachments unknown malware response" style="height: auto;width: auto"/></div>
<ul>
<li><strong>Off</strong>: Disables the safe attachments policy. This is useful if you don't want safe attachments to run on a mailbox or two. Be careful configuring this setting to your entire tenant.</li>
<li><strong>Monitor</strong>: Scans the attachments and delivers them even if malware is found and tracks the results. This is useful if you want to see if attachments are making it through without blocking them. Be careful configuring this setting for your entire tenant.</li>
<li><strong>Block</strong>: Block all emails that have malware detected. This is common and most likely the best option.</li>
<li><strong>Replace</strong>: Remove the attachment but deliver the email anyway. This is good if you have a user or two that receives a lot of attachments that are getting blocked but the user needs to know that the email was blocked.</li>
<li><strong>Dynamic delivery</strong>: Sometimes safe attachments cause there to be a delay in the email delivery. When you're having users complain that there is a delay when receiving emails with attachments then this option may be for you. In short, the email will be delivered automatically to the user's inbox and then after the scanning is complete the attachment will show up.</li>
</ul>
<h3>How to monitor what attachments are removed</h3>
<p>There are two places to see what happens to emails/attachments. The first is the Message Trace in the Exchange admin center. The second is in the reports section of the Microsoft Defender admin center.</p>
<h3>How to monitor emails in Message Trace</h3>
<p>1. Go to <strong>Exchange admin center</strong> &gt; <strong>Mail flow</strong> &gt; <a href="https://admin.exchange.microsoft.com/#/messagetrace" target="_blank"><strong>Message trace</strong></a>. Click <strong>Start a trace</strong>. Enter the <strong>senders </strong>or <strong>recipients</strong>' email in the space provided. Click <strong>Search</strong>.</p>
<div ><img src="https://i.ibb.co/V9y9b8z/start-a-message-trace.png" alt="Start a message trace" style="height: auto;width: auto"/></div>
<p>2. Click the <strong>message </strong>you want to view. Expand <strong>Message events</strong>. Click the <strong>Send </strong>event.</p>
<div ><img src="https://i.ibb.co/p14jV0N/Message-trace-results.png" alt="View message trace results" style="height: auto;width: auto"/></div>
<h3>How to view messages in the Microsoft 365 Defender reports</h3>
<p>1. Go to Microsoft 365 Defender admin center &gt; Policies &amp; rules &gt; Threat policies &gt; Safe attachments &gt; <a href="https://security.microsoft.com/reports/TPSEmailMalwareReportATP" target="_blank">Reports</a>.</p>
<div ><img src="https://i.ibb.co/Df0KQVp/Reports.png" alt="Threat protection status report" style="height: auto;width: auto"/></div>
<h2>Safe links</h2>
<p>Safe links are used to protect your users against malicious links. Safe Links isn't just for email though. It will protect your users from malicious links in emails, and office apps. For example, if a user plugs in a USB drive with a Word document into their computer and the Word document has a link to a malicious site then safe links will protect the user.</p>
<p>You can manually add URLs to a block / allow list. For example, let's say you want to block any of your users from accessing a link to contoso.com. How do we block it?</p>
<h3>How to block malicious URLs manually</h3>
<p>1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Policies &amp; rules</strong> &gt; <strong>Threat policies</strong> &gt; <strong>Tenant Allow/Block List</strong> &gt; <strong>URLs </strong>&gt; <strong>Block</strong>. Add the URL to the "<strong>Add URLs with wildcards</strong>" section. Set the <strong>Remove block entry after</strong> to the number of days to block the URL. Click <strong>Add</strong>.</p>
<div ><img src="https://i.ibb.co/xGx3RSY/block-URL-in-Microsoft-365.png" alt="How to block a URL in Microsoft 365" style="height: auto;width: auto"/></div>
<h3>Understanding block URLs</h3>
<p>Blocking URLs can be a bit tricky but powerful. For instance, you can use wildcards. Let's take a couple of examples.</p>
<p>*.contoso.com would block all subdomains of contoso.com. It would block www.contoso.com, ftp.contoso.com, 1.www.contoso.com, etc. It would not block contoso.com.</p>
<p>malware.*com would be invalid and not block anything.</p>
<p>*.phishing.*.* <span >would be invalid and not block anything.</span></p>
<h3>How to track when users click links</h3>
<p>By default when a user clicks a link it isn't tracked. In short, you'll never know when a user clicks the link. Let's change that so we can monitor who's clicking bad links.</p>
<p><span >1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Policies &amp; rules</strong> &gt; <strong>Threat policies</strong> &gt; Safe links &gt; Global settings. Disable <strong>Do not track when users click protected links in Office 365 apps</strong>. Click <strong>Save</strong>.</span></p>
<div ><img src="https://i.ibb.co/Dw9Hb9L/Track-when-users-click-protected-links.png" alt="Enable tracking when a user clicks a protected URL" style="height: auto;width: auto"/></div>
<h2>Phishing protection</h2>
<p>anti-phishing became a little too big for this article so it's been moved to its own section. <a href="https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT" target="_blank">https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT</a>.</p>
<h2>Anti-malware</h2>
<p>Anti-malware is your standard attachment filtering service. It provides common attachment filtering so you can block exes, isos, etc. It also has a zero-hour purge feature which will delete attachments that make it to the inbox and then are found to be malicious. Finally, you can edit who's notified when a message is found to contain malware.</p>
<h3>How to edit the anti-malware settings</h3>
<p>1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Policies &amp; rules</strong> &gt; <strong>Threat policies</strong> &gt; <strong>Anti-malware</strong>. Click the <strong>Default (default)</strong> policy. Click <strong>Edit protection settings</strong>.</p>
<div ><img src="https://i.ibb.co/S5tCBZ7/anti-malware-settings.png" alt="Anti-malware settings" style="height: auto;width: auto"/></div>
<p></p>
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
