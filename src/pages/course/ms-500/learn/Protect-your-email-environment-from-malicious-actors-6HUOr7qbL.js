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

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.setHasCompletedContent = this.setHasCompletedContent.bind(this)
    this.getUid = this.getUid.bind(this)
    this.addScroll = this.addScroll.bind(this)

    this.state = {
      isTrackScrolling: false,
      path: '/course/ms-500/learn/Protect-your-email-environment-from-malicious-actors-6HUOr7qbL',
      article: {ARTICLE: true},
      nextContentSlug: 'Protecting-email-against-phishing-attacks-GCOOUsSBT',
      previousContentSlug: 'Whats-Microsoft-Defender-for-Office-365-EnPyp7ukN',
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
    if (document.body.scrollHeight * .8 < window.innerHeight + window.scrollY)
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
                <div><p>Email is one of the most targeted attack vectors in your environment, and there are many moving pieces. There are spam and phishing attacks. And there isn't one size fits in terms of how they attack. They can use malware, attachments, and links. Anyway, if you're reading about the MS-500 then I'm sure you're aware of the security issues related to email. So without wasting a lot of time let's jump into the defenses.</p>
                  <p>Before we talk about each policy let's talk about defaults. By default messages that contain word-filtered content is directed to the user's junk email folder. In short, spam. Spam is unwanted, unsolicited email that gets sent out in bulk. Phishing emails are fraudulent messages designed to trick someone into revealing sensitive information or installing malicious software. In short, spam is junk email while phishing attacks are more malicious. Phishing messages are directed to the junk folder or the quarantine depending on the confidence level. High confidence phishing emails, in other words, emails that Microsoft 365 is confident it is phishing will go to the quarantine while messages that Microsoft 365 is not 100% positive is phishing will go to the junk email folder.</p>
                  <h2>Anti-spam</h2>
                  <p>First up on the list is anti-spam. There are 3 distinct policies for anti-spam: inbound, connection, and outbound.</p>
                  <h3>Anti-spam inbound policy</h3>
                  <p>The anti-spam inbound policy is exactly what it sounds like. It filters inbound (or messages coming into your organization) for spam. Now, you may think that only inbound spam is managed in this policy. That would be a fair assumption but also incorrect. The anti-spam inbound policy also tells Microsoft 365 how to handle phishing emails. It also tells Microsoft 365 how long to store emails in the quarantine before they get deleted. Let's jump in and look at the settings.</p>
                  <h4>How to edit the default anti-spam inbound policy</h4>
                  <p>1. Go to Microsoft 365 Defender admin center &gt; Policies &amp; rules &gt; Threat policies &gt; <a href="https://security.microsoft.com/antispam" target="_blank" rel="noreferrer">Anti-spam</a> . Click Anti-spam inbound policy (default).</p>
                  <div ><img src="https://i.ibb.co/yP4FgXv/Anti-spam-inbound-policy-Default.png" alt="Anti-spam inbound policy (Default)" style="height: auto;width: auto" /></div>
                  <p>There are a lot of properties that can be set so I won't go over each one but know there is more information if you hover over the <strong>I</strong> next to some of the properties.</p>
                  <div ><img src="https://i.ibb.co/hF9wf0j/information-i.png" alt="Information I" style="height: auto;width: auto" /></div>
                  <p>Notice there are four sections: description, spam threshold and properties, actions, and allowed/blocked senders and domains.</p>
                  <p>The description is simply the <strong>description </strong>that admins will see when they open the policy.</p>
                  <p>The <strong>spam threshold and properties </strong>will tell Microsoft 365 when to mark an email as spam. For example, there's a bulk email threshold slider. To flag, more emails as spam drag the slider to a lower number. To flag, fewer emails as spam slide the slider to a high number.</p>
                  <p>The <strong>actions </strong>section will tell Microsoft 365 what to do when it finds a message that's spam, phishing, or bulk email. For example, you may want the email to go to the user's junk email folder or you may want the email to go to the quarantine. The actions section is where you'll find the <strong>retain spam in quarantine for this many days</strong> setting.</p>
                  <p>The <strong>allowed/blocked senders and domains</strong> tell Microsoft to either allow a sender through the filters or block them. For example, let's say you are a partner of GitBit and want all emails from GitBit to be allowed through the spam filters. Simply add GitBit.org to the <strong>Allowed domains</strong> section.</p>
                  <h3>Connection filter</h3>
                  <p>The connection filter is where you can tell Microsoft to allow emails through or block emails from specific IP addresses. Maybe you are receiving a lot of spam from a particular address. Add it to the IP block list. The connection filter also has a "safe list". In short, Microsoft verifies some IP addresses are particularly safe to allow through. By checking the <strong>Turn on safe list</strong> you are telling Microsoft to manage your allowed list (along with your custom added IP addresses)</p>
                  <p />
                  <div ><img src="https://i.ibb.co/4KMB8dW/connection-filter-settings.png" alt="connection filter settings" style="height: auto;width: auto" /></div>
                  <h3>Anti-spam outbound policy (Default)</h3>
                  <p>Microsoft doesn't just protect you from the world. Microsoft also protects the world from you. In short, if you or your devices continually get hacked and send out spam messages you can limit how many messages a user can send per hour or per day. That way if a user account gets hacked and starts sending out massive amounts of emails you can automatically lock down that account.</p>
                  <div ><img src="https://i.ibb.co/mXw10nR/Anti-spam-outbound-policy-Default.png" alt="Anti-spam outbound policy" style="height: auto;width: auto" /></div>
                  <p>In the outbound spam policy, you'll also find the <strong>automatic forwarding</strong> setting. In short, malicious users will a lot of times gain access to one of your mailboxes and they'll set up forwarding to automatically forward all emails received by the mailbox to their own mailboxes (that are outside your environment). This setting will either allow the automatic forwarding or block the automatic forwarding. It's up to you. By default, it blocks the automatic forwarding. So if a user wants to forward their work email to their Gmail and you want to allow them to do it you'll need to adjust the outbound policy automatic forwarding.</p>
                  <h2>Safe attachments</h2>
                  <p>Safe attachments provide an additional layer of security for any attachments coming into your environment. In short, Microsoft can check attachments in a virtual environment to detect any malicious actions the attachments may cause. This process is known as <em>detonation</em>.</p>
                  <h3>What licenses are required?</h3>
                  <p>Safe attachments are available to any organization that has Microsoft Defender for Office 365 plan 1 or Microsoft Defender for Office 365 plan 2 licenses.</p>
                  <h3>How to configure safe attachments</h3>
                  <p>Anyway, let's configure a safe attachment policy to replace malicious attachments.</p>
                  <p>1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Policies &amp; rules</strong> &gt; <strong>Threat policies</strong> &gt; <a href="https://security.microsoft.com/safeattachmentv2" target="_blank" rel="noreferrer"><strong>Safe attachments</strong></a>. Click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/tKrgbvt/create-a-new-safe-attachment-policy.png" alt="Create a new safe attachment policy" style="height: auto;width: auto" /></div>
                  <p>2. Name the policy "<strong>replace unsafe attachments</strong>" Click <strong>Next</strong>.</p>
                  <p>3. Add each of your domains into the <strong>Domains </strong>section. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/jMBdS0g/protect-all-domains-from-unsafe-attachments.png" alt="Add all your domains to the domains list in your safe attachments policy" style="height: auto;width: auto" /></div>
                  <p>4. set Safe Attachments unknown malware response to Replace. Set the quarantine policy to DefaultFullAccessPolicy. Click Enable redirect. Enter your email address in the Send messages that contain blocked... Click Next.</p>
                  <div ><img src="https://i.ibb.co/zncV4XL/configure-the-safe-attachment-policy.png" alt="Configure the safe attachment policy" style="height: auto;width: auto" /></div>
                  <p>6. Click <strong>Submit</strong>.</p>
                  <p>That's it. Now you've created a policy that will remove malicious attachments but deliver the email to the user's inbox.</p>
                  <h3>Safe attachments unknown malware response</h3>
                  <p>Did you notice there were 5 options for what happens to unknown malware in attachments? Here's a quick run down of the options:</p>
                  <div ><img src="https://i.ibb.co/VVBFQsk/Safe-Attachments-unknown-malware-response.png" alt="Safe Attachments unknown malware response" style="height: auto;width: auto" /></div>
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
                  <p>1. Go to <strong>Exchange admin center</strong> &gt; <strong>Mail flow</strong> &gt; <a href="https://admin.exchange.microsoft.com/#/messagetrace" target="_blank" rel="noreferrer"><strong>Message trace</strong></a>. Click <strong>Start a trace</strong>. Enter the <strong>senders </strong>or <strong>recipients</strong>' email in the space provided. Click <strong>Search</strong>.</p>
                  <div ><img src="https://i.ibb.co/V9y9b8z/start-a-message-trace.png" alt="Start a message trace" style="height: auto;width: auto" /></div>
                  <p>2. Click the <strong>message </strong>you want to view. Expand <strong>Message events</strong>. Click the <strong>Send </strong>event.</p>
                  <div ><img src="https://i.ibb.co/p14jV0N/Message-trace-results.png" alt="View message trace results" style="height: auto;width: auto" /></div>
                  <h3>How to view messages in the Microsoft 365 Defender reports</h3>
                  <p>1. Go to Microsoft 365 Defender admin center &gt; Policies &amp; rules &gt; Threat policies &gt; Safe attachments &gt; <a href="https://security.microsoft.com/reports/TPSEmailMalwareReportATP" target="_blank" rel="noreferrer">Reports</a>.</p>
                  <div ><img src="https://i.ibb.co/Df0KQVp/Reports.png" alt="Threat protection status report" style="height: auto;width: auto" /></div>
                  <h2>Safe links</h2>
                  <p>Safe links are used to protect your users against malicious links. Safe Links isn't just for email though. It will protect your users from malicious links in emails, and office apps. For example, if a user plugs in a USB drive with a Word document into their computer and the Word document has a link to a malicious site then safe links will protect the user.</p>
                  <p>You can manually add URLs to a block / allow list. For example, let's say you want to block any of your users from accessing a link to contoso.com. How do we block it?</p>
                  <h3>How to block malicious URLs manually</h3>
                  <p>1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Policies &amp; rules</strong> &gt; <strong>Threat policies</strong> &gt; <strong>Tenant Allow/Block List</strong> &gt; <strong>URLs </strong>&gt; <strong>Block</strong>. Add the URL to the "<strong>Add URLs with wildcards</strong>" section. Set the <strong>Remove block entry after</strong> to the number of days to block the URL. Click <strong>Add</strong>.</p>
                  <div ><img src="https://i.ibb.co/xGx3RSY/block-URL-in-Microsoft-365.png" alt="How to block a URL in Microsoft 365" style="height: auto;width: auto" /></div>
                  <h3>Understanding block URLs</h3>
                  <p>Blocking URLs can be a bit tricky but powerful. For instance, you can use wildcards. Let's take a couple of examples.</p>
                  <p>*.contoso.com would block all subdomains of contoso.com. It would block www.contoso.com, ftp.contoso.com, 1.www.contoso.com, etc. It would not block contoso.com.</p>
                  <p>malware.*com would be invalid and not block anything.</p>
                  <p>*.phishing.*.* <span >would be invalid and not block anything.</span></p>
                  <h3>How to track when users click links</h3>
                  <p>By default when a user clicks a link it isn't tracked. In short, you'll never know when a user clicks the link. Let's change that so we can monitor who's clicking bad links.</p>
                  <p><span >1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Policies &amp; rules</strong> &gt; <strong>Threat policies</strong> &gt; Safe links &gt; Global settings. Disable <strong>Do not track when users click protected links in Office 365 apps</strong>. Click <strong>Save</strong>.</span></p>
                  <div ><img src="https://i.ibb.co/Dw9Hb9L/Track-when-users-click-protected-links.png" alt="Enable tracking when a user clicks a protected URL" style="height: auto;width: auto" /></div>
                  <h2>Phishing protection</h2>
                  <p>anti-phishing became a little too big for this article so it's been moved to its own section. <a href="https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT" target="_blank" rel="noreferrer">https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT</a>.</p>
                  <h2>Anti-malware</h2>
                  <p>Anti-malware is your standard attachment filtering service. It provides common attachment filtering so you can block exes, isos, etc. It also has a zero-hour purge feature which will delete attachments that make it to the inbox and then are found to be malicious. Finally, you can edit who's notified when a message is found to contain malware.</p>
                  <h3>How to edit the anti-malware settings</h3>
                  <p>1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Policies &amp; rules</strong> &gt; <strong>Threat policies</strong> &gt; <strong>Anti-malware</strong>. Click the <strong>Default (default)</strong> policy. Click <strong>Edit protection settings</strong>.</p>
                  <div ><img src="https://i.ibb.co/S5tCBZ7/anti-malware-settings.png" alt="Anti-malware settings" style="height: auto;width: auto" /></div>
                  <p />
                </div>
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
