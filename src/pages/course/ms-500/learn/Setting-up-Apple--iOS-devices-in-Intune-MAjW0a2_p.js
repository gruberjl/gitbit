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
      path: '/course/ms-500/learn/Setting-up-Apple--iOS-devices-in-Intune-MAjW0a2_p',
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '34hkq', text: 'You will see questions about Microsoft Intune, configuration profiles, and compliance policies. You won\'t see any questions about how to set up a device in Intune but I thought it was important for you to see so I\'ve created a lesson. If you already set up Intune to work with iOS devices or are only concerned about passing the MS-500 feel free to skip this lesson.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7ev1k', text: 'Configure Apple enrollment', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5nngo', text: 'Before you can add iOS devices to Microsoft Intune you\'ll need to connect your Intune tenant to Apple. Setting up the Apple connector is a little more complicated than the Google side of things. But Apple doesn\'t have as many enrollment profiles so that\'s nice.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 16, offset: 78}], inlineStyleRanges: [{length: 39, offset: 9, style: 'BOLD'}, {length: 7, offset: 51, style: 'BOLD'}, {length: 14, offset: 61, style: 'BOLD'}, {length: 17, offset: 78, style: 'BOLD'}, {length: 26, offset: 97, style: 'BOLD'}, {length: 7, offset: 131, style: 'BOLD'}, {length: 17, offset: 141, style: 'BOLD'}, {length: 32, offset: 212, style: 'BOLD'}], key: '2jq03', text: '1. Go to Microsoft Endpoint Manager admin center > Devices > Enroll devices > Apple enrollment > Apple MDM Push certificate. Click I agree > Download your CSR. Save the file to a location on your computer. Click Create your MDM push Certificate.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: 'aohis', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'evsbo', text: '2. Create an Apple ID and then sign in. Click Create a certificate. Click I have read and agree. Click Accept.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '3vj7e', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 9, style: 'BOLD'}, {length: 6, offset: 108, style: 'BOLD'}], key: 'bob0p', text: '3. Click Choose File and select the file you downloaded in step 1 (after clicking Download your CSR). Click Upload.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: 'a064v', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'foi7o', text: '4. Click Download and save the certificate to a location on your computer. Go back to the Microsoft Endpoint Manager admin center page that we opened in step 1.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 14, style: 'BOLD'}, {length: 6, offset: 26, style: 'BOLD'}, {length: 13, offset: 44, style: 'BOLD'}, {length: 7, offset: 64, style: 'BOLD'}, {length: 6, offset: 133, style: 'BOLD'}], key: '9q7sk', text: '5. Enter your Apple ID in step 4. Click the browse button under step 5 and select the PEM file you downloaded in step 4 above. Click Upload.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '90bt2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1q2l9', text: 'Once you\'re complete you\'ll see a notification saying "Uploading your MDM push certificate" and you\'ll notice the Enrollment methods and options are unlocked.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '84v4d', text: 'Enrolling iOS devices', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1ai92', text: 'Similar to Andriod devices, iOS devices can be enrolled in multiple ways (although not nearly as many options as Android has). The device can be personally owned or corporate-owned. Unlike Android, you can also have users select whether the device is corporate-owned or personally owned when setting up their device. In this guide, we\'ll only be covering personally owned devices.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 12, style: 'BOLD'}, {length: 21, offset: 37, style: 'BOLD'}, {length: 12, offset: 75, style: 'BOLD'}], key: '4okuo', text: '1. Open the App Store and search for Intune Company Portal. Once installed open the app.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: 'apknr', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 9, style: 'BOLD'}], key: 'bqmc6', text: '2. Click Sign in. Sign in using your Microsoft 365 credentials.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fcnsb', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 2, offset: 34, style: 'BOLD'}, {length: 5, offset: 102, style: 'BOLD'}], key: 'dftg8', text: '3. On the Get notified page click OK. On the "Comp Portal" would like to send you notifications click Allow.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '21dco', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 9, style: 'BOLD'}, {length: 11, offset: 66, style: 'BOLD'}, {length: 5, offset: 80, style: 'BOLD'}], key: '1eoht', text: '4. Click Devices. Click the device you are currently using. Click Begin setup > Begin', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: '5frlb', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 9, style: 'BOLD'}, {length: 8, offset: 20, style: 'BOLD'}, {length: 5, offset: 111, style: 'BOLD'}, {length: 5, offset: 159, style: 'BOLD'}, {length: 8, offset: 20, style: 'color-rgb(33,37,41)'}, {length: 8, offset: 20, style: 'bgcolor-rgb(255,255,255)'}, {length: 8, offset: 20, style: 'fontsize-16'}, {length: 8, offset: 20, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'bc3js', text: '5. Click Continue > Continue. On the "This website is trying to download a configuration profile" prompt click Allow. On the "Profile Downloaded" prompt click Close.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '5v07k', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 9, style: 'BOLD'}, {length: 8, offset: 20, style: 'BOLD'}, {length: 11, offset: 86, style: 'BOLD'}], key: 'c409e', text: '6. Click Continue > Continue. On the How to install management profile page click the home button.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 10, length: 1, offset: 0}], inlineStyleRanges: [], key: 'b95lq', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 8, style: 'BOLD'}, {length: 18, offset: 19, style: 'BOLD'}, {length: 8, offset: 40, style: 'BOLD'}, {length: 8, offset: 50, style: 'BOLD'}, {length: 7, offset: 60, style: 'BOLD'}, {length: 6, offset: 70, style: 'BOLD'}, {length: 4, offset: 78, style: 'BOLD'}, {length: 4, offset: 94, style: 'BOLD'}], key: '22vnh', text: '7. Open Settings > Profile Downloaded > Install > Install > Install > Trust > Done. Click the Home button.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], key: '9v42s', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 12, style: 'BOLD'}, {length: 4, offset: 35, style: 'BOLD'}], key: 'ef0ie', text: '8. Open the Comp Portal app. Click Done.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 12, length: 1, offset: 0}], inlineStyleRanges: [], key: '1vp0i', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2fjst', text: '', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesEnrollmentMenu/appleEnrollment'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alignment: 'none', alt: 'Setup Apple enrollment in Intune', height: 'auto', src: 'https://i.ibb.co/X7Ffb2B/Setup-Apple-Enrollment-in-Intune.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {alignment: 'none', alt: 'Begin installing management profile', height: 'auto', src: 'https://i.ibb.co/TR07fNy/Begin-installing-management-profile.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {data: {alignment: 'none', alt: 'Install management profile on iOS', height: 'auto', src: 'https://i.ibb.co/wRJJGbd/Install-management-profile-on-i-OS.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {alignment: 'none', alt: 'Finish setting up Intune on iOS', height: 'auto', src: 'https://i.ibb.co/dP7cFQK/Finish-setting-up-Intune-on-i-OS.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {data: {alignment: 'none', alt: 'Create Apple push certificate', height: 'auto', src: 'https://i.ibb.co/jMDfY10/Create-Apple-Push-certificate.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {alignment: 'none', alt: 'Upload your CSR', height: 'auto', src: 'https://i.ibb.co/HgHqfqy/Upload-your-CSR.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {data: {alignment: 'none', alt: 'Upload certificate to Intune', height: 'auto', src: 'https://i.ibb.co/hBJXV0P/upload-certificate-to-Intune.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 5: {data: {alignment: 'none', alt: 'Install Intune on iOS', height: 'auto', src: 'https://i.ibb.co/PZmq1Vc/install-Intune-app-on-i-OS.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 6: {data: {alignment: 'none', alt: 'Sign in to Intune on iOS', height: 'auto', src: 'https://i.ibb.co/XZJFp5F/sign-in-to-i-OS-intune.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 7: {data: {alignment: 'none', alt: 'Allow notifications in Intune iOS', height: 'auto', src: 'https://i.ibb.co/ydtgWDF/Allow-notifications-in-Intune-i-OS.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 8: {data: {alignment: 'none', alt: 'Begin registering device in Intune', height: 'auto', src: 'https://i.ibb.co/HXSn57B/Begin-registering-device-in-Intune.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 9: {data: {alignment: 'none', alt: 'Download the profile on iOS', height: 'auto', src: 'https://i.ibb.co/Wc1y8Tf/downlaod-the-profile-on-i-OS.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, datePublished: '2022/6/17', description: 'How to set up Apple iOS Devices in Intune.', featuredImage: 'https://i.ibb.co/X7Ffb2B/Setup-Apple-Enrollment-in-Intune.png', id: 'MAjW0a2_p', images: ['https://i.ibb.co/X7Ffb2B/Setup-Apple-Enrollment-in-Intune.png', 'https://i.ibb.co/jMDfY10/Create-Apple-Push-certificate.png', 'https://i.ibb.co/HgHqfqy/Upload-your-CSR.png', 'https://i.ibb.co/2Pm8v9r/Upload-your-CSR.png', 'https://i.ibb.co/hBJXV0P/upload-certificate-to-Intune.png', 'https://i.ibb.co/PZmq1Vc/install-Intune-app-on-i-OS.png', 'https://i.ibb.co/XZJFp5F/sign-in-to-i-OS-intune.png', 'https://i.ibb.co/ydtgWDF/Allow-notifications-in-Intune-i-OS.png', 'https://i.ibb.co/HXSn57B/Begin-registering-device-in-Intune.png', 'https://i.ibb.co/Wc1y8Tf/downlaod-the-profile-on-i-OS.png', 'https://i.ibb.co/TR07fNy/Begin-installing-management-profile.png', 'https://i.ibb.co/wRJJGbd/Install-management-profile-on-i-OS.png', 'https://i.ibb.co/dP7cFQK/Finish-setting-up-Intune-on-i-OS.png'], publish: true, sectionId: 'l0DxUuonW', slug: 'Setting-up-Apple--iOS-devices-in-Intune-MAjW0a2_p', title: 'Setting up Apple / iOS devices in Intune', type: 'article'},
      nextContentSlug: 'Setting-up-Windows-10-devices-in-Intune-XFXu2zIS9',
      previousContentSlug: 'Setting-up-Android-Devices-ZyKX3Idjs',
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
              pre {
                white-space: pre-wrap;
              }
            `}
          </style>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={9}>
                <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                <div><p>You will see questions about Microsoft Intune, configuration profiles, and compliance policies. You won't see any questions about how to set up a device in Intune but I thought it was important for you to see so I've created a lesson. If you already set up Intune to work with iOS devices or are only concerned about passing the MS-500 feel free to skip this lesson.</p>
                  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8622067882965868" crossorigin="anonymous" />
                  <ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-8622067882965868" data-ad-slot="7727101456" />
                  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                  <h2>Configure Apple enrollment</h2>
                  <p>Before you can add iOS devices to Microsoft Intune you'll need to connect your Intune tenant to Apple. Setting up the Apple connector is a little more complicated than the Google side of things. But Apple doesn't have as many enrollment profiles so that's nice.</p>
                  <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices</strong> &gt; <strong>Enroll devices</strong> &gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesEnrollmentMenu/appleEnrollment" target="_blank" rel="noreferrer"><strong>Apple enrollment</strong></a><strong> </strong>&gt; <strong>Apple MDM Push certificate</strong>. Click <strong>I agree</strong> &gt; <strong>Download your CSR</strong>. Save the file to a location on your computer. Click <strong>Create your MDM push Certificate</strong>.</p>
                  <div ><img src="https://i.ibb.co/X7Ffb2B/Setup-Apple-Enrollment-in-Intune.png" alt="Setup Apple enrollment in Intune" style="height: auto;width: auto" /></div>
                  <p>2. Create an Apple ID and then sign in. Click Create a certificate. Click I have read and agree. Click Accept.</p>
                  <div ><img src="https://i.ibb.co/jMDfY10/Create-Apple-Push-certificate.png" alt="Create Apple push certificate" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Choose File</strong> and select the file you downloaded in step 1 (after clicking Download your CSR). Click <strong>Upload</strong>.</p>
                  <div ><img src="https://i.ibb.co/HgHqfqy/Upload-your-CSR.png" alt="Upload your CSR" style="height: auto;width: auto" /></div>
                  <p>4. Click Download and save the certificate to a location on your computer. Go back to the Microsoft Endpoint Manager admin center page that we opened in step 1.</p>
                  <p>5. Enter your <strong>Apple ID</strong> in <strong>step 4</strong>. Click the <strong>browse button</strong> under <strong>step 5 </strong>and select the PEM file you downloaded in step 4 above. Click <strong>Upload</strong>.</p>
                  <div ><img src="https://i.ibb.co/hBJXV0P/upload-certificate-to-Intune.png" alt="Upload certificate to Intune" style="height: auto;width: auto" /></div>
                  <p>Once you're complete you'll see a notification saying "Uploading your MDM push certificate" and you'll notice the Enrollment methods and options are unlocked.</p>
                  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8622067882965868" crossorigin="anonymous" />
                  <ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-8622067882965868" data-ad-slot="7727101456" />
                  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                  <h2>Enrolling iOS devices</h2>
                  <p>Similar to Andriod devices, iOS devices can be enrolled in multiple ways (although not nearly as many options as Android has). The device can be personally owned or corporate-owned. Unlike Android, you can also have users select whether the device is corporate-owned or personally owned when setting up their device. In this guide, we'll only be covering personally owned devices.</p>
                  <p>1. Open the <strong>App Store</strong> and search for <strong>Intune Company Portal</strong>. Once installed <strong>open the app</strong>.</p>
                  <div ><img src="https://i.ibb.co/PZmq1Vc/install-Intune-app-on-i-OS.png" alt="Install Intune on iOS" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>Sign in</strong>. Sign in using your Microsoft 365 credentials.</p>
                  <div ><img src="https://i.ibb.co/XZJFp5F/sign-in-to-i-OS-intune.png" alt="Sign in to Intune on iOS" style="height: auto;width: auto" /></div>
                  <p>3. On the Get notified page click <strong>OK</strong>. On the "Comp Portal" would like to send you notifications click <strong>Allow</strong>.</p>
                  <div ><img src="https://i.ibb.co/ydtgWDF/Allow-notifications-in-Intune-i-OS.png" alt="Allow notifications in Intune iOS" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Devices</strong>. Click the device you are currently using. Click <strong>Begin setup</strong> &gt; <strong>Begin</strong></p>
                  <div ><img src="https://i.ibb.co/HXSn57B/Begin-registering-device-in-Intune.png" alt="Begin registering device in Intune" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Continue </strong>&gt; <span ><strong>Continue</strong></span>. On the "This website is trying to download a configuration profile" prompt click <strong>Allow</strong>. On the "Profile Downloaded" prompt click <strong>Close</strong>.</p>
                  <div ><img src="https://i.ibb.co/Wc1y8Tf/downlaod-the-profile-on-i-OS.png" alt="Download the profile on iOS" style="height: auto;width: auto" /></div>
                  <p>6. Click <strong>Continue </strong>&gt; <strong>Continue</strong>. On the How to install management profile page click the <strong>home button</strong>.</p>
                  <div ><img src="https://i.ibb.co/TR07fNy/Begin-installing-management-profile.png" alt="Begin installing management profile" style="height: auto;width: auto" /></div>
                  <p>7. Open <strong>Settings </strong>&gt; <strong>Profile Downloaded</strong> &gt; <strong>Install </strong>&gt; <strong>Install </strong>&gt; <strong>Install</strong> &gt; <strong>Trust </strong>&gt; <strong>Done</strong>. Click the <strong>Home</strong> button.</p>
                  <div ><img src="https://i.ibb.co/wRJJGbd/Install-management-profile-on-i-OS.png" alt="Install management profile on iOS" style="height: auto;width: auto" /></div>
                  <p>8. Open the <strong>Comp Portal</strong> app. Click <strong>Done</strong>.</p>
                  <div ><img src="https://i.ibb.co/dP7cFQK/Finish-setting-up-Intune-on-i-OS.png" alt="Finish setting up Intune on iOS" style="height: auto;width: auto" /></div>
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
