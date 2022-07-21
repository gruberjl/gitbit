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
      path: '/course/ms-500/learn/Setting-up-Windows-10-devices-in-Intune-XFXu2zIS9',
      article: {"datePublished":"2022/6/20","description":"Manually and automatically syncing Windows devices to Intune","type":"article","title":"Setting up Windows 10 devices in Intune","sectionId":"l0DxUuonW","publish":true,"slug":"Setting-up-Windows-10-devices-in-Intune-XFXu2zIS9","id":"XFXu2zIS9","article":{"entityMap":{"0":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/1XbTJ8n/Auto-enroll-Windows-in-Intune.png","alt":"Auto-enroll Windows devices in Intune","alignment":"none","height":"auto","width":"auto"}},"1":{"data":{"height":"auto","alt":"How to open settings on a Windows computer","alignment":"none","width":"auto","src":"https://i.ibb.co/gjXKgrp/Open-Settings-on-Windows-computer.png"},"mutability":"MUTABLE","type":"IMAGE"},"2":{"mutability":"MUTABLE","data":{"alt":"Accounts","src":"https://i.ibb.co/fqpJV7z/accounts-button.png","height":"auto","alignment":"none","width":"auto"},"type":"IMAGE"},"3":{"data":{"alignment":"none","height":"auto","width":"auto","alt":"Connect your Windows 10 device to Intune","src":"https://i.ibb.co/3vL0pvV/Connect-Windows-10-to-Azure-AD.png"},"mutability":"MUTABLE","type":"IMAGE"},"4":{"data":{"alignment":"none","src":"https://i.ibb.co/WDXKVjW/configure-device-options.png","alt":"Configure device options","width":"auto","height":"auto"},"type":"IMAGE","mutability":"MUTABLE"},"5":{"mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/C0B6mNX/enter-your-global-admin-credentials.png","alignment":"none","alt":"Enter your global admin credentials","height":"auto"},"type":"IMAGE"},"6":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/1r2tRWm/Windows-10-or-later-domain-joined-devices.png","alignment":"none","alt":"Windows 10 or later domain-joined devices","height":"auto","width":"auto"}},"7":{"mutability":"MUTABLE","data":{"alignment":"none","src":"https://i.ibb.co/x7QWR3b/SCP-Configuration.png","alt":"SCP Configuration","height":"auto","width":"auto"},"type":"IMAGE"}},"blocks":[{"type":"unstyled","entityRanges":[],"key":"epena","data":{},"depth":0,"inlineStyleRanges":[],"text":"You will see questions about Microsoft Intune, configuration profiles, and compliance policies. You won't see any questions about how to set up a device in Intune but I thought it was important for you to see so I've created a lesson. If you already set up Intune to work with Windows devices or are only concerned about passing the MS-500 feel free to skip this lesson."},{"data":{},"type":"unstyled","depth":0,"text":"There are three common ways to join a Windows computer to Intune.","entityRanges":[],"key":"1sr0d","inlineStyleRanges":[]},{"key":"45lc1","text":"First, manually. In short, you tell the Windows computer to join.","type":"unordered-list-item","entityRanges":[],"depth":0,"inlineStyleRanges":[],"data":{}},{"depth":0,"text":"Second, automatically through the domain. In short, we can sync all the domain-joined devices to Azure AD and then tell Azure AD to join all the computers to Intune.","key":"42aoi","type":"unordered-list-item","entityRanges":[],"data":{},"inlineStyleRanges":[]},{"entityRanges":[],"type":"unordered-list-item","text":"Third, by using AutoPilot. We won't be reviewing Autopilot in this lesson.","key":"9vtgv","data":{},"depth":0,"inlineStyleRanges":[]},{"key":"72ukh","data":{},"entityRanges":[],"text":"Before we can do anything, there's a bit of configuration to do on the back end. We'll need to configure a user scope. The user scope will tell which Azure AD joined computers should receive Intune.","type":"unstyled","inlineStyleRanges":[],"depth":0},{"inlineStyleRanges":[],"text":"How to configure auto-enrollment","entityRanges":[],"data":{},"depth":0,"type":"header-two","key":"63lan"},{"key":"8rlb1","data":{},"type":"unstyled","entityRanges":[],"text":"1. Go to Microsoft Endpoint Manager admin center > Devices > Enroll devices > Windows enrollment > Automatic Enrollment. Set the MDM user scope to All. Click Save.","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":39,"offset":9},{"length":8,"style":"BOLD","offset":51},{"style":"BOLD","length":14,"offset":61},{"style":"BOLD","offset":78,"length":18},{"length":20,"offset":99,"style":"BOLD"},{"style":"BOLD","length":14,"offset":129},{"style":"BOLD","offset":147,"length":3},{"style":"BOLD","length":4,"offset":158}]},{"inlineStyleRanges":[],"text":" ","entityRanges":[{"length":1,"key":0,"offset":0}],"type":"atomic","key":"ctd68","data":{},"depth":0},{"entityRanges":[],"inlineStyleRanges":[],"type":"header-two","key":"bter2","data":{},"depth":0,"text":"How to manually join a Windows computer to Intune"},{"text":"First things first. Let's manually join a Windows computer to Azure AD and then let Azure AD automatically join the computer to Intune.","inlineStyleRanges":[],"depth":0,"key":"603eu","entityRanges":[],"data":{},"type":"unstyled"},{"inlineStyleRanges":[],"depth":0,"entityRanges":[],"type":"unstyled","text":"1. On the Windows device you want to join click Start menu > Settings.","key":"fnusv","data":{}},{"key":"385si","type":"atomic","text":" ","depth":0,"entityRanges":[{"key":1,"offset":0,"length":1}],"data":{},"inlineStyleRanges":[]},{"key":"5ha9b","data":{},"entityRanges":[],"type":"unstyled","inlineStyleRanges":[],"text":"2. Click Accounts.","depth":0},{"key":"f01tl","inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":2,"length":1}],"depth":0,"text":" ","data":{},"type":"atomic"},{"type":"unstyled","key":"bgqk0","entityRanges":[],"data":{},"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":21},{"offset":33,"length":7,"style":"BOLD"},{"style":"BOLD","length":35,"offset":53},{"length":10,"style":"BOLD","offset":103}],"text":"3. Click Access work or school > Connect. Enter your Microsoft 365 username and password. Complete the MFA prompt if required.","depth":0},{"entityRanges":[{"offset":0,"key":3,"length":1}],"key":"9olt7","inlineStyleRanges":[],"depth":0,"data":{},"type":"atomic","text":" "},{"type":"unstyled","inlineStyleRanges":[],"data":{},"entityRanges":[],"key":"creto","depth":0,"text":"That's it! Simply wait 15 minutes or so and you'll see the device in the Endpoint Manager admin center."},{"text":"How to sync all your computers from the domain to Intune","depth":0,"inlineStyleRanges":[],"key":"d8isf","type":"header-two","entityRanges":[],"data":{}},{"text":"Since we have auto-enrollment configured in Intune any devices that show up in Azure AD will automatically be enrolled in Intune. So how about we sync all of our domain-joined computers to Azure AD?","inlineStyleRanges":[],"key":"d36q0","entityRanges":[],"data":{},"depth":0,"type":"unstyled"},{"depth":0,"entityRanges":[],"text":"1. Log on to the server that is running AD Connect.","data":{},"key":"7g2ca","inlineStyleRanges":[],"type":"unstyled"},{"entityRanges":[],"inlineStyleRanges":[],"depth":0,"key":"46bjp","type":"unstyled","data":{},"text":"2. Run the Azure AD Connect wizard. (typically it's an icon on the desktop but its default location is \"C:\\Program Files\\Microsoft Azure Active Directory Connect\\AzureADConnect.exe\""},{"type":"unstyled","entityRanges":[],"text":"3. Click Configure.","inlineStyleRanges":[{"style":"BOLD","offset":9,"length":9}],"data":{},"key":"6t84v","depth":0},{"text":"4. Click Configure device options > Next.","data":{},"inlineStyleRanges":[{"offset":9,"length":24,"style":"BOLD"},{"style":"BOLD","offset":36,"length":4}],"type":"unstyled","entityRanges":[],"key":"6td21","depth":0},{"data":{},"inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":4,"length":1}],"text":" ","key":"6htsq","depth":0,"type":"atomic"},{"data":{},"inlineStyleRanges":[{"offset":9,"length":5,"style":"BOLD"},{"offset":54,"length":9,"style":"BOLD"},{"style":"BOLD","length":8,"offset":67},{"offset":83,"length":4,"style":"BOLD"}],"key":"71l4o","text":"5. Click Next > Enter your Microsoft 365 global admin username and password. Click Next.","type":"unstyled","depth":0,"entityRanges":[]},{"data":{},"text":" ","entityRanges":[{"offset":0,"key":5,"length":1}],"depth":0,"inlineStyleRanges":[],"type":"atomic","key":"5pcv8"},{"data":{},"type":"unstyled","depth":0,"key":"19c6t","inlineStyleRanges":[{"length":30,"style":"BOLD","offset":10},{"style":"BOLD","length":4,"offset":59},{"length":41,"style":"BOLD","offset":75},{"style":"BOLD","offset":133,"length":4}],"entityRanges":[],"text":"6. Verify Configure Hybrid Azure AD join is checked. Click Next. Check the Windows 10 or later domain-joined devices checkbox. Click Next."},{"text":" ","depth":0,"data":{},"key":"7tfd9","inlineStyleRanges":[],"type":"atomic","entityRanges":[{"length":1,"key":6,"offset":0}]},{"depth":0,"type":"unstyled","data":{},"inlineStyleRanges":[{"length":19,"offset":17,"style":"BOLD"},{"style":"BOLD","length":22,"offset":46},{"style":"BOLD","length":22,"offset":72},{"offset":102,"length":3,"style":"BOLD"},{"offset":118,"style":"BOLD","length":40},{"style":"BOLD","offset":166,"length":2},{"style":"BOLD","length":4,"offset":176}],"key":"d8jse","text":"7. Check the box next to your forest. Set the Authentication Service to Azure Active Directory. Click Add. Enter your on-premises Enterprise admin credentials. Click OK. Click Next.","entityRanges":[]},{"text":" ","type":"atomic","key":"pbph","depth":0,"entityRanges":[{"offset":0,"key":7,"length":1}],"data":{},"inlineStyleRanges":[]},{"text":"8. Click Configure. Click Exit.","type":"unstyled","key":"eh8nt","depth":0,"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":9},{"style":"BOLD","length":4,"offset":26}],"data":{},"entityRanges":[]},{"entityRanges":[],"text":"That should be it. During the next sync, you should see all the devices sync from your on-premises AD to Azure AD.","data":{},"key":"9jjc6","inlineStyleRanges":[],"type":"unstyled","depth":0}]},"featuredImage":"https://i.ibb.co/WDXKVjW/configure-device-options.png","images":["https://i.ibb.co/1XbTJ8n/Auto-enroll-Windows-in-Intune.png","https://i.ibb.co/gjXKgrp/Open-Settings-on-Windows-computer.png","https://i.ibb.co/fqpJV7z/accounts-button.png","https://i.ibb.co/3vL0pvV/Connect-Windows-10-to-Azure-AD.png","https://i.ibb.co/WDXKVjW/configure-device-options.png","https://i.ibb.co/C0B6mNX/enter-your-global-admin-credentials.png","https://i.ibb.co/1r2tRWm/Windows-10-or-later-domain-joined-devices.png","https://i.ibb.co/x7QWR3b/SCP-Configuration.png"]},
      nextContentSlug: 'How-to-manage-devices-using-Intune-_LL9VqGZO',
      previousContentSlug: 'Setting-up-Apple--iOS-devices-in-Intune-MAjW0a2_p',
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
                <div><p>You will see questions about Microsoft Intune, configuration profiles, and compliance policies. You won't see any questions about how to set up a device in Intune but I thought it was important for you to see so I've created a lesson. If you already set up Intune to work with Windows devices or are only concerned about passing the MS-500 feel free to skip this lesson.</p>
<p>There are three common ways to join a Windows computer to Intune.</p>
<ul>
<li>First, manually. In short, you tell the Windows computer to join.</li>
<li>Second, automatically through the domain. In short, we can sync all the domain-joined devices to Azure AD and then tell Azure AD to join all the computers to Intune.</li>
<li>Third, by using AutoPilot. We won't be reviewing Autopilot in this lesson.</li>
</ul>
<p>Before we can do anything, there's a bit of configuration to do on the back end. We'll need to configure a user scope. The user scope will tell which Azure AD joined computers should receive Intune.</p>
<h2>How to configure auto-enrollment</h2>
<p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <strong>Enroll devices</strong> &gt; <strong>Windows enrollment</strong> &gt; <strong>Automatic Enrollment</strong>. Set the <strong>MDM user scope</strong> to <strong>All</strong>. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/1XbTJ8n/Auto-enroll-Windows-in-Intune.png" alt="Auto-enroll Windows devices in Intune" style="height: auto;width: auto"/></div>
<h2>How to manually join a Windows computer to Intune</h2>
<p>First things first. Let's manually join a Windows computer to Azure AD and then let Azure AD automatically join the computer to Intune.</p>
<p>1. On the Windows device you want to join click Start menu &gt; Settings.</p>
<div ><img src="https://i.ibb.co/gjXKgrp/Open-Settings-on-Windows-computer.png" alt="How to open settings on a Windows computer" style="height: auto;width: auto"/></div>
<p>2. Click Accounts.</p>
<div ><img src="https://i.ibb.co/fqpJV7z/accounts-button.png" alt="Accounts" style="height: auto;width: auto"/></div>
<p>3. Click <strong>Access work or school</strong> &gt; <strong>Connect</strong>. Enter your <strong>Microsoft 365 username and password</strong>. Complete the <strong>MFA prompt</strong> if required.</p>
<div ><img src="https://i.ibb.co/3vL0pvV/Connect-Windows-10-to-Azure-AD.png" alt="Connect your Windows 10 device to Intune" style="height: auto;width: auto"/></div>
<p>That's it! Simply wait 15 minutes or so and you'll see the device in the Endpoint Manager admin center.</p>
<h2>How to sync all your computers from the domain to Intune</h2>
<p>Since we have auto-enrollment configured in Intune any devices that show up in Azure AD will automatically be enrolled in Intune. So how about we sync all of our domain-joined computers to Azure AD?</p>
<p>1. Log on to the server that is running AD Connect.</p>
<p>2. Run the Azure AD Connect wizard. (typically it's an icon on the desktop but its default location is "C:\Program Files\Microsoft Azure Active Directory Connect\AzureADConnect.exe"</p>
<p>3. Click <strong>Configure</strong>.</p>
<p>4. Click <strong>Configure device options</strong> &gt; <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/WDXKVjW/configure-device-options.png" alt="Configure device options" style="height: auto;width: auto"/></div>
<p>5. Click <strong>Next </strong>&gt; Enter your Microsoft 365 global admin <strong>username </strong>and <strong>password</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/C0B6mNX/enter-your-global-admin-credentials.png" alt="Enter your global admin credentials" style="height: auto;width: auto"/></div>
<p>6. Verify <strong>Configure Hybrid Azure AD join</strong> is checked. Click <strong>Next</strong>. Check the <strong>Windows 10 or later domain-joined devices</strong> checkbox. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/1r2tRWm/Windows-10-or-later-domain-joined-devices.png" alt="Windows 10 or later domain-joined devices" style="height: auto;width: auto"/></div>
<p>7. Check the box <strong>next to your forest</strong>. Set the <strong>Authentication Service</strong> to <strong>Azure Active Directory</strong>. Click <strong>Add</strong>. Enter your <strong>on-premises Enterprise admin credentials</strong>. Click <strong>OK</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/x7QWR3b/SCP-Configuration.png" alt="SCP Configuration" style="height: auto;width: auto"/></div>
<p>8. Click <strong>Configure</strong>. Click <strong>Exit</strong>.</p>
<p>That should be it. During the next sync, you should see all the devices sync from your on-premises AD to Azure AD.</p>
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
