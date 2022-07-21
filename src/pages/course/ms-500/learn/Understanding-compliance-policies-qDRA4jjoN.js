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
      path: '/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN',
      article: {"datePublished":"2022/6/21","images":["https://i.ibb.co/N3Qk57v/Create-a-compliance-policy.png","https://i.ibb.co/dJwctST/Windows-10-Compliance-Policy-Settings.png","https://i.ibb.co/hggb1G1/Mark-device-noncompliant.png","https://i.ibb.co/3vgnWJR/actions-for-noncompliance.png","https://i.ibb.co/9cmqh7d/Compliance-Policy-Chart.png","https://i.ibb.co/58CHC5j/Mark-devices-with-no-compliance-policy-assigned.png","https://i.ibb.co/Ln5Y4sS/Add-all-users-to-conditional-access-policy.png","https://i.ibb.co/7jJpRvY/exclude-break-glass-account-from-conditional-access-policy.png","https://i.ibb.co/jzcgHBf/Set-cloud-apps.png","https://i.ibb.co/JBZX8g5/require-device-to-be-marked-as-compliant.png","https://i.ibb.co/3CL8NQx/quarantine-mobile-devices.png","https://i.ibb.co/dB7PCN5/Your-device-is-temporarily-blocked-from-accessing-content-via-Exchange-Active-Sync-because-the-devic.png","https://i.ibb.co/89KnxVW/Allow-device-through-quarantine.png"],"id":"qDRA4jjoN","type":"article","slug":"Understanding-compliance-policies-qDRA4jjoN","article":{"entityMap":{"0":{"data":{"height":"auto","src":"https://i.ibb.co/N3Qk57v/Create-a-compliance-policy.png","alt":"Create a compliance policy","url":"https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesWindowsMenu/compliancePolicies","targetOption":"_blank","alignment":"left","width":"auto"},"mutability":"MUTABLE","type":"LINK"},"1":{"data":{"alignment":"none","height":"auto","src":"https://i.ibb.co/N3Qk57v/Create-a-compliance-policy.png","alt":"Create a compliance policy","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"2":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","height":"auto","alt":"Windows 10 Compliance Policy Setting Encryption","width":"auto","src":"https://i.ibb.co/dJwctST/Windows-10-Compliance-Policy-Settings.png"}},"3":{"mutability":"MUTABLE","data":{"alt":"Mark device noncompliant","src":"https://i.ibb.co/hggb1G1/Mark-device-noncompliant.png","width":"auto","alignment":"none","height":"auto"},"type":"IMAGE"},"4":{"type":"LINK","data":{"url":"https://www.gitbit.org/course/ms-500/learn/How-to-manage-devices-using-Intune-_LL9VqGZO","targetOption":"_blank"},"mutability":"MUTABLE"},"5":{"type":"IMAGE","mutability":"MUTABLE","data":{"src":"https://i.ibb.co/9cmqh7d/Compliance-Policy-Chart.png","alt":"Compliance Policy Chart","width":"auto","alignment":"none","height":"auto"}},"6":{"type":"IMAGE","data":{"height":"auto","src":"https://i.ibb.co/3vgnWJR/actions-for-noncompliance.png","width":"auto","alt":"Actions for noncompliance","alignment":"none"},"mutability":"MUTABLE"},"7":{"data":{"url":"https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesComplianceMenu/policySettings","targetOption":"_blank"},"mutability":"MUTABLE","type":"LINK"},"8":{"mutability":"MUTABLE","data":{"src":"https://i.ibb.co/58CHC5j/Mark-devices-with-no-compliance-policy-assigned.png","alignment":"none","height":"auto","alt":"Mark devices with no compliance policy assigned","width":"auto"},"type":"IMAGE"},"9":{"type":"LINK","data":{"targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies"},"mutability":"MUTABLE"},"10":{"type":"IMAGE","mutability":"MUTABLE","data":{"width":"auto","alt":"Add all user to conditional access policy","alignment":"none","src":"https://i.ibb.co/Ln5Y4sS/Add-all-users-to-conditional-access-policy.png","height":"auto"}},"11":{"mutability":"MUTABLE","data":{"height":"auto","width":"auto","alt":"Exclude break glass account from conditional access policy","src":"https://i.ibb.co/7jJpRvY/exclude-break-glass-account-from-conditional-access-policy.png","alignment":"none"},"type":"IMAGE"},"12":{"data":{"alt":"Set cloud apps","alignment":"none","width":"auto","height":"auto","src":"https://i.ibb.co/jzcgHBf/Set-cloud-apps.png"},"type":"IMAGE","mutability":"MUTABLE"},"13":{"data":{"alignment":"none","width":"auto","height":"auto","src":"https://i.ibb.co/JBZX8g5/require-device-to-be-marked-as-compliant.png","alt":"Require device to be marked as compliant"},"mutability":"MUTABLE","type":"IMAGE"},"14":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://outlook.office365.com/ecp/?form=eac&mkt=en-US","targetOption":"_blank"}},"15":{"data":{"width":"auto","alignment":"none","alt":"Configure Microsoft 365 to quarantine mobile devices","height":"auto","src":"https://i.ibb.co/3CL8NQx/quarantine-mobile-devices.png"},"type":"IMAGE","mutability":"MUTABLE"},"16":{"type":"IMAGE","data":{"alignment":"none","alt":"Your device is temporarily blocked from accessing content via Exchange ActiveSync because the device has been quarantined","width":"auto","src":"https://i.ibb.co/dB7PCN5/Your-device-is-temporarily-blocked-from-accessing-content-via-Exchange-Active-Sync-because-the-devic.png","height":"auto"},"mutability":"MUTABLE"},"17":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://outlook.office365.com/ecp/?exsvurl=1&p=ActiveSyncAccess&form=eac&mkt=en-US"}},"18":{"mutability":"MUTABLE","data":{"alt":"Allow device through quarantine","height":"auto","src":"https://i.ibb.co/89KnxVW/Allow-device-through-quarantine.png","alignment":"none","width":"auto"},"type":"IMAGE"}},"blocks":[{"type":"unstyled","text":"Compliance policies are a great way to verify a device is configured and secure as you expect. You don't need a compliance policy for every setting in a configuration profile but you will want one to verify certain settings like passwords and encryption or verify the machine risk level. Let's jump in and take a look.","data":{},"depth":0,"key":"7aujo","inlineStyleRanges":[],"entityRanges":[]},{"entityRanges":[],"inlineStyleRanges":[],"text":"Creating a Windows compliance policy","depth":0,"data":{},"key":"93h7g","type":"header-two"},{"entityRanges":[{"length":19,"offset":71,"key":0}],"type":"unstyled","depth":0,"key":"5968d","text":"1. Go to Microsoft Endpoint Manager admin center > Devices > Windows > Compliance policies. Click Create Policy. Set Platform to Windows 10 and later. Click Create.","inlineStyleRanges":[{"style":"BOLD","length":39,"offset":9},{"style":"BOLD","length":8,"offset":51},{"offset":61,"style":"BOLD","length":8},{"offset":71,"style":"BOLD","length":19},{"offset":98,"length":13,"style":"BOLD"},{"offset":117,"style":"BOLD","length":9},{"style":"BOLD","length":20,"offset":129},{"length":6,"offset":157,"style":"BOLD"}],"data":{}},{"type":"atomic","key":"9h449","inlineStyleRanges":[],"text":" ","depth":0,"data":{},"entityRanges":[{"key":1,"offset":0,"length":1}]},{"depth":0,"type":"unstyled","text":"2. Set the name to Windows 10 Compliance Policy. Click Next.","key":"9khhe","inlineStyleRanges":[{"length":28,"offset":19,"style":"BOLD"},{"style":"BOLD","length":4,"offset":55}],"entityRanges":[],"data":{}},{"text":"3. Set Device Health > Require Bitlocker to Require. Click Next.","depth":0,"key":"8oc16","type":"unstyled","entityRanges":[],"inlineStyleRanges":[{"length":13,"offset":7,"style":"BOLD"},{"style":"BOLD","offset":23,"length":17},{"offset":44,"length":7,"style":"BOLD"},{"offset":59,"length":4,"style":"BOLD"}],"data":{}},{"data":{},"depth":0,"inlineStyleRanges":[],"key":"9ause","text":" ","type":"atomic","entityRanges":[{"offset":0,"key":2,"length":1}]},{"data":{},"inlineStyleRanges":[{"offset":11,"style":"BOLD","length":35},{"offset":50,"style":"BOLD","length":1},{"offset":59,"length":4,"style":"BOLD"}],"text":"4. Set the Schedule (days after noncompliance) to 5. Click Next.","entityRanges":[],"type":"unstyled","key":"dl1d9","depth":0},{"depth":0,"entityRanges":[{"key":3,"length":1,"offset":0}],"type":"atomic","inlineStyleRanges":[],"key":"9h8k5","data":{},"text":" "},{"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":20,"offset":11},{"style":"BOLD","length":18,"offset":37},{"length":4,"style":"BOLD","offset":63},{"style":"BOLD","offset":75,"length":6}],"text":"5. Set the included assignments to a group or All users. Click Next. Click Create.","data":{},"entityRanges":[],"depth":0,"key":"u0ev"},{"key":"9dq1i","text":"Understanding assignments","data":{},"type":"header-two","depth":0,"entityRanges":[],"inlineStyleRanges":[]},{"key":"c95gi","data":{},"text":"The compliance policy assignments work the same way they do for configuration profiles. You can review the assignments in that lesson under the section \"Understanding assignments in Intune\". Remember, exclusions take precedence over inclusions. Don't mix device and user groups on the same policy. Lastly, a compliance policy created for Windows 10 won't affect Google or Apple devices. It will only affect Windows 10.","entityRanges":[{"key":4,"offset":96,"length":22}],"depth":0,"type":"unstyled","inlineStyleRanges":[]},{"text":"Let's take a quick example to make sure you're familiar with assignments.","key":"1doa8","data":{},"depth":0,"type":"unstyled","inlineStyleRanges":[],"entityRanges":[]},{"type":"unstyled","data":{},"text":"You have one Windows 10 Device named Device1. It is a member of 2 groups GroupA and GroupB. You have the 4 compliance policies in the chart below:","inlineStyleRanges":[],"entityRanges":[],"depth":0,"key":"epada"},{"type":"atomic","entityRanges":[{"key":5,"length":1,"offset":0}],"inlineStyleRanges":[],"text":" ","data":{},"depth":0,"key":"86lji"},{"entityRanges":[],"inlineStyleRanges":[],"key":"b887q","data":{},"depth":0,"text":"Which policies will apply to Device1? Policy1 and Policy2. Policy1 because it has a platform of Windows 10 and includes all devices. Policy2 because it has a platform of Windows 10 and includes GroupA. Not Policy3 because it has an exclusion of GroupB. So even though it applies to Windows 10 and GroupA the exclusion takes precedence. Not Policy4 because it applies to Android devices.","type":"unstyled"},{"data":{},"inlineStyleRanges":[],"type":"header-two","text":"Understanding actions for noncompliance","key":"6b41v","depth":0,"entityRanges":[]},{"key":"2b6pl","text":" ","depth":0,"type":"atomic","entityRanges":[{"key":6,"offset":0,"length":1}],"inlineStyleRanges":[],"data":{}},{"entityRanges":[],"type":"unstyled","text":"Compliance policies have a section that configuration profiles don't, that's the actions for noncompliance. In short, this section says \"what happens when a device is not compliant?\"","depth":0,"inlineStyleRanges":[{"offset":81,"length":25,"style":"BOLD"}],"key":"84unf","data":{}},{"depth":0,"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"key":"3ejog","text":"You can delay how long before a device is flagged as non-compliant as we did in the compliance policy above. That's important because you can create a conditional access policy to block noncompliant devices. Let's take an example.","data":{}},{"entityRanges":[],"depth":0,"inlineStyleRanges":[],"text":"Let's say you create a compliance policy called Policy1 and set the Mark device noncompliant 10 days after noncompliance The policy requires an Android device to be encrypted. Then a user enrolls a device on June 1st, 2022 but the device isn't encrypted. Will the device be compliant on June 5th? What about June 11th? The device will be marked compliant on June 5th because the compliance policy will flag the device as noncompliant for 10 days. On June 11th the device will be marked as noncompliant.","type":"unstyled","key":"gm78","data":{}},{"type":"header-two","data":{},"depth":0,"inlineStyleRanges":[],"text":"Mark devices with no compliance policy as","entityRanges":[],"key":"6l7dt"},{"key":"6feum","text":"So, what happens to a device with no compliance policy? Is it flagged as compliant or noncompliant? The question depends on how you configure your tenant. It can be either-or. Let's jump in and take a look.","entityRanges":[],"depth":0,"data":{},"type":"unstyled","inlineStyleRanges":[]},{"data":{},"inlineStyleRanges":[],"entityRanges":[{"key":7,"length":26,"offset":83}],"key":"6cnpo","text":"1. Go to Microsoft Endpoint Manager admin center > Devices > Compliance policies > Compliance policy settings.","depth":0,"type":"unstyled"},{"text":"2. Set Mark devices with no compliance policy assigned as Not compliant. Click Save.","depth":0,"data":{},"type":"unstyled","entityRanges":[],"key":"27cqr","inlineStyleRanges":[{"style":"BOLD","offset":58,"length":13},{"length":4,"offset":79,"style":"BOLD"}]},{"depth":0,"text":" ","key":"752u2","inlineStyleRanges":[],"entityRanges":[{"length":1,"key":8,"offset":0}],"data":{},"type":"atomic"},{"depth":0,"entityRanges":[],"text":"How to block noncompliant devices","key":"cbkfh","data":{},"inlineStyleRanges":[],"type":"header-two"},{"key":"a2a09","type":"unstyled","entityRanges":[],"text":"By now in the lessons, you should have the devices enrolled in Intune. And a compliance policy setting the devices as compliant or noncompliant. So how do we block noncompliant devices? By using a conditional access policy!","depth":0,"inlineStyleRanges":[],"data":{}},{"entityRanges":[{"offset":61,"key":9,"length":27}],"type":"unstyled","key":"47lm6","depth":0,"inlineStyleRanges":[{"offset":8,"style":"BOLD","length":35},{"length":12,"offset":46,"style":"BOLD"},{"style":"BOLD","offset":61,"length":27},{"length":11,"offset":96,"style":"BOLD"},{"offset":109,"length":17,"style":"BOLD"}],"data":{},"text":"1. Open Azure Active Directory admin center > All services > Azure AD Conditional Access. Click New Policy > Create new policy."},{"inlineStyleRanges":[{"length":5,"style":"BOLD","offset":11},{"length":26,"offset":19,"style":"BOLD"},{"offset":53,"style":"BOLD","length":39},{"style":"BOLD","offset":95,"length":9}],"key":"701al","data":{},"depth":0,"type":"unstyled","entityRanges":[],"text":"2. Set the name to Block noncompliant devices. Click 0 users or workload identities selected > All Users."},{"type":"atomic","key":"24b8l","inlineStyleRanges":[],"depth":0,"data":{},"text":" ","entityRanges":[{"key":10,"offset":0,"length":1}]},{"depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[],"key":"33rvh","text":"","type":"unstyled"},{"data":{},"entityRanges":[],"inlineStyleRanges":[{"offset":9,"style":"BOLD","length":8},{"offset":19,"style":"BOLD","length":16},{"style":"BOLD","length":6,"offset":97}],"text":"3. Click Exclude > Users and groups > search for your break-glass account and click on it. Click Select.","depth":0,"key":"32k7v","type":"unstyled"},{"entityRanges":[{"key":11,"offset":0,"length":1}],"data":{},"text":" ","depth":0,"key":"cdlna","inlineStyleRanges":[],"type":"atomic"},{"entityRanges":[],"depth":0,"type":"unstyled","text":"4. Click No cloud apps, actions, or authentication contents selected > Select apps > Office 365 > Select.","key":"6bt9f","data":{},"inlineStyleRanges":[{"style":"BOLD","length":59,"offset":9},{"style":"BOLD","offset":71,"length":11},{"style":"BOLD","offset":85,"length":10},{"offset":98,"style":"BOLD","length":6}]},{"text":" ","key":"7kotf","inlineStyleRanges":[],"data":{},"entityRanges":[{"key":12,"length":1,"offset":0}],"type":"atomic","depth":0},{"depth":0,"key":"cus96","type":"unstyled","inlineStyleRanges":[{"length":19,"style":"BOLD","offset":9},{"offset":57,"length":40,"style":"BOLD"},{"length":6,"style":"BOLD","offset":105},{"style":"BOLD","offset":119,"length":13},{"length":2,"style":"BOLD","offset":139},{"style":"BOLD","length":6,"offset":149}],"entityRanges":[],"text":"5. Click 0 controls selected located under Grant > Check Require device to be marked as compliant. Click Select. Under Enable policy click On. Click Create.","data":{}},{"depth":0,"type":"atomic","data":{},"text":" ","key":"fpni1","entityRanges":[{"offset":0,"key":13,"length":1}],"inlineStyleRanges":[]},{"inlineStyleRanges":[],"depth":0,"text":"Quarantine devices that don't have Intune","data":{},"key":"bgbco","type":"header-two","entityRanges":[]},{"depth":0,"key":"1junm","inlineStyleRanges":[],"type":"unstyled","text":"Now that we have devices in Intune and conditional access policies verifying the devices are compliant what about our non-managed devices? In short, what about our break glass accounts? For those, we will want to quarantine any phones that attempt to connect to Exchange Online. Let's jump in and configure quarantining for any device that isn't covered by our conditional access policy.","data":{},"entityRanges":[]},{"key":"cpngi","data":{},"text":"1. Go to Exchange admin center > Classic Exchange admin center > Mobile > Edit.","depth":0,"inlineStyleRanges":[{"style":"BOLD","length":21,"offset":9},{"offset":33,"length":29,"style":"BOLD"},{"style":"BOLD","length":7,"offset":65},{"style":"BOLD","length":4,"offset":74}],"entityRanges":[{"key":14,"length":29,"offset":33}],"type":"unstyled"},{"entityRanges":[],"data":{},"text":"2. Set Connection Settings to Quarantine then click Save.","key":"6ihqn","inlineStyleRanges":[{"length":19,"style":"BOLD","offset":7},{"length":11,"style":"BOLD","offset":30},{"offset":52,"style":"BOLD","length":4}],"type":"unstyled","depth":0},{"depth":0,"entityRanges":[{"key":15,"offset":0,"length":1}],"key":"2i8qm","inlineStyleRanges":[],"type":"atomic","text":" ","data":{}},{"inlineStyleRanges":[],"key":"4bchd","entityRanges":[],"type":"header-two","depth":0,"data":{},"text":"How to allow a quarantined device"},{"type":"unstyled","data":{},"inlineStyleRanges":[],"key":"3k9u3","depth":0,"text":"Now when someone that's not covered by the conditional access policy attempts to log on to their email using a mobile device their device will be quarantined. In short, they won't receive email until an admin goes in and approves the device. They'll receive a message that says the following:","entityRanges":[]},{"text":"\"Your device is temporarily blocked from accessing content via Exchange ActiveSync because the device has been quarantined. You don't need to take any action. Content will automatically be downloaded as soon as access is granted by your administrator.\"","type":"blockquote","entityRanges":[],"key":"2mf4f","data":{},"inlineStyleRanges":[],"depth":0},{"inlineStyleRanges":[],"text":" ","entityRanges":[{"length":1,"offset":0,"key":16}],"data":{},"type":"atomic","key":"asbk8","depth":0},{"inlineStyleRanges":[],"data":{},"text":"An admin will then need to allow the device to connect. To allow a quarantined device to connect perform the following:","key":"22kij","type":"unstyled","entityRanges":[],"depth":0},{"depth":0,"key":"4j76c","entityRanges":[{"key":17,"length":29,"offset":33}],"data":{},"text":"1. Go to Exchange admin center > Classic Exchange admin center  > mobile.","type":"unstyled","inlineStyleRanges":[{"offset":9,"length":21,"style":"BOLD"},{"length":30,"style":"BOLD","offset":33},{"length":6,"offset":66,"style":"BOLD"}]},{"data":{},"text":"2. Click the quarantined device and click Allow.","depth":0,"key":"cdi7e","inlineStyleRanges":[{"style":"BOLD","length":18,"offset":13},{"length":5,"style":"BOLD","offset":42}],"entityRanges":[],"type":"unstyled"},{"key":"58kl2","entityRanges":[{"length":1,"offset":0,"key":18}],"data":{},"text":" ","depth":0,"inlineStyleRanges":[],"type":"atomic"},{"key":"53s69","depth":0,"entityRanges":[],"inlineStyleRanges":[],"data":{},"type":"unstyled","text":""}]},"sectionId":"l0DxUuonW","publish":true,"description":"Compliance policies are a great way to verify a device is configured and secure as you expect. You don't need a compliance policy for every setting in a configuration profile but you will want one to verify certain settings like passwords and encryption or verify the machine risk level.","title":"Understanding compliance policies","featuredImage":"https://i.ibb.co/N3Qk57v/Create-a-compliance-policy.png"},
      nextContentSlug: 'Restricting-and-managing-apps-on-user-devices-62t_7oiZx',
      previousContentSlug: 'How-to-manage-devices-using-Intune-_LL9VqGZO',
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
                <div><p>Compliance policies are a great way to verify a device is configured and secure as you expect. You don't need a compliance policy for every setting in a configuration profile but you will want one to verify certain settings like passwords and encryption or verify the machine risk level. Let's jump in and take a look.</p>
<h2>Creating a Windows compliance policy</h2>
<p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <strong>Windows </strong>&gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesWindowsMenu/compliancePolicies" target="_blank"><strong>Compliance policies</strong></a>. Click <strong>Create Policy</strong>. Set <strong>Platform </strong>to <strong>Windows 10 and later</strong>. Click <strong>Create</strong>.</p>
<div ><img src="https://i.ibb.co/N3Qk57v/Create-a-compliance-policy.png" alt="Create a compliance policy" style="height: auto;width: auto"/></div>
<p>2. Set the name to <strong>Windows 10 Compliance Policy</strong>. Click <strong>Next</strong>.</p>
<p>3. Set <strong>Device Health</strong> &gt; <strong>Require Bitlocker</strong> to <strong>Require</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/dJwctST/Windows-10-Compliance-Policy-Settings.png" alt="Windows 10 Compliance Policy Setting Encryption" style="height: auto;width: auto"/></div>
<p>4. Set the <strong>Schedule (days after noncompliance)</strong> to <strong>5</strong>. Click <strong>Next</strong>.</p>
<div ><img src="https://i.ibb.co/hggb1G1/Mark-device-noncompliant.png" alt="Mark device noncompliant" style="height: auto;width: auto"/></div>
<p>5. Set the <strong>included assignments</strong> to a <strong>group or All users</strong>. Click <strong>Next</strong>. Click <strong>Create</strong>.</p>
<h2>Understanding assignments</h2>
<p>The compliance policy assignments work the same way they do for configuration profiles. You can <a href="https://www.gitbit.org/course/ms-500/learn/How-to-manage-devices-using-Intune-_LL9VqGZO" target="_blank">review the assignments</a> in that lesson under the section "Understanding assignments in Intune". Remember, exclusions take precedence over inclusions. Don't mix device and user groups on the same policy. Lastly, a compliance policy created for Windows 10 won't affect Google or Apple devices. It will only affect Windows 10.</p>
<p>Let's take a quick example to make sure you're familiar with assignments.</p>
<p>You have one Windows 10 Device named Device1. It is a member of 2 groups GroupA and GroupB. You have the 4 compliance policies in the chart below:</p>
<div ><img src="https://i.ibb.co/9cmqh7d/Compliance-Policy-Chart.png" alt="Compliance Policy Chart" style="height: auto;width: auto"/></div>
<p>Which policies will apply to Device1? Policy1 and Policy2. Policy1 because it has a platform of Windows 10 and includes all devices. Policy2 because it has a platform of Windows 10 and includes GroupA. Not Policy3 because it has an exclusion of GroupB. So even though it applies to Windows 10 and GroupA the exclusion takes precedence. Not Policy4 because it applies to Android devices.</p>
<h2>Understanding actions for noncompliance</h2>
<div ><img src="https://i.ibb.co/3vgnWJR/actions-for-noncompliance.png" alt="Actions for noncompliance" style="height: auto;width: auto"/></div>
<p>Compliance policies have a section that configuration profiles don't, that's the <strong>actions for noncompliance</strong>. In short, this section says "what happens when a device is not compliant?"</p>
<p>You can delay how long before a device is flagged as non-compliant as we did in the compliance policy above. That's important because you can create a conditional access policy to block noncompliant devices. Let's take an example.</p>
<p>Let's say you create a compliance policy called Policy1 and set the Mark device noncompliant 10 days after noncompliance The policy requires an Android device to be encrypted. Then a user enrolls a device on June 1st, 2022 but the device isn't encrypted. Will the device be compliant on June 5th? What about June 11th? The device will be marked compliant on June 5th because the compliance policy will flag the device as noncompliant for 10 days. On June 11th the device will be marked as noncompliant.</p>
<h2>Mark devices with no compliance policy as</h2>
<p>So, what happens to a device with no compliance policy? Is it flagged as compliant or noncompliant? The question depends on how you configure your tenant. It can be either-or. Let's jump in and take a look.</p>
<p>1. Go to Microsoft Endpoint Manager admin center &gt; Devices &gt; Compliance policies &gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesComplianceMenu/policySettings" target="_blank">Compliance policy settings</a>.</p>
<p>2. Set Mark devices with no compliance policy assigned as <strong>Not compliant</strong>. Click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/58CHC5j/Mark-devices-with-no-compliance-policy-assigned.png" alt="Mark devices with no compliance policy assigned" style="height: auto;width: auto"/></div>
<h2>How to block noncompliant devices</h2>
<p>By now in the lessons, you should have the devices enrolled in Intune. And a compliance policy setting the devices as compliant or noncompliant. So how do we block noncompliant devices? By using a conditional access policy!</p>
<p>1. Open <strong>Azure Active Directory admin center</strong> &gt; <strong>All services</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies" target="_blank"><strong>Azure AD Conditional Access</strong></a>. Click <strong>New Policy </strong>&gt; <strong>Create new policy</strong>.</p>
<p>2. Set the <strong>name </strong>to <strong>Block noncompliant devices</strong>. Click <strong>0 users or workload identities selected</strong> &gt; <strong>All Users</strong>.</p>
<div ><img src="https://i.ibb.co/Ln5Y4sS/Add-all-users-to-conditional-access-policy.png" alt="Add all user to conditional access policy" style="height: auto;width: auto"/></div>
<p></p>
<p>3. Click <strong>Exclude </strong>&gt; <strong>Users and groups</strong> &gt; search for your break-glass account and click on it. Click <strong>Select</strong>.</p>
<div ><img src="https://i.ibb.co/7jJpRvY/exclude-break-glass-account-from-conditional-access-policy.png" alt="Exclude break glass account from conditional access policy" style="height: auto;width: auto"/></div>
<p>4. Click <strong>No cloud apps, actions, or authentication contents selected</strong> &gt; <strong>Select apps</strong> &gt; <strong>Office 365</strong> &gt; <strong>Select</strong>.</p>
<div ><img src="https://i.ibb.co/jzcgHBf/Set-cloud-apps.png" alt="Set cloud apps" style="height: auto;width: auto"/></div>
<p>5. Click <strong>0 controls selected</strong> located under Grant &gt; Check <strong>Require device to be marked as compliant</strong>. Click <strong>Select</strong>. Under <strong>Enable policy</strong> click <strong>On</strong>. Click <strong>Create</strong>.</p>
<div ><img src="https://i.ibb.co/JBZX8g5/require-device-to-be-marked-as-compliant.png" alt="Require device to be marked as compliant" style="height: auto;width: auto"/></div>
<h2>Quarantine devices that don't have Intune</h2>
<p>Now that we have devices in Intune and conditional access policies verifying the devices are compliant what about our non-managed devices? In short, what about our break glass accounts? For those, we will want to quarantine any phones that attempt to connect to Exchange Online. Let's jump in and configure quarantining for any device that isn't covered by our conditional access policy.</p>
<p>1. Go to <strong>Exchange admin center</strong> &gt; <a href="https://outlook.office365.com/ecp/?form=eac&mkt=en-US" target="_blank"><strong>Classic Exchange admin center</strong></a> &gt; <strong>Mobile </strong>&gt; <strong>Edit</strong>.</p>
<p>2. Set <strong>Connection Settings</strong> to <strong>Quarantine </strong>then click <strong>Save</strong>.</p>
<div ><img src="https://i.ibb.co/3CL8NQx/quarantine-mobile-devices.png" alt="Configure Microsoft 365 to quarantine mobile devices" style="height: auto;width: auto"/></div>
<h2>How to allow a quarantined device</h2>
<p>Now when someone that's not covered by the conditional access policy attempts to log on to their email using a mobile device their device will be quarantined. In short, they won't receive email until an admin goes in and approves the device. They'll receive a message that says the following:</p>
<blockquote>"Your device is temporarily blocked from accessing content via Exchange ActiveSync because the device has been quarantined. You don't need to take any action. Content will automatically be downloaded as soon as access is granted by your administrator."</blockquote>
<div ><img src="https://i.ibb.co/dB7PCN5/Your-device-is-temporarily-blocked-from-accessing-content-via-Exchange-Active-Sync-because-the-devic.png" alt="Your device is temporarily blocked from accessing content via Exchange ActiveSync because the device has been quarantined" style="height: auto;width: auto"/></div>
<p>An admin will then need to allow the device to connect. To allow a quarantined device to connect perform the following:</p>
<p>1. Go to <strong>Exchange admin center</strong> &gt; <a href="https://outlook.office365.com/ecp/?exsvurl=1&p=ActiveSyncAccess&form=eac&mkt=en-US" target="_blank"><strong>Classic Exchange admin center</strong></a><strong> </strong> &gt; <strong>mobile</strong>.</p>
<p>2. Click the <strong>quarantined device</strong> and click <strong>Allow</strong>.</p>
<div ><img src="https://i.ibb.co/89KnxVW/Allow-device-through-quarantine.png" alt="Allow device through quarantine" style="height: auto;width: auto"/></div>
<p></p>
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