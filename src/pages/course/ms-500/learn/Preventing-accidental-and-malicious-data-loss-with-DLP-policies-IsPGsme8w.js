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
      path: '/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w',
      article: {ARTICLE: true},
      nextContentSlug: 'Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI',
      previousContentSlug: 'Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f',
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
                <div><p>Your organization will surely have data you don't want to be sent outside the environment. It may be HIPPA data, credit cards, social security numbers, or maybe all three. No matter what your organization does it will have data that needs to stay inside the environment. So how do you make sure users don't maliciously or accidentally send data to the world that they shouldn't? Data Loss Prevention (DLP) policies.</p>
                  <p>DLP policies are a way to scan data that is being saved or sent from your Microsoft 365 environment and then you can block it, warn the user, or warn someone else that the data is being sent. But enough chit-chat, let's jump in.</p>
                  <h2>3 parts of a DLP policy</h2>
                  <p>There are 3 important parts of a DLP policy. First is the DLP policy itself. The second is the rules. Lastly, is the sensitive info types. We are going to take these backward.</p>
                  <p>The <strong>Sensitive info type</strong> is the content that is being looked for. It can be a keyword, for example: "credit card number" or "cc", or it can be a regular expression, for example, "\d&#123;3&#125;-\d&#123;5&#125;-\d&#123;5&#125;", which tells Microsoft to look for 3 digits, a dash (-), 5 digits, a dash (-), and then 5 digits. There are also built-in functions that Microsoft has provided. Microsoft has provided several sensitive info types to help you get started.</p>
                  <p>Next, is the <strong>Rule. </strong>Rules combine the sensitive info types and what happens when you find it. For example, you can create a rule that searches for the sensitive info type or credit card information, and when it's found, it blocks it from being sent outside the organization. Or you can create a rule that searches for passport ID numbers and notifies the sender and admins that the content is being sent. A Rule can contain multiple sensitive info types but the actions that are applied when the content is found must be the same.</p>
                  <p>Finally is the <strong>DLP policy</strong>. The DLP policy says "where to search for" and what rules to apply to that location. For example, I can create a DLP policy that searches all Exchange emails for a rule that searches for credit card information and blocks it from going outside the organization. Or I can create a DLP policy that has multiple rules in it. For example, I can create a DLP policy that searches all of OneDrive. Then have 1 rule that looks for and blocks any social security numbers from being sent outside the company. And another rule that searches for credit card numbers and allows the content to be sent but notifies admins that it's being sent.</p>
                  <p>In short, a sensitive info type is "what to search for". Rules say "When content contains these sensitive info types apply these actions". DLP policies define what rules are applied to what locations.</p>
                  <h2>How to set up a DLP Policy</h2>
                  <p>1. Open the <strong>Compliance admin center</strong> &gt; <strong>Data loss prevention</strong> &gt; <a href="https://compliance.microsoft.com/datalossprevention?viewid=policies" target="_blank" rel="noreferrer"><strong>Policies</strong></a><strong> </strong>&gt; <strong>Create policy</strong>.</p>
                  <div ><img src="https://i.ibb.co/n8WcqKM/Create-a-DLP-policy.png" alt="Create a DLP policy" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Financial </strong>&gt; <strong>U.S. Financial Data</strong> &gt; <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/R7cd13n/Setup-DLP-policy-for-U-S-Financial-data.png" alt="Setup DLP policy for U.S. Financial data" style="height: auto;width: auto" /></div>
                  <p>3. On the "name your DLP policy" page click <strong>Next</strong>.</p>
                  <p>4. On the "Choose locations to apply the policy" page notice the settings you have. You can include or exclude exchange mailboxes, SharePoint sites, OneDrive accounts, Teams locations, and more. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/jTt0Ztp/Choose-locations-to-apply-the-policy.png" alt="Choose locations to apply the policy" style="height: auto;width: auto" /></div>
                  <p>5. On the "Define policy settings" page click <strong>Next</strong>.</p>
                  <p>6. On the "Info to protect" page take notice of the settings. You can set the alert to go off if you are sharing the U.S. Financial data with users inside or outside your organization. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/fGDXMxV/Info-to-protect.png" alt="Info to protect" style="height: auto;width: auto" /></div>
                  <p>7. On the "Protection actions" page take note of the settings. Here's where things get interesting.</p>
                  <div ><img src="https://i.ibb.co/7jq4dFH/Protection-actions.png" alt="Protection actions" style="height: auto;width: auto" /></div>
                  <ul>
                    <li>You can define who's notified when content breaches the DLP policy.</li>
                    <li>You can set the minimum number of entries that will trigger the DLP policy. For example, "At least 10 or more instances of the same sensitive info type" in the U.S. Financial Data will mean the document or email that is being sent will require 10 credit card numbers before the alert is triggered. That means a user in your organization can send one to nine credit card numbers outside the environment before triggering the alert.</li>
                    <li>Next are the "Send incident reports in email" and "Send alerts if any of the DLP rules match" settings. This setting will send any global admin an email when content matches the DLP policy. You can also add anyone you want here.</li>
                    <li>Finally, is the "Restrict access or encrypt the content". This checkbox will allow you to automatically encrypt the information or set permissions on the content.</li>
                  </ul>
                  <p>Click <strong>Next</strong>.</p>
                  <p>8. On the "Customize access and override settings" page you have some more options. If you check "Restrict access or encrypt the content in Microsoft 365 locations even more options will appear! I believe all the options on this page are pretty well explained so I won't waste our time. Click <strong>Next</strong>.</p>
                  <p>9. Verify <strong>Turn it on right away </strong>is selected and click <strong>Next</strong>. Click <strong>Submit</strong>. Click <strong>Done</strong>.</p>
                  <h2>How to edit a DLP policy</h2>
                  <p>Now we'll break down how the DLP policy is applied. Let's open a DLP policy to edit the settings.</p>
                  <p>1. Go to <strong>Compliance admin center</strong> &gt; <strong>Data loss prevention</strong> &gt; <strong>Policies</strong>. Click the <strong>checkbox</strong> next to the policy and click <strong>Edit policy</strong>.</p>
                  <div ><img src="https://i.ibb.co/4V38fcH/edit-data-loss-prevention-policy.png" alt="Edit data loss prevention policy" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Next </strong>until you are on the "Customize advanced DLP rules" page.</p>
                  <div ><img src="https://i.ibb.co/6FDybGz/DLP-Policy-Low-Volume-and-High-Volume.png" alt="DLP Policy rules showing high volume and low volume" style="height: auto;width: auto" /></div>
                  <p>Notice there are two different rules: 1 for low volume of content detected and one for the high volume of content detected. If you click the arrows next to the names you'll see a quick breakdown of how the rules work. Now let's click the <strong>Edit </strong>button next to "Low volume of content detected U.S. Financial Data".</p>
                  <div ><img src="https://i.ibb.co/y4p1fhQ/Edit-Low-volume-of-content-detected-U-S-Financial-Data.png" alt="Edit Low volume of content detected U.S. Financial Data" style="height: auto;width: auto" /></div>
                  <h3>Conditions</h3>
                  <div ><img src="https://i.ibb.co/TRxj8hz/DLP-Conditions.png" alt="Microsoft DLP Policy conditions" style="height: auto;width: auto" /></div>
                  <p>The conditions section is asking "what are you looking for". To put it another way, when the content matches the conditions, apply the policy.</p>
                  <p>Notice there are two sections:<strong> Content contains</strong> and <strong>Content is shared from Microsoft 365</strong>. The AND in the middle of the two sections means to trigger this DLP policy they both need to be flagged as true. So if one of your users shares credit card information internally then the policy won't be triggered.</p>
                  <p>Now see the sensitive info types? Those are OR statements. That means only one of those has to be found to trigger the DLP policy.</p>
                  <p>So the DLP policy will trigger if a credit card number is found OR a U.S. Bank account number OR an ABA Routing Number AND shared outside the organization. Now let's talk about the sensitive info types.</p>
                  <p>The <strong>Sensitive info types</strong> are special rules mostly created by Microsoft to find certain information. You can see some information by hovering over the "<strong>I</strong>" next to the confidence level. The "<strong>I</strong>" will tell you what it's looking for and how the confidence level plays in. A higher <strong>confidence level</strong> will require more matching elements. For example, with the credit card number, a high or medium confidence will require it to find a credit card number AND a keyword. A low confidence level will just look for the credit card number.</p>
                  <div ><img src="https://i.ibb.co/F53G4wv/Sensitive-info-types.png" alt="Sensitive info types" style="height: auto;width: auto" /></div>
                  <p>The <strong>instance count</strong> is how many instances need to match to trigger the sensitive info type. Since we are currently looking at the "Low volume" rule it wants to find 1 - 9 numbers to match. If the DLP policy finds more than 9 then the rule won't be triggered. In this DLP policy instance, any more than 9 will trigger other "High volume"</p>
                  <div ><img src="https://i.ibb.co/F53G4wv/Sensitive-info-types.png" alt="Sensitive info types" style="height: auto;width: auto" /></div>
                  <h3>Exceptions</h3>
                  <p>The exceptions are pretty straightforward, it's a rule that, if matched, won't apply the policy to the content. For example, our current policy says "If the content contains Credit Card Numbers AND is shared with people outside the organization". We could recreate the rule to say "If the content contains Credit Card Numbers EXCEPT if it's shared inside the organization"</p>
                  <h3>Actions</h3>
                  <p>The actions section is what happens when the content is matched. For example, we can encrypt the content and allow the email to be sent. Let's <strong>Add an action</strong> &gt; <strong>Restrict access or encrypt the content in Microsoft 365 locations</strong>.</p>
                  <div ><img src="https://i.ibb.co/9cb1P3N/DLP-policy-actions-encrypt.png" alt="DLP Policy: Add an action > Restrict access or encrypt" style="height: auto;width: auto" /></div>
                  <p>Click the Checkbox <strong>Restrict access or encrypt the content in Microsoft 365 locations</strong>. Take note of the additional settings. In short, you can block people outside your organization or everyone from accessing the content.</p>
                  <div ><img src="https://i.ibb.co/Pcxtf1N/Restrict-access-or-encrypt-the-content-in-Microsoft-365-locations.png" alt="Restrict access or encrypt the content in Microsoft 365 locations" style="height: auto;width: auto" /></div>
                  <h3>User notifications</h3>
                  <p>In the next section, user notifications, you can determine who's notified and how they are notified. You can notify the person that breached the DLP policy, the owner of the site, or OneDrive account, or the owner of the content. Additionally, you can add other users to always be notified. For example, you can set yourself to always receive a notification when the DLP policy is matched. Next, you can customize the text on the email or the policy tip. The policy tip is the bar that will appear at the top of the Office app that you are using when you matched the DLP policy.</p>
                  <div ><img src="https://i.ibb.co/jhpsb4c/User-notifications.png" alt="User notifications" style="height: auto;width: auto" /></div>
                  <h3>User overrides</h3>
                  <p>The user overrides section allows users to override the policy. For example, if the DLP policy blocked the email from being sent then checking the below box would allow the user sending the email to override and send the email anyway.</p>
                  <div ><img src="https://i.ibb.co/RcRHV5F/DLP-Policy-User-Overrides.png" alt="DLP Policy user overrides" style="height: auto;width: auto" /></div>
                  <p>You have two options when allowing the override. <strong>Require a business justification to override</strong> allows the user to override the policy but they have to provide a reason. <strong>Override the rule automatically if they report it as a false positive </strong>will allow the user to send the content if they mark it as a false positive. For example, if the user sends the content that looks like a bank account and routing number but it isn't a bank account and routing number then the user can send the email.</p>
                  <h3>Incident reports</h3>
                  <p>In this section is the backend/admin reporting when the match occurs. The alerts will appear in the <strong>Compliance admin center</strong> &gt; <strong>Data loss prevention</strong> &gt; <a href="https://compliance.microsoft.com/datalossprevention?viewid=dlpalerts" target="_blank" rel="noreferrer"><strong>Alerts</strong></a>. You can also send an alert or report email to anyone in your organization. Finally, you have the information that is sent in the incident report.</p>
                  <div ><img src="https://i.ibb.co/nCMY8qn/Incident-reports.png" alt="Incident reports" style="height: auto;width: auto" /></div>
                  <h3>Additional options</h3>
                  <p>Finally, there are additional options. that are designed for when multiple DLP rules match the content. The first option is the ability to stop processing more rules. This is a good option if you have multiple DLP policies that may match the same content but you only want to apply this DLP policy. Next is the priority. The lowest priority is executed first. So a priority of 0 is executed first.</p>
                  <div ><img src="https://i.ibb.co/8djBScJ/Additional-options.png" alt="Additional options" style="height: auto;width: auto" /></div>
                  <h2>How to create a sensitive info type</h2>
                  <p>Finally, we're on to the sensitive info types. Remember when we used the credit card numbers, bank accounts, and routing numbers? We'll Microsoft allows us to create personalized sensitive info types. Let's pretend the company we work for has assigned every customer a 13-digit Company ID. They typically look like this "111-12345-12345". Let's create a sensitive info type to detect that type.</p>
                  <p>1. Go to <strong>Compliance admin center</strong> &gt; <strong>Data classification</strong> &gt; <a href="https://compliance.microsoft.com/dataclassification?viewid=sensitiveinfotypes" target="_blank" rel="noreferrer"><strong>Sensitive info types</strong></a>. Click <strong>Create sensitive info type</strong>.</p>
                  <div ><img src="https://i.ibb.co/FmRDQ4j/Create-sensitive-info-type.png" alt="Create sensitive info type" style="height: auto;width: auto" /></div>
                  <p>2. Name your sensitive info type "<strong>Company ID</strong>". Set the description to "<strong>Internal Company ID</strong>" Click <strong>Next</strong>.</p>
                  <p>3. Click <strong>Create pattern</strong> &gt; <strong>Add primary element</strong> &gt; <strong>Regular expression</strong>.</p>
                  <div ><img src="https://i.ibb.co/dKgDMPw/New-Pattern.png" alt="Microsoft 365 DLP info type New pattern" style="height: auto;width: auto" /></div>
                  <p>4. Enter an ID of <strong>"Company ID</strong>". Enter the following in the regular expression "<strong>\d&#123;3&#125;-\d&#123;5&#125;-\d&#123;5&#125;</strong>". Click <strong>Done</strong>.</p>
                  <div ><img src="https://i.ibb.co/ftHCQMv/Add-a-regular-expression.png" alt="Add a regular expression​" style="height: auto;width: auto" /></div>
                  <p>5. Click the <strong>Anywhere in the document</strong> checkbox. Then click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/GpkgjwJ/New-Pattern.png" alt="Create new pattern" style="height: auto;width: auto" /></div>
                  <p>6. Click <strong>Next</strong> &gt; <strong>Next </strong>&gt; <strong>Create</strong>.</p>
                  <p>Now you can use your new sensitive info type in a DLP policy. So remember, if someone (or a question on the MS-500) asks you to verify a company ID doesn't leave the organization you'll first need to create a sensitive info type and then create a DLP policy. Lastly, for SharePoint files to be found with the new sensitive info type you may need to reindex your sites.</p>
                  <h3>How to create a sensitive info type using PowerShell</h3>
                  <p>I've never had to create a sensitive info type using PowerShell but you may see it on the test. Just know the steps are as follows:</p>
                  <p>1. Connect to the Security &amp; Compliance admin center using PowerShell. The command is "Connect-IPPSSession"</p>
                  <p>2. Export the current rules as an XML file. The command is "Get-DlpSensitiveInformationTypeRulePackage | Export-Clixml .\rules.xml"</p>
                  <p>3. Modify the file making the changes you desire</p>
                  <p>4. Upload the file. The command is "New-DlpSensitiveInformationTypeRulePackage -FileData ([System.IO.File]::ReadAllBytes('PathToXml.xml'))"</p>
                  <h3>How to reindex a site</h3>
                  <p>1. Open the SharePoint site you want to reindex. Click <strong>Settings </strong>&gt; <strong>Site information</strong>.</p>
                  <div ><img src="https://i.ibb.co/BsyLQR0/open-site-information.png" alt="Open SharePoint site information" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>View all site settings</strong>. Click <strong>Search and offline availability</strong>.</p>
                  <div ><img src="https://i.ibb.co/B3xy841/search-and-offline-availability.png" alt="Search and offline availability" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Reindex site</strong> &gt; <strong>Reindex site</strong></p>
                  <div ><img src="https://i.ibb.co/yfH32BX/reindex-site.png" alt="Reindex site" style="height: auto;width: auto" /></div>
                  <h2>Priority in which rules are applied</h2>
                  <p>If content matches multiple rules, the rule that is the most restrictive action is enforced. Let's take an example of two rules:</p>
                  <p>Rule 1: notify users</p>
                  <p>Rule 2: notify the user and restrict access</p>
                  <p>Rule 2 will be applied.</p>
                  <p>Next, is the priority level. If two rules have the same restrictive action then the rule with the highest priority is run.</p>
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
