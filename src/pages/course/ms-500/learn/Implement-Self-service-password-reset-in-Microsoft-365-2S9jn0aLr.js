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
      path: '/course/ms-500/learn/Implement-Self-service-password-reset-in-Microsoft-365-2S9jn0aLr',
      article: {ARTICLE: true},
      nextContentSlug: 'Locking-down-your-Microsoft-365-tenant-from-Microsoft-engineers-FldNualGC',
      previousContentSlug: 'The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk',
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
                <div><p>Self-service password reset (SSPR) is a possibility you're used to with other websites you log on to. For example, Gmail has a self-service password reset. In short, self-service password reset means a user that forgot their password can reset it without contacting an administrator. The user can authorize themselves in another fashion whether it's a text message using the Microsoft authenticator app or a phone call.</p>
                  <p>While self-service password reset doesn't enhance the security of your Microsoft 365 tenant it does reduce the call volume to your help desk.</p>
                  <p>If you’re synchronizing your on-premises AD to Office 365 setting up a self-service password reset service isn't as easy as flipping a switch. The good thing about synchronizing your on-premises AD to Microsoft 365 and configuring a self-service password reset service is users can reset their on-premises AD password using the Microsoft 365 self-service portal. When configuring SSPR while you have AD connect configured Microsoft calls it password writeback.&nbsp;</p>
                  <p>As I said earlier, configuring SSPR when synchronizing your user accounts from your on-premises AD isn't as easy as flipping a switch. First will need to configure the on-premises AD to allow Office 365 to reset the passwords. Then we all need to configure AD connect to allow users to reset their passwords. Finally, we’ll need to configure Microsoft 365 to allow users to reset their passwords.</p>
                  <h2>License Requirements</h2>
                  <p>If you're configured with a Microsoft 365 cloud-only account, which means you're not using AD Connect to synchronize your on-premises AD to Office 365 then the self-service password reset it's free. If you are synchronizing your on-premises AD to Office 365 then you'll need an Azure AD Premium P1 license. Azure AD P1 licenses or included In Microsoft 365 business premium licensing.&nbsp;</p>
                  <h2>Configuring on-premises AD to prepare for SSPR</h2>
                  <p>First, will need to give the AD connect account permission to reset users’ passwords.&nbsp;</p>
                  <p>1. Log onto the server that has AD Connect installed.</p>
                  <p>2. Open Azure AD Connect. Click <strong>Configure</strong>. Click <strong>View or export current configuration</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/bmn5HNg/view-current-ad-connect-settings.png" alt="View current AD connect settings" style="height: auto;width: auto" /></div>
                  <p>3. Take note of the account listed under <strong>Synchronized Directories</strong> &gt; <strong>Account</strong>.</p>
                  <div ><img src="https://i.ibb.co/LkCDyjm/MSOL-account.png" alt="MSOL Account" style="height: auto;width: auto" /></div>
                  <p>4. Exit the AD Connect wizard.</p>
                  <p>5. Login onto a server that has Active Directory Users &amp; Computers.</p>
                  <p>6. Open Active Directory Users and Computers. Click <strong>View </strong>&gt; <strong>Advanced Features</strong><br />(if there is a checkbox next to Advanced Features then don’t click it.)</p>
                  <div ><img src="https://i.ibb.co/p4RPcvB/enable-advanced-features.png" alt="Enable Advanced features" style="height: auto;width: auto" /></div>
                  <p>7. Right-click the root domain &gt; <strong>Properties</strong>.</p>
                  <div ><img src="https://i.ibb.co/HHD24wp/open-ad-properties.png" alt="Open AD properties" style="height: auto;width: auto" /></div>
                  <p>8. Click the <strong>Security</strong> tab &gt; <strong>Advanced</strong>.</p>
                  <div ><img src="https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png" alt="Open advanced properties" style="height: auto;width: auto" /></div>
                  <p>9. Click <strong>Add</strong>.</p>
                  <div ><img src="https://i.ibb.co/XVNpVjD/Add-Permissions.png" alt="Add permissions in AD" style="height: auto;width: auto" /></div>
                  <p>10. Click <strong>Select a principal</strong> &gt; enter the name of the account you found in step 3 above. Click <strong>OK</strong>.</p>
                  <div ><img src="https://i.ibb.co/TT4PC9t/select-a-principal-ad.png" alt="Select a principal" style="height: auto;width: auto" /></div>
                  <p>11. Click the <strong>Applies to</strong> drop-down and select <strong>Descendant User Objects</strong>.</p>
                  <div ><img src="https://i.ibb.co/YTznr3c/descendant-user-objects.png" alt="Select Descendant User Objects" style="height: auto;width: auto" /></div>
                  <p>12. Click <strong>Reset password</strong> (located under Permissions).</p>
                  <div ><img src="https://i.ibb.co/ch4C20T/reset-password.png" alt="Reset password permissions" style="height: auto;width: auto" /></div>
                  <p>13. Find and check <strong>Write lockoutTime</strong>.</p>
                  <div ><img src="https://i.ibb.co/JqLvsnC/write-lockouttime.png" alt="Write lockoutTime" style="height: auto;width: auto" /></div>
                  <p>14. Find and check <strong>Write pwdLastSet</strong>.</p>
                  <div ><img src="https://i.ibb.co/X3jDPmt/write-pwd-Last-Set.png" alt="Write pwdLastSet" style="height: auto;width: auto" /></div>
                  <p>15. Click <strong>OK</strong>.</p>
                  <p>16. Click <strong>Add</strong> again.</p>
                  <div ><img src="https://i.ibb.co/XVNpVjD/Add-Permissions.png" alt="Add permissions in AD" style="height: auto;width: auto" /></div>
                  <p>17. Click <strong>Select a principal</strong> &gt; enter the name of the account you found in step 3 above. Click <strong>OK</strong>.</p>
                  <div ><img src="https://i.ibb.co/TT4PC9t/select-a-principal-ad.png" alt="Select a principal" style="height: auto;width: auto" /></div>
                  <p>18. Click <strong>Unexpire password</strong>. Click <strong>OK </strong>until you’ve closed all the windows.</p>
                  <div ><img src="https://i.ibb.co/yBsDWSF/unexpire-password.png" alt="Unexpire password" style="height: auto;width: auto" /></div>
                  <h2>Configure password writeback in AD Connect</h2>
                  <p>Next, we’ll need to enable password write-back in AD Connect.</p>
                  <p>1. Logon to the AD Connect server.</p>
                  <p>2. Double click Azure AD Connect.</p>
                  <p>3. Click <strong>Configure</strong>.</p>
                  <p>4. Click <strong>Customize synchronization options</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/SJvpG6h/customize-syncronization-options.png" alt="Customize synchronization options" style="height: auto;width: auto" /></div>
                  <p>5. Enter your Microsoft 365 global admin credentials. Click <strong>Next</strong>. If required, re-enter your credentials in the space provided.</p>
                  <div ><img src="https://i.ibb.co/X3bdwkd/ad-connect-enter-global-admin-credentials.png" alt="AD Connect enter your global admin credentials" style="height: auto;width: auto" /></div>
                  <p>6. On the Connect your directories page, click <strong>Next</strong>.</p>
                  <p>7. On the Domain and OU filtering page, click <strong>Next</strong>.</p>
                  <p>8. On the Optional features page, click <strong>Password writeback</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/dkbsv38/enable-password-writeback-in-ad-connect.png" alt="Enable password write-back in AD Connect" style="height: auto;width: auto" /></div>
                  <p>9. On the Ready to configure page, click <strong>Configure</strong>.</p>
                  <p>10. Wait until the configuration is complete. Then click <strong>Exit</strong>.</p>
                  <h2>Enable SSPR in Microsoft 365</h2>
                  <p>Lastly, we need to enable self-service password reset in Microsoft 365.</p>
                  <p>1. Open Azure Active Directory admin center and login with a global admin account &gt; <strong>Azure Active Directory</strong> &gt; <strong>Password Reset</strong>.</p>
                  <div ><img src="https://i.ibb.co/BnySDH5/password-reset-options-in-microsoft-365.png" alt="Password reset options in Microsoft 365" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>All </strong>to enable SSPR for everyone. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/nLP24yX/enable-sspr.png" alt="Enable SSPR" style="height: auto;width: auto" /></div>
                  <p>3. Go to <strong>on-premises integration</strong>. Click <strong>Yes</strong> under Write back passwords to your on-premises directory. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png" alt="Write-back on-premises integration" style="height: auto;width: auto" /></div>
                  <h2>Enable combined registration</h2>
                  <p>Enabling combined registration will mean users will only need to register a device once for a multifactor and self-service password reset. Without enabling combined registration users will need to add their cell phone twice. This feature is already enabled for new tenants.&nbsp;</p>
                  <p>1. log in to Azure Active Directory admin center with global admin credentials.</p>
                  <p>2. Go to <strong>Azure Active Directory</strong> &gt; <strong>User Settings</strong> &gt; <strong>Manage user feature settings</strong>.</p>
                  <div ><img src="https://i.ibb.co/cJLFytw/manage-user-feature-settings.png" alt="Microsoft 365 manage user feature settings" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>All</strong> under Users can use the combined security information registration experience. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/61QhNtN/enable-combined-features.png" alt="Microsoft 365 enabled combined features" style="height: auto;width: auto" /></div>
                  <h2>Set authentication methods and harden security</h2>
                  <p>So now we've configured self-service password reset but how do we harden the security? There is a couple of ways. First, let's jump into the authentication methods.</p>
                  <p>1. Sign in to Azure Active Directory admin center with a global admin. Then go to <strong>Azure Active Directory</strong> &gt; <strong>Password reset</strong> &gt; <strong>Authentication methods</strong>.</p>
                  <p>2. If you want to require a user to have 2 methods of authentication when resetting the password click <strong>2</strong>.</p>
                  <p>3. If you want to allow the users to provide answers to security questions or an office phone to authenticate click the checkboxes.</p>
                  <div ><img src="https://i.ibb.co/Tvwz6YJ/microsoft-365-password-reset-authentication-methods.png" alt="Microsoft 365 password reset authentication methods" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Save</strong>.</p>
                  <h2>End-users experience setting up their own authentication methods</h2>
                  <p>Now self-service password reset is enabled for your tenant. How do users configure their authentication methods? It’s easy.</p>
                  <p>1. Go to https://portal.office.com</p>
                  <p>2. Login with their work credentials.</p>
                  <p>3. On the More information required page click Next.</p>
                  <p>4. Enter your phone number in the space provided. Click Next.</p>
                  <p>5. Enter the code that’s texted to you. Click Next.</p>
                  <p>6. Click Next &gt; Done.</p>
                  <h2>End-user experience resetting their passwords</h2>
                  <p>In this section, I'll explain the end-user experience of resetting their passwords.&nbsp;</p>
                  <p>1. Go to <a href="https://portal.office.com" target="_blank" rel="noreferrer">https://portal.office.com</a>&nbsp;</p>
                  <p>2. Click <strong>Can’t access your account?</strong></p>
                  <div ><img src="https://i.ibb.co/mX8t7P0/cant-access-your-account.png" alt="Can't access your account? Microsoft 365" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Work or school account</strong>.</p>
                  <div ><img src="https://i.ibb.co/DYBGr63/which-type-of-account-do-you-need-help-with.png" alt="Which type of account do you need help with?" style="height: auto;width: auto" /></div>
                  <p>4. Enter your username in the space provided. Fill out the CAPTCHA in the space provided. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/V3qmVYF/get-back-into-your-account.png" alt="Get back into your account" style="height: auto;width: auto" /></div>
                  <p>5. Enter your phone number in the space provided. Click <strong>Text</strong>.</p>
                  <div ><img src="https://i.ibb.co/FHym3Rx/get-back-into-your-account-text.png" alt="Get back into your account text message" style="height: auto;width: auto" /></div>
                  <p>6. Enter the code texted to you. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/xYsJ3gy/enter-the-code-texted-to-you.png" alt="Enter the code texted to you" style="height: auto;width: auto" /></div>
                  <p>7. Enter your new password twice. Click <strong>Finish</strong>.</p>
                  <div ><img src="https://i.ibb.co/T0TR946/choose-a-new-password.png" alt="Choose a new password in SSPR for Microsoft 365" style="height: auto;width: auto" /></div>
                  <p>There are a few more settings that can be changed in <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/" target="_blank" rel="noreferrer">https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/</a>  so be sure to take a look.</p>
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
