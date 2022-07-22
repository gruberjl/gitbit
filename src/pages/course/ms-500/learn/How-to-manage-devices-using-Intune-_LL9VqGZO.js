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
      path: '/course/ms-500/learn/How-to-manage-devices-using-Intune-_LL9VqGZO',
      article: {title: 'How to manage devices using Intune', slug: 'How-to-manage-devices-using-Intune-_LL9VqGZO', featuredImage: 'https://i.ibb.co/HPQ2m8t/Create-an-endpoint-protection-profile.png', sectionId: 'l0DxUuonW', type: 'article', article: {entityMap: {0: {type: 'LINK', mutability: 'MUTABLE', data: {url: 'https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesWindowsMenu/configProfiles', targetOption: '_blank'}}, 1: {mutability: 'MUTABLE', data: {alt: 'Create a configuration profile', alignment: 'none', height: 'auto', width: 'auto', src: 'https://i.ibb.co/YkcdP2T/Create-a-configuration-profile.png'}, type: 'IMAGE'}, 2: {type: 'IMAGE', data: {width: 'auto', alt: 'Name the configuration profile', alignment: 'none', height: 'auto', src: 'https://i.ibb.co/kQXPK8N/name-the-configuration-profile.png'}, mutability: 'MUTABLE'}, 3: {type: 'IMAGE', data: {alignment: 'none', height: 'auto', width: 'auto', alt: 'Disable Telemetry on Windows 10 through Intune', src: 'https://i.ibb.co/Y0C3Tbw/Disable-Telemetry-on-Windows-10-through-Intune.png'}, mutability: 'MUTABLE'}, 4: {type: 'IMAGE', data: {alignment: 'none', src: 'https://i.ibb.co/Df0QCPN/set-the-assignments.png', width: 'auto', alt: 'Set the assignments in Intune', height: 'auto'}, mutability: 'MUTABLE'}, 5: {mutability: 'MUTABLE', data: {width: 'auto', src: 'https://i.ibb.co/X3X4qWz/Device-restrictions-assignments.png', height: 'auto', alt: 'Device restrictions assignments', alignment: 'none'}, type: 'IMAGE'}, 6: {type: 'IMAGE', mutability: 'MUTABLE', data: {height: 'auto', alignment: 'none', width: 'auto', alt: 'Create an Attack surface reduction policy', src: 'https://i.ibb.co/PDcFc1G/Enable-Smart-Screen.png'}}, 7: {mutability: 'MUTABLE', data: {alt: 'Enable SmartScreen', alignment: 'none', height: 'auto', width: 'auto', src: 'https://i.ibb.co/pQHYhXN/Enable-Smart-Screen.png'}, type: 'IMAGE'}, 8: {type: 'LINK', data: {url: 'https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesWindowsMenu/configProfiles', targetOption: '_blank'}, mutability: 'MUTABLE'}, 9: {mutability: 'MUTABLE', type: 'IMAGE', data: {alignment: 'none', src: 'https://i.ibb.co/HPQ2m8t/Create-an-endpoint-protection-profile.png', height: 'auto', width: 'auto', alt: 'Create an endpoint protection profile in Intune'}}, 10: {type: 'IMAGE', mutability: 'MUTABLE', data: {alignment: 'none', width: 'auto', src: 'https://i.ibb.co/2h9ntxm/Enable-Attack-Surface-Reduction-Policies.png', height: 'auto', alt: 'Enable Attack Surface Reduction Policies'}}, 11: {type: 'IMAGE', data: {width: 'auto', src: 'https://i.ibb.co/wcJ13dL/Enable-Folder-Protection.png', alignment: 'none', height: 'auto', alt: 'Enable Folder Protection'}, mutability: 'MUTABLE'}, 12: {type: 'IMAGE', mutability: 'MUTABLE', data: {src: 'https://i.ibb.co/9TfVy5z/Enable-Network-Protection.png', height: 'auto', alignment: 'none', width: 'auto', alt: 'Enable Network protection'}}}, blocks: [{entityRanges: [], depth: 0, data: {}, type: 'unstyled', key: 'diuai', text: 'Managing devices using Intune is typically done through configuration policies. Configuration policies are like group policies but more. If you don\'t know group policy, don\'t worry, I\'ll explain without the example.', inlineStyleRanges: []}, {text: 'Configuration policies allow you to configure the Intune connected devices. You can set all sorts of things. For example, you can require a password on the device. Configure BitLocker on Windows 10 devices and a whole lot more. Since Microsoft makes Windows (and Windows is more complicated than Android and iOS devices), there\'s more you can do with Windows devices than other manufacturers. So let\'s dig into managing Windows 10 devices Intune.', inlineStyleRanges: [], data: {}, key: '50sae', type: 'unstyled', entityRanges: [], depth: 0}, {key: 'a0kvq', inlineStyleRanges: [], entityRanges: [], depth: 0, data: {}, text: 'Create a Windows 10 Device Configuration profile to set Telemetry data', type: 'header-two'}, {depth: 0, entityRanges: [], data: {}, inlineStyleRanges: [], text: 'So let\'s start off easy. Let\'s say your boss (or a question on the MS-500) wants you to disable telemetry data from being sent to Microsoft. How do you do it? With a device configuration profile that has device restrictions configured! Let\'s jump in.', key: 'aouov', type: 'unstyled'}, {inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 39}, {length: 7, offset: 51, style: 'BOLD'}, {length: 8, offset: 61, style: 'BOLD'}, {style: 'BOLD', length: 22, offset: 71}, {style: 'BOLD', length: 14, offset: 101}, {style: 'BOLD', length: 9, offset: 125}, {style: 'BOLD', offset: 137, length: 20}, {style: 'BOLD', length: 12, offset: 167}, {style: 'BOLD', offset: 183, length: 9}, {offset: 201, style: 'BOLD', length: 18}, {style: 'BOLD', length: 13, offset: 226}, {style: 'BOLD', length: 6, offset: 247}], data: {}, entityRanges: [{offset: 71, length: 22, key: 0}], type: 'unstyled', key: 'canj5', text: '1. Go to Microsoft Endpoint Manager admin center > Devices > Windows > Configuration profiles. Click Create profile. Set the platform to Windows 10 and later. Set the profile type to templates. Select Device restriction under Template name. Click Create.', depth: 0}, {type: 'atomic', data: {}, entityRanges: [{key: 1, offset: 0, length: 1}], depth: 0, inlineStyleRanges: [], key: '6chne', text: ' '}, {text: '2. Name the profile "Disable telemetry" Click Next.', key: '70nsv', entityRanges: [], depth: 0, inlineStyleRanges: [{length: 5, style: 'BOLD', offset: 3}, {style: 'BOLD', offset: 21, length: 17}, {length: 4, style: 'BOLD', offset: 46}], type: 'unstyled', data: {}}, {type: 'atomic', key: 'b9cb3', text: ' ', entityRanges: [{length: 1, key: 2, offset: 0}], depth: 0, data: {}, inlineStyleRanges: []}, {entityRanges: [], type: 'unstyled', data: {}, depth: 0, text: '3. Scroll down and expand Reporting and telemetry. Set Share usage data to Diagnostic data off. Click Next.', key: 'bmk0c', inlineStyleRanges: [{offset: 26, style: 'BOLD', length: 23}, {length: 17, style: 'BOLD', offset: 55}, {style: 'BOLD', length: 19, offset: 75}, {length: 4, offset: 102, style: 'BOLD'}]}, {key: 'libp', inlineStyleRanges: [], type: 'atomic', depth: 0, text: ' ', entityRanges: [{key: 3, length: 1, offset: 0}], data: {}}, {depth: 0, key: '78uta', text: '4. For Assignments click Add all users. (don\'t worry, I\'ll explain this section next.). Click Next.', type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', offset: 25, length: 13}, {offset: 94, length: 4, style: 'BOLD'}], data: {}, entityRanges: []}, {data: {}, entityRanges: [{offset: 0, length: 1, key: 4}], key: '3gbrv', text: ' ', depth: 0, inlineStyleRanges: [], type: 'atomic'}, {data: {}, key: '79ct4', depth: 0, text: '5. Click Next > Create.', entityRanges: [], inlineStyleRanges: [{length: 5, offset: 9, style: 'BOLD'}, {offset: 16, length: 6, style: 'BOLD'}], type: 'unstyled'}, {inlineStyleRanges: [], key: 'eldht', depth: 0, entityRanges: [], data: {}, type: 'unstyled', text: 'That\'s it. Now you just need to wait until your devices check-in and the policy will be applied.'}, {entityRanges: [], depth: 0, data: {}, text: 'Understanding assignments in Intune', inlineStyleRanges: [], type: 'header-two', key: 'c9s4t'}, {key: 'fic5b', text: ' ', type: 'atomic', data: {}, inlineStyleRanges: [], depth: 0, entityRanges: [{offset: 0, key: 5, length: 1}]}, {type: 'unstyled', key: '929jq', inlineStyleRanges: [], text: '', data: {}, entityRanges: [], depth: 0}, {key: '1gvkl', inlineStyleRanges: [], entityRanges: [], data: {}, text: 'Assigning policies and profiles in Intune is important and can be a bit tricky so let\'s break it down. First is "included groups". Included groups are who or what machines are included in the role out of the profile. For example, in the telemetry profile above we set it to All Users. So that profile will apply to every user that logs onto a Windows 10 computer that checks into Intune. Why is it Windows 10 and later? Because when we created the profile we set "Windows 10 and later" as the platform. That profile won\'t affect Android, iOS, or Macs regardless of the users.', type: 'unstyled', depth: 0}, {inlineStyleRanges: [], entityRanges: [], data: {}, depth: 0, text: 'Now, you may have noticed in the assignments section there\'s an area for Excluded groups. Excluded groups take precedence over included groups. So if you select "All Users" in the included groups and then select "Accountants" in the excluded groups the profile will apply to All Users with the exception of the users in the "Accountants" group.', type: 'unstyled', key: '3itak'}, {entityRanges: [], text: 'One last thing, you may have noticed you can assign policies (include or exclude) to users or device groups. What\'s the difference? Well, if you assign a profile to a device it doesn\'t matter who logs onto the device the profile will get applied. If you assign the profile to a user then any device (that meets the profile limits) that the user logs onto will get the profile.', inlineStyleRanges: [], type: 'unstyled', data: {}, key: '6nb9b', depth: 0}, {entityRanges: [], inlineStyleRanges: [], text: 'Now, what happens when you mix the two? Let\'s take an example. If you assign a profile to the All Users users group but exclude an Accounts Devices device group. In this mixed group app assignment, All users get the profile. The exclusion does not apply. So Microsoft, and I recommend not mixing the two. Either assign and exclude users or assign and exclude devices, but don\'t try and mix and match.', depth: 0, data: {}, type: 'unstyled', key: 'eelck'}, {depth: 0, data: {}, type: 'header-three', entityRanges: [], inlineStyleRanges: [], key: '4p95r', text: 'File obfuscation by using the registry'}, {key: 't2u4', depth: 0, text: 'Lastly, you can obscure files by using the registry. Simply create the following registry dword on the computer or save the following 3 lines to a file named Obfuscate.reg and then run the file on the computer.', type: 'unstyled', entityRanges: [], data: {}, inlineStyleRanges: []}, {key: 'e6hcb', text: 'Windows Registry Editor Version 5.00', data: {}, inlineStyleRanges: [], entityRanges: [], type: 'unstyled', depth: 0}, {entityRanges: [], key: '3qjaf', inlineStyleRanges: [], data: {}, text: '[HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\Office\\16.0\\osm]', type: 'unstyled', depth: 0}, {entityRanges: [], depth: 0, inlineStyleRanges: [], key: 'c3flm', data: {}, text: '"EnableFileObfuscation"=dword:00000001', type: 'unstyled'}, {type: 'header-two', depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ds28e', text: 'How to enable SmartScreen', data: {}}, {entityRanges: [], text: 'So now that we\'ve configured a basic configuration profile let\'s talk about Endpoint security. As you saw under the template name when creating the device configuration profile there are a ton of options available in the Device Configuration profiles section. Surprisingly, that\'s not the only place to perform device configuration. There are even more settings! So now let\'s enable SmartScreen.', type: 'unstyled', key: 'fp07o', depth: 0, data: {}, inlineStyleRanges: []}, {key: '25dq4', text: '1. Go to Microsoft Endpoint Manager admin center > Endpoint security > Attack surface reduction. Click Create Policy. Set the Platform to Windows 10 and later. Set the Profile to Application control. Click Create.', depth: 0, inlineStyleRanges: [{length: 39, style: 'BOLD', offset: 9}, {length: 17, style: 'BOLD', offset: 51}, {length: 24, offset: 71, style: 'BOLD'}, {offset: 103, style: 'BOLD', length: 13}, {style: 'BOLD', length: 9, offset: 126}, {style: 'BOLD', length: 20, offset: 138}, {style: 'BOLD', offset: 168, length: 8}, {length: 19, style: 'BOLD', offset: 179}, {style: 'BOLD', length: 6, offset: 206}], entityRanges: [], data: {}, type: 'unstyled'}, {text: ' ', type: 'atomic', depth: 0, entityRanges: [{offset: 0, length: 1, key: 6}], data: {}, key: 'fgnc9', inlineStyleRanges: []}, {data: {}, inlineStyleRanges: [{length: 18, style: 'BOLD', offset: 20}, {offset: 47, style: 'BOLD', length: 4}], key: 'e358i', text: '2. Name the policy "Enable SmartScreen". Click Next.', type: 'unstyled', entityRanges: [], depth: 0}, {inlineStyleRanges: [{length: 30, offset: 7, style: 'BOLD'}, {style: 'BOLD', length: 47, offset: 41}, {style: 'BOLD', offset: 94, length: 27}, {length: 3, style: 'BOLD', offset: 125}, {style: 'BOLD', length: 4, offset: 136}], text: '3. Set App locker application control to Enforce Components, Store Apps, and Smartlocker. Set Turn on Windows SmartScreen to Yes. Click Next.', key: 'c8imc', depth: 0, type: 'unstyled', data: {}, entityRanges: []}, {depth: 0, inlineStyleRanges: [], text: ' ', data: {}, type: 'atomic', key: '27vfe', entityRanges: [{key: 7, length: 1, offset: 0}]}, {inlineStyleRanges: [{length: 5, offset: 9, style: 'BOLD'}, {offset: 255, length: 4, style: 'BOLD'}], depth: 0, text: '4. Click Next on the scope tags page. On the Assignments page set the Included groups to whatever group you want, for example, Intune Endpoint Protection. Set the excluded groups to whatever groups you want, for example, Intune Help Desk Operators. Click Next.', type: 'unstyled', entityRanges: [], key: '6e82a', data: {}}, {data: {}, text: 'Now with that policy configured every user that is a member of the Included group above that is not a member of the Excluded group will have SmartScreen turned on. So in the example above every user that is a member of the Intune Endpoint Protection group that isn\'t a member of the Intune Help Desk Operators group will have SmartScreen enabled. Lastly, we configured SmartScreen to only warn users. The users can still bypass SmartScreen.', depth: 0, inlineStyleRanges: [], type: 'unstyled', key: '4kdsq', entityRanges: []}, {inlineStyleRanges: [], data: {}, depth: 0, entityRanges: [], text: 'How to enable Windows Defender Exploit Guard', key: 'c1t62', type: 'header-two'}, {entityRanges: [], data: {}, text: 'Windows Defender Exploit Guard is another great way to reduce the attack surface of your Windows 10 devices. Let\'s enable Windows Defender Exploit Guard using an Endpoint protection device configuration.', depth: 0, key: 'fbdih', inlineStyleRanges: [{style: 'color-rgb(33,37,41)', offset: 0, length: 30}, {style: 'bgcolor-rgb(255,255,255)', length: 30, offset: 0}, {length: 30, style: 'fontsize-16', offset: 0}, {length: 30, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], type: 'unstyled'}, {text: '1. Go to Microsoft Endpoint Manager admin center > Devices > Windows > Configuration profiles. Click Create profile. Set Platform to Windows 10 and later. Set Profile type to Templates. Set the Template name to Endpoint protection. Click Create.', type: 'unstyled', inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 39}, {style: 'BOLD', offset: 51, length: 8}, {length: 8, offset: 61, style: 'BOLD'}, {length: 22, style: 'BOLD', offset: 71}, {style: 'BOLD', offset: 101, length: 14}, {offset: 121, length: 9, style: 'BOLD'}, {style: 'BOLD', length: 20, offset: 133}, {style: 'BOLD', length: 12, offset: 159}, {length: 9, offset: 175, style: 'BOLD'}, {offset: 194, length: 13, style: 'BOLD'}, {length: 19, offset: 211, style: 'BOLD'}, {offset: 238, length: 6, style: 'BOLD'}], key: '1346c', depth: 0, entityRanges: [{length: 22, offset: 71, key: 8}], data: {}}, {data: {}, entityRanges: [{length: 1, offset: 0, key: 9}], inlineStyleRanges: [], depth: 0, text: ' ', key: '6eomc', type: 'atomic'}, {entityRanges: [], inlineStyleRanges: [{style: 'BOLD', offset: 21, length: 37}, {offset: 67, style: 'BOLD', length: 4}], type: 'unstyled', key: '578j8', data: {}, text: '2. Name the profile "Enable Windows Defender Exploit Guard". Click Next.', depth: 0}, {type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', offset: 30, length: 32}, {length: 24, offset: 65, style: 'BOLD'}, {style: 'BOLD', offset: 100, length: 7}, {style: 'BOLD', length: 5, offset: 110}], entityRanges: [], key: '3cth5', data: {}, depth: 0, text: '3. Set all the policies under Microsoft Defender Exploit Guard > Attack Surface Reduction to either Enable or Block.'}, {entityRanges: [{offset: 0, key: 10, length: 1}], type: 'atomic', depth: 0, key: 'euihk', text: ' ', data: {}, inlineStyleRanges: []}, {data: {}, inlineStyleRanges: [{length: 6, offset: 24, style: 'BOLD'}, {offset: 32, style: 'BOLD', length: 32}, {offset: 67, style: 'BOLD', length: 24}, {style: 'BOLD', length: 17, offset: 94}], type: 'unstyled', depth: 0, entityRanges: [], text: '4. Set the following to Enable: Microsoft Defender Exploit Guard > Controlled folder access > Folder protection.', key: 'dqeab'}, {type: 'atomic', depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], data: {}, inlineStyleRanges: [], text: ' ', key: '6h9kh'}, {data: {}, inlineStyleRanges: [{style: 'BOLD', offset: 24, length: 6}, {style: 'BOLD', offset: 32, length: 32}, {style: 'BOLD', offset: 67, length: 17}, {style: 'BOLD', offset: 87, length: 18}], key: 'd0pcr', text: '5. Set the following to Enable: Microsoft Defender Exploit Guard > Network filtering > Network protection.', type: 'unstyled', depth: 0, entityRanges: []}, {type: 'atomic', inlineStyleRanges: [], entityRanges: [{key: 12, length: 1, offset: 0}], key: '1ldqv', data: {}, depth: 0, text: ' '}, {inlineStyleRanges: [{style: 'BOLD', length: 4, offset: 105}, {length: 4, style: 'BOLD', offset: 149}, {offset: 161, length: 6, style: 'BOLD'}], key: 'fv1gg', data: {}, type: 'unstyled', depth: 0, text: '6. On the Assignments page click Add all users or select the user group you want to enable it for. Click Next. On the Applicability Rules page click Next. Click Create.', entityRanges: []}, {inlineStyleRanges: [], key: 'dn00l', depth: 0, data: {}, type: 'header-two', entityRanges: [], text: 'Notes about Bitlocker'}, {data: {}, type: 'unstyled', depth: 0, entityRanges: [], key: '2ngak', inlineStyleRanges: [], text: 'Enabling and configuring Bitlocker is possible with Intune. In short, you can encrypt a computer using Intune / Bitlocker and the user won\'t even know it\'s happening. Unfortunately, configuring Bitlocker would make this article too long but you may experience some questions about Bitlocker on the MS-500 so I\'ll answer those questions quickly below:'}, {key: '7uioj', inlineStyleRanges: [], text: 'Bitlocker to Go is Bitlocker for removable media. It is possible to encrypt removable media with Intune. You don\'t even need TPM on the Windows device. In short, you use Intune to protect removable media and then configure Bitlocker to require a passcode.', type: 'unordered-list-item', data: {}, entityRanges: [], depth: 0}, {entityRanges: [], inlineStyleRanges: [], type: 'unordered-list-item', key: '9bf27', data: {}, depth: 0, text: 'Bitlocker auto-unlock is also available through Intune. Bitlocker auto-unlock will automatically unlock data drives (for example a D: drive) when the OS drive (for example a C: drive) is unlocked. Bitlocker auto-unlock does not require TPM but it does require the OS drive to be encrypted.'}]}, images: ['https://i.ibb.co/YkcdP2T/Create-a-configuration-profile.png', 'https://i.ibb.co/kQXPK8N/name-the-configuration-profile.png', 'https://i.ibb.co/Y0C3Tbw/Disable-Telemetry-on-Windows-10-through-Intune.png', 'https://i.ibb.co/Df0QCPN/set-the-assignments.png', 'https://i.ibb.co/X3X4qWz/Device-restrictions-assignments.png', 'https://i.ibb.co/PDcFc1G/Enable-Smart-Screen.png', 'https://i.ibb.co/pQHYhXN/Enable-Smart-Screen.png', 'https://i.ibb.co/HPQ2m8t/Create-an-endpoint-protection-profile.png', 'https://i.ibb.co/2h9ntxm/Enable-Attack-Surface-Reduction-Policies.png', 'https://i.ibb.co/wcJ13dL/Enable-Folder-Protection.png', 'https://i.ibb.co/9TfVy5z/Enable-Network-Protection.png'], publish: true, id: '_LL9VqGZO', datePublished: '2022/6/20', description: 'Managing devices using Intune is typically done through configuration policies. Configuration policies are like group policies but more.'},
      nextContentSlug: 'Understanding-compliance-policies-qDRA4jjoN',
      previousContentSlug: 'Setting-up-Windows-10-devices-in-Intune-XFXu2zIS9',
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
                <div><p>Managing devices using Intune is typically done through configuration policies. Configuration policies are like group policies but more. If you don't know group policy, don't worry, I'll explain without the example.</p>
                  <p>Configuration policies allow you to configure the Intune connected devices. You can set all sorts of things. For example, you can require a password on the device. Configure BitLocker on Windows 10 devices and a whole lot more. Since Microsoft makes Windows (and Windows is more complicated than Android and iOS devices), there's more you can do with Windows devices than other manufacturers. So let's dig into managing Windows 10 devices Intune.</p>
                  <h2>Create a Windows 10 Device Configuration profile to set Telemetry data</h2>
                  <p>So let's start off easy. Let's say your boss (or a question on the MS-500) wants you to disable telemetry data from being sent to Microsoft. How do you do it? With a device configuration profile that has device restrictions configured! Let's jump in.</p>
                  <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices</strong> &gt; <strong>Windows </strong>&gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesWindowsMenu/configProfiles" target="_blank" rel="noreferrer"><strong>Configuration profiles</strong></a>. Click <strong>Create profile</strong>. Set the <strong>platform </strong>to <strong>Windows 10 and later</strong>. Set the <strong>profile type</strong> to <strong>templates</strong>. Select <strong>Device restriction</strong> under <strong>Template name</strong>. Click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/YkcdP2T/Create-a-configuration-profile.png" alt="Create a configuration profile" style="height: auto;width: auto" /></div>
                  <p>2. <strong>Name </strong>the profile "<strong>Disable telemetry</strong>" Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/kQXPK8N/name-the-configuration-profile.png" alt="Name the configuration profile" style="height: auto;width: auto" /></div>
                  <p>3. Scroll down and expand <strong>Reporting and telemetry</strong>. Set <strong>Share usage data </strong>to <strong>Diagnostic data off</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/Y0C3Tbw/Disable-Telemetry-on-Windows-10-through-Intune.png" alt="Disable Telemetry on Windows 10 through Intune" style="height: auto;width: auto" /></div>
                  <p>4. For Assignments click <strong>Add all users</strong>. (don't worry, I'll explain this section next.). Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/Df0QCPN/set-the-assignments.png" alt="Set the assignments in Intune" style="height: auto;width: auto" /></div>
                  <p>5. Click <strong>Next </strong>&gt; <strong>Create</strong>.</p>
                  <p>That's it. Now you just need to wait until your devices check-in and the policy will be applied.</p>
                  <h2>Understanding assignments in Intune</h2>
                  <div ><img src="https://i.ibb.co/X3X4qWz/Device-restrictions-assignments.png" alt="Device restrictions assignments" style="height: auto;width: auto" /></div>
                  <p />
                  <p>Assigning policies and profiles in Intune is important and can be a bit tricky so let's break it down. First is "included groups". Included groups are who or what machines are included in the role out of the profile. For example, in the telemetry profile above we set it to All Users. So that profile will apply to every user that logs onto a Windows 10 computer that checks into Intune. Why is it Windows 10 and later? Because when we created the profile we set "Windows 10 and later" as the platform. That profile won't affect Android, iOS, or Macs regardless of the users.</p>
                  <p>Now, you may have noticed in the assignments section there's an area for Excluded groups. Excluded groups take precedence over included groups. So if you select "All Users" in the included groups and then select "Accountants" in the excluded groups the profile will apply to All Users with the exception of the users in the "Accountants" group.</p>
                  <p>One last thing, you may have noticed you can assign policies (include or exclude) to users or device groups. What's the difference? Well, if you assign a profile to a device it doesn't matter who logs onto the device the profile will get applied. If you assign the profile to a user then any device (that meets the profile limits) that the user logs onto will get the profile.</p>
                  <p>Now, what happens when you mix the two? Let's take an example. If you assign a profile to the All Users users group but exclude an Accounts Devices device group. In this mixed group app assignment, All users get the profile. The exclusion does not apply. So Microsoft, and I recommend not mixing the two. Either assign and exclude users or assign and exclude devices, but don't try and mix and match.</p>
                  <h3>File obfuscation by using the registry</h3>
                  <p>Lastly, you can obscure files by using the registry. Simply create the following registry dword on the computer or save the following 3 lines to a file named Obfuscate.reg and then run the file on the computer.</p>
                  <p>Windows Registry Editor Version 5.00</p>
                  <p>[HKEY_CURRENT_USER\Software\Policies\Microsoft\Office\16.0\osm]</p>
                  <p>"EnableFileObfuscation"=dword:00000001</p>
                  <h2>How to enable SmartScreen</h2>
                  <p>So now that we've configured a basic configuration profile let's talk about Endpoint security. As you saw under the template name when creating the device configuration profile there are a ton of options available in the Device Configuration profiles section. Surprisingly, that's not the only place to perform device configuration. There are even more settings! So now let's enable SmartScreen.</p>
                  <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Endpoint security</strong> &gt; <strong>Attack surface reduction</strong>. Click <strong>Create Policy</strong>. Set the <strong>Platform </strong>to <strong>Windows 10 and later</strong>. Set the <strong>Profile </strong>to <strong>Application control</strong>. Click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/PDcFc1G/Enable-Smart-Screen.png" alt="Create an Attack surface reduction policy" style="height: auto;width: auto" /></div>
                  <p>2. Name the policy "<strong>Enable SmartScreen</strong>". Click <strong>Next</strong>.</p>
                  <p>3. Set <strong>App locker application control</strong> to <strong>Enforce Components, Store Apps, and Smartlocker</strong>. Set <strong>Turn on Windows SmartScreen</strong> to <strong>Yes</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/pQHYhXN/Enable-Smart-Screen.png" alt="Enable SmartScreen" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Next </strong>on the scope tags page. On the Assignments page set the Included groups to whatever group you want, for example, Intune Endpoint Protection. Set the excluded groups to whatever groups you want, for example, Intune Help Desk Operators. Click <strong>Next</strong>.</p>
                  <p>Now with that policy configured every user that is a member of the Included group above that is not a member of the Excluded group will have SmartScreen turned on. So in the example above every user that is a member of the Intune Endpoint Protection group that isn't a member of the Intune Help Desk Operators group will have SmartScreen enabled. Lastly, we configured SmartScreen to only warn users. The users can still bypass SmartScreen.</p>
                  <h2>How to enable Windows Defender Exploit Guard</h2>
                  <p><span >Windows Defender Exploit Guard</span> is another great way to reduce the attack surface of your Windows 10 devices. Let's enable Windows Defender Exploit Guard using an Endpoint protection device configuration.</p>
                  <p>1. Go to <strong>Microsoft Endpoint Manager admin center</strong> &gt; <strong>Devices </strong>&gt; <strong>Windows </strong>&gt; <a href="https://endpoint.microsoft.com/?ref=AdminCenter#blade/Microsoft_Intune_DeviceSettings/DevicesWindowsMenu/configProfiles" target="_blank" rel="noreferrer"><strong>Configuration profiles</strong></a>. Click <strong>Create profile</strong>. Set <strong>Platform </strong>to <strong>Windows 10 and later</strong>. Set <strong>Profile type</strong> to <strong>Templates</strong>. Set the <strong>Template name</strong> to <strong>Endpoint protection</strong>. Click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/HPQ2m8t/Create-an-endpoint-protection-profile.png" alt="Create an endpoint protection profile in Intune" style="height: auto;width: auto" /></div>
                  <p>2. Name the profile "<strong>Enable Windows Defender Exploit Guard</strong>". Click <strong>Next</strong>.</p>
                  <p>3. Set all the policies under <strong>Microsoft Defender Exploit Guard</strong> &gt; <strong>Attack Surface Reduction</strong> to either <strong>Enable </strong>or <strong>Block</strong>.</p>
                  <div ><img src="https://i.ibb.co/2h9ntxm/Enable-Attack-Surface-Reduction-Policies.png" alt="Enable Attack Surface Reduction Policies" style="height: auto;width: auto" /></div>
                  <p>4. Set the following to <strong>Enable</strong>: <strong>Microsoft Defender Exploit Guard</strong> &gt; <strong>Controlled folder access</strong> &gt; <strong>Folder protection</strong>.</p>
                  <div ><img src="https://i.ibb.co/wcJ13dL/Enable-Folder-Protection.png" alt="Enable Folder Protection" style="height: auto;width: auto" /></div>
                  <p>5. Set the following to <strong>Enable</strong>: <strong>Microsoft Defender Exploit Guard</strong> &gt; <strong>Network filtering</strong> &gt; <strong>Network protection</strong>.</p>
                  <div ><img src="https://i.ibb.co/9TfVy5z/Enable-Network-Protection.png" alt="Enable Network protection" style="height: auto;width: auto" /></div>
                  <p>6. On the Assignments page click Add all users or select the user group you want to enable it for. Click <strong>Next</strong>. On the Applicability Rules page click <strong>Next</strong>. Click <strong>Create</strong>.</p>
                  <h2>Notes about Bitlocker</h2>
                  <p>Enabling and configuring Bitlocker is possible with Intune. In short, you can encrypt a computer using Intune / Bitlocker and the user won't even know it's happening. Unfortunately, configuring Bitlocker would make this article too long but you may experience some questions about Bitlocker on the MS-500 so I'll answer those questions quickly below:</p>
                  <ul>
                    <li>Bitlocker to Go is Bitlocker for removable media. It is possible to encrypt removable media with Intune. You don't even need TPM on the Windows device. In short, you use Intune to protect removable media and then configure Bitlocker to require a passcode.</li>
                    <li>Bitlocker auto-unlock is also available through Intune. Bitlocker auto-unlock will automatically unlock data drives (for example a D: drive) when the OS drive (for example a C: drive) is unlocked. Bitlocker auto-unlock does not require TPM but it does require the OS drive to be encrypted.</li>
                  </ul>
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
