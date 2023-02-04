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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '50vcc', text: 'If you’re like me, you probably have a ton of scripts that manage different parts of your Microsoft 365 tenants. I monitor these scripts by sending myself an email after these script run and then I check my inbox to make sure they ran successfully.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6ema6', text: 'With basic authentication being deprecated in Microsoft 365 you may be having issues sending emails through PowerShell scripts. But that\'s not the only issue Microsoft is also deprecating send-mailmessage in PowerShell.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f6jf', text: 'Another problem is MFA. Maybe your organization requires MFA for all the user accounts. You can\'t expect to sign in using MFA every time you want the script to run and send an email! That would be ridiculous.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8e0me', text: 'Fortunately, we haven\'t been left without an option. There is a little more setup to do to get going though. Here’s a quick overview', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '69da4', text: 'Register an app in the Microsoft Entra admin center', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '874m9', text: 'Assign permissions so the app can send emails', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '568ib', text: 'Create a self-signed certificate on the computer where we’ll be sending the emails', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c8bii', text: 'Upload the certificate to our Microsoft Entra app', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2klhf', text: 'Install the MG Graph PowerShell module', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3rmej', text: 'Create and run the script', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6k0i1', text: 'So let’s dive right in.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1p983', text: 'Register an app in the Microsoft Entra admin center', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '10kt1', text: 'As I mentioned above we\'ll need to register an app in Microsoft Entra.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '3bg3m', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 16, offset: 72}], inlineStyleRanges: [{length: 28, offset: 6, style: 'BOLD'}, {length: 13, offset: 37, style: 'BOLD'}, {length: 17, offset: 52, style: 'BOLD'}, {length: 16, offset: 72, style: 'BOLD'}], key: '84t8e', text: 'Go to Microsoft Entra admin center > Applications > App registrations > New registration.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 21, offset: 16, style: 'BOLD'}, {length: 8, offset: 48, style: 'BOLD'}], key: 'b651m', text: 'Set the name to Allow sending emails then click Register.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7o6ss', text: 'Assign permissions so the app can send emails', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '47vnt', text: 'Next, we\'ll need to grant our app permission to send emails.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 1, offset: 0}], inlineStyleRanges: [], key: '18jm1', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 15, offset: 31, style: 'BOLD'}, {length: 16, offset: 49, style: 'BOLD'}, {length: 15, offset: 68, style: 'BOLD'}], key: '2i4s9', text: 'From your registered app click API permissions > Add a permission > Microsoft Graph', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 23, offset: 7, style: 'BOLD'}, {length: 5, offset: 49, style: 'BOLD'}, {length: 9, offset: 85, style: 'BOLD'}, {length: 15, offset: 97, style: 'BOLD'}], key: '4oilp', text: 'Select Application permissions > find and expand Mail in the Permission list > Check Mail.Send > Add permissions.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 19, offset: 6, style: 'BOLD'}, {length: 3, offset: 28, style: 'BOLD'}], key: 'b7n5h', text: 'Click Grant admin consent > Yes', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cisk4', text: 'Create a self-signed certificate on the computer where we’ll be sending the emails', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cv1hl', text: 'Now we\'ll need to jump to the computer or server where we are sending the emails and create a self-signed certificate.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 1, offset: 0}], inlineStyleRanges: [], key: 'd45rn', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 22, offset: 5, style: 'BOLD'}], key: 'cafj6', text: 'Open PowerShell as an admin.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bvm2f', text: 'Run the following command (replace gruber18.onmicrosoft.com with your tenant): $Cert = New-SelfSignedCertificate -DnsName \'gruber18.onmicrosoft.com\' -CertStoreLocation "Cert:\\CurrentUser\\My" -FriendlyName "Send_Emails" -KeySpec Signature -NotAfter (Get-Date).AddYears(5)', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ekm2g', text: 'Run the following command: Get-ChildItem "Cert:\\CurrentUser\\my\\$($Cert.Thumbprint)" | Export-Certificate -FilePath C:\\graph.cer', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7ghiv', text: 'Upload the certificate to our Microsoft Entra app', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bpq7c', text: 'Next, we\'ll upload the certificate to our registered Microsoft Entra app. That way Microsoft can compare the certificate we uploaded to the certificate we\'ll use during the sending of the email messages.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 1, offset: 0}], inlineStyleRanges: [], key: '1elk2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 28, offset: 6, style: 'BOLD'}, {length: 13, offset: 37, style: 'BOLD'}, {length: 17, offset: 52, style: 'BOLD'}, {length: 20, offset: 78, style: 'BOLD'}], key: '9mh1j', text: 'Go to Microsoft Entra admin center > Applications > App registrations > Click Allow sending emails.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 22, offset: 6, style: 'BOLD'}, {length: 13, offset: 31, style: 'BOLD'}, {length: 18, offset: 46, style: 'BOLD'}, {length: 12, offset: 96, style: 'BOLD'}, {length: 20, offset: 116, style: 'BOLD'}, {length: 11, offset: 150, style: 'BOLD'}, {length: 3, offset: 169, style: 'BOLD'}], key: '9cmos', text: 'Click Certificates & secrets > Certificates > Upload certificate > Select your certificate from C:\\graph.cer in the Upload a certificate box. Enter a description. Click Add.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '51ab7', text: 'Install the MG Graph PowerShell module', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '99gm8', text: 'The last step before we can send emails using PowerShell! We simply need to install the MG Graph PowerShell module. This is the module we\'ll use to send emails through PowerShell.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: [], key: 'fpvco', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a0dq0', text: 'Open PowerShell as an administrator.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bbqbi', text: 'Run Install-Module Microsoft.Graph', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1lqi5', text: 'Click Y then press Enter. Click Y then press Enter.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '520rn', text: 'Create and run the script', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '64ht1', text: 'Finally, we\'ve done all the prep work. We\'ve created an app and given it the correct permissions. We\'ve created a certificate and uploaded it to our registered app. We\'ve installed the Graph PowerShell module. Now, we can send emails through PowerShell!', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 1, offset: 0}], inlineStyleRanges: [], key: 'a8mvv', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bc43s', text: 'Go back to your registered app in the Microsoft Entra admin center. Click Overview.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4q9p8', text: 'Copy the Application (client) ID and Directory (tenant) ID.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cpvkh', text: 'Click Certificate & secrets. Copy the thumbprint.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7hvk4', text: 'Enter the following PowerShell replacing the ClientId, TenantId, CertThumbprint, address, and UserId with your information.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '18vb', text: '$ClientId = \'65bf8b60-3552-4621-ab36-9b6e7072093e\'', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6b10m', text: '$TenantId = \'d01acbb1-ad7d-48bc-b82d-7597ca77ca95\'', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ectvb', text: '$CertThumbprint = \'1F4B63E994D8513DE582A50B327A52F2C90C7551\'', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e29hu', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f95ij', text: '$Message = @{', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bkqv9', text: '  subject =  "Hello World!";', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'cjc3n', text: '  toRecipients = @(@{', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8gc5r', text: '    emailAddress = @{', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 30, offset: 15}], inlineStyleRanges: [], key: '5tph6', text: '    address = "admin@gruber18.onmicrosoft.com";', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6ghq9', text: '  }});', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8ehph', text: '  body = @{', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '84la2', text: '    contentType = "text";', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2uu7q', text: '    content = "This is my test email."', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9nb8g', text: '  }', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9j01q', text: '}', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f9jje', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e2i0p', text: 'Connect-MgGraph -ClientId $ClientId -TenantId $TenantId -CertificateThumbprint $CertThumbprint', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '78h6k', text: 'Select-MgProfile -Name v1.0', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 29, offset: 25}], inlineStyleRanges: [], key: '6la9l', text: 'Send-MgUserMail -UserId "John@gruber18.onmicrosoft.com" -Message $Message', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 1, offset: 0}], inlineStyleRanges: [], key: '7ucd2', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3sjuh', text: '', type: 'unstyled'}], entityMap: {0: {data: {alt: 'Register an app in Microsoft 365', height: 432, src: 'https://i.ibb.co/XZpzjR8/register-an-app-in-microsoft-365.png', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/CreateApplicationBlade/quickStartType~/null/isMSAApp~/false', width: 598}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 1: {data: {url: 'https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/CreateApplicationBlade/quickStartType~/null/isMSAApp~/false'}, mutability: 'MUTABLE', type: 'LINK'}, 2: {data: {alt: 'Assign permissions to registered app in Microsoft 365', height: 1202, src: 'https://i.ibb.co/8dq4B9W/Assign-permissions-to-registered-app.png', width: 766}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 3: {data: {alt: 'Use PowerShell to create a self signed certificate', height: 62, src: 'https://i.ibb.co/HFTKdVn/powershell.png', width: 841}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 4: {data: {alt: 'Upload certificate to Microsoft Entra app', height: 838, src: 'https://i.ibb.co/M9tYqy0/Upload-certificate-to-app-registration.png', width: 1042}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 5: {data: {alt: 'Install Microsoft Graph Module in PowerShell', height: 100, src: 'https://i.ibb.co/GT0HWPq/Install-Microsoft-Graph-Module-in-Power-Shell.png', width: 806}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 6: {data: {alt: 'Gather information', height: 968, href: 'mailto:admin@gruber18.onmicrosoft.com', src: 'https://i.ibb.co/Sny885h/Gather-Information.png', url: 'mailto:admin@gruber18.onmicrosoft.com', width: 1060}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 7: {data: {href: 'mailto:admin@gruber18.onmicrosoft.com', url: 'mailto:admin@gruber18.onmicrosoft.com'}, mutability: 'MUTABLE', type: 'LINK'}, 8: {data: {alt: 'PowerShell Script to send emails through Microsoft 365', height: 296, href: 'mailto:John@gruber18.onmicrosoft.com', src: 'https://i.ibb.co/m6MMRbm/Power-Shell-Script.png', url: 'mailto:John@gruber18.onmicrosoft.com', width: 737}, mutability: 'MUTABLE', type: 'LINK'}, 9: {data: {alt: 'PowerShell Script to send emails through Microsoft 365', height: 296, src: 'https://i.ibb.co/m6MMRbm/Power-Shell-Script.png', width: 737}, mutability: 'IMMUTABLE', type: 'IMAGE'}}}, datePublished: '2023/2/3', description: 'With basic authentication going away it\'s time to move on from using credentials in PowerShell scripts. Fortunately, there\'s a new way to send emails from scripts. Using app registration!', featuredImage: 'https://i.ibb.co/m6MMRbm/Power-Shell-Script.png', id: 'injifle8u', images: ['https://i.ibb.co/XZpzjR8/register-an-app-in-microsoft-365.png', 'https://i.ibb.co/8dq4B9W/Assign-permissions-to-registered-app.png', 'https://i.ibb.co/HFTKdVn/powershell.png', 'https://i.ibb.co/M9tYqy0/Upload-certificate-to-app-registration.png', 'https://i.ibb.co/GT0HWPq/Install-Microsoft-Graph-Module-in-Power-Shell.png', 'https://i.ibb.co/m6MMRbm/Power-Shell-Script.png', 'https://i.ibb.co/Sny885h/Gather-Information.png'], publish: true, slug: 'how-to-send-emails-through-microsoft-365-from-powershell-injifle8u', title: 'How to send emails through Microsoft 365 from PowerShell', type: 'article'},
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
                <div><p>If you’re like me, you probably have a ton of scripts that manage different parts of your Microsoft 365 tenants. I monitor these scripts by sending myself an email after these script run and then I check my inbox to make sure they ran successfully.</p>
                  <p>With basic authentication being deprecated in Microsoft 365 you may be having issues sending emails through PowerShell scripts. But that's not the only issue Microsoft is also deprecating send-mailmessage in PowerShell.</p>
                  <p>Another problem is MFA. Maybe your organization requires MFA for all the user accounts. You can't expect to sign in using MFA every time you want the script to run and send an email! That would be ridiculous.</p>
                  <p>Fortunately, we haven't been left without an option. There is a little more setup to do to get going though. Here’s a quick overview</p>
                  <ol>
                    <li>Register an app in the Microsoft Entra admin center</li>
                    <li>Assign permissions so the app can send emails</li>
                    <li>Create a self-signed certificate on the computer where we’ll be sending the emails</li>
                    <li>Upload the certificate to our Microsoft Entra app</li>
                    <li>Install the MG Graph PowerShell module</li>
                    <li>Create and run the script</li>
                  </ol>
                  <p>So let’s dive right in.</p>
                  <div id="ld-7740-2760" style={{height: this.state.decideHeight, overflow: 'hidden'}} /><h2>Register an app in the Microsoft Entra admin center</h2>
                  <p>As I mentioned above we'll need to register an app in Microsoft Entra.</p>
                  <img src="https://i.ibb.co/XZpzjR8/register-an-app-in-microsoft-365.png" alt="Register an app in Microsoft 365" height="432" width="598" style="aspect-ratio: auto 598 / 432; height: auto;" />
                  <ol>
                    <li>Go to <strong>Microsoft Entra admin center</strong> &gt; <strong>Applications </strong>&gt; <strong>App registrations</strong> &gt; <a href="https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/CreateApplicationBlade/quickStartType~/null/isMSAApp~/false" target="_self"><strong>New registration</strong></a>.</li>
                    <li>Set the name to <strong>Allow sending emails </strong>then click <strong>Register</strong>.</li>
                  </ol>
                  <h2>Assign permissions so the app can send emails</h2>
                  <p>Next, we'll need to grant our app permission to send emails.</p>
                  <img src="https://i.ibb.co/8dq4B9W/Assign-permissions-to-registered-app.png" alt="Assign permissions to registered app in Microsoft 365" height="1202" width="766" style="aspect-ratio: auto 766 / 1202; height: auto;" />
                  <ol>
                    <li>From your registered app click <strong>API permissions</strong> &gt; <strong>Add a permission</strong> &gt; <strong>Microsoft Graph</strong></li>
                    <li>Select <strong>Application permissions</strong> &gt; find and expand <strong>Mail </strong>in the Permission list &gt; Check <strong>Mail.Send</strong> &gt; <strong>Add permissions</strong>.</li>
                    <li>Click <strong>Grant admin consent</strong> &gt; <strong>Yes</strong></li>
                  </ol>
                  <h2>Create a self-signed certificate on the computer where we’ll be sending the emails</h2>
                  <p>Now we'll need to jump to the computer or server where we are sending the emails and create a self-signed certificate.</p>
                  <img src="https://i.ibb.co/HFTKdVn/powershell.png" alt="Use PowerShell to create a self signed certificate" height="62" width="841" style="aspect-ratio: auto 841 / 62; height: auto;" />
                  <ol>
                    <li>Open <strong>PowerShell as an admin</strong>.</li>
                    <li>Run the following command (replace gruber18.onmicrosoft.com with your tenant): $Cert = New-SelfSignedCertificate -DnsName 'gruber18.onmicrosoft.com' -CertStoreLocation "Cert:\CurrentUser\My" -FriendlyName "Send_Emails" -KeySpec Signature -NotAfter (Get-Date).AddYears(5)</li>
                    <li>Run the following command: Get-ChildItem "Cert:\CurrentUser\my\$($Cert.Thumbprint)" | Export-Certificate -FilePath C:\graph.cer</li>
                  </ol>
                  <h2>Upload the certificate to our Microsoft Entra app</h2>
                  <p>Next, we'll upload the certificate to our registered Microsoft Entra app. That way Microsoft can compare the certificate we uploaded to the certificate we'll use during the sending of the email messages.</p>
                  <img src="https://i.ibb.co/M9tYqy0/Upload-certificate-to-app-registration.png" alt="Upload certificate to Microsoft Entra app" height="838" width="1042" style="aspect-ratio: auto 1042 / 838; height: auto;" />
                  <ol>
                    <li>Go to <strong>Microsoft Entra admin center</strong> &gt; <strong>Applications </strong>&gt; <strong>App registrations</strong> &gt; Click <strong>Allow sending emails</strong>.</li>
                    <li>Click <strong>Certificates &amp; secrets</strong> &gt; <strong>Certificates </strong>&gt; <strong>Upload certificate</strong> &gt; Select your certificate from <strong>C:\graph.cer</strong> in the <strong>Upload a certificate</strong> box. Enter a <strong>description</strong>. Click <strong>Add</strong>.</li>
                  </ol>
                  <h2>Install the MG Graph PowerShell module</h2>
                  <p>The last step before we can send emails using PowerShell! We simply need to install the MG Graph PowerShell module. This is the module we'll use to send emails through PowerShell.</p>
                  <img src="https://i.ibb.co/GT0HWPq/Install-Microsoft-Graph-Module-in-Power-Shell.png" alt="Install Microsoft Graph Module in PowerShell" height="100" width="806" style="aspect-ratio: auto 806 / 100; height: auto;" />
                  <ol>
                    <li>Open PowerShell as an administrator.</li>
                    <li>Run Install-Module Microsoft.Graph</li>
                    <li>Click Y then press Enter. Click Y then press Enter.</li>
                  </ol>
                  <h2>Create and run the script</h2>
                  <p>Finally, we've done all the prep work. We've created an app and given it the correct permissions. We've created a certificate and uploaded it to our registered app. We've installed the Graph PowerShell module. Now, we can send emails through PowerShell!</p>
                  <img src="https://i.ibb.co/Sny885h/Gather-Information.png" alt="Gather information" height="968" width="1060" style="aspect-ratio: auto 1060 / 968; height: auto;" />
                  <ol>
                    <li>Go back to your registered app in the Microsoft Entra admin center. Click Overview.</li>
                    <li>Copy the Application (client) ID and Directory (tenant) ID.</li>
                    <li>Click Certificate &amp; secrets. Copy the thumbprint.</li>
                    <li>Enter the following PowerShell replacing the ClientId, TenantId, CertThumbprint, address, and UserId with your information.</li>
                  </ol>
                  <p>$ClientId = '65bf8b60-3552-4621-ab36-9b6e7072093e'</p>
                  <p>$TenantId = 'd01acbb1-ad7d-48bc-b82d-7597ca77ca95'</p>
                  <p>$CertThumbprint = '1F4B63E994D8513DE582A50B327A52F2C90C7551'</p>
                  <p />
                  <p>$Message = @&#123;</p>
                  <p>&nbsp;&nbsp;subject =  "Hello World!";</p>
                  <p>&nbsp;&nbsp;toRecipients = @(@&#123;</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;emailAddress = @&#123;</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;address = "<a href="mailto:admin@gruber18.onmicrosoft.com" target="_self">admin@gruber18.onmicrosoft.com</a>";</p>
                  <p>&nbsp;&nbsp;&#125;&#125;);</p>
                  <p>&nbsp;&nbsp;body = @&#123;</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;contentType = "text";</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;content = "This is my test email."</p>
                  <p>&nbsp;&nbsp;&#125;</p>
                  <p>&#125;</p>
                  <p />
                  <p>Connect-MgGraph -ClientId $ClientId -TenantId $TenantId -CertificateThumbprint $CertThumbprint</p>
                  <p>Select-MgProfile -Name v1.0</p>
                  <p>Send-MgUserMail -UserId "<a href="mailto:John@gruber18.onmicrosoft.com" target="_self">John@gruber18.onmicrosoft.com</a>" -Message $Message</p>
                  <img src="https://i.ibb.co/m6MMRbm/Power-Shell-Script.png" alt="PowerShell Script to send emails through Microsoft 365" height="296" width="737" style="aspect-ratio: auto 737 / 296; height: auto;" />
                  <p />
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
