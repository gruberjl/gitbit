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
let bottomOfArticle

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.trackScrolling = this.trackScrolling.bind(this)
    this.setHasCompletedContent = this.setHasCompletedContent.bind(this)
    this.getUid = this.getUid.bind(this)
    this.mountAds1 = this.mountAds1.bind(this)
    this.mountAds2 = this.mountAds2.bind(this)
    this.addScroll = this.addScroll.bind(this)

    this.state = {
      isTrackScrolling: false,
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'epena', text: 'You will see questions about Microsoft Intune, configuration profiles, and compliance policies. You won\'t see any questions about how to set up a device in Intune but I thought it was important for you to see so I\'ve created a lesson. If you already set up Intune to work with Windows devices or are only concerned about passing the MS-500 feel free to skip this lesson.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1sr0d', text: 'There are three common ways to join a Windows computer to Intune.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '45lc1', text: 'First, manually. In short, you tell the Windows computer to join.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '42aoi', text: 'Second, automatically through the domain. In short, we can sync all the domain-joined devices to Azure AD and then tell Azure AD to join all the computers to Intune.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9vtgv', text: 'Third, by using AutoPilot. We won\'t be reviewing Autopilot in this lesson.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '72ukh', text: 'Before we can do anything, there\'s a bit of configuration to do on the back end. We\'ll need to configure a user scope. The user scope will tell which Azure AD joined computers should receive Intune.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '63lan', text: 'How to configure auto-enrollment', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 39, offset: 9, style: 'BOLD'}, {length: 8, offset: 51, style: 'BOLD'}, {length: 14, offset: 61, style: 'BOLD'}, {length: 18, offset: 78, style: 'BOLD'}, {length: 20, offset: 99, style: 'BOLD'}, {length: 14, offset: 129, style: 'BOLD'}, {length: 3, offset: 147, style: 'BOLD'}, {length: 4, offset: 158, style: 'BOLD'}], key: '8rlb1', text: '1. Go to Microsoft Endpoint Manager admin center > Devices > Enroll devices > Windows enrollment > Automatic Enrollment. Set the MDM user scope to All. Click Save.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ctd68', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bter2', text: 'How to manually join a Windows computer to Intune', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '603eu', text: 'First things first. Let\'s manually join a Windows computer to Azure AD and then let Azure AD automatically join the computer to Intune.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fnusv', text: '1. On the Windows device you want to join click Start menu > Settings.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: '385si', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5ha9b', text: '2. Click Accounts.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: 'f01tl', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 9, style: 'BOLD'}, {length: 7, offset: 33, style: 'BOLD'}, {length: 35, offset: 53, style: 'BOLD'}, {length: 10, offset: 103, style: 'BOLD'}], key: 'bgqk0', text: '3. Click Access work or school > Connect. Enter your Microsoft 365 username and password. Complete the MFA prompt if required.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: '9olt7', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'creto', text: 'That\'s it! Simply wait 15 minutes or so and you\'ll see the device in the Endpoint Manager admin center.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd8isf', text: 'How to sync all your computers from the domain to Intune', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd36q0', text: 'Since we have auto-enrollment configured in Intune any devices that show up in Azure AD will automatically be enrolled in Intune. So how about we sync all of our domain-joined computers to Azure AD?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7g2ca', text: '1. Log on to the server that is running AD Connect.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '46bjp', text: '2. Run the Azure AD Connect wizard. (typically it\'s an icon on the desktop but its default location is "C:\\Program Files\\Microsoft Azure Active Directory Connect\\AzureADConnect.exe"', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 9, style: 'BOLD'}], key: '6t84v', text: '3. Click Configure.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 24, offset: 9, style: 'BOLD'}, {length: 4, offset: 36, style: 'BOLD'}], key: '6td21', text: '4. Click Configure device options > Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '6htsq', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 9, style: 'BOLD'}, {length: 9, offset: 54, style: 'BOLD'}, {length: 8, offset: 67, style: 'BOLD'}, {length: 4, offset: 83, style: 'BOLD'}], key: '71l4o', text: '5. Click Next > Enter your Microsoft 365 global admin username and password. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: '5pcv8', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 30, offset: 10, style: 'BOLD'}, {length: 4, offset: 59, style: 'BOLD'}, {length: 41, offset: 75, style: 'BOLD'}, {length: 4, offset: 133, style: 'BOLD'}], key: '19c6t', text: '6. Verify Configure Hybrid Azure AD join is checked. Click Next. Check the Windows 10 or later domain-joined devices checkbox. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '7tfd9', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 19, offset: 17, style: 'BOLD'}, {length: 22, offset: 46, style: 'BOLD'}, {length: 22, offset: 72, style: 'BOLD'}, {length: 3, offset: 102, style: 'BOLD'}, {length: 40, offset: 118, style: 'BOLD'}, {length: 2, offset: 166, style: 'BOLD'}, {length: 4, offset: 176, style: 'BOLD'}], key: 'd8jse', text: '7. Check the box next to your forest. Set the Authentication Service to Azure Active Directory. Click Add. Enter your on-premises Enterprise admin credentials. Click OK. Click Next.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: 'pbph', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 9, style: 'BOLD'}, {length: 4, offset: 26, style: 'BOLD'}], key: 'eh8nt', text: '8. Click Configure. Click Exit.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9jjc6', text: 'That should be it. During the next sync, you should see all the devices sync from your on-premises AD to Azure AD.', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'none', alt: 'Auto-enroll Windows devices in Intune', height: 'auto', src: 'https://i.ibb.co/1XbTJ8n/Auto-enroll-Windows-in-Intune.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {data: {alignment: 'none', alt: 'How to open settings on a Windows computer', height: 'auto', src: 'https://i.ibb.co/gjXKgrp/Open-Settings-on-Windows-computer.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Accounts', height: 'auto', src: 'https://i.ibb.co/fqpJV7z/accounts-button.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Connect your Windows 10 device to Intune', height: 'auto', src: 'https://i.ibb.co/3vL0pvV/Connect-Windows-10-to-Azure-AD.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Configure device options', height: 'auto', src: 'https://i.ibb.co/WDXKVjW/configure-device-options.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Enter your global admin credentials', height: 'auto', src: 'https://i.ibb.co/C0B6mNX/enter-your-global-admin-credentials.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Windows 10 or later domain-joined devices', height: 'auto', src: 'https://i.ibb.co/1r2tRWm/Windows-10-or-later-domain-joined-devices.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'SCP Configuration', height: 'auto', src: 'https://i.ibb.co/x7QWR3b/SCP-Configuration.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/6/20', description: 'Managing Windows 10 isn\'t easy. Automation can help ease the load. How to manually and automatically sync Windows devices to Intune.', featuredImage: 'https://i.ibb.co/WDXKVjW/configure-device-options.png', id: 'XFXu2zIS9', images: ['https://i.ibb.co/1XbTJ8n/Auto-enroll-Windows-in-Intune.png', 'https://i.ibb.co/gjXKgrp/Open-Settings-on-Windows-computer.png', 'https://i.ibb.co/fqpJV7z/accounts-button.png', 'https://i.ibb.co/3vL0pvV/Connect-Windows-10-to-Azure-AD.png', 'https://i.ibb.co/WDXKVjW/configure-device-options.png', 'https://i.ibb.co/C0B6mNX/enter-your-global-admin-credentials.png', 'https://i.ibb.co/1r2tRWm/Windows-10-or-later-domain-joined-devices.png', 'https://i.ibb.co/x7QWR3b/SCP-Configuration.png'], publish: true, sectionId: 'l0DxUuonW', slug: 'Setting-up-Windows-10-devices-in-Intune-XFXu2zIS9', title: 'Setting up Windows 10 devices in Intune', type: 'article'},
      nextContentSlug: 'learn/How-to-manage-devices-using-Intune-_LL9VqGZO',
      previousContentSlug: 'learn/Setting-up-Apple--iOS-devices-in-Intune-MAjW0a2_p',
      hasCompletedContent: false,
      userAcct: {completedContent: []}
    }
  }

  componentDidMount() {
    this.onAuthStateChangedListener = onAuthStateChanged(this.getUid)
    this.addScroll()
    this.mountAds1()
    this.mountAds2()
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

  mountAds1() {
    (function(w, d, s, i) {
      w.ldAdInit=w.ldAdInit||[]; w.ldAdInit.push({slot: 15664931508787046, size: [0, 0], id: 'ld-534-9587'}); if (!d.getElementById(i)) {
        const j=d.createElement(s); const p=d.getElementsByTagName(s)[0]; j.async=true; j.src='//cdn2.decide.dev/_js/ajs.js'; j.id=i; p.parentNode.insertBefore(j, p)
      }
    })(window, document, 'script', 'ld-ajs')
  }

  mountAds2() {
    ((w, d, s, i)=> {
      w.ldAdInit=w.ldAdInit||[]; w.ldAdInit.push({slot: 15664932884518758, size: [0, 0], id: 'ld-7740-2760'}); if (!d.getElementById(i)) {
        const j=d.createElement(s); const p=d.getElementsByTagName(s)[0]; j.async=true; j.src='//cdn2.decide.dev/_js/ajs.js'; j.id=i; p.parentNode.insertBefore(j, p)
      }
    })(window, document, 'script', 'ld-ajs')
  }

  addScroll() {
    if (isBrowser()) {
      const el = document.getElementById('bottom-of-article')
      const rect = el.getBoundingClientRect()
      bottomOfArticle = rect.top
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
    if (bottomOfArticle && bottomOfArticle <= window.scrollY+window.innerHeight)
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
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={this.state.article.featuredImage} title={this.state.article.title} description={this.state.article.description}>
        <div>
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
              pre {
                white-space: pre-wrap;
              }
            `}
          </style>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={9}>
                <main>
                  <div id="ld-534-9587" />
                  <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                  <div><p>You will see questions about Microsoft Intune, configuration profiles, and compliance policies. You won't see any questions about how to set up a device in Intune but I thought it was important for you to see so I've created a lesson. If you already set up Intune to work with Windows devices or are only concerned about passing the MS-500 feel free to skip this lesson.</p>
                    <p>There are three common ways to join a Windows computer to Intune.</p>
                    <ul>
                      <li>First, manually. In short, you tell the Windows computer to join.</li>
                      <li>Second, automatically through the domain. In short, we can sync all the domain-joined devices to Azure AD and then tell Azure AD to join all the computers to Intune.</li>
                      <li>Third, by using AutoPilot. We won't be reviewing Autopilot in this lesson.</li>
                    </ul>
                    <p>Before we can do anything, there's a bit of configuration to do on the back end. We'll need to configure a user scope. The user scope will tell which Azure AD joined computers should receive Intune.</p>
                    <div id="ld-7740-2760" /><h2>How to configure auto-enrollment</h2>
                    <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <strong>Enroll devices</strong> &gt; <strong>Windows enrollment</strong> &gt; <strong>Automatic Enrollment</strong>. Set the <strong>MDM user scope</strong> to <strong>All</strong>. Click <strong>Save</strong>.</p>
                    <div ><img src="https://i.ibb.co/1XbTJ8n/Auto-enroll-Windows-in-Intune.png" alt="Auto-enroll Windows devices in Intune" style="height: auto;width: auto" /></div>
                    <h2>How to manually join a Windows computer to Intune</h2>
                    <p>First things first. Let's manually join a Windows computer to Azure AD and then let Azure AD automatically join the computer to Intune.</p>
                    <p>1. On the Windows device you want to join click Start menu &gt; Settings.</p>
                    <div ><img src="https://i.ibb.co/gjXKgrp/Open-Settings-on-Windows-computer.png" alt="How to open settings on a Windows computer" style="height: auto;width: auto" /></div>
                    <p>2. Click Accounts.</p>
                    <div ><img src="https://i.ibb.co/fqpJV7z/accounts-button.png" alt="Accounts" style="height: auto;width: auto" /></div>
                    <p>3. Click <strong>Access work or school</strong> &gt; <strong>Connect</strong>. Enter your <strong>Microsoft 365 username and password</strong>. Complete the <strong>MFA prompt</strong> if required.</p>
                    <div ><img src="https://i.ibb.co/3vL0pvV/Connect-Windows-10-to-Azure-AD.png" alt="Connect your Windows 10 device to Intune" style="height: auto;width: auto" /></div>
                    <p>That's it! Simply wait 15 minutes or so and you'll see the device in the Endpoint Manager admin center.</p>
                    <h2>How to sync all your computers from the domain to Intune</h2>
                    <p>Since we have auto-enrollment configured in Intune any devices that show up in Azure AD will automatically be enrolled in Intune. So how about we sync all of our domain-joined computers to Azure AD?</p>
                    <p>1. Log on to the server that is running AD Connect.</p>
                    <p>2. Run the Azure AD Connect wizard. (typically it's an icon on the desktop but its default location is "C:\Program Files\Microsoft Azure Active Directory Connect\AzureADConnect.exe"</p>
                    <p>3. Click <strong>Configure</strong>.</p>
                    <p>4. Click <strong>Configure device options</strong> &gt; <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/WDXKVjW/configure-device-options.png" alt="Configure device options" style="height: auto;width: auto" /></div>
                    <p>5. Click <strong>Next </strong>&gt; Enter your Microsoft 365 global admin <strong>username </strong>and <strong>password</strong>. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/C0B6mNX/enter-your-global-admin-credentials.png" alt="Enter your global admin credentials" style="height: auto;width: auto" /></div>
                    <p>6. Verify <strong>Configure Hybrid Azure AD join</strong> is checked. Click <strong>Next</strong>. Check the <strong>Windows 10 or later domain-joined devices</strong> checkbox. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/1r2tRWm/Windows-10-or-later-domain-joined-devices.png" alt="Windows 10 or later domain-joined devices" style="height: auto;width: auto" /></div>
                    <p>7. Check the box <strong>next to your forest</strong>. Set the <strong>Authentication Service</strong> to <strong>Azure Active Directory</strong>. Click <strong>Add</strong>. Enter your <strong>on-premises Enterprise admin credentials</strong>. Click <strong>OK</strong>. Click <strong>Next</strong>.</p>
                    <div ><img src="https://i.ibb.co/x7QWR3b/SCP-Configuration.png" alt="SCP Configuration" style="height: auto;width: auto" /></div>
                    <p>8. Click <strong>Configure</strong>. Click <strong>Exit</strong>.</p>
                    <p>That should be it. During the next sync, you should see all the devices sync from your on-premises AD to Azure AD.</p>
                  </div>
                  <div id="bottom-of-article" />
                  <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 3}}>
                    <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
                    <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos />}>Next</Button>
                  </Box>
                </main>
              </Grid>
              <Grid item lg={3} sx={{mt: 3}}>
                <ContentsRead completedContent={this.state.userAcct.completedContent} />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Page>
    )
  }
}

export default ArticlePage
