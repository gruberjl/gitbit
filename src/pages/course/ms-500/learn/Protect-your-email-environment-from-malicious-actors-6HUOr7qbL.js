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
      article: {"featuredImage":"https://i.ibb.co/Df0KQVp/Reports.png","slug":"Protect-your-email-environment-from-malicious-actors-6HUOr7qbL","images":["https://i.ibb.co/yP4FgXv/Anti-spam-inbound-policy-Default.png","https://i.ibb.co/hF9wf0j/information-i.png","https://i.ibb.co/4KMB8dW/connection-filter-settings.png","https://i.ibb.co/mXw10nR/Anti-spam-outbound-policy-Default.png","https://i.ibb.co/xGx3RSY/block-URL-in-Microsoft-365.png","https://i.ibb.co/Dw9Hb9L/Track-when-users-click-protected-links.png","https://i.ibb.co/tKrgbvt/create-a-new-safe-attachment-policy.png","https://i.ibb.co/jMBdS0g/protect-all-domains-from-unsafe-attachments.png","https://i.ibb.co/zncV4XL/configure-the-safe-attachment-policy.png","https://i.ibb.co/VVBFQsk/Safe-Attachments-unknown-malware-response.png","https://i.ibb.co/V9y9b8z/start-a-message-trace.png","https://i.ibb.co/wCXzsMM/view-message-trace-results.png","https://i.ibb.co/p14jV0N/Message-trace-results.png","https://i.ibb.co/Df0KQVp/Reports.png","https://i.ibb.co/S5tCBZ7/anti-malware-settings.png"],"datePublished":"2022/6/23","sectionId":"QScYfSu74","publish":true,"article":{"blocks":[{"key":"82g9e","type":"unstyled","entityRanges":[],"data":{},"text":"Email is one of the most targeted attack vectors in your environment, and there are many moving pieces. There are spam and phishing attacks. And there isn't one size fits in terms of how they attack. They can use malware, attachments, and links. Anyway, if you're reading about the MS-500 then I'm sure you're aware of the security issues related to email. So without wasting a lot of time let's jump into the defenses.","inlineStyleRanges":[],"depth":0},{"text":"Before we talk about each policy let's talk about defaults. By default messages that contain word-filtered content is directed to the user's junk email folder. In short, spam. Spam is unwanted, unsolicited email that gets sent out in bulk. Phishing emails are fraudulent messages designed to trick someone into revealing sensitive information or installing malicious software. In short, spam is junk email while phishing attacks are more malicious. Phishing messages are directed to the junk folder or the quarantine depending on the confidence level. High confidence phishing emails, in other words, emails that Microsoft 365 is confident it is phishing will go to the quarantine while messages that Microsoft 365 is not 100% positive is phishing will go to the junk email folder.","key":"2l56n","depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[],"type":"unstyled"},{"entityRanges":[],"key":"17l8q","inlineStyleRanges":[],"text":"Anti-spam","depth":0,"data":{},"type":"header-two"},{"key":"fcitb","text":"First up on the list is anti-spam. There are 3 distinct policies for anti-spam: inbound, connection, and outbound.","type":"unstyled","data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[]},{"key":"1lc3n","inlineStyleRanges":[],"depth":0,"text":"Anti-spam inbound policy","entityRanges":[],"type":"header-three","data":{}},{"inlineStyleRanges":[],"entityRanges":[],"depth":0,"data":{},"type":"unstyled","text":"The anti-spam inbound policy is exactly what it sounds like. It filters inbound (or messages coming into your organization) for spam. Now, you may think that only inbound spam is managed in this policy. That would be a fair assumption but also incorrect. The anti-spam inbound policy also tells Microsoft 365 how to handle phishing emails. It also tells Microsoft 365 how long to store emails in the quarantine before they get deleted. Let's jump in and look at the settings.","key":"6qil7"},{"entityRanges":[],"key":"4v5mo","text":"How to edit the default anti-spam inbound policy","depth":0,"inlineStyleRanges":[],"type":"header-four","data":{}},{"inlineStyleRanges":[],"entityRanges":[{"length":9,"key":0,"offset":84}],"key":"5educ","depth":0,"data":{},"text":"1. Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Anti-spam . Click Anti-spam inbound policy (default).","type":"unstyled"},{"inlineStyleRanges":[],"type":"atomic","entityRanges":[{"key":1,"length":1,"offset":0}],"key":"42ej8","depth":0,"text":" ","data":{}},{"depth":0,"data":{},"text":"There are a lot of properties that can be set so I won't go over each one but know there is more information if you hover over the I next to some of the properties.","type":"unstyled","entityRanges":[],"key":"96bnf","inlineStyleRanges":[{"offset":131,"length":1,"style":"BOLD"}]},{"key":"engbl","data":{},"entityRanges":[{"offset":0,"key":2,"length":1}],"depth":0,"inlineStyleRanges":[],"text":" ","type":"atomic"},{"type":"unstyled","text":"Notice there are four sections: description, spam threshold and properties, actions, and allowed/blocked senders and domains.","entityRanges":[],"depth":0,"key":"2bpac","data":{},"inlineStyleRanges":[]},{"key":"3lv2n","data":{},"inlineStyleRanges":[{"offset":30,"length":12,"style":"BOLD"}],"entityRanges":[],"type":"unstyled","text":"The description is simply the description that admins will see when they open the policy.","depth":0},{"depth":0,"entityRanges":[],"key":"7qu66","inlineStyleRanges":[{"length":30,"style":"BOLD","offset":4}],"text":"The spam threshold and properties will tell Microsoft 365 when to mark an email as spam. For example, there's a bulk email threshold slider. To flag, more emails as spam drag the slider to a lower number. To flag, fewer emails as spam slide the slider to a high number.","type":"unstyled","data":{}},{"text":"The actions section will tell Microsoft 365 what to do when it finds a message that's spam, phishing, or bulk email. For example, you may want the email to go to the user's junk email folder or you may want the email to go to the quarantine. The actions section is where you'll find the retain spam in quarantine for this many days setting.","inlineStyleRanges":[{"offset":4,"style":"BOLD","length":8},{"length":44,"style":"BOLD","offset":287}],"entityRanges":[],"key":"cddk","depth":0,"data":{},"type":"unstyled"},{"entityRanges":[],"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":35,"offset":4},{"style":"BOLD","offset":267,"length":15}],"text":"The allowed/blocked senders and domains tell Microsoft to either allow a sender through the filters or block them. For example, let's say you are a partner of GitBit and want all emails from GitBit to be allowed through the spam filters. Simply add GitBit.org to the Allowed domains section.","depth":0,"key":"33vl9","data":{}},{"key":"1a0to","inlineStyleRanges":[],"entityRanges":[],"depth":0,"data":{},"text":"Connection filter","type":"header-three"},{"key":"6umnk","data":{},"text":"The connection filter is where you can tell Microsoft to allow emails through or block emails from specific IP addresses. Maybe you are receiving a lot of spam from a particular address. Add it to the IP block list. The connection filter also has a \"safe list\". In short, Microsoft verifies some IP addresses are particularly safe to allow through. By checking the Turn on safe list you are telling Microsoft to manage your allowed list (along with your custom added IP addresses)","inlineStyleRanges":[{"length":17,"offset":365,"style":"BOLD"}],"depth":0,"type":"unstyled","entityRanges":[]},{"depth":0,"text":"","type":"unstyled","data":{},"entityRanges":[],"inlineStyleRanges":[],"key":"euok1"},{"depth":0,"key":"dlvtd","text":" ","data":{},"type":"atomic","entityRanges":[{"length":1,"offset":0,"key":3}],"inlineStyleRanges":[]},{"depth":0,"inlineStyleRanges":[],"key":"4nj87","text":"Anti-spam outbound policy (Default)","entityRanges":[],"data":{},"type":"header-three"},{"entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","data":{},"text":"Microsoft doesn't just protect you from the world. Microsoft also protects the world from you. In short, if you or your devices continually get hacked and send out spam messages you can limit how many messages a user can send per hour or per day. That way if a user account gets hacked and starts sending out massive amounts of emails you can automatically lock down that account.","key":"698j5","depth":0},{"depth":0,"entityRanges":[{"offset":0,"key":4,"length":1}],"key":"d38tf","text":" ","data":{},"inlineStyleRanges":[],"type":"atomic"},{"key":"26mtr","type":"unstyled","text":"In the outbound spam policy, you'll also find the automatic forwarding setting. In short, malicious users will a lot of times gain access to one of your mailboxes and they'll set up forwarding to automatically forward all emails received by the mailbox to their own mailboxes (that are outside your environment). This setting will either allow the automatic forwarding or block the automatic forwarding. It's up to you. By default, it blocks the automatic forwarding. So if a user wants to forward their work email to their Gmail and you want to allow them to do it you'll need to adjust the outbound policy automatic forwarding.","data":{},"inlineStyleRanges":[{"offset":50,"style":"BOLD","length":20}],"entityRanges":[],"depth":0},{"depth":0,"data":{},"key":"jngb","inlineStyleRanges":[],"type":"header-two","entityRanges":[],"text":"Safe attachments"},{"data":{},"text":"Safe attachments provide an additional layer of security for any attachments coming into your environment. In short, Microsoft can check attachments in a virtual environment to detect any malicious actions the attachments may cause. This process is known as detonation.","type":"unstyled","depth":0,"entityRanges":[],"key":"6fg92","inlineStyleRanges":[{"offset":258,"length":10,"style":"ITALIC"}]},{"data":{},"depth":0,"key":"7fqpo","type":"header-three","inlineStyleRanges":[],"entityRanges":[],"text":"What licenses are required?"},{"type":"unstyled","key":"fc09m","depth":0,"data":{},"text":"Safe attachments are available to any organization that has Microsoft Defender for Office 365 plan 1 or Microsoft Defender for Office 365 plan 2 licenses.","entityRanges":[],"inlineStyleRanges":[]},{"type":"header-three","key":"cjcek","entityRanges":[],"data":{},"inlineStyleRanges":[],"depth":0,"text":"How to configure safe attachments"},{"inlineStyleRanges":[],"key":"5165q","data":{},"depth":0,"type":"unstyled","text":"Anyway, let's configure a safe attachment policy to replace malicious attachments.","entityRanges":[]},{"key":"769sr","data":{},"inlineStyleRanges":[{"length":35,"offset":9,"style":"BOLD"},{"length":16,"style":"BOLD","offset":47},{"length":15,"offset":66,"style":"BOLD"},{"length":16,"style":"BOLD","offset":84},{"length":6,"offset":108,"style":"BOLD"}],"text":"1. Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Safe attachments. Click Create.","type":"unstyled","depth":0,"entityRanges":[{"key":5,"length":16,"offset":84}]},{"key":"fdpja","data":{},"depth":0,"type":"atomic","entityRanges":[{"length":1,"offset":0,"key":6}],"inlineStyleRanges":[],"text":" "},{"key":"28a0j","text":"2. Name the policy \"replace unsafe attachments\" Click Next.","entityRanges":[],"depth":0,"type":"unstyled","data":{},"inlineStyleRanges":[{"style":"BOLD","length":26,"offset":20},{"length":4,"style":"BOLD","offset":54}]},{"data":{},"entityRanges":[],"key":"fgfuc","depth":0,"type":"unstyled","text":"3. Add each of your domains into the Domains section. Click Next.","inlineStyleRanges":[{"offset":37,"style":"BOLD","length":8},{"style":"BOLD","length":4,"offset":60}]},{"depth":0,"inlineStyleRanges":[],"entityRanges":[{"key":7,"length":1,"offset":0}],"text":" ","key":"akfoc","type":"atomic","data":{}},{"entityRanges":[],"inlineStyleRanges":[],"depth":0,"data":{},"text":"4. set Safe Attachments unknown malware response to Replace. Set the quarantine policy to DefaultFullAccessPolicy. Click Enable redirect. Enter your email address in the Send messages that contain blocked... Click Next.","type":"unstyled","key":"44fi4"},{"key":"b1cs8","data":{},"entityRanges":[{"length":1,"key":8,"offset":0}],"type":"atomic","inlineStyleRanges":[],"depth":0,"text":" "},{"type":"unstyled","depth":0,"key":"bkumj","inlineStyleRanges":[{"offset":9,"length":6,"style":"BOLD"}],"entityRanges":[],"data":{},"text":"6. Click Submit."},{"type":"unstyled","depth":0,"inlineStyleRanges":[],"key":"9eigp","entityRanges":[],"text":"That's it. Now you've created a policy that will remove malicious attachments but deliver the email to the user's inbox.","data":{}},{"entityRanges":[],"inlineStyleRanges":[],"type":"header-three","data":{},"depth":0,"key":"18qmq","text":"Safe attachments unknown malware response"},{"type":"unstyled","data":{},"key":"40bvq","depth":0,"entityRanges":[],"inlineStyleRanges":[],"text":"Did you notice there were 5 options for what happens to unknown malware in attachments? Here's a quick run down of the options:"},{"entityRanges":[{"offset":0,"length":1,"key":9}],"depth":0,"inlineStyleRanges":[],"data":{},"key":"dq2a5","text":" ","type":"atomic"},{"type":"unordered-list-item","key":"3cnh7","data":{},"inlineStyleRanges":[{"style":"BOLD","offset":0,"length":3}],"entityRanges":[],"text":"Off: Disables the safe attachments policy. This is useful if you don't want safe attachments to run on a mailbox or two. Be careful configuring this setting to your entire tenant.","depth":0},{"entityRanges":[],"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"depth":0,"text":"Monitor: Scans the attachments and delivers them even if malware is found and tracks the results. This is useful if you want to see if attachments are making it through without blocking them. Be careful configuring this setting for your entire tenant.","type":"unordered-list-item","key":"894hd","data":{}},{"text":"Block: Block all emails that have malware detected. This is common and most likely the best option.","type":"unordered-list-item","entityRanges":[],"data":{},"inlineStyleRanges":[{"style":"BOLD","offset":0,"length":5}],"key":"dfhde","depth":0},{"entityRanges":[],"text":"Replace: Remove the attachment but deliver the email anyway. This is good if you have a user or two that receives a lot of attachments that are getting blocked but the user needs to know that the email was blocked.","inlineStyleRanges":[{"style":"BOLD","length":7,"offset":0}],"type":"unordered-list-item","key":"8bh5d","depth":0,"data":{}},{"inlineStyleRanges":[{"style":"BOLD","length":16,"offset":0}],"data":{},"type":"unordered-list-item","entityRanges":[],"key":"952nd","depth":0,"text":"Dynamic delivery: Sometimes safe attachments cause there to be a delay in the email delivery. When you're having users complain that there is a delay when receiving emails with attachments then this option may be for you. In short, the email will be delivered automatically to the user's inbox and then after the scanning is complete the attachment will show up."},{"type":"header-three","inlineStyleRanges":[],"entityRanges":[],"text":"How to monitor what attachments are removed","depth":0,"key":"atc1u","data":{}},{"entityRanges":[],"type":"unstyled","depth":0,"inlineStyleRanges":[],"text":"There are two places to see what happens to emails/attachments. The first is the Message Trace in the Exchange admin center. The second is in the reports section of the Microsoft Defender admin center.","key":"c7mrr","data":{}},{"type":"header-three","inlineStyleRanges":[],"text":"How to monitor emails in Message Trace","data":{},"entityRanges":[],"key":"4i00o","depth":0},{"depth":0,"type":"unstyled","data":{},"inlineStyleRanges":[{"style":"BOLD","length":21,"offset":9},{"style":"BOLD","length":9,"offset":33},{"style":"BOLD","length":13,"offset":45},{"offset":66,"length":13,"style":"BOLD"},{"style":"BOLD","length":8,"offset":91},{"length":10,"offset":102,"style":"BOLD"},{"length":6,"style":"BOLD","offset":149}],"entityRanges":[{"length":13,"key":10,"offset":45}],"key":"747pk","text":"1. Go to Exchange admin center > Mail flow > Message trace. Click Start a trace. Enter the senders or recipients' email in the space provided. Click Search."},{"entityRanges":[{"length":1,"offset":0,"key":11}],"type":"atomic","key":"9nvla","data":{},"text":" ","inlineStyleRanges":[],"depth":0},{"type":"unstyled","data":{},"key":"6bpla","depth":0,"inlineStyleRanges":[{"style":"BOLD","offset":13,"length":8},{"style":"BOLD","length":14,"offset":46},{"style":"BOLD","offset":72,"length":5}],"entityRanges":[],"text":"2. Click the message you want to view. Expand Message events. Click the Send event."},{"text":" ","type":"atomic","entityRanges":[{"key":12,"length":1,"offset":0}],"key":"6fta1","inlineStyleRanges":[],"depth":0,"data":{}},{"depth":0,"text":"How to view messages in the Microsoft 365 Defender reports","inlineStyleRanges":[],"type":"header-three","entityRanges":[],"key":"33s0h","data":{}},{"entityRanges":[{"length":7,"key":13,"offset":103}],"depth":0,"inlineStyleRanges":[],"data":{},"text":"1. Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Safe attachments > Reports.","key":"b6oba","type":"unstyled"},{"key":"346eo","text":" ","type":"atomic","data":{},"depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":14}]},{"text":"Safe links","key":"623tt","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{},"type":"header-two"},{"depth":0,"text":"Safe links are used to protect your users against malicious links. Safe Links isn't just for email though. It will protect your users from malicious links in emails, and office apps. For example, if a user plugs in a USB drive with a Word document into their computer and the Word document has a link to a malicious site then safe links will protect the user.","inlineStyleRanges":[],"key":"5voiv","type":"unstyled","entityRanges":[],"data":{}},{"key":"f1fce","type":"unstyled","entityRanges":[],"depth":0,"inlineStyleRanges":[],"text":"You can manually add URLs to a block / allow list. For example, let's say you want to block any of your users from accessing a link to contoso.com. How do we block it?","data":{}},{"type":"header-three","key":"7binl","data":{},"text":"How to block malicious URLs manually","entityRanges":[],"inlineStyleRanges":[],"depth":0},{"entityRanges":[],"key":"dpf7n","inlineStyleRanges":[{"style":"BOLD","length":35,"offset":9},{"style":"BOLD","length":16,"offset":47},{"offset":66,"style":"BOLD","length":15},{"length":23,"style":"BOLD","offset":84},{"length":5,"offset":110,"style":"BOLD"},{"length":5,"style":"BOLD","offset":117},{"offset":144,"length":23,"style":"BOLD"},{"length":24,"offset":186,"style":"BOLD"},{"offset":257,"length":3,"style":"BOLD"}],"depth":0,"text":"1. Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Tenant Allow/Block List > URLs > Block. Add the URL to the \"Add URLs with wildcards\" section. Set the Remove block entry after to the number of days to block the URL. Click Add.","data":{},"type":"unstyled"},{"text":" ","type":"atomic","inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":15,"length":1}],"data":{},"key":"f1j55","depth":0},{"text":"Understanding block URLs","key":"1pooc","depth":0,"inlineStyleRanges":[],"data":{},"type":"header-three","entityRanges":[]},{"key":"402ef","inlineStyleRanges":[],"depth":0,"data":{},"type":"unstyled","entityRanges":[],"text":"Blocking URLs can be a bit tricky but powerful. For instance, you can use wildcards. Let's take a couple of examples."},{"inlineStyleRanges":[],"type":"unstyled","depth":0,"data":{},"text":"*.contoso.com would block all subdomains of contoso.com. It would block www.contoso.com, ftp.contoso.com, 1.www.contoso.com, etc. It would not block contoso.com.","entityRanges":[],"key":"40usb"},{"depth":0,"type":"unstyled","key":"ctj9j","text":"malware.*com would be invalid and not block anything.","inlineStyleRanges":[],"entityRanges":[],"data":{}},{"entityRanges":[],"type":"unstyled","text":"*.phishing.*.* would be invalid and not block anything.","data":{},"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","offset":15,"length":40},{"offset":15,"length":40,"style":"bgcolor-rgb(255,255,255)"},{"length":40,"style":"fontsize-16","offset":15},{"length":40,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":15}],"depth":0,"key":"13m2b"},{"key":"eep1u","depth":0,"text":"How to track when users click links","type":"header-three","data":{},"entityRanges":[],"inlineStyleRanges":[]},{"entityRanges":[],"text":"By default when a user clicks a link it isn't tracked. In short, you'll never know when a user clicks the link. Let's change that so we can monitor who's clicking bad links.","depth":0,"data":{},"key":"caql4","type":"unstyled","inlineStyleRanges":[]},{"inlineStyleRanges":[{"style":"color-rgb(33,37,41)","length":199,"offset":0},{"length":199,"style":"bgcolor-rgb(255,255,255)","offset":0},{"style":"fontsize-16","length":199,"offset":0},{"length":199,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0},{"offset":9,"style":"BOLD","length":35},{"style":"BOLD","offset":47,"length":16},{"style":"BOLD","length":15,"offset":66},{"length":64,"style":"BOLD","offset":122},{"style":"BOLD","offset":194,"length":4}],"entityRanges":[],"text":"1. Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Safe links > Global settings. Disable Do not track when users click protected links in Office 365 apps. Click Save.","depth":0,"key":"537ap","data":{},"type":"unstyled"},{"text":" ","entityRanges":[{"key":16,"length":1,"offset":0}],"depth":0,"data":{},"key":"ck5ir","type":"atomic","inlineStyleRanges":[]},{"entityRanges":[],"inlineStyleRanges":[],"data":{},"type":"header-two","text":"Phishing protection","depth":0,"key":"f46k"},{"key":"f3456","data":{},"inlineStyleRanges":[],"type":"unstyled","text":"anti-phishing became a little too big for this article so it's been moved to its own section. https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT.","depth":0,"entityRanges":[{"key":17,"length":94,"offset":94}]},{"data":{},"depth":0,"entityRanges":[],"key":"60d9d","type":"header-two","text":"Anti-malware","inlineStyleRanges":[]},{"key":"db52s","depth":0,"type":"unstyled","entityRanges":[],"text":"Anti-malware is your standard attachment filtering service. It provides common attachment filtering so you can block exes, isos, etc. It also has a zero-hour purge feature which will delete attachments that make it to the inbox and then are found to be malicious. Finally, you can edit who's notified when a message is found to contain malware.","data":{},"inlineStyleRanges":[]},{"entityRanges":[],"text":"How to edit the anti-malware settings","type":"header-three","depth":0,"inlineStyleRanges":[],"key":"24knp","data":{}},{"key":"8t4qe","type":"unstyled","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":35},{"style":"BOLD","offset":47,"length":16},{"style":"BOLD","length":15,"offset":66},{"offset":84,"style":"BOLD","length":12},{"style":"BOLD","length":17,"offset":108},{"length":24,"style":"BOLD","offset":140}],"text":"1. Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Anti-malware. Click the Default (default) policy. Click Edit protection settings.","entityRanges":[],"data":{},"depth":0},{"data":{},"entityRanges":[{"length":1,"offset":0,"key":18}],"type":"atomic","depth":0,"text":" ","key":"4b5fj","inlineStyleRanges":[]},{"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"key":"8tqnm","depth":0,"text":"","data":{}}],"entityMap":{"0":{"data":{"url":"https://security.microsoft.com/antispam","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"1":{"data":{"alignment":"none","width":"auto","height":"auto","alt":"Anti-spam inbound policy (Default)","src":"https://i.ibb.co/yP4FgXv/Anti-spam-inbound-policy-Default.png"},"mutability":"MUTABLE","type":"IMAGE"},"2":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","alt":"Information I","height":"auto","width":"auto","src":"https://i.ibb.co/hF9wf0j/information-i.png"}},"3":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/4KMB8dW/connection-filter-settings.png","alt":"connection filter settings","alignment":"none","height":"auto","width":"auto"}},"4":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","height":"auto","src":"https://i.ibb.co/mXw10nR/Anti-spam-outbound-policy-Default.png","alt":"Anti-spam outbound policy","width":"auto"}},"5":{"type":"LINK","data":{"alignment":"left","height":"auto","src":"https://i.ibb.co/tKrgbvt/create-a-new-safe-attachment-policy.png","alt":"Create a new safe attachment policy","width":"auto","targetOption":"_blank","url":"https://security.microsoft.com/safeattachmentv2"},"mutability":"MUTABLE"},"6":{"data":{"width":"auto","alignment":"none","height":"auto","alt":"Create a new safe attachment policy","src":"https://i.ibb.co/tKrgbvt/create-a-new-safe-attachment-policy.png"},"mutability":"MUTABLE","type":"IMAGE"},"7":{"data":{"width":"auto","alt":"Add all your domains to the domains list in your safe attachments policy","height":"auto","alignment":"none","src":"https://i.ibb.co/jMBdS0g/protect-all-domains-from-unsafe-attachments.png"},"type":"IMAGE","mutability":"MUTABLE"},"8":{"data":{"height":"auto","src":"https://i.ibb.co/zncV4XL/configure-the-safe-attachment-policy.png","alignment":"none","width":"auto","alt":"Configure the safe attachment policy"},"mutability":"MUTABLE","type":"IMAGE"},"9":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/VVBFQsk/Safe-Attachments-unknown-malware-response.png","width":"auto","alt":"Safe Attachments unknown malware response","height":"auto","alignment":"none"}},"10":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","width":"auto","src":"https://i.ibb.co/xGx3RSY/block-URL-in-Microsoft-365.png","height":"auto","alt":"How to block a URL in Microsoft 365","url":"https://admin.exchange.microsoft.com/#/messagetrace","alignment":"left"}},"11":{"data":{"alignment":"none","alt":"Start a message trace","width":"auto","src":"https://i.ibb.co/V9y9b8z/start-a-message-trace.png","height":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"12":{"type":"IMAGE","data":{"src":"https://i.ibb.co/p14jV0N/Message-trace-results.png","width":"auto","height":"auto","alt":"View message trace results","alignment":"none"},"mutability":"MUTABLE"},"13":{"type":"LINK","data":{"targetOption":"_blank","width":"auto","src":"https://i.ibb.co/wCXzsMM/view-message-trace-results.png","alignment":"left","alt":"View the message trace results","height":"auto","url":"https://security.microsoft.com/reports/TPSEmailMalwareReportATP"},"mutability":"MUTABLE"},"14":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"none","src":"https://i.ibb.co/Df0KQVp/Reports.png","alt":"Threat protection status report","width":"auto","url":"https://security.microsoft.com/reports/TPSEmailMalwareReportATP","targetOption":"_blank","height":"auto"}},"15":{"mutability":"MUTABLE","data":{"alignment":"none","width":"auto","alt":"How to block a URL in Microsoft 365","height":"auto","src":"https://i.ibb.co/xGx3RSY/block-URL-in-Microsoft-365.png"},"type":"IMAGE"},"16":{"mutability":"MUTABLE","type":"IMAGE","data":{"width":"auto","src":"https://i.ibb.co/Dw9Hb9L/Track-when-users-click-protected-links.png","alt":"Enable tracking when a user clicks a protected URL","height":"auto","alignment":"none"}},"17":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT"}},"18":{"type":"IMAGE","data":{"height":"auto","width":"auto","src":"https://i.ibb.co/S5tCBZ7/anti-malware-settings.png","alignment":"none","alt":"Anti-malware settings"},"mutability":"MUTABLE"}}},"description":"Email is one of the most targeted attack vectors in your environment, and there are many moving pieces. There are spam and phishing attacks. And there isn't one size fits in terms of how they attack. They can use malware, attachments, and links.","id":"6HUOr7qbL","type":"article","title":"Protect your email and Office environment from malicious actors"},
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
