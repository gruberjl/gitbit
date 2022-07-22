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
      path: '/course/ms-500/learn/Setting-up-Android-Devices-ZyKX3Idjs',
      article: {title: 'Setting up Android Devices', slug: 'Setting-up-Android-Devices-ZyKX3Idjs', id: 'ZyKX3Idjs', article: {entityMap: {0: {data: {alignment: 'none', height: 'auto', src: 'https://i.ibb.co/m0BYhL2/Connect-Intune-to-Google-Play.png', alt: 'Connect Intune to Google Play', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {data: {height: 'auto', src: 'https://i.ibb.co/0MYCVd1/Configure-Google-Play-integration-to-Intune.png', width: 'auto', alignment: 'none', alt: 'Screenshot after Google Play is integrated with Intune'}, type: 'IMAGE', mutability: 'MUTABLE'}, 2: {type: 'IMAGE', data: {width: 'auto', src: 'https://i.ibb.co/XFMW3Rq/android-enrollment-profiles-in-intune.png', alt: 'Android enrollment profiles in Intune', alignment: 'none', height: 'auto'}, mutability: 'MUTABLE'}, 3: {type: 'IMAGE', data: {width: 'auto', alt: 'Android Intune App Install', alignment: 'none', src: 'https://i.ibb.co/t4hRjRG/Android-Intune-App-Install.png', height: 'auto'}, mutability: 'MUTABLE'}, 4: {type: 'IMAGE', mutability: 'MUTABLE', data: {height: 'auto', src: 'https://i.ibb.co/gPpYtnK/sign-in-to-Android-Intune.png', width: 'auto', alt: 'Sign in to Intune on your Android device', alignment: 'none'}}, 5: {data: {alt: 'My Android', height: 'auto', alignment: 'none', width: 'auto', src: 'https://i.ibb.co/NscHw05/My-Android.png'}, type: 'IMAGE', mutability: 'MUTABLE'}, 6: {type: 'IMAGE', mutability: 'MUTABLE', data: {height: 'auto', src: 'https://i.ibb.co/2WJfSxp/This-device-is-not-managed.png', width: 'auto', alignment: 'none', alt: 'This device is not managed'}}, 7: {data: {height: 'auto', alignment: 'none', width: 'auto', src: 'https://i.ibb.co/jDFJK9g/Set-up-Intune-on-an-Android-device.png', alt: 'Set up Intune on an Android device'}, type: 'IMAGE', mutability: 'MUTABLE'}}, blocks: [{key: '4li16', inlineStyleRanges: [], type: 'unstyled', data: {}, entityRanges: [], depth: 0, text: 'You will see questions about Microsoft Intune, configuration profiles, and compliance policies. You won\'t see any questions about how to set up a device in Intune but I thought it was important for you to see so I\'ve created a lesson. If you already set up Intune to work with Android devices or are only concerned about passing the MS-500 feel free to skip this lesson.'}, {data: {}, key: '7d18m', depth: 0, text: 'Configure Android enrollment', inlineStyleRanges: [], type: 'header-two', entityRanges: []}, {depth: 0, type: 'unstyled', key: '52mvk', text: 'Before you can add Android devices to Microsoft Intune you\'ll need to connect your Intune tenant to Google.', inlineStyleRanges: [], data: {}, entityRanges: []}, {key: 'e3d5m', inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 39}, {style: 'BOLD', offset: 51, length: 8}, {length: 15, style: 'BOLD', offset: 61}, {offset: 78, style: 'BOLD', length: 18}, {style: 'BOLD', offset: 99, length: 19}, {style: 'BOLD', length: 7, offset: 126}, {length: 28, offset: 136, style: 'BOLD'}], entityRanges: [], data: {}, depth: 0, text: '1. Go to Microsoft Endpoint Manager admin center > Devices > Enroll devices > Android enrollment > Managed Google Play. Click I agree > Launch Google to connect now.', type: 'unstyled'}, {text: ' ', type: 'atomic', depth: 0, inlineStyleRanges: [], entityRanges: [{offset: 0, length: 1, key: 0}], key: 'ffuqu', data: {}}, {depth: 0, data: {}, inlineStyleRanges: [], entityRanges: [], type: 'unstyled', key: '42srd', text: '2. Follow the prompts to sign in and set up your Android to Work account. Once you\'re complete you\'ll see a notification saying "Managed Google Play successfully configured with tenant" and you\'ll notice the Enrollment profiles are unlocked.'}, {inlineStyleRanges: [], entityRanges: [{offset: 0, length: 1, key: 1}], data: {}, text: ' ', type: 'atomic', key: 'fnpdp', depth: 0}, {data: {}, depth: 0, inlineStyleRanges: [], key: '3tho1', entityRanges: [], text: 'The many ways to set up an Android device', type: 'header-two'}, {entityRanges: [], depth: 0, type: 'unstyled', key: '9qdsg', data: {}, inlineStyleRanges: [], text: 'So now we’re ready to finally set up our first Android device. Or are we? Before we can set up our first Android device, we need to discuss one last thing, how do you want to configure the device?'}, {entityRanges: [], inlineStyleRanges: [], key: 'f7d4i', text: 'Ownership: personal vs corporate', depth: 0, type: 'header-three', data: {}}, {depth: 0, entityRanges: [], key: 'e60qn', text: 'In short, Android has a couple of options. First, the device can be personally owned or corporate-owned. In short, did the user bring their own device or did the company buy the device and give it to the user? If the device is personally owned, then the device will automatically receive a work profile. In short, the user can continue to use their personal apps and device like they normally would, and the work apps go in a separate container on the phone. The device will even have a managed Google Play store app so users can download apps to the workspace. Only apps that you have allowed will show up in the managed Google Play app store.', inlineStyleRanges: [], type: 'unstyled', data: {}}, {inlineStyleRanges: [], depth: 0, text: 'With corporate-owned devices a bit more information is available to the admins. Intune will collect the following information on corporate-owned devices but won’t gather the information for personally owned devices:', type: 'unstyled', data: {}, key: '89ocp', entityRanges: []}, {data: {}, inlineStyleRanges: [], text: 'Phone number', type: 'unordered-list-item', entityRanges: [], depth: 0, key: 'ajkae'}, {type: 'unordered-list-item', data: {}, key: 'f1b0t', entityRanges: [], text: 'App inventory', depth: 0, inlineStyleRanges: []}, {depth: 0, data: {}, type: 'unstyled', entityRanges: [], text: 'By default, devices enrolled in Intune are considered personally owned. To convert a device to corporate ownership you must perform one of the following:', key: '60e5v', inlineStyleRanges: []}, {inlineStyleRanges: [], entityRanges: [], data: {}, key: 'd6tns', text: 'Setup up the fresh factory reset device to be corporate-owned.', depth: 0, type: 'unordered-list-item'}, {entityRanges: [], type: 'unordered-list-item', data: {}, inlineStyleRanges: [], key: 'dnnns', depth: 0, text: 'Set the device serial number inside Intune prior to enrollment.'}, {depth: 0, inlineStyleRanges: [], type: 'unordered-list-item', text: 'Have an Intune administrator manually convert the device from personally owned to corporate-owned.', key: 'con2i', entityRanges: [], data: {}}, {entityRanges: [], inlineStyleRanges: [], text: 'Android Enterprise: Corporate-owned fully managed user devices', type: 'header-three', key: '2qkld', data: {}, depth: 0}, {type: 'unstyled', data: {}, inlineStyleRanges: [], entityRanges: [], key: '61ak', depth: 0, text: 'In this configuration, the device is owned by the corporation but is given to an individual. With corporate-owned fully managed user devices, there isn’t a personal / work profile on the device. There’s only a work profile. So, the user doesn’t have to understand the difference. Also, the Managed Google Play store is the only store available. So, the user cannot install apps and games on the device unless you’ve made them available in the managed Google Play store.'}, {inlineStyleRanges: [], text: 'Android Enterprise: Corporate-owned devices with work profile', depth: 0, entityRanges: [], type: 'header-three', data: {}, key: 'b0mtf'}, {entityRanges: [], inlineStyleRanges: [], text: 'In this configuration, the device is owned by the corporation but is given to an individual. With corporate-owned devices with a work profile, the device is split between the work profile and personal, just like the devices when they are personally owned devices with a work profile. If you have a mix of personally owned and corporate-owned devices I’d recommend using this policy.', data: {}, depth: 0, type: 'unstyled', key: '4vnef'}, {key: '1ohuf', type: 'header-three', entityRanges: [], depth: 0, data: {}, text: 'Android Enterprise: Corporate-owned dedicated devices', inlineStyleRanges: []}, {data: {}, type: 'unstyled', entityRanges: [], key: 'eeeg', depth: 0, text: 'Corporate-owned dedicated devices are set up for devices that do not have a personal owner. For example, you may have a tablet in the conference room that anyone that uses the conference room has access to the tablet. With corporate-owned dedicated devices, users won’t be able to install any apps on the device. The only apps that will be installed are required apps that are pushed to devices.', inlineStyleRanges: []}, {entityRanges: [], text: 'How to set up corporate-owned Android devices', key: 'bskrl', inlineStyleRanges: [], depth: 0, data: {}, type: 'header-three'}, {text: 'Since setting up devices isn\'t covered under the MS-500 I\'ll be skipping this section but a quick FYI: to set up a device as corporate-owned you need to set up the enrollment. Go to Microsoft Endpoint Manager admin center > Devices > Enroll devices > Android enrollment and set up the enrollment profile you want to use.', entityRanges: [], inlineStyleRanges: [{offset: 182, length: 39, style: 'BOLD'}, {length: 8, style: 'BOLD', offset: 224}, {offset: 234, length: 14, style: 'BOLD'}, {style: 'BOLD', length: 18, offset: 251}], depth: 0, type: 'unstyled', key: '7co7c', data: {}}, {depth: 0, type: 'atomic', entityRanges: [{length: 1, key: 2, offset: 0}], key: 'pueo', data: {}, inlineStyleRanges: [], text: ' '}, {text: 'How to enroll an Android personally owned device', key: 'de46s', depth: 0, type: 'header-two', inlineStyleRanges: [], data: {}, entityRanges: []}, {text: 'Enrolling an Android personally owned device is simple. And there’s no setup on the back end. Have the user perform the following steps on their device:', inlineStyleRanges: [], key: '8kpb3', type: 'unstyled', depth: 0, entityRanges: [], data: {}}, {text: '1.\tOpen the Google Play store and search for Intune Company Portal. Install the app.', depth: 0, data: {}, type: 'unstyled', entityRanges: [], inlineStyleRanges: [{offset: 12, style: 'BOLD', length: 17}, {style: 'BOLD', length: 21, offset: 45}, {length: 8, style: 'BOLD', offset: 68}], key: '7ce7v'}, {inlineStyleRanges: [], data: {}, entityRanges: [{key: 3, length: 1, offset: 0}], text: ' ', type: 'atomic', depth: 0, key: '1tg27'}, {key: '9eihq', inlineStyleRanges: [{length: 7, style: 'BOLD', offset: 39}, {style: 'BOLD', length: 29, offset: 59}], text: '2.\tOnce installed, open the app. Click Sign in. Enter your company username and password. If prompted complete the MFA.', type: 'unstyled', data: {}, entityRanges: [], depth: 0}, {key: '9171a', entityRanges: [{length: 1, offset: 0, key: 4}], depth: 0, inlineStyleRanges: [], type: 'atomic', text: ' ', data: {}}, {data: {}, inlineStyleRanges: [{style: 'BOLD', length: 8, offset: 9}, {style: 'BOLD', length: 10, offset: 19}], text: '4.\tClick Devices > My Android.', key: '8rd1l', depth: 0, entityRanges: [], type: 'unstyled'}, {type: 'atomic', entityRanges: [{key: 5, length: 1, offset: 0}], key: '4stqp', inlineStyleRanges: [], text: ' ', data: {}, depth: 0}, {entityRanges: [], data: {}, text: '5.\tClick This device is not managed.', type: 'unstyled', key: '41s4h', depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 26, offset: 9}]}, {text: ' ', depth: 0, key: '1eakm', inlineStyleRanges: [], data: {}, entityRanges: [{key: 6, offset: 0, length: 1}], type: 'atomic'}, {type: 'unstyled', key: 'juis', data: {}, inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 5}, {length: 9, style: 'BOLD', offset: 17}, {style: 'BOLD', offset: 28, length: 17}, {style: 'BOLD', offset: 48, length: 5}, {style: 'BOLD', length: 9, offset: 55}, {style: 'BOLD', length: 5, offset: 66}, {style: 'BOLD', length: 6, offset: 73}], entityRanges: [], text: '6.\tClick Begin > Continue > Accept & continue > Next > Continue > Done > Got it.', depth: 0}, {text: ' ', data: {}, depth: 0, inlineStyleRanges: [], key: 'bmk71', type: 'atomic', entityRanges: [{key: 7, offset: 0, length: 1}]}, {inlineStyleRanges: [], key: 'chh5s', data: {}, entityRanges: [], depth: 0, type: 'unstyled', text: ''}]}, type: 'article', images: ['https://i.ibb.co/m0BYhL2/Connect-Intune-to-Google-Play.png', 'https://i.ibb.co/0MYCVd1/Configure-Google-Play-integration-to-Intune.png', 'https://i.ibb.co/XFMW3Rq/android-enrollment-profiles-in-intune.png', 'https://i.ibb.co/t4hRjRG/Android-Intune-App-Install.png', 'https://i.ibb.co/gPpYtnK/sign-in-to-Android-Intune.png', 'https://i.ibb.co/NscHw05/My-Android.png', 'https://i.ibb.co/2WJfSxp/This-device-is-not-managed.png', 'https://i.ibb.co/jDFJK9g/Set-up-Intune-on-an-Android-device.png'], datePublished: '2022/6/17', description: 'How to set up Android Devices in Intune.', featuredImage: 'https://i.ibb.co/m0BYhL2/Connect-Intune-to-Google-Play.png', sectionId: 'l0DxUuonW', publish: true},
      nextContentSlug: 'Setting-up-Apple--iOS-devices-in-Intune-MAjW0a2_p',
      previousContentSlug: 'Introduction-to-Intune-7gR3L122b',
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
                <div><p>You will see questions about Microsoft Intune, configuration profiles, and compliance policies. You won't see any questions about how to set up a device in Intune but I thought it was important for you to see so I've created a lesson. If you already set up Intune to work with Android devices or are only concerned about passing the MS-500 feel free to skip this lesson.</p>
                  <h2>Configure Android enrollment</h2>
                  <p>Before you can add Android devices to Microsoft Intune you'll need to connect your Intune tenant to Google.</p>
                  <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <strong>Enroll devices </strong>&gt; <strong>Android enrollment</strong> &gt; <strong>Managed Google Play</strong>. Click <strong>I agree</strong> &gt; <strong>Launch Google to connect now</strong>.</p>
                  <div ><img src="https://i.ibb.co/m0BYhL2/Connect-Intune-to-Google-Play.png" alt="Connect Intune to Google Play" style="height: auto;width: auto" /></div>
                  <p>2. Follow the prompts to sign in and set up your Android to Work account. Once you're complete you'll see a notification saying "Managed Google Play successfully configured with tenant" and you'll notice the Enrollment profiles are unlocked.</p>
                  <div ><img src="https://i.ibb.co/0MYCVd1/Configure-Google-Play-integration-to-Intune.png" alt="Screenshot after Google Play is integrated with Intune" style="height: auto;width: auto" /></div>
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
                  <div ><img src="https://i.ibb.co/XFMW3Rq/android-enrollment-profiles-in-intune.png" alt="Android enrollment profiles in Intune" style="height: auto;width: auto" /></div>
                  <h2>How to enroll an Android personally owned device</h2>
                  <p>Enrolling an Android personally owned device is simple. And there’s no setup on the back end. Have the user perform the following steps on their device:</p>
                  <p>1.	Open the <strong>Google Play store</strong> and search for <strong>Intune Company Portal</strong>. <strong>Install </strong>the app.</p>
                  <div ><img src="https://i.ibb.co/t4hRjRG/Android-Intune-App-Install.png" alt="Android Intune App Install" style="height: auto;width: auto" /></div>
                  <p>2.	Once installed, open the app. Click <strong>Sign in</strong>. Enter your <strong>company username and password</strong>. If prompted complete the MFA.</p>
                  <div ><img src="https://i.ibb.co/gPpYtnK/sign-in-to-Android-Intune.png" alt="Sign in to Intune on your Android device" style="height: auto;width: auto" /></div>
                  <p>4.	Click <strong>Devices </strong>&gt; <strong>My Android</strong>.</p>
                  <div ><img src="https://i.ibb.co/NscHw05/My-Android.png" alt="My Android" style="height: auto;width: auto" /></div>
                  <p>5.	Click <strong>This device is not managed</strong>.</p>
                  <div ><img src="https://i.ibb.co/2WJfSxp/This-device-is-not-managed.png" alt="This device is not managed" style="height: auto;width: auto" /></div>
                  <p>6.	Click <strong>Begin</strong> &gt; <strong>Continue </strong>&gt; <strong>Accept &amp; continue</strong> &gt; <strong>Next </strong>&gt; <strong>Continue </strong>&gt; <strong>Done </strong>&gt; <strong>Got it</strong>.</p>
                  <div ><img src="https://i.ibb.co/jDFJK9g/Set-up-Intune-on-an-Android-device.png" alt="Set up Intune on an Android device" style="height: auto;width: auto" /></div>
                  <p />
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
