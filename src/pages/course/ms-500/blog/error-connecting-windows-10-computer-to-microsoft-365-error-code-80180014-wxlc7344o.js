/* eslint react/jsx-no-undef: "off", no-tabs: "off", no-irregular-whitespace: "off" */
import {h, Component} from 'preact'
import Page from '../../../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const marginTop24Style = {
  marginTop: '24px'
}

class ArticlePage extends Component {
  constructor(props) {
    super(props)
    this.mountAds1 = this.mountAds1.bind(this)
    this.mountAds2 = this.mountAds2.bind(this)

    this.state = {
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'er5me', text: 'I was attempting to manually join a Windows 10 computer to Microsoft 365 / Azure AD / Intune and I ran into the following error.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6450e', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3s17t', text: 'The errors', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dl5c8', text: 'Something went wrong', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5bg1a', text: 'Something went wrong', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b7eqr', text: 'Your account was not set up on this device because device management could not be enabled. This device might not be able to access some resources, such as Wi-Fi, VPN, or email.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7ukif', text: 'Error code: 80180014', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '6g0qr', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 97, offset: 63, style: 'BOLD'}], key: '3gc9i', text: 'Checking the event logs I found the following errors under the Application and Services/Microsoft/Windows/DeviceManagement-Enterprise-Diagnostics-Provider/Admin logs', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '22t5l', text: 'Event Logs Error 59', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 0, style: 'BOLD'}], key: '2bvef', text: 'Description: MDM Enroll: Server context (fbe3f930-53a0-422b-a23d-1d3a363ef106).', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 0, style: 'BOLD'}], key: 'b6ops', text: 'Event ID: 59', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], key: 'f8tp7', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ea6q5', text: 'Event Logs Error 52', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 0, style: 'BOLD'}], key: '31ttg', text: 'Description: MDM Enroll: Server Returned Fault/Code/Subcode/Value=(DeviceNotSupported) Fault/Reason/Text=(Autopilot device not allowed to enroll for management using WPJ).', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 0, style: 'BOLD'}], key: 'fh4r8', text: 'Event ID: 52', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '54mqi', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1b23m', text: 'Event Logs Error 11', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 0, style: 'BOLD'}], key: 'bolmn', text: 'Description: MDM Enroll: Failed to receive or parse certificate enroll response. Result: (Unknown Win32 Error code: 0x80180014).', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 0, style: 'BOLD'}], key: '73stv', text: 'Event ID:11', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6pu1', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: '72ltf', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '83g1e', text: 'Event Logs Error 71', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 0, style: 'BOLD'}], key: '44ob3', text: 'Description: MDM Enroll: Failed (Unknown Win32 Error code: 0x80180014)', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 0, style: 'BOLD'}], key: '8c9h', text: 'Event ID: 71', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '49j4j', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: 'c22i5', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4er9d', text: 'Reproduce the issue', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6jk6m', text: 'Reproducing the error was easy.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: '5mdr1', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 6, style: 'BOLD'}, {length: 8, offset: 14, style: 'BOLD'}], key: '9qfr8', text: 'Go to Start > Settings', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 6, style: 'BOLD'}, {length: 21, offset: 17, style: 'BOLD'}, {length: 7, offset: 41, style: 'BOLD'}], key: '6ok5a', text: 'Click Accounts > Access work or school > Connect', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 10, style: 'BOLD'}, {length: 4, offset: 48, style: 'BOLD'}], key: 'cvrdo', text: 'Enter the username in the space provided. Click Next.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 8, offset: 10, style: 'BOLD'}, {length: 7, offset: 26, style: 'BOLD'}], key: '3vbjb', text: 'Enter the password. Click Sign in.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'b78cm', text: 'Resolution', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8mmgo', text: 'Get the serial number from the computer', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: '8fps6', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 9, style: 'BOLD'}, {length: 3, offset: 29, style: 'BOLD'}, {length: 14, offset: 40, style: 'BOLD'}], key: '50m8k', text: 'Open the start menu and type cmd. Click Command Prompt.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 27, offset: 5, style: 'BOLD'}, {length: 5, offset: 42, style: 'BOLD'}], key: '120m5', text: 'Type wmic bios get serialnumber and click Enter.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd4hjv', text: 'Copy down the response. In my picture above it\'s "6253-0645-3289-4085-2519-4291-09"', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '122c4', text: 'Delete the device from Intune', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fm99a', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2qnaj', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 39, offset: 6, style: 'BOLD'}, {length: 8, offset: 48, style: 'BOLD'}, {length: 7, offset: 58, style: 'BOLD'}], key: '2ihvt', text: 'Go to Microsoft Endpoint Manager admin center > Devices > Windows.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 11, offset: 90, style: 'BOLD'}], key: '3denb', text: 'Search for the device using the serial number you retrieved in step 3 above. Click on the Device name.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 7, offset: 6, style: 'BOLD'}, {length: 3, offset: 15, style: 'BOLD'}], key: 'ahaq7', text: 'Click Delete > Yes', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ai0ua', text: 'Delete the device from Windows Enrollment', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 1, offset: 0}], inlineStyleRanges: [], key: 'flh28', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 39, offset: 38, style: 'BOLD'}, {length: 7, offset: 80, style: 'BOLD'}, {length: 8, offset: 90, style: 'BOLD'}, {length: 18, offset: 100, style: 'BOLD'}, {length: 7, offset: 121, style: 'BOLD'}], key: 'faacr', text: 'Login using your admin credentials to Microsoft Endpoint Manager admin center > Devices > Windows > Windows enrollment > Devices.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2islt', text: 'Search for the device serial number you found in step 3 above. (In my example it\'s 6253-0645-3289-4085-2519-4291-09).', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 9, offset: 13, style: 'BOLD'}, {length: 6, offset: 62, style: 'BOLD'}, {length: 3, offset: 71, style: 'BOLD'}], key: '978pq', text: 'Click on the checkbox next to the device serial number. Click Delete > Yes.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7m65d', text: 'Once completed wait 10-15 minutes for Intune to update. Then try to join Intune using the device again.', type: 'unstyled'}], entityMap: {0: {data: {alt: 'Your account was not set up on this device because device management could not be enabled. This device might not be able to access some resources, such as Wi-Fi, VPN, or email.', height: 634, src: 'https://i.ibb.co/XkNsKC7/something-went-wrong.png', width: 652}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 1: {data: {alt: 'Event Log Error Event ID: 59 MDM Enroll: Server context', height: 420, src: 'https://i.ibb.co/0cP5gK9/event-id-59.png', width: 571}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 2: {data: {alt: 'Event Log Error 52 MDM Enroll: Server Returned Fault/Code/Subcode/Value=(DeviceNotSupported) Fault/Reason/Text=(Autopilot device not allowed to enroll for management using WPJ).', height: 413, src: 'https://i.ibb.co/ZKLjRQQ/event-id-52.png', width: 865}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 3: {data: {alt: 'Event Log Error 11: MDM Enroll: Failed to receive or parse certificate enroll response. Result: (Unknown Win32 Error code: 0x80180014).', height: 437, src: 'https://i.ibb.co/ryhXVY2/event-id-11.png', width: 650}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 4: {data: {alt: 'Event Log Error 71 MDM Enroll: Failed (Unknown Win32 Error code: 0x80180014)', height: 420, src: 'https://i.ibb.co/G36FbYH/event-id-71.png', width: 570}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 5: {data: {alt: 'Steps to reproduce Error 80180014', height: 734, src: 'https://i.ibb.co/K2q6qYY/Steps-to-reproduce-Error-80180014.png', width: 1363}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 6: {data: {alt: 'How to get the serial number from a Windows 10 computer', height: 675, src: 'https://i.ibb.co/JKtBhVJ/get-serial-number-from-computer.png', width: 1178}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 7: {data: {alt: 'How to delete a device from Intune', height: 353, src: 'https://i.ibb.co/xL3X9Fx/Delete-device-from-Intune.png', width: 1332}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 8: {data: {alt: 'How to delete a device from autopilot', height: 774, src: 'https://i.ibb.co/b1XG7N4/Delete-device-from-autopilot.png', width: 1628}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, datePublished: '2022/10/31', description: 'Error when attempting to join a Windows 10 computer to Azure AD / Intune. Error code: 80180014 Your account was not set up on this device because device management could not be enabled. This device might not be able to access some resources, such as Wi-Fi, VPN, or email.', featuredImage: 'https://i.ibb.co/XkNsKC7/something-went-wrong.png', id: 'wxlc7344o', images: ['https://i.ibb.co/XkNsKC7/something-went-wrong.png', 'https://i.ibb.co/0cP5gK9/event-id-59.png', 'https://i.ibb.co/ZKLjRQQ/event-id-52.png', 'https://i.ibb.co/ryhXVY2/event-id-11.png', 'https://i.ibb.co/G36FbYH/event-id-71.png', 'https://i.ibb.co/K2q6qYY/Steps-to-reproduce-Error-80180014.png', 'https://i.ibb.co/4KpnKK7/get-hostname-from-computer.png', 'https://i.ibb.co/JKtBhVJ/get-serial-number-from-computer.png', 'https://i.ibb.co/b1XG7N4/Delete-device-from-autopilot.png', 'https://i.ibb.co/xL3X9Fx/Delete-device-from-Intune.png'], publish: true, slug: 'error-connecting-windows-10-computer-to-microsoft-365-error-code-80180014-wxlc7344o', title: 'Error connecting Windows 10 computer to Microsoft 365. Error code: 80180014', type: 'article'},
      decideHeight: '1000px'
    }
  }

  componentDidMount() {
    this.mountAds1()
    this.mountAds2()
    const setDecideHeight = (a) => {
      if (!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4))))
        this.setState({decideHeight: '250px'})
    }

    setDecideHeight(navigator.userAgent||navigator.vendor||window.opera)
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

  render() {
    const jsonLd = {
      headline: this.state.article.title,
      datePublished: this.state.article.publishDate,
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
        <Container>
          <Grid container>
            <Grid item>
              <main>
                <div id="ld-534-9587" style={{height: this.state.decideHeight, overflow: 'hidden'}}>
                  <p style="position: absolute;z-index: -1">Reserved for ads. Please scroll down.</p>
                </div>
                <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                <div><p>I was attempting to manually join a Windows 10 computer to Microsoft 365 / Azure AD / Intune and I ran into the following error.</p>
                  <p />
                  <div id="ld-7740-2760" style={{height: this.state.decideHeight, overflow: 'hidden'}} /><h2>The errors</h2>
                  <h3>Something went wrong</h3>
                  <p>Something went wrong</p>
                  <p>Your account was not set up on this device because device management could not be enabled. This device might not be able to access some resources, such as Wi-Fi, VPN, or email.</p>
                  <p>Error code: 80180014</p>
                  <img src="https://i.ibb.co/XkNsKC7/something-went-wrong.png" alt="Your account was not set up on this device because device management could not be enabled. This device might not be able to access some resources, such as Wi-Fi, VPN, or email." height="634" width="652" style="aspect-ratio: auto 652 / 634; height: auto;" />
                  <p>Checking the event logs I found the following errors under the <strong>Application and Services/Microsoft/Windows/DeviceManagement-Enterprise-Diagnostics-Provider/Admin</strong> logs</p>
                  <h3>Event Logs Error 59</h3>
                  <p><strong>Description</strong>: MDM Enroll: Server context (fbe3f930-53a0-422b-a23d-1d3a363ef106).</p>
                  <p><strong>Event ID</strong>: 59</p>
                  <img src="https://i.ibb.co/0cP5gK9/event-id-59.png" alt="Event Log Error Event ID: 59 MDM Enroll: Server context" height="420" width="571" style="aspect-ratio: auto 571 / 420; height: auto;" />
                  <h3>Event Logs Error 52</h3>
                  <p><strong>Description</strong>: MDM Enroll: Server Returned Fault/Code/Subcode/Value=(DeviceNotSupported) Fault/Reason/Text=(Autopilot device not allowed to enroll for management using WPJ).</p>
                  <p><strong>Event ID</strong>: 52</p>
                  <img src="https://i.ibb.co/ZKLjRQQ/event-id-52.png" alt="Event Log Error 52 MDM Enroll: Server Returned Fault/Code/Subcode/Value=(DeviceNotSupported) Fault/Reason/Text=(Autopilot device not allowed to enroll for management using WPJ)." height="413" width="865" style="aspect-ratio: auto 865 / 413; height: auto;" />
                  <h3>Event Logs Error 11</h3>
                  <p><strong>Description</strong>: MDM Enroll: Failed to receive or parse certificate enroll response. Result: (Unknown Win32 Error code: 0x80180014).</p>
                  <p><strong>Event ID</strong>:11</p>
                  <p />
                  <img src="https://i.ibb.co/ryhXVY2/event-id-11.png" alt="Event Log Error 11: MDM Enroll: Failed to receive or parse certificate enroll response. Result: (Unknown Win32 Error code: 0x80180014)." height="437" width="650" style="aspect-ratio: auto 650 / 437; height: auto;" />
                  <h3>Event Logs Error 71</h3>
                  <p><strong>Description</strong>: MDM Enroll: Failed (Unknown Win32 Error code: 0x80180014)</p>
                  <p><strong>Event ID</strong>: 71</p>
                  <p />
                  <img src="https://i.ibb.co/G36FbYH/event-id-71.png" alt="Event Log Error 71 MDM Enroll: Failed (Unknown Win32 Error code: 0x80180014)" height="420" width="570" style="aspect-ratio: auto 570 / 420; height: auto;" />
                  <h2>Reproduce the issue</h2>
                  <p>Reproducing the error was easy.</p>
                  <img src="https://i.ibb.co/K2q6qYY/Steps-to-reproduce-Error-80180014.png" alt="Steps to reproduce Error 80180014" height="734" width="1363" style="aspect-ratio: auto 1363 / 734; height: auto;" />
                  <ol>
                    <li>Go to <strong>Start </strong>&gt; <strong>Settings</strong></li>
                    <li>Click <strong>Accounts </strong>&gt; <strong>Access work or school</strong> &gt; <strong>Connect</strong></li>
                    <li>Enter the <strong>username </strong>in the space provided. Click <strong>Next</strong>.</li>
                    <li>Enter the <strong>password</strong>. Click <strong>Sign in</strong>.</li>
                  </ol>
                  <h2>Resolution</h2>
                  <h3>Get the serial number from the computer</h3>
                  <img src="https://i.ibb.co/JKtBhVJ/get-serial-number-from-computer.png" alt="How to get the serial number from a Windows 10 computer" height="675" width="1178" style="aspect-ratio: auto 1178 / 675; height: auto;" />
                  <ol>
                    <li>Open the <strong>start menu</strong> and type <strong>cmd</strong>. Click <strong>Command Prompt</strong>.</li>
                    <li>Type <strong>wmic bios get serialnumber </strong>and click <strong>Enter</strong>.</li>
                    <li>Copy down the response. In my picture above it's "6253-0645-3289-4085-2519-4291-09"</li>
                  </ol>
                  <h3>Delete the device from Intune</h3>
                  <img src="https://i.ibb.co/xL3X9Fx/Delete-device-from-Intune.png" alt="How to delete a device from Intune" height="353" width="1332" style="aspect-ratio: auto 1332 / 353; height: auto;" />
                  <p />
                  <ol>
                    <li>Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <strong>Windows</strong>.</li>
                    <li>Search for the device using the serial number you retrieved in step 3 above. Click on the <strong>Device name</strong>.</li>
                    <li>Click <strong>Delete </strong>&gt; <strong>Yes</strong></li>
                  </ol>
                  <h3>Delete the device from Windows Enrollment</h3>
                  <img src="https://i.ibb.co/b1XG7N4/Delete-device-from-autopilot.png" alt="How to delete a device from autopilot" height="774" width="1628" style="aspect-ratio: auto 1628 / 774; height: auto;" />
                  <ol>
                    <li>Login using your admin credentials to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices</strong> &gt; <strong>Windows </strong>&gt; <strong>Windows enrollment</strong> &gt; <strong>Devices</strong>.</li>
                    <li>Search for the device serial number you found in step 3 above. (In my example it's 6253-0645-3289-4085-2519-4291-09).</li>
                    <li>Click on the <strong>checkbox </strong>next to the device serial number. Click <strong>Delete</strong> &gt; <strong>Yes</strong>.</li>
                  </ol>
                  <p>Once completed wait 10-15 minutes for Intune to update. Then try to join Intune using the device again.</p>
                </div>
              </main>
            </Grid>
          </Grid>
        </Container>
      </Page>
    )
  }
}

export default ArticlePage
