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
      path: '/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ',
      article: {ARTICLE: true},
      nextContentSlug: 'Automating-Access-Review-in-Microsoft-365-rK48f6iM2',
      previousContentSlug: 'Locking-down-your-Microsoft-365-tenant-from-Microsoft-engineers-FldNualGC',
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
                <div><p>There are two policies That we can enable in Microsoft 365 to help us find and block malicious users.&nbsp;</p>
                  <ul>
                    <li><strong>User risk policy</strong></li>
                    <li><strong>Sign-in risk policy</strong></li>
                  </ul>
                  <div ><img src="https://i.ibb.co/0cyQJ7j/Risk-Detections.png" alt="Risk detections" style="height: auto;width: auto" /></div>
                  <h2>What’s a user risk policy?</h2>
                  <p>User risk is a calculation of the risk level that a user account has been compromised in Microsoft 365. The risk level is determined based on threat intelligence by reviewing normal behavior for the user. Some of the things that can be detected are the following:</p>
                  <ul>
                    <li><strong>Anonymous IP address</strong>: These can come from users trying to log in to your tenant using a TOR browser or anonymous VPN.</li>
                    <li><strong>Unfamiliar sign-in properties</strong>: This is typically flagged when the user attempts to log in from a new device, location, or another behavior that is new to the user.</li>
                    <li><strong>Atypical travel</strong>: This user risk is flagged when a user signs in from a location that is different from the other recent sign-ins.</li>
                    <li><strong>Malicious IP address</strong>: A public IP address is considered malicious when there is a high failure rate of logins from that IP address.</li>
                    <li><strong>Suspicious inbox manipulation rules</strong>: Detected by Microsoft Defender for Cloud Apps this detection is triggered when a suspicious rule is created in the user’s inbox. Typically, the rule will automatically delete or hide messages.</li>
                    <li><strong>Impossible travel</strong>: Detected by Microsoft Defender for Cloud Apps this detection type is detected when the user logs in or performs another activity from two geographically distant locations. For example, the user logs in from the U.S.A. then ten minutes later logs in from Russia.</li>
                  </ul>
                  <h2>What’s a sign-in risk policy?</h2>
                  <p>Sign-in risk policies show when a suspicious login happens in your Microsoft 365 environment. Microsoft 365 has a number of built-in sign-in risk policies.</p>
                  <ul>
                    <li>Activity from anonymous IP address: When a user logs in from an anonymous IP address</li>
                    <li>Unfamiliar sign-in properties: This is typically flagged when the user attempts to log in from a new device, location, or another behavior that is new to the user.</li>
                    <li>Impossible travel: Detected by Microsoft Defender for Cloud Apps this detection type is detected when the user logs in or performs another activity from two geographically distant locations. For example, the user logs in from the U.S.A. then ten minutes later logs in from Russia.</li>
                    <li>Atypical travel: This machine learning method recognizes two sign-ins that originated from geographically different locations, one of which may be uncommon for the individual, based on previous behavior. The machine learning system takes into account the sign-in time slot, among other things.</li>
                  </ul>
                  <h2>Licensing Requirements</h2>
                  <p>Sign-in risk policies and User risk policies require an Azure AD Premium P2 license for each user. The Azure AD Premium P2 license is bundled with Enterprise Mobility &amp; Security E5 licenses as well.</p>
                  <h2>Who can configure user risk policies and view users’ reports?</h2>
                  <p>Global admins and Security admins can configure a user risk policy. Global admins, security admins, and security operators can view the user’s reports.</p>
                  <h2>Different levels of risk</h2>
                  <p>There are 4 different levels of user risk / sign-in risk. No risk, in which the user sign-in / activity appears to pose no threat. Low risk, which says there is a low chance the user has been compromised. Medium risk which says there’s a moderate chance the user is compromised. And finally, high risk. You guessed it, it means there is a high chance the user is compromised.</p>
                  <h2>How to configure User Risk policies</h2>
                  <p>1. Open the <strong>Azure Active Directory admin center</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Identity Protection</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/IdentityProtectionMenuBlade/UserPolicy" target="_blank" rel="noreferrer"><strong>User risk policy</strong></a>.</p>
                  <div ><img src="https://i.ibb.co/2WG7SG2/user-at-risk-policy.png" alt="User risk policy" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>All users </strong>&gt; <strong>Exclude</strong> &gt;<strong> 0 users and groups selected</strong>. Click <strong>any users </strong>you want to exclude. Click <strong>Select</strong>.</p>
                  <div ><img src="https://i.ibb.co/VgqgtJ7/user-risk-policy-set-user-exclusion.png" alt="User risk policy set user exclusion" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Low and above </strong>(found under User risk). Click <strong>High</strong> &gt; <strong>Done</strong>.</p>
                  <div ><img src="https://i.ibb.co/fkmvH7B/user-risk-set-level.png" alt="User risk set level" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>On </strong>(found under Enforce policy). Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/qdNmFDh/enable-user-risk-policy.png" alt="Enable user risk policy" style="height: auto;width: auto" /></div>
                  <h2>How to configure Sign-in Risk policies</h2>
                  <p>1. Open the <strong>Azure Active Directory admin center</strong> &gt; <strong>Security</strong> &gt; <strong>Identity Protection</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/IdentityProtectionMenuBlade/SignInPolicy" target="_blank" rel="noreferrer"><strong>Sign-in risk policy</strong></a>.</p>
                  <div ><img src="https://i.ibb.co/80BCmFm/Sign-in-risk-policy.png" alt="Access the sign-in risk policy" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>All users</strong> &gt; <strong>Exclude</strong> &gt; <strong>0 users and groups selected</strong>. Click <strong>any users</strong> you want to exclude. Click <strong>Select</strong>.</p>
                  <div ><img src="https://i.ibb.co/CPCyhnx/sign-in-risk-policy-set-user-exclusion.png" alt="set Sign-in risk exclusion" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Low and above </strong>(found under Sign-in risk). Click <strong>High </strong>&gt; <strong>Done</strong>.</p>
                  <div ><img src="https://i.ibb.co/7GGmxWd/sign-in-risk-set-level.png" alt="Set sign-in risk to high" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>On </strong>(found under Enforce policy). Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/6JHJtSL/enable-sign-in-risk-policy.png" alt="Enable sign in risk policy" style="height: auto;width: auto" /></div>
                  <h2>Understanding the settings</h2>
                  <h3>Users</h3>
                  <p>Under assignments, you can choose which users are included and which users are excluded. Exclusions take precedence so if you select All users then exclude a group of users then the group of users in the excluded list will be excluded from the policy.</p>
                  <h3>User risk / Sign-in risk</h3>
                  <p>Under the sign-in risk/user risk policy, you can set what level of sign-in risk will trigger the control. For example, in the setup above we configured everyone with a high level of risk.</p>
                  <h3>Controls / Access</h3>
                  <p>From here you can select what happens when the assignments are met. For example, if you select All users with a sign-in risk of high or above then you can decide if you want them to be blocked from signing in at all or require MFA.</p>
                  <p>If you require a user to validate their identity with MFA and they aren’t configured with MFA then the user will be blocked from signing in.</p>
                  <h2 ><span >User experience</span></h2>
                  <p ><span >To see what the end-user will experience download the TOR Brower and attempt to login to your portal using any account that isn’t excluded from the policy. You should see a “Your sign-in was blocked”.</span></p>
                  <p ><span >Once the account is blocked then even when they attempt to sign in without the triggering event they’ll receive “Your account is blocked”</span></p>
                  <div ><img src="https://i.ibb.co/hVvD5Dz/sign-in-blocked.png" alt="Sign-in blocked" style="height: auto;width: auto" /></div>
                  <h2>How do you configure risk policies using conditional access policies?</h2>
                  <p>So, blocking access or requiring password change / MFA isn’t enough. You need to get a little more detailed. You want to exclude your Hybrid Azure AD joined devices from being blocked. Let’s look at how to do that.</p>
                  <p>1. Open the <strong>Azure Active Directory admin center</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Conditional Access</strong> &gt; <strong>New policy</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PolicyBlade" target="_blank" rel="noreferrer"><strong>Create new policy</strong></a>.</p>
                  <div ><img src="https://i.ibb.co/hXbkzMm/create-new-conditional-access-policy.png" alt="Create new conditional access policy" style="height: auto;width: auto" /></div>
                  <p>2. Set the name to <strong>Sign-in Risk Policy</strong>.</p>
                  <p>3. Click <strong>0 users or workload identities selected</strong>. Click <strong>All users</strong>.</p>
                  <div ><img src="https://i.ibb.co/SQf10Zw/conditional-access-policy-set-users.png" alt="Set the conditional access policy to include all users" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>No cloud apps, actions, or authentication contexts selected</strong>. Click <strong>All cloud apps</strong>.</p>
                  <div ><img src="https://i.ibb.co/9nSR5PQ/Set-conditional-access-policy-to-all-cloud-apps.png" alt="Set the conditional access policy to affect all cloud apps" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>0 conditions selected</strong> &gt; <strong>Not configured</strong> (found under Sign-in risk). Click <strong>Yes</strong> &gt; <strong>High </strong>&gt; <strong>Done</strong>.</p>
                  <div ><img src="https://i.ibb.co/kGFbxkD/set-conditions.png" alt="Set conditions in the conditional access policy" style="height: auto;width: auto" /></div>
                  <p>6. Click <strong>Not configured</strong> (found under Device state (Preview) &gt; <strong>Yes </strong>&gt; <strong>Exclude</strong> &gt; <strong>Device Hybrid Azure AD joined</strong>. Click <strong>Done</strong>.</p>
                  <div ><img src="https://i.ibb.co/qN96mM6/set-device-state-to-exclude-hybrid-azure-ad-joined.png" alt="Set the conditional access policy device state to exclude Hybrid Azure AD joined devices" style="height: auto;width: auto" /></div>
                  <p>7. Click <strong>0 controls selected</strong> (found under Grant). Click <strong>Grant access</strong> &gt; <strong>Require multi-factor authentication</strong> &gt; <strong>Select</strong>. Click <strong>On </strong>(found under enable policy) &gt; <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/yPz0x63/require-mfa-enable-policy.png" alt="Require MFA for High risk users" style="height: auto;width: auto" /></div>
                  <h2>Investigate risk</h2>
                  <p>Now you have policies in place how do we check to see if there are any malicious users getting blocked or any false positives where users are getting blocked but shouldn’t be?</p>
                  <p>There are three locations to review for risks: risky users, risky sign-ins, and risk detections.</p>
                  <h3>Risky users</h3>
                  <p>In the risky users' report administrators can view:</p>
                  <ul>
                    <li>What users are at risk.</li>
                    <li>Details about what was detected</li>
                    <li>Risk history of the user</li>
                  </ul>
                  <h4>View the risky users' report</h4>
                  <p>1. Open <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Security</strong> &gt; <strong>Identity Protection</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/IdentityProtectionMenuBlade/RiskyUsers" target="_blank" rel="noreferrer"><strong>Risky users</strong></a><strong>.</strong></p>
                  <p>2. Click the username to review the report.</p>
                  <div ><img src="https://i.ibb.co/qgWx4BP/risky-users-report.png" alt="View the risky users report" style="height: auto;width: auto" /></div>
                  <h2>Risky sign-ins</h2>
                  <p>The risky sign-ins report shows every sign-in for the last 30 days that had a low or higher risk. From the risky sign-ins report administrators can view:</p>
                  <ul>
                    <li>What sign-ins are labeled at risk.</li>
                    <li>Detection type</li>
                    <li>Device information (including OST, browser, and the compliance state of the device)</li>
                    <li>Location information (including IP, country, and city)</li>
                  </ul>
                  <h4>View the risky sign-ins report</h4>
                  <ol>
                    <li>Open <span ><strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Security</strong> &gt; <strong>Identity Protection</strong></span> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/IdentityProtectionMenuBlade/RiskySignIns" target="_blank" rel="noreferrer"><strong>Risky sign-ins</strong></a>.</li>
                    <li>Click the date/time of the sign-in you want to view.</li>
                  </ol>
                  <div ><img src="https://i.ibb.co/qRPzWWP/risky-sign-ins-report.png" alt="Risky sign-ins report" style="height: auto;width: auto" /></div>
                  <h3>Risk detections</h3>
                  <p>The risk detections report allows administrators to view:</p>
                  <ul>
                    <li>Details about what was detected (including risk level and detection type)</li>
                    <li>Location information (including IP, country, and city)</li>
                  </ul>
                  <h4>View the risk detections report</h4>
                  <ol>
                    <li>Open <span ><strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Security</strong> &gt; <strong>Identity protection</strong> &gt;</span> <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/IdentityProtectionMenuBlade/RiskDetections" target="_blank" rel="noreferrer"><strong>Risk detections</strong></a></li>
                    <li>Click the date/time of the detection you want to view</li>
                  </ol>
                  <div ><img src="https://i.ibb.co/xDMZYDd/risky-detections-report.png" alt="Risk detections report" style="height: auto;width: auto" /></div>
                  <h2>Remediate risk and manage accounts</h2>
                  <p>Now you’ve set up the policy and a user can’t log in! You’ve checked and they are blocked based on their own behavior. Maybe they logged into Microsoft 365 using the TOR browser. Not a problem. We can easily unblock the account. I do have one warning though. You can’t train the intelligent security policy to not block certain behavior. For example, even after you dismiss the user risk, they won’t be able to log in using the TOR browser. The TOR browser will still be blocked. If a user is required to perform some risky behavior, for example, they are required to use the TOR browser to login to Microsoft 365 then they’ll need to be excluded from the policy.</p>
                  <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Security</strong> &gt; <strong>Identity protection</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/IdentityProtectionMenuBlade/RiskyUsers" target="_blank" rel="noreferrer"><strong>Risky users</strong></a>. Click the user risk that you want to dismiss.</p>
                  <div ><img src="https://i.ibb.co/6ntbb69/view-risky-user.png" alt="View risky users" style="height: auto;width: auto" /></div>
                  <p>2. Click the <strong>ellipsis (…)</strong> &gt; <strong>Dismiss user risk</strong>.</p>
                  <div ><img src="https://i.ibb.co/Yhs1F1F/dismiss-user-risk.png" alt="Dismiss user risk" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Yes</strong>.</p>
                  <p>4. Then go to <strong>Risky sign-ins</strong></p>
                  <p>5. Click the sign-in you want to dismiss. Click the <strong>ellipsis (…)</strong> &gt; <strong>Confirm sign-in safe</strong>.</p>
                  <div ><img src="https://i.ibb.co/Fmz4JHP/confirm-risky-sign-in-safe.png" alt="Confirm risky sign-in is safe" style="height: auto;width: auto" /></div>
                  <p>6. Click <strong>Yes</strong></p>
                  <p>Wait five to ten minutes and have the user try to log in again.</p>
                  <h2>Whitelist IP addresses to help train the intelligent risk policies</h2>
                  <p>One other thing you can do is flag your IP addresses as trusted. Once your organization's public IP addresses are flagged as trusted users will be less likely to be blocked in a false positive scenario.</p>
                  <p>1. Go to <strong>Azure Active Directory admin center</strong> &gt; <strong>Azure Active Directory</strong> &gt; <strong>Security</strong> &gt; <strong>Risky sign-ins</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/NamedLocationsBlade" target="_blank" rel="noreferrer"><strong>Configure trusted IPs</strong></a>.</p>
                  <div ><img src="https://i.ibb.co/3N3VD97/configure-trusted-ips.png" alt="Configure trusted IPs" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>IP ranges location</strong>.</p>
                  <p>3. Enter a <strong>Name</strong>, for example, Main Office. Click <strong>Mark as trusted location</strong>. Click the <strong>+ plus</strong> sign. Enter your <strong>public IP address</strong> + <strong>subnet mask</strong>. Click <strong>Add</strong>. Click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/GRM7NBW/mark-ip-address-trusted.png" alt="Mark IP address as trusted" style="height: auto;width: auto" /></div>
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
