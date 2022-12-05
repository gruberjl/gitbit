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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4li16', text: 'You will see questions about Microsoft Intune, configuration profiles, and compliance policies. You won\'t see any questions about how to set up a device in Intune but I thought it was important for you to see so I\'ve created a lesson. If you already set up Intune to work with Android devices or are only concerned about passing the MS-500 feel free to skip this lesson.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7d18m', text: 'Configure Android enrollment', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '52mvk', text: 'Before you can add Android devices to Microsoft Intune you\'ll need to connect your Intune tenant to Google.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 39, offset: 9, style: 'BOLD'}, {length: 8, offset: 51, style: 'BOLD'}, {length: 15, offset: 61, style: 'BOLD'}, {length: 18, offset: 78, style: 'BOLD'}, {length: 19, offset: 99, style: 'BOLD'}, {length: 7, offset: 126, style: 'BOLD'}, {length: 28, offset: 136, style: 'BOLD'}], key: 'e3d5m', text: '1. Go to Microsoft Endpoint Manager admin center > Devices > Enroll devices > Android enrollment > Managed Google Play. Click I agree > Launch Google to connect now.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: 'ffuqu', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '42srd', text: '2. Follow the prompts to sign in and set up your Android to Work account. Once you\'re complete you\'ll see a notification saying "Managed Google Play successfully configured with tenant" and you\'ll notice the Enrollment profiles are unlocked.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fnpdp', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3tho1', text: 'The many ways to set up an Android device', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9qdsg', text: 'So now we’re ready to finally set up our first Android device. Or are we? Before we can set up our first Android device, we need to discuss one last thing, how do you want to configure the device?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f7d4i', text: 'Ownership: personal vs corporate', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e60qn', text: 'In short, Android has a couple of options. First, the device can be personally owned or corporate-owned. In short, did the user bring their own device or did the company buy the device and give it to the user? If the device is personally owned, then the device will automatically receive a work profile. In short, the user can continue to use their personal apps and device like they normally would, and the work apps go in a separate container on the phone. The device will even have a managed Google Play store app so users can download apps to the workspace. Only apps that you have allowed will show up in the managed Google Play app store.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '89ocp', text: 'With corporate-owned devices a bit more information is available to the admins. Intune will collect the following information on corporate-owned devices but won’t gather the information for personally owned devices:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ajkae', text: 'Phone number', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f1b0t', text: 'App inventory', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '60e5v', text: 'By default, devices enrolled in Intune are considered personally owned. To convert a device to corporate ownership you must perform one of the following:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd6tns', text: 'Setup up the fresh factory reset device to be corporate-owned.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dnnns', text: 'Set the device serial number inside Intune prior to enrollment.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'con2i', text: 'Have an Intune administrator manually convert the device from personally owned to corporate-owned.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2qkld', text: 'Android Enterprise: Corporate-owned fully managed user devices', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '61ak', text: 'In this configuration, the device is owned by the corporation but is given to an individual. With corporate-owned fully managed user devices, there isn’t a personal / work profile on the device. There’s only a work profile. So, the user doesn’t have to understand the difference. Also, the Managed Google Play store is the only store available. So, the user cannot install apps and games on the device unless you’ve made them available in the managed Google Play store.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b0mtf', text: 'Android Enterprise: Corporate-owned devices with work profile', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4vnef', text: 'In this configuration, the device is owned by the corporation but is given to an individual. With corporate-owned devices with a work profile, the device is split between the work profile and personal, just like the devices when they are personally owned devices with a work profile. If you have a mix of personally owned and corporate-owned devices I’d recommend using this policy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1ohuf', text: 'Android Enterprise: Corporate-owned dedicated devices', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'eeeg', text: 'Corporate-owned dedicated devices are set up for devices that do not have a personal owner. For example, you may have a tablet in the conference room that anyone that uses the conference room has access to the tablet. With corporate-owned dedicated devices, users won’t be able to install any apps on the device. The only apps that will be installed are required apps that are pushed to devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bskrl', text: 'How to set up corporate-owned Android devices', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 39, offset: 182, style: 'BOLD'}, {length: 8, offset: 224, style: 'BOLD'}, {length: 14, offset: 234, style: 'BOLD'}, {length: 18, offset: 251, style: 'BOLD'}], key: '7co7c', text: 'Since setting up devices isn\'t covered under the MS-500 I\'ll be skipping this section but a quick FYI: to set up a device as corporate-owned you need to set up the enrollment. Go to Microsoft Endpoint Manager admin center > Devices > Enroll devices > Android enrollment and set up the enrollment profile you want to use.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: 'pueo', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'de46s', text: 'How to enroll an Android personally owned device', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8kpb3', text: 'Enrolling an Android personally owned device is simple. And there’s no setup on the back end. Have the user perform the following steps on their device:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 17, offset: 12, style: 'BOLD'}, {length: 21, offset: 45, style: 'BOLD'}, {length: 8, offset: 68, style: 'BOLD'}], key: '7ce7v', text: '1.\tOpen the Google Play store and search for Intune Company Portal. Install the app.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: '1tg27', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 39, style: 'BOLD'}, {length: 29, offset: 59, style: 'BOLD'}], key: '9eihq', text: '2.\tOnce installed, open the app. Click Sign in. Enter your company username and password. If prompted complete the MFA.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '9171a', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 9, style: 'BOLD'}, {length: 10, offset: 19, style: 'BOLD'}], key: '8rd1l', text: '4.\tClick Devices > My Android.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: '4stqp', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 26, offset: 9, style: 'BOLD'}], key: '41s4h', text: '5.\tClick This device is not managed.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '1eakm', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 9, style: 'BOLD'}, {length: 9, offset: 17, style: 'BOLD'}, {length: 17, offset: 28, style: 'BOLD'}, {length: 5, offset: 48, style: 'BOLD'}, {length: 9, offset: 55, style: 'BOLD'}, {length: 5, offset: 66, style: 'BOLD'}, {length: 6, offset: 73, style: 'BOLD'}], key: 'juis', text: '6.\tClick Begin > Continue > Accept & continue > Next > Continue > Done > Got it.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: 'bmk71', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'chh5s', text: '', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'none', alt: 'Connect Intune to Google Play', height: 'auto', src: 'https://i.ibb.co/m0BYhL2/Connect-Intune-to-Google-Play.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {data: {alignment: 'none', alt: 'Screenshot after Google Play is integrated with Intune', height: 'auto', src: 'https://i.ibb.co/0MYCVd1/Configure-Google-Play-integration-to-Intune.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Android enrollment profiles in Intune', height: 'auto', src: 'https://i.ibb.co/XFMW3Rq/android-enrollment-profiles-in-intune.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Android Intune App Install', height: 'auto', src: 'https://i.ibb.co/t4hRjRG/Android-Intune-App-Install.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Sign in to Intune on your Android device', height: 'auto', src: 'https://i.ibb.co/gPpYtnK/sign-in-to-Android-Intune.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'My Android', height: 'auto', src: 'https://i.ibb.co/NscHw05/My-Android.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'This device is not managed', height: 'auto', src: 'https://i.ibb.co/2WJfSxp/This-device-is-not-managed.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Set up Intune on an Android device', height: 'auto', src: 'https://i.ibb.co/jDFJK9g/Set-up-Intune-on-an-Android-device.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/6/17', description: 'How to set up Android Devices in Intune. Connect your Intune tenant account to your Managed Google Play account. Create an enrollment profile. Create a device group.', featuredImage: 'https://i.ibb.co/m0BYhL2/Connect-Intune-to-Google-Play.png', id: 'ZyKX3Idjs', images: ['https://i.ibb.co/m0BYhL2/Connect-Intune-to-Google-Play.png', 'https://i.ibb.co/0MYCVd1/Configure-Google-Play-integration-to-Intune.png', 'https://i.ibb.co/XFMW3Rq/android-enrollment-profiles-in-intune.png', 'https://i.ibb.co/t4hRjRG/Android-Intune-App-Install.png', 'https://i.ibb.co/gPpYtnK/sign-in-to-Android-Intune.png', 'https://i.ibb.co/NscHw05/My-Android.png', 'https://i.ibb.co/2WJfSxp/This-device-is-not-managed.png', 'https://i.ibb.co/jDFJK9g/Set-up-Intune-on-an-Android-device.png'], publish: true, sectionId: 'l0DxUuonW', slug: 'Setting-up-Android-Devices-ZyKX3Idjs', title: 'Setting up Android Devices', type: 'article'},
      nextContentSlug: 'learn/Setting-up-Apple--iOS-devices-in-Intune-MAjW0a2_p',
      previousContentSlug: 'learn/Introduction-to-Intune-7gR3L122b',
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
                  <div><p>You will see questions about Microsoft Intune, configuration profiles, and compliance policies. You won't see any questions about how to set up a device in Intune but I thought it was important for you to see so I've created a lesson. If you already set up Intune to work with Android devices or are only concerned about passing the MS-500 feel free to skip this lesson.</p>
                    <div id="ld-7740-2760" /><h2>Configure Android enrollment</h2>
                    <p>Before you can add Android devices to Microsoft Intune you'll need to connect your Intune tenant to Google.</p>
                    <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <strong>Enroll devices </strong>&gt; <strong>Android enrollment</strong> &gt; <strong>Managed Google Play</strong>. Click <strong>I agree</strong> &gt; <strong>Launch Google to connect now</strong>.</p>
                    <div ><img src="https://i.ibb.co/m0BYhL2/Connect-Intune-to-Google-Play.png" alt="Connect Intune to Google Play" height="auto" width="auto" /></div>
                    <p>2. Follow the prompts to sign in and set up your Android to Work account. Once you're complete you'll see a notification saying "Managed Google Play successfully configured with tenant" and you'll notice the Enrollment profiles are unlocked.</p>
                    <div ><img src="https://i.ibb.co/0MYCVd1/Configure-Google-Play-integration-to-Intune.png" alt="Screenshot after Google Play is integrated with Intune" height="auto" width="auto" /></div>
                    <h2>The many ways to set up an Android device</h2>
                    <p>So now we’re ready to finally set up our first Android device. Or are we? Before we can set up our first Android device, we need to discuss one last thing, how do you want to configure the device?</p>
                    <h3>Ownership: personal vs corporate</h3>
                    <p>In short, Android has a couple of options. First, the device can be personally owned or corporate-owned. In short, did the user bring their own device or did the company buy the device and give it to the user? If the device is personally owned, then the device will automatically receive a work profile. In short, the user can continue to use their personal apps and device like they normally would, and the work apps go in a separate container on the phone. The device will even have a managed Google Play store app so users can download apps to the workspace. Only apps that you have allowed will show up in the managed Google Play app store.</p>
                    <p>With corporate-owned devices a bit more information is available to the admins. Intune will collect the following information on corporate-owned devices but won’t gather the information for personally owned devices:</p>
                    <ul>
                      <li>Phone number</li>
                      <li>App inventory</li>
                    </ul>
                    <p>By default, devices enrolled in Intune are considered personally owned. To convert a device to corporate ownership you must perform one of the following:</p>
                    <ul>
                      <li>Setup up the fresh factory reset device to be corporate-owned.</li>
                      <li>Set the device serial number inside Intune prior to enrollment.</li>
                      <li>Have an Intune administrator manually convert the device from personally owned to corporate-owned.</li>
                    </ul>
                    <h3>Android Enterprise: Corporate-owned fully managed user devices</h3>
                    <p>In this configuration, the device is owned by the corporation but is given to an individual. With corporate-owned fully managed user devices, there isn’t a personal / work profile on the device. There’s only a work profile. So, the user doesn’t have to understand the difference. Also, the Managed Google Play store is the only store available. So, the user cannot install apps and games on the device unless you’ve made them available in the managed Google Play store.</p>
                    <h3>Android Enterprise: Corporate-owned devices with work profile</h3>
                    <p>In this configuration, the device is owned by the corporation but is given to an individual. With corporate-owned devices with a work profile, the device is split between the work profile and personal, just like the devices when they are personally owned devices with a work profile. If you have a mix of personally owned and corporate-owned devices I’d recommend using this policy.</p>
                    <h3>Android Enterprise: Corporate-owned dedicated devices</h3>
                    <p>Corporate-owned dedicated devices are set up for devices that do not have a personal owner. For example, you may have a tablet in the conference room that anyone that uses the conference room has access to the tablet. With corporate-owned dedicated devices, users won’t be able to install any apps on the device. The only apps that will be installed are required apps that are pushed to devices.</p>
                    <h3>How to set up corporate-owned Android devices</h3>
                    <p>Since setting up devices isn't covered under the MS-500 I'll be skipping this section but a quick FYI: to set up a device as corporate-owned you need to set up the enrollment. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <strong>Enroll devices</strong> &gt; <strong>Android enrollment</strong> and set up the enrollment profile you want to use.</p>
                    <div ><img src="https://i.ibb.co/XFMW3Rq/android-enrollment-profiles-in-intune.png" alt="Android enrollment profiles in Intune" height="auto" width="auto" /></div>
                    <h2>How to enroll an Android personally owned device</h2>
                    <p>Enrolling an Android personally owned device is simple. And there’s no setup on the back end. Have the user perform the following steps on their device:</p>
                    <p>1.	Open the <strong>Google Play store</strong> and search for <strong>Intune Company Portal</strong>. <strong>Install </strong>the app.</p>
                    <div ><img src="https://i.ibb.co/t4hRjRG/Android-Intune-App-Install.png" alt="Android Intune App Install" height="auto" width="auto" /></div>
                    <p>2.	Once installed, open the app. Click <strong>Sign in</strong>. Enter your <strong>company username and password</strong>. If prompted complete the MFA.</p>
                    <div ><img src="https://i.ibb.co/gPpYtnK/sign-in-to-Android-Intune.png" alt="Sign in to Intune on your Android device" height="auto" width="auto" /></div>
                    <p>4.	Click <strong>Devices </strong>&gt; <strong>My Android</strong>.</p>
                    <div ><img src="https://i.ibb.co/NscHw05/My-Android.png" alt="My Android" height="auto" width="auto" /></div>
                    <p>5.	Click <strong>This device is not managed</strong>.</p>
                    <div ><img src="https://i.ibb.co/2WJfSxp/This-device-is-not-managed.png" alt="This device is not managed" height="auto" width="auto" /></div>
                    <p>6.	Click <strong>Begin</strong> &gt; <strong>Continue </strong>&gt; <strong>Accept &amp; continue</strong> &gt; <strong>Next </strong>&gt; <strong>Continue </strong>&gt; <strong>Done </strong>&gt; <strong>Got it</strong>.</p>
                    <div ><img src="https://i.ibb.co/jDFJK9g/Set-up-Intune-on-an-Android-device.png" alt="Set up Intune on an Android device" height="auto" width="auto" /></div>
                    <p />
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
