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
      article: {images: ['https://i.ibb.co/X7Ffb2B/Setup-Apple-Enrollment-in-Intune.png', 'https://i.ibb.co/jMDfY10/Create-Apple-Push-certificate.png', 'https://i.ibb.co/HgHqfqy/Upload-your-CSR.png', 'https://i.ibb.co/2Pm8v9r/Upload-your-CSR.png', 'https://i.ibb.co/hBJXV0P/upload-certificate-to-Intune.png', 'https://i.ibb.co/PZmq1Vc/install-Intune-app-on-i-OS.png', 'https://i.ibb.co/XZJFp5F/sign-in-to-i-OS-intune.png', 'https://i.ibb.co/ydtgWDF/Allow-notifications-in-Intune-i-OS.png', 'https://i.ibb.co/HXSn57B/Begin-registering-device-in-Intune.png', 'https://i.ibb.co/Wc1y8Tf/downlaod-the-profile-on-i-OS.png', 'https://i.ibb.co/TR07fNy/Begin-installing-management-profile.png', 'https://i.ibb.co/wRJJGbd/Install-management-profile-on-i-OS.png', 'https://i.ibb.co/dP7cFQK/Finish-setting-up-Intune-on-i-OS.png'], type: 'article', datePublished: '2022/6/17', article: {blocks: [{inlineStyleRanges: [], text: 'You will see questions about Microsoft Intune, configuration profiles, and compliance policies. You won\'t see any questions about how to set up a device in Intune but I thought it was important for you to see so I\'ve created a lesson. If you already set up Intune to work with iOS devices or are only concerned about passing the MS-500 feel free to skip this lesson.', type: 'unstyled', depth: 0, data: {}, entityRanges: [], key: '34hkq'}, {key: '7ev1k', depth: 0, data: {}, inlineStyleRanges: [], text: 'Configure Apple enrollment', entityRanges: [], type: 'header-two'}, {key: '5nngo', data: {}, type: 'unstyled', depth: 0, entityRanges: [], inlineStyleRanges: [], text: 'Before you can add iOS devices to Microsoft Intune you\'ll need to connect your Intune tenant to Apple. Setting up the Apple connector is a little more complicated than the Google side of things. But Apple doesn\'t have as many enrollment profiles so that\'s nice.'}, {inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 39}, {offset: 51, length: 7, style: 'BOLD'}, {length: 14, style: 'BOLD', offset: 61}, {length: 17, style: 'BOLD', offset: 78}, {length: 26, offset: 97, style: 'BOLD'}, {style: 'BOLD', length: 7, offset: 131}, {length: 17, style: 'BOLD', offset: 141}, {length: 32, offset: 212, style: 'BOLD'}], text: '1. Go to Microsoft Endpoint Manager admin center > Devices > Enroll devices > Apple enrollment > Apple MDM Push certificate. Click I agree > Download your CSR. Save the file to a location on your computer. Click Create your MDM push Certificate.', data: {}, key: '2jq03', entityRanges: [{offset: 78, key: 0, length: 16}], type: 'unstyled', depth: 0}, {data: {}, inlineStyleRanges: [], text: ' ', key: 'aohis', depth: 0, type: 'atomic', entityRanges: [{offset: 0, length: 1, key: 1}]}, {inlineStyleRanges: [], key: 'evsbo', type: 'unstyled', entityRanges: [], depth: 0, text: '2. Create an Apple ID and then sign in. Click Create a certificate. Click I have read and agree. Click Accept.', data: {}}, {key: '3vj7e', data: {}, type: 'atomic', entityRanges: [{key: 2, offset: 0, length: 1}], depth: 0, inlineStyleRanges: [], text: ' '}, {type: 'unstyled', depth: 0, key: 'bob0p', entityRanges: [], inlineStyleRanges: [{style: 'BOLD', length: 11, offset: 9}, {length: 6, offset: 108, style: 'BOLD'}], data: {}, text: '3. Click Choose File and select the file you downloaded in step 1 (after clicking Download your CSR). Click Upload.'}, {inlineStyleRanges: [], entityRanges: [{offset: 0, length: 1, key: 3}], key: 'a064v', data: {}, type: 'atomic', text: ' ', depth: 0}, {data: {}, text: '4. Click Download and save the certificate to a location on your computer. Go back to the Microsoft Endpoint Manager admin center page that we opened in step 1.', inlineStyleRanges: [], key: 'foi7o', depth: 0, type: 'unstyled', entityRanges: []}, {inlineStyleRanges: [{style: 'BOLD', offset: 14, length: 8}, {style: 'BOLD', offset: 26, length: 6}, {length: 13, offset: 44, style: 'BOLD'}, {offset: 64, length: 7, style: 'BOLD'}, {length: 6, offset: 133, style: 'BOLD'}], depth: 0, type: 'unstyled', entityRanges: [], key: '9q7sk', text: '5. Enter your Apple ID in step 4. Click the browse button under step 5 and select the PEM file you downloaded in step 4 above. Click Upload.', data: {}}, {entityRanges: [{length: 1, offset: 0, key: 4}], inlineStyleRanges: [], text: ' ', depth: 0, key: '90bt2', type: 'atomic', data: {}}, {depth: 0, key: '1q2l9', data: {}, inlineStyleRanges: [], entityRanges: [], type: 'unstyled', text: 'Once you\'re complete you\'ll see a notification saying "Uploading your MDM push certificate" and you\'ll notice the Enrollment methods and options are unlocked.'}, {type: 'header-two', depth: 0, entityRanges: [], key: '84v4d', data: {}, text: 'Enrolling iOS devices', inlineStyleRanges: []}, {data: {}, key: '1ai92', inlineStyleRanges: [], text: 'Similar to Andriod devices, iOS devices can be enrolled in multiple ways (although not nearly as many options as Android has). The device can be personally owned or corporate-owned. Unlike Android, you can also have users select whether the device is corporate-owned or personally owned when setting up their device. In this guide, we\'ll only be covering personally owned devices.', entityRanges: [], type: 'unstyled', depth: 0}, {inlineStyleRanges: [{style: 'BOLD', offset: 12, length: 9}, {style: 'BOLD', length: 21, offset: 37}, {length: 12, offset: 75, style: 'BOLD'}], entityRanges: [], key: '4okuo', data: {}, type: 'unstyled', text: '1. Open the App Store and search for Intune Company Portal. Once installed open the app.', depth: 0}, {depth: 0, entityRanges: [{length: 1, offset: 0, key: 5}], inlineStyleRanges: [], key: 'apknr', type: 'atomic', data: {}, text: ' '}, {depth: 0, text: '2. Click Sign in. Sign in using your Microsoft 365 credentials.', inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 7}], data: {}, type: 'unstyled', entityRanges: [], key: 'bqmc6'}, {key: 'fcnsb', inlineStyleRanges: [], data: {}, depth: 0, type: 'atomic', text: ' ', entityRanges: [{offset: 0, key: 6, length: 1}]}, {data: {}, entityRanges: [], inlineStyleRanges: [{length: 2, style: 'BOLD', offset: 34}, {offset: 102, length: 5, style: 'BOLD'}], key: 'dftg8', depth: 0, text: '3. On the Get notified page click OK. On the "Comp Portal" would like to send you notifications click Allow.', type: 'unstyled'}, {key: '21dco', depth: 0, entityRanges: [{offset: 0, key: 7, length: 1}], data: {}, type: 'atomic', text: ' ', inlineStyleRanges: []}, {depth: 0, type: 'unstyled', entityRanges: [], inlineStyleRanges: [{offset: 9, length: 7, style: 'BOLD'}, {style: 'BOLD', offset: 66, length: 11}, {length: 5, style: 'BOLD', offset: 80}], text: '4. Click Devices. Click the device you are currently using. Click Begin setup > Begin', key: '1eoht', data: {}}, {data: {}, inlineStyleRanges: [], type: 'atomic', entityRanges: [{length: 1, offset: 0, key: 8}], key: '5frlb', text: ' ', depth: 0}, {depth: 0, key: 'bc3js', entityRanges: [], type: 'unstyled', inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 9}, {style: 'BOLD', offset: 20, length: 8}, {length: 5, offset: 111, style: 'BOLD'}, {offset: 159, length: 5, style: 'BOLD'}, {style: 'color-rgb(33,37,41)', length: 8, offset: 20}, {length: 8, offset: 20, style: 'bgcolor-rgb(255,255,255)'}, {style: 'fontsize-16', length: 8, offset: 20}, {length: 8, offset: 20, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], text: '5. Click Continue > Continue. On the "This website is trying to download a configuration profile" prompt click Allow. On the "Profile Downloaded" prompt click Close.', data: {}}, {text: ' ', key: '5v07k', inlineStyleRanges: [], data: {}, depth: 0, entityRanges: [{offset: 0, length: 1, key: 9}], type: 'atomic'}, {text: '6. Click Continue > Continue. On the How to install management profile page click the home button.', depth: 0, entityRanges: [], type: 'unstyled', inlineStyleRanges: [{length: 9, offset: 9, style: 'BOLD'}, {style: 'BOLD', length: 8, offset: 20}, {style: 'BOLD', length: 11, offset: 86}], key: 'c409e', data: {}}, {entityRanges: [{key: 10, length: 1, offset: 0}], data: {}, inlineStyleRanges: [], depth: 0, key: 'b95lq', text: ' ', type: 'atomic'}, {entityRanges: [], key: '22vnh', type: 'unstyled', depth: 0, text: '7. Open Settings > Profile Downloaded > Install > Install > Install > Trust > Done. Click the Home button.', data: {}, inlineStyleRanges: [{length: 9, offset: 8, style: 'BOLD'}, {length: 18, style: 'BOLD', offset: 19}, {offset: 40, style: 'BOLD', length: 8}, {style: 'BOLD', length: 8, offset: 50}, {style: 'BOLD', length: 7, offset: 60}, {length: 6, offset: 70, style: 'BOLD'}, {offset: 78, length: 4, style: 'BOLD'}, {style: 'BOLD', length: 4, offset: 94}]}, {data: {}, key: '9v42s', depth: 0, text: ' ', entityRanges: [{key: 11, length: 1, offset: 0}], inlineStyleRanges: [], type: 'atomic'}, {depth: 0, inlineStyleRanges: [{offset: 12, style: 'BOLD', length: 11}, {offset: 35, style: 'BOLD', length: 4}], text: '8. Open the Comp Portal app. Click Done.', data: {}, type: 'unstyled', key: 'ef0ie', entityRanges: []}, {entityRanges: [{key: 12, length: 1, offset: 0}], text: ' ', type: 'atomic', key: '1vp0i', depth: 0, data: {}, inlineStyleRanges: []}, {depth: 0, inlineStyleRanges: [], entityRanges: [], data: {}, text: '', type: 'unstyled', key: '2fjst'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesEnrollmentMenu/appleEnrollment'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {alt: 'Setup Apple enrollment in Intune', width: 'auto', height: 'auto', src: 'https://i.ibb.co/X7Ffb2B/Setup-Apple-Enrollment-in-Intune.png', alignment: 'none'}, type: 'IMAGE', mutability: 'MUTABLE'}, 2: {type: 'IMAGE', data: {height: 'auto', src: 'https://i.ibb.co/jMDfY10/Create-Apple-Push-certificate.png', alignment: 'none', alt: 'Create Apple push certificate', width: 'auto'}, mutability: 'MUTABLE'}, 3: {type: 'IMAGE', mutability: 'MUTABLE', data: {height: 'auto', width: 'auto', src: 'https://i.ibb.co/HgHqfqy/Upload-your-CSR.png', alignment: 'none', alt: 'Upload your CSR'}}, 4: {type: 'IMAGE', data: {alignment: 'none', height: 'auto', width: 'auto', src: 'https://i.ibb.co/hBJXV0P/upload-certificate-to-Intune.png', alt: 'Upload certificate to Intune'}, mutability: 'MUTABLE'}, 5: {mutability: 'MUTABLE', type: 'IMAGE', data: {alignment: 'none', width: 'auto', height: 'auto', src: 'https://i.ibb.co/PZmq1Vc/install-Intune-app-on-i-OS.png', alt: 'Install Intune on iOS'}}, 6: {mutability: 'MUTABLE', data: {alignment: 'none', alt: 'Sign in to Intune on iOS', height: 'auto', src: 'https://i.ibb.co/XZJFp5F/sign-in-to-i-OS-intune.png', width: 'auto'}, type: 'IMAGE'}, 7: {type: 'IMAGE', mutability: 'MUTABLE', data: {alt: 'Allow notifications in Intune iOS', alignment: 'none', width: 'auto', height: 'auto', src: 'https://i.ibb.co/ydtgWDF/Allow-notifications-in-Intune-i-OS.png'}}, 8: {data: {src: 'https://i.ibb.co/HXSn57B/Begin-registering-device-in-Intune.png', alignment: 'none', width: 'auto', alt: 'Begin registering device in Intune', height: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 9: {data: {height: 'auto', alignment: 'none', width: 'auto', alt: 'Download the profile on iOS', src: 'https://i.ibb.co/Wc1y8Tf/downlaod-the-profile-on-i-OS.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {type: 'IMAGE', mutability: 'MUTABLE', data: {height: 'auto', src: 'https://i.ibb.co/TR07fNy/Begin-installing-management-profile.png', alignment: 'none', width: 'auto', alt: 'Begin installing management profile'}}, 11: {mutability: 'MUTABLE', type: 'IMAGE', data: {alt: 'Install management profile on iOS', alignment: 'none', src: 'https://i.ibb.co/wRJJGbd/Install-management-profile-on-i-OS.png', height: 'auto', width: 'auto'}}, 12: {type: 'IMAGE', mutability: 'MUTABLE', data: {alt: 'Finish setting up Intune on iOS', src: 'https://i.ibb.co/dP7cFQK/Finish-setting-up-Intune-on-i-OS.png', alignment: 'none', height: 'auto', width: 'auto'}}}}, featuredImage: 'https://i.ibb.co/X7Ffb2B/Setup-Apple-Enrollment-in-Intune.png', id: 'MAjW0a2_p', publish: true, slug: 'Setting-up-Apple--iOS-devices-in-Intune-MAjW0a2_p', description: 'How to set up Apple iOS Devices in Intune.', sectionId: 'l0DxUuonW', title: 'Setting up Apple / iOS devices in Intune'},
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
            `}
          </style>
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={9}>
                <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                <div><p>You will see questions about Microsoft Intune, configuration profiles, and compliance policies. You won't see any questions about how to set up a device in Intune but I thought it was important for you to see so I've created a lesson. If you already set up Intune to work with iOS devices or are only concerned about passing the MS-500 feel free to skip this lesson.</p>
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
