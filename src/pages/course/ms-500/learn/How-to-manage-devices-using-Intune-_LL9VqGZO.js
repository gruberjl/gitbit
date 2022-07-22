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
      path: '/course/ms-500/learn/How-to-manage-devices-using-Intune-_LL9VqGZO',
      article: {ARTICLE: true},
      nextContentSlug: 'Understanding-compliance-policies-qDRA4jjoN',
      previousContentSlug: 'Setting-up-Windows-10-devices-in-Intune-XFXu2zIS9',
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
                <div><p>Managing devices using Intune is typically done through configuration policies. Configuration policies are like group policies but more. If you don't know group policy, don't worry, I'll explain without the example.</p>
                  <p>Configuration policies allow you to configure the Intune connected devices. You can set all sorts of things. For example, you can require a password on the device. Configure BitLocker on Windows 10 devices and a whole lot more. Since Microsoft makes Windows (and Windows is more complicated than Android and iOS devices), there's more you can do with Windows devices than other manufacturers. So let's dig into managing Windows 10 devices Intune.</p>
                  <h2>Create a Windows 10 Device Configuration profile to set Telemetry data</h2>
                  <p>So let's start off easy. Let's say your boss (or a question on the MS-500) wants you to disable telemetry data from being sent to Microsoft. How do you do it? With a device configuration profile that has device restrictions configured! Let's jump in.</p>
                  <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices</strong> &gt; <strong>Windows </strong>&gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesWindowsMenu/configProfiles" target="_blank" rel="noreferrer"><strong>Configuration profiles</strong></a>. Click <strong>Create profile</strong>. Set the <strong>platform </strong>to <strong>Windows 10 and later</strong>. Set the <strong>profile type</strong> to <strong>templates</strong>. Select <strong>Device restriction</strong> under <strong>Template name</strong>. Click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/YkcdP2T/Create-a-configuration-profile.png" alt="Create a configuration profile" style="height: auto;width: auto" /></div>
                  <p>2. <strong>Name </strong>the profile "<strong>Disable telemetry</strong>" Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/kQXPK8N/name-the-configuration-profile.png" alt="Name the configuration profile" style="height: auto;width: auto" /></div>
                  <p>3. Scroll down and expand <strong>Reporting and telemetry</strong>. Set <strong>Share usage data </strong>to <strong>Diagnostic data off</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/Y0C3Tbw/Disable-Telemetry-on-Windows-10-through-Intune.png" alt="Disable Telemetry on Windows 10 through Intune" style="height: auto;width: auto" /></div>
                  <p>4. For Assignments click <strong>Add all users</strong>. (don't worry, I'll explain this section next.). Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/Df0QCPN/set-the-assignments.png" alt="Set the assignments in Intune" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Next </strong>&gt; <strong>Create</strong>.</p>
                  <p>That's it. Now you just need to wait until your devices check-in and the policy will be applied.</p>
                  <h2>Understanding assignments in Intune</h2>
                  <div ><img src="https://i.ibb.co/X3X4qWz/Device-restrictions-assignments.png" alt="Device restrictions assignments" style="height: auto;width: auto" /></div>
                  <p />
                  <p>Assigning policies and profiles in Intune is important and can be a bit tricky so let's break it down. First is "included groups". Included groups are who or what machines are included in the role out of the profile. For example, in the telemetry profile above we set it to All Users. So that profile will apply to every user that logs onto a Windows 10 computer that checks into Intune. Why is it Windows 10 and later? Because when we created the profile we set "Windows 10 and later" as the platform. That profile won't affect Android, iOS, or Macs regardless of the users.</p>
                  <p>Now, you may have noticed in the assignments section there's an area for Excluded groups. Excluded groups take precedence over included groups. So if you select "All Users" in the included groups and then select "Accountants" in the excluded groups the profile will apply to All Users with the exception of the users in the "Accountants" group.</p>
                  <p>One last thing, you may have noticed you can assign policies (include or exclude) to users or device groups. What's the difference? Well, if you assign a profile to a device it doesn't matter who logs onto the device the profile will get applied. If you assign the profile to a user then any device (that meets the profile limits) that the user logs onto will get the profile.</p>
                  <p>Now, what happens when you mix the two? Let's take an example. If you assign a profile to the All Users users group but exclude an Accounts Devices device group. In this mixed group app assignment, All users get the profile. The exclusion does not apply. So Microsoft, and I recommend not mixing the two. Either assign and exclude users or assign and exclude devices, but don't try and mix and match.</p>
                  <h3>File obfuscation by using the registry</h3>
                  <p>Lastly, you can obscure files by using the registry. Simply create the following registry dword on the computer or save the following 3 lines to a file named Obfuscate.reg and then run the file on the computer.</p>
                  <p>Windows Registry Editor Version 5.00</p>
                  <p>[HKEY_CURRENT_USER\Software\Policies\Microsoft\Office\16.0\osm]</p>
                  <p>"EnableFileObfuscation"=dword:00000001</p>
                  <h2>How to enable SmartScreen</h2>
                  <p>So now that we've configured a basic configuration profile let's talk about Endpoint security. As you saw under the template name when creating the device configuration profile there are a ton of options available in the Device Configuration profiles section. Surprisingly, that's not the only place to perform device configuration. There are even more settings! So now let's enable SmartScreen.</p>
                  <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Endpoint security</strong> &gt; <strong>Attack surface reduction</strong>. Click <strong>Create Policy</strong>. Set the <strong>Platform </strong>to <strong>Windows 10 and later</strong>. Set the <strong>Profile </strong>to <strong>Application control</strong>. Click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/PDcFc1G/Enable-Smart-Screen.png" alt="Create an Attack surface reduction policy" style="height: auto;width: auto" /></div>
                  <p>2. Name the policy "<strong>Enable SmartScreen</strong>". Click <strong>Next</strong>.</p>
                  <p>3. Set <strong>App locker application control</strong> to <strong>Enforce Components, Store Apps, and Smartlocker</strong>. Set <strong>Turn on Windows SmartScreen</strong> to <strong>Yes</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/pQHYhXN/Enable-Smart-Screen.png" alt="Enable SmartScreen" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Next </strong>on the scope tags page. On the Assignments page set the Included groups to whatever group you want, for example, Intune Endpoint Protection. Set the excluded groups to whatever groups you want, for example, Intune Help Desk Operators. Click <strong>Next</strong>.</p>
                  <p>Now with that policy configured every user that is a member of the Included group above that is not a member of the Excluded group will have SmartScreen turned on. So in the example above every user that is a member of the Intune Endpoint Protection group that isn't a member of the Intune Help Desk Operators group will have SmartScreen enabled. Lastly, we configured SmartScreen to only warn users. The users can still bypass SmartScreen.</p>
                  <h2>How to enable Windows Defender Exploit Guard</h2>
                  <p><span >Windows Defender Exploit Guard</span> is another great way to reduce the attack surface of your Windows 10 devices. Let's enable Windows Defender Exploit Guard using an Endpoint protection device configuration.</p>
                  <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <strong>Windows </strong>&gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesWindowsMenu/configProfiles" target="_blank" rel="noreferrer"><strong>Configuration profiles</strong></a>. Click <strong>Create profile</strong>. Set <strong>Platform </strong>to <strong>Windows 10 and later</strong>. Set <strong>Profile type</strong> to <strong>Templates</strong>. Set the <strong>Template name</strong> to <strong>Endpoint protection</strong>. Click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/HPQ2m8t/Create-an-endpoint-protection-profile.png" alt="Create an endpoint protection profile in Intune" style="height: auto;width: auto" /></div>
                  <p>2. Name the profile "<strong>Enable Windows Defender Exploit Guard</strong>". Click <strong>Next</strong>.</p>
                  <p>3. Set all the policies under <strong>Microsoft Defender Exploit Guard</strong> &gt; <strong>Attack Surface Reduction</strong> to either <strong>Enable </strong>or <strong>Block</strong>.</p>
                  <div ><img src="https://i.ibb.co/2h9ntxm/Enable-Attack-Surface-Reduction-Policies.png" alt="Enable Attack Surface Reduction Policies" style="height: auto;width: auto" /></div>
                  <p>4. Set the following to <strong>Enable</strong>: <strong>Microsoft Defender Exploit Guard</strong> &gt; <strong>Controlled folder access</strong> &gt; <strong>Folder protection</strong>.</p>
                  <div ><img src="https://i.ibb.co/wcJ13dL/Enable-Folder-Protection.png" alt="Enable Folder Protection" style="height: auto;width: auto" /></div>
                  <p>5. Set the following to <strong>Enable</strong>: <strong>Microsoft Defender Exploit Guard</strong> &gt; <strong>Network filtering</strong> &gt; <strong>Network protection</strong>.</p>
                  <div ><img src="https://i.ibb.co/9TfVy5z/Enable-Network-Protection.png" alt="Enable Network protection" style="height: auto;width: auto" /></div>
                  <p>6. On the Assignments page click Add all users or select the user group you want to enable it for. Click <strong>Next</strong>. On the Applicability Rules page click <strong>Next</strong>. Click <strong>Create</strong>.</p>
                  <h2>Notes about Bitlocker</h2>
                  <p>Enabling and configuring Bitlocker is possible with Intune. In short, you can encrypt a computer using Intune / Bitlocker and the user won't even know it's happening. Unfortunately, configuring Bitlocker would make this article too long but you may experience some questions about Bitlocker on the MS-500 so I'll answer those questions quickly below:</p>
                  <ul>
                    <li>Bitlocker to Go is Bitlocker for removable media. It is possible to encrypt removable media with Intune. You don't even need TPM on the Windows device. In short, you use Intune to protect removable media and then configure Bitlocker to require a passcode.</li>
                    <li>Bitlocker auto-unlock is also available through Intune. Bitlocker auto-unlock will automatically unlock data drives (for example a D: drive) when the OS drive (for example a C: drive) is unlocked. Bitlocker auto-unlock does not require TPM but it does require the OS drive to be encrypted.</li>
                  </ul>
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
