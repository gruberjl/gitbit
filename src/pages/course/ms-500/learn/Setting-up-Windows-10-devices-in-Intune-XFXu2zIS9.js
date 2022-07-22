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
    this.addScroll = this.addScroll.bind(this)

    this.state = {
      isTrackScrolling: false,
      path: '/course/ms-500/learn/Setting-up-Windows-10-devices-in-Intune-XFXu2zIS9',
      article: {images: ['https://i.ibb.co/1XbTJ8n/Auto-enroll-Windows-in-Intune.png', 'https://i.ibb.co/gjXKgrp/Open-Settings-on-Windows-computer.png', 'https://i.ibb.co/fqpJV7z/accounts-button.png', 'https://i.ibb.co/3vL0pvV/Connect-Windows-10-to-Azure-AD.png', 'https://i.ibb.co/WDXKVjW/configure-device-options.png', 'https://i.ibb.co/C0B6mNX/enter-your-global-admin-credentials.png', 'https://i.ibb.co/1r2tRWm/Windows-10-or-later-domain-joined-devices.png', 'https://i.ibb.co/x7QWR3b/SCP-Configuration.png'], publish: true, id: 'XFXu2zIS9', article: {entityMap: {0: {type: 'IMAGE', data: {height: 'auto', width: 'auto', alignment: 'none', alt: 'Auto-enroll Windows devices in Intune', src: 'https://i.ibb.co/1XbTJ8n/Auto-enroll-Windows-in-Intune.png'}, mutability: 'MUTABLE'}, 1: {mutability: 'MUTABLE', data: {width: 'auto', src: 'https://i.ibb.co/gjXKgrp/Open-Settings-on-Windows-computer.png', alignment: 'none', height: 'auto', alt: 'How to open settings on a Windows computer'}, type: 'IMAGE'}, 2: {mutability: 'MUTABLE', type: 'IMAGE', data: {height: 'auto', alignment: 'none', width: 'auto', src: 'https://i.ibb.co/fqpJV7z/accounts-button.png', alt: 'Accounts'}}, 3: {mutability: 'MUTABLE', data: {alt: 'Connect your Windows 10 device to Intune', alignment: 'none', src: 'https://i.ibb.co/3vL0pvV/Connect-Windows-10-to-Azure-AD.png', height: 'auto', width: 'auto'}, type: 'IMAGE'}, 4: {data: {alt: 'Configure device options', height: 'auto', width: 'auto', alignment: 'none', src: 'https://i.ibb.co/WDXKVjW/configure-device-options.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', width: 'auto', height: 'auto', alt: 'Enter your global admin credentials', src: 'https://i.ibb.co/C0B6mNX/enter-your-global-admin-credentials.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', width: 'auto', src: 'https://i.ibb.co/1r2tRWm/Windows-10-or-later-domain-joined-devices.png', alt: 'Windows 10 or later domain-joined devices', height: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 7: {type: 'IMAGE', data: {width: 'auto', alt: 'SCP Configuration', alignment: 'none', height: 'auto', src: 'https://i.ibb.co/x7QWR3b/SCP-Configuration.png'}, mutability: 'MUTABLE'}}, blocks: [{data: {}, depth: 0, inlineStyleRanges: [], entityRanges: [], type: 'unstyled', key: 'epena', text: 'You will see questions about Microsoft Intune, configuration profiles, and compliance policies. You won\'t see any questions about how to set up a device in Intune but I thought it was important for you to see so I\'ve created a lesson. If you already set up Intune to work with Windows devices or are only concerned about passing the MS-500 feel free to skip this lesson.'}, {data: {}, key: '1sr0d', type: 'unstyled', depth: 0, entityRanges: [], inlineStyleRanges: [], text: 'There are three common ways to join a Windows computer to Intune.'}, {key: '45lc1', entityRanges: [], data: {}, inlineStyleRanges: [], depth: 0, text: 'First, manually. In short, you tell the Windows computer to join.', type: 'unordered-list-item'}, {entityRanges: [], key: '42aoi', type: 'unordered-list-item', depth: 0, inlineStyleRanges: [], data: {}, text: 'Second, automatically through the domain. In short, we can sync all the domain-joined devices to Azure AD and then tell Azure AD to join all the computers to Intune.'}, {data: {}, text: 'Third, by using AutoPilot. We won\'t be reviewing Autopilot in this lesson.', inlineStyleRanges: [], entityRanges: [], key: '9vtgv', type: 'unordered-list-item', depth: 0}, {type: 'unstyled', entityRanges: [], data: {}, text: 'Before we can do anything, there\'s a bit of configuration to do on the back end. We\'ll need to configure a user scope. The user scope will tell which Azure AD joined computers should receive Intune.', depth: 0, inlineStyleRanges: [], key: '72ukh'}, {inlineStyleRanges: [], entityRanges: [], data: {}, type: 'header-two', key: '63lan', depth: 0, text: 'How to configure auto-enrollment'}, {text: '1. Go to Microsoft Endpoint Manager admin center > Devices > Enroll devices > Windows enrollment > Automatic Enrollment. Set the MDM user scope to All. Click Save.', key: '8rlb1', inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 39}, {style: 'BOLD', length: 8, offset: 51}, {style: 'BOLD', length: 14, offset: 61}, {offset: 78, length: 18, style: 'BOLD'}, {offset: 99, length: 20, style: 'BOLD'}, {offset: 129, length: 14, style: 'BOLD'}, {length: 3, offset: 147, style: 'BOLD'}, {length: 4, offset: 158, style: 'BOLD'}], depth: 0, entityRanges: [], data: {}, type: 'unstyled'}, {key: 'ctd68', type: 'atomic', data: {}, depth: 0, text: ' ', entityRanges: [{offset: 0, length: 1, key: 0}], inlineStyleRanges: []}, {inlineStyleRanges: [], type: 'header-two', key: 'bter2', entityRanges: [], depth: 0, text: 'How to manually join a Windows computer to Intune', data: {}}, {text: 'First things first. Let\'s manually join a Windows computer to Azure AD and then let Azure AD automatically join the computer to Intune.', entityRanges: [], inlineStyleRanges: [], type: 'unstyled', depth: 0, key: '603eu', data: {}}, {entityRanges: [], data: {}, key: 'fnusv', depth: 0, inlineStyleRanges: [], text: '1. On the Windows device you want to join click Start menu > Settings.', type: 'unstyled'}, {data: {}, inlineStyleRanges: [], entityRanges: [{offset: 0, key: 1, length: 1}], key: '385si', depth: 0, text: ' ', type: 'atomic'}, {depth: 0, type: 'unstyled', inlineStyleRanges: [], entityRanges: [], key: '5ha9b', text: '2. Click Accounts.', data: {}}, {inlineStyleRanges: [], type: 'atomic', data: {}, depth: 0, key: 'f01tl', entityRanges: [{length: 1, key: 2, offset: 0}], text: ' '}, {key: 'bgqk0', entityRanges: [], text: '3. Click Access work or school > Connect. Enter your Microsoft 365 username and password. Complete the MFA prompt if required.', type: 'unstyled', data: {}, depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 21, offset: 9}, {style: 'BOLD', offset: 33, length: 7}, {style: 'BOLD', offset: 53, length: 35}, {offset: 103, style: 'BOLD', length: 10}]}, {type: 'atomic', text: ' ', key: '9olt7', depth: 0, entityRanges: [{offset: 0, length: 1, key: 3}], data: {}, inlineStyleRanges: []}, {entityRanges: [], type: 'unstyled', key: 'creto', data: {}, depth: 0, inlineStyleRanges: [], text: 'That\'s it! Simply wait 15 minutes or so and you\'ll see the device in the Endpoint Manager admin center.'}, {depth: 0, text: 'How to sync all your computers from the domain to Intune', inlineStyleRanges: [], type: 'header-two', entityRanges: [], key: 'd8isf', data: {}}, {text: 'Since we have auto-enrollment configured in Intune any devices that show up in Azure AD will automatically be enrolled in Intune. So how about we sync all of our domain-joined computers to Azure AD?', type: 'unstyled', inlineStyleRanges: [], depth: 0, entityRanges: [], key: 'd36q0', data: {}}, {inlineStyleRanges: [], entityRanges: [], key: '7g2ca', depth: 0, data: {}, type: 'unstyled', text: '1. Log on to the server that is running AD Connect.'}, {inlineStyleRanges: [], depth: 0, type: 'unstyled', key: '46bjp', text: '2. Run the Azure AD Connect wizard. (typically it\'s an icon on the desktop but its default location is "C:\\Program Files\\Microsoft Azure Active Directory Connect\\AzureADConnect.exe"', entityRanges: [], data: {}}, {entityRanges: [], text: '3. Click Configure.', type: 'unstyled', key: '6t84v', depth: 0, data: {}, inlineStyleRanges: [{offset: 9, length: 9, style: 'BOLD'}]}, {inlineStyleRanges: [{style: 'BOLD', length: 24, offset: 9}, {style: 'BOLD', length: 4, offset: 36}], data: {}, depth: 0, type: 'unstyled', entityRanges: [], key: '6td21', text: '4. Click Configure device options > Next.'}, {inlineStyleRanges: [], key: '6htsq', depth: 0, text: ' ', data: {}, type: 'atomic', entityRanges: [{key: 4, length: 1, offset: 0}]}, {inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 5}, {length: 9, offset: 54, style: 'BOLD'}, {length: 8, style: 'BOLD', offset: 67}, {length: 4, offset: 83, style: 'BOLD'}], entityRanges: [], depth: 0, data: {}, text: '5. Click Next > Enter your Microsoft 365 global admin username and password. Click Next.', type: 'unstyled', key: '71l4o'}, {entityRanges: [{offset: 0, key: 5, length: 1}], type: 'atomic', data: {}, text: ' ', key: '5pcv8', depth: 0, inlineStyleRanges: []}, {text: '6. Verify Configure Hybrid Azure AD join is checked. Click Next. Check the Windows 10 or later domain-joined devices checkbox. Click Next.', type: 'unstyled', depth: 0, entityRanges: [], inlineStyleRanges: [{style: 'BOLD', length: 30, offset: 10}, {offset: 59, style: 'BOLD', length: 4}, {length: 41, style: 'BOLD', offset: 75}, {length: 4, style: 'BOLD', offset: 133}], key: '19c6t', data: {}}, {text: ' ', inlineStyleRanges: [], key: '7tfd9', depth: 0, data: {}, entityRanges: [{offset: 0, length: 1, key: 6}], type: 'atomic'}, {inlineStyleRanges: [{offset: 17, style: 'BOLD', length: 19}, {style: 'BOLD', length: 22, offset: 46}, {style: 'BOLD', offset: 72, length: 22}, {length: 3, style: 'BOLD', offset: 102}, {offset: 118, style: 'BOLD', length: 40}, {offset: 166, length: 2, style: 'BOLD'}, {offset: 176, style: 'BOLD', length: 4}], data: {}, entityRanges: [], text: '7. Check the box next to your forest. Set the Authentication Service to Azure Active Directory. Click Add. Enter your on-premises Enterprise admin credentials. Click OK. Click Next.', type: 'unstyled', depth: 0, key: 'd8jse'}, {type: 'atomic', data: {}, text: ' ', entityRanges: [{length: 1, offset: 0, key: 7}], inlineStyleRanges: [], depth: 0, key: 'pbph'}, {type: 'unstyled', key: 'eh8nt', inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 9}, {length: 4, style: 'BOLD', offset: 26}], entityRanges: [], depth: 0, text: '8. Click Configure. Click Exit.', data: {}}, {entityRanges: [], key: '9jjc6', inlineStyleRanges: [], data: {}, depth: 0, text: 'That should be it. During the next sync, you should see all the devices sync from your on-premises AD to Azure AD.', type: 'unstyled'}]}, description: 'Manually and automatically syncing Windows devices to Intune', slug: 'Setting-up-Windows-10-devices-in-Intune-XFXu2zIS9', featuredImage: 'https://i.ibb.co/WDXKVjW/configure-device-options.png', datePublished: '2022/6/20', type: 'article', title: 'Setting up Windows 10 devices in Intune', sectionId: 'l0DxUuonW'},
      nextContentSlug: 'How-to-manage-devices-using-Intune-_LL9VqGZO',
      previousContentSlug: 'Setting-up-Apple--iOS-devices-in-Intune-MAjW0a2_p',
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
