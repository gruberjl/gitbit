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
      path: '/course/ms-500/learn/Implement-Self-service-password-reset-in-Microsoft-365-2S9jn0aLr',
      article: {slug: 'Implement-Self-service-password-reset-in-Microsoft-365-2S9jn0aLr', featuredImage: 'https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png', id: '2S9jn0aLr', sectionId: 'AFV_acckJ', publish: true, title: 'Implement Self-service password reset in Microsoft 365', article: {entityMap: {0: {type: 'IMAGE', mutability: 'MUTABLE', data: {targetOption: '_blank', height: 'auto', src: 'https://i.ibb.co/bmn5HNg/view-current-ad-connect-settings.png', alignment: 'none', url: 'https://portal.office.com', width: 'auto', alt: 'View current AD connect settings'}}, 1: {mutability: 'MUTABLE', type: 'IMAGE', data: {url: 'https://portal.office.com', src: 'https://i.ibb.co/LkCDyjm/MSOL-account.png', alt: 'MSOL Account', height: 'auto', width: 'auto', alignment: 'none', targetOption: '_blank'}}, 2: {data: {height: 'auto', alignment: 'none', src: 'https://i.ibb.co/p4RPcvB/enable-advanced-features.png', alt: 'Enable Advanced features', url: 'https://portal.office.com', targetOption: '_blank', width: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 3: {mutability: 'MUTABLE', type: 'IMAGE', data: {src: 'https://i.ibb.co/HHD24wp/open-ad-properties.png', height: 'auto', alignment: 'none', targetOption: '_blank', url: 'https://portal.office.com', width: 'auto', alt: 'Open AD properties'}}, 4: {mutability: 'MUTABLE', type: 'IMAGE', data: {src: 'https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png', height: 'auto', url: 'https://portal.office.com', alignment: 'none', targetOption: '_blank', width: 'auto', alt: 'Open advanced properties'}}, 5: {mutability: 'MUTABLE', type: 'IMAGE', data: {alt: 'Add permissions in AD', width: 'auto', src: 'https://i.ibb.co/XVNpVjD/Add-Permissions.png', url: 'https://portal.office.com', alignment: 'none', height: 'auto', targetOption: '_blank'}}, 6: {type: 'IMAGE', data: {targetOption: '_blank', url: 'https://portal.office.com', src: 'https://i.ibb.co/TT4PC9t/select-a-principal-ad.png', width: 'auto', alignment: 'none', alt: 'Select a principal', height: 'auto'}, mutability: 'MUTABLE'}, 7: {data: {alt: 'Select Descendant User Objects', height: 'auto', src: 'https://i.ibb.co/YTznr3c/descendant-user-objects.png', url: 'https://portal.office.com', width: 'auto', targetOption: '_blank', alignment: 'none'}, type: 'IMAGE', mutability: 'MUTABLE'}, 8: {data: {url: 'https://portal.office.com', height: 'auto', width: 'auto', src: 'https://i.ibb.co/ch4C20T/reset-password.png', targetOption: '_blank', alignment: 'none', alt: 'Reset password permissions'}, type: 'IMAGE', mutability: 'MUTABLE'}, 9: {data: {width: 'auto', url: 'https://portal.office.com', src: 'https://i.ibb.co/JqLvsnC/write-lockouttime.png', height: 'auto', alignment: 'none', targetOption: '_blank', alt: 'Write lockoutTime'}, mutability: 'MUTABLE', type: 'IMAGE'}, 10: {data: {targetOption: '_blank', url: 'https://portal.office.com', alt: 'Write pwdLastSet', height: 'auto', width: 'auto', alignment: 'none', src: 'https://i.ibb.co/X3jDPmt/write-pwd-Last-Set.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 11: {type: 'IMAGE', data: {width: 'auto', height: 'auto', alignment: 'none', alt: 'Add permissions in AD', targetOption: '_blank', src: 'https://i.ibb.co/XVNpVjD/Add-Permissions.png', url: 'https://portal.office.com'}, mutability: 'MUTABLE'}, 12: {data: {height: 'auto', alignment: 'none', width: 'auto', url: 'https://portal.office.com', targetOption: '_blank', src: 'https://i.ibb.co/TT4PC9t/select-a-principal-ad.png', alt: 'Select a principal'}, mutability: 'MUTABLE', type: 'IMAGE'}, 13: {type: 'IMAGE', mutability: 'MUTABLE', data: {alt: 'Unexpire password', height: 'auto', targetOption: '_blank', width: 'auto', alignment: 'none', src: 'https://i.ibb.co/yBsDWSF/unexpire-password.png', url: 'https://portal.office.com'}}, 14: {data: {alignment: 'none', height: 'auto', targetOption: '_blank', src: 'https://i.ibb.co/SJvpG6h/customize-syncronization-options.png', alt: 'Customize synchronization options', width: 'auto', url: 'https://portal.office.com'}, type: 'IMAGE', mutability: 'MUTABLE'}, 15: {type: 'IMAGE', data: {url: 'https://portal.office.com', alignment: 'none', src: 'https://i.ibb.co/X3bdwkd/ad-connect-enter-global-admin-credentials.png', alt: 'AD Connect enter your global admin credentials', targetOption: '_blank', height: 'auto', width: 'auto'}, mutability: 'MUTABLE'}, 16: {mutability: 'MUTABLE', data: {height: 'auto', alt: 'Enable password write-back in AD Connect', targetOption: '_blank', alignment: 'none', width: 'auto', src: 'https://i.ibb.co/dkbsv38/enable-password-writeback-in-ad-connect.png', url: 'https://portal.office.com'}, type: 'IMAGE'}, 17: {type: 'IMAGE', data: {height: 'auto', alt: 'Password reset options in Microsoft 365', width: 'auto', url: 'https://portal.office.com', alignment: 'none', targetOption: '_blank', src: 'https://i.ibb.co/BnySDH5/password-reset-options-in-microsoft-365.png'}, mutability: 'MUTABLE'}, 18: {type: 'IMAGE', mutability: 'MUTABLE', data: {width: 'auto', src: 'https://i.ibb.co/nLP24yX/enable-sspr.png', url: 'https://portal.office.com', alignment: 'left', targetOption: '_blank', alt: 'Enable SSPR', height: 'auto'}}, 19: {type: 'IMAGE', data: {alt: 'Write-back on-premises integration', src: 'https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png', targetOption: '_blank', width: 'auto', height: 'auto', alignment: 'none', url: 'https://portal.office.com'}, mutability: 'MUTABLE'}, 20: {type: 'IMAGE', mutability: 'MUTABLE', data: {src: 'https://i.ibb.co/cJLFytw/manage-user-feature-settings.png', width: 'auto', alignment: 'none', url: 'https://portal.office.com', height: 'auto', targetOption: '_blank', alt: 'Microsoft 365 manage user feature settings'}}, 21: {mutability: 'MUTABLE', type: 'IMAGE', data: {src: 'https://i.ibb.co/61QhNtN/enable-combined-features.png', width: 'auto', alt: 'Microsoft 365 enabled combined features', height: 'auto', targetOption: '_blank', alignment: 'none', url: 'https://portal.office.com'}}, 22: {type: 'IMAGE', data: {targetOption: '_blank', alt: 'Microsoft 365 password reset authentication methods', height: 'auto', width: 'auto', alignment: 'none', url: 'https://portal.office.com', src: 'https://i.ibb.co/Tvwz6YJ/microsoft-365-password-reset-authentication-methods.png'}, mutability: 'MUTABLE'}, 23: {type: 'LINK', mutability: 'MUTABLE', data: {src: 'https://i.ibb.co/mX8t7P0/cant-access-your-account.png', alignment: 'left', url: 'https://portal.office.com', height: 'auto', targetOption: '_blank', alt: 'Can\'t access your account? Microsoft 365', width: 'auto'}}, 24: {data: {src: 'https://i.ibb.co/mX8t7P0/cant-access-your-account.png', alt: 'Can\'t access your account? Microsoft 365', height: 'auto', width: 'auto', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/', alignment: 'none', targetOption: '_blank'}, type: 'IMAGE', mutability: 'MUTABLE'}, 25: {type: 'IMAGE', data: {alignment: 'none', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/', height: 'auto', src: 'https://i.ibb.co/DYBGr63/which-type-of-account-do-you-need-help-with.png', width: 'auto', alt: 'Which type of account do you need help with?', targetOption: '_blank'}, mutability: 'MUTABLE'}, 26: {type: 'IMAGE', mutability: 'MUTABLE', data: {width: 'auto', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/', height: 'auto', alignment: 'none', alt: 'Get back into your account', src: 'https://i.ibb.co/V3qmVYF/get-back-into-your-account.png', targetOption: '_blank'}}, 27: {mutability: 'MUTABLE', data: {alignment: 'none', src: 'https://i.ibb.co/FHym3Rx/get-back-into-your-account-text.png', alt: 'Get back into your account text message', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/', height: 'auto', width: 'auto'}, type: 'IMAGE'}, 28: {type: 'IMAGE', data: {src: 'https://i.ibb.co/xYsJ3gy/enter-the-code-texted-to-you.png', width: 'auto', alt: 'Enter the code texted to you', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/', alignment: 'none', height: 'auto'}, mutability: 'MUTABLE'}, 29: {mutability: 'MUTABLE', type: 'IMAGE', data: {width: 'auto', src: 'https://i.ibb.co/T0TR946/choose-a-new-password.png', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/', height: 'auto', alt: 'Choose a new password in SSPR for Microsoft 365', alignment: 'none'}}, 30: {data: {url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/', targetOption: '_blank'}, type: 'LINK', mutability: 'MUTABLE'}}, blocks: [{depth: 0, data: {}, entityRanges: [], key: '99l3i', inlineStyleRanges: [], text: 'Self-service password reset (SSPR) is a possibility you\'re used to with other websites you log on to. For example, Gmail has a self-service password reset. In short, self-service password reset means a user that forgot their password can reset it without contacting an administrator. The user can authorize themselves in another fashion whether it\'s a text message using the Microsoft authenticator app or a phone call.', type: 'unstyled'}, {type: 'unstyled', data: {}, text: 'While self-service password reset doesn\'t enhance the security of your Microsoft 365 tenant it does reduce the call volume to your help desk.', depth: 0, inlineStyleRanges: [], entityRanges: [], key: '50pag'}, {data: {}, text: 'If you’re synchronizing your on-premises AD to Office 365 setting up a self-service password reset service isn\'t as easy as flipping a switch. The good thing about synchronizing your on-premises AD to Microsoft 365 and configuring a self-service password reset service is users can reset their on-premises AD password using the Microsoft 365 self-service portal. When configuring SSPR while you have AD connect configured Microsoft calls it password writeback. ', type: 'unstyled', key: '8st22', depth: 0, inlineStyleRanges: [], entityRanges: []}, {type: 'unstyled', entityRanges: [], key: '41prr', text: 'As I said earlier, configuring SSPR when synchronizing your user accounts from your on-premises AD isn\'t as easy as flipping a switch. First will need to configure the on-premises AD to allow Office 365 to reset the passwords. Then we all need to configure AD connect to allow users to reset their passwords. Finally, we’ll need to configure Microsoft 365 to allow users to reset their passwords.', data: {}, depth: 0, inlineStyleRanges: []}, {key: '8k2e0', data: {}, depth: 0, entityRanges: [], text: 'License Requirements', inlineStyleRanges: [], type: 'header-two'}, {type: 'unstyled', depth: 0, inlineStyleRanges: [], text: 'If you\'re configured with a Microsoft 365 cloud-only account, which means you\'re not using AD Connect to synchronize your on-premises AD to Office 365 then the self-service password reset it\'s free. If you are synchronizing your on-premises AD to Office 365 then you\'ll need an Azure AD Premium P1 license. Azure AD P1 licenses or included In Microsoft 365 business premium licensing. ', key: '9a8g6', entityRanges: [], data: {}}, {inlineStyleRanges: [], data: {}, text: 'Configuring on-premises AD to prepare for SSPR', type: 'header-two', key: '787je', depth: 0, entityRanges: []}, {inlineStyleRanges: [], depth: 0, data: {}, text: 'First, will need to give the AD connect account permission to reset users’ passwords. ', key: 'a2pog', type: 'unstyled', entityRanges: []}, {data: {}, text: '1. Log onto the server that has AD Connect installed.', inlineStyleRanges: [], key: 'as01e', entityRanges: [], type: 'unstyled', depth: 0}, {entityRanges: [], text: '2. Open Azure AD Connect. Click Configure. Click View or export current configuration. Click Next.', inlineStyleRanges: [{style: 'BOLD', offset: 32, length: 9}, {offset: 49, style: 'BOLD', length: 36}, {length: 4, style: 'BOLD', offset: 93}], key: 'cm2v', depth: 0, type: 'unstyled', data: {}}, {depth: 0, text: ' ', entityRanges: [{length: 1, key: 0, offset: 0}], inlineStyleRanges: [], type: 'atomic', data: {}, key: '7oa1a'}, {inlineStyleRanges: [{style: 'BOLD', offset: 41, length: 24}, {offset: 68, length: 7, style: 'BOLD'}], text: '3. Take note of the account listed under Synchronized Directories > Account.', entityRanges: [], key: 'bpf5q', type: 'unstyled', data: {}, depth: 0}, {type: 'atomic', key: 'eaf2b', entityRanges: [{length: 1, offset: 0, key: 1}], text: ' ', depth: 0, data: {}, inlineStyleRanges: []}, {entityRanges: [], key: '6nssr', data: {}, type: 'unstyled', depth: 0, text: '4. Exit the AD Connect wizard.', inlineStyleRanges: []}, {key: 'eqmv5', text: '5. Login onto a server that has Active Directory Users & Computers.', depth: 0, data: {}, type: 'unstyled', entityRanges: [], inlineStyleRanges: []}, {key: '8prr3', depth: 0, entityRanges: [], text: '6. Open Active Directory Users and Computers. Click View > Advanced Features\n(if there is a checkbox next to Advanced Features then don’t click it.)', data: {}, inlineStyleRanges: [{length: 5, offset: 52, style: 'BOLD'}, {style: 'BOLD', length: 17, offset: 59}], type: 'unstyled'}, {entityRanges: [{length: 1, offset: 0, key: 2}], type: 'atomic', depth: 0, inlineStyleRanges: [], text: ' ', data: {}, key: '61qj6'}, {type: 'unstyled', entityRanges: [], depth: 0, inlineStyleRanges: [{length: 10, offset: 33, style: 'BOLD'}], data: {}, key: 'es4f0', text: '7. Right-click the root domain > Properties.'}, {entityRanges: [{offset: 0, length: 1, key: 3}], depth: 0, text: ' ', inlineStyleRanges: [], key: 'bh42i', type: 'atomic', data: {}}, {data: {}, key: 'dt4np', inlineStyleRanges: [{length: 8, style: 'BOLD', offset: 13}, {length: 8, style: 'BOLD', offset: 28}], depth: 0, entityRanges: [], text: '8. Click the Security tab > Advanced.', type: 'unstyled'}, {entityRanges: [{key: 4, length: 1, offset: 0}], depth: 0, text: ' ', key: '4gdct', data: {}, type: 'atomic', inlineStyleRanges: []}, {type: 'unstyled', depth: 0, inlineStyleRanges: [{offset: 9, length: 3, style: 'BOLD'}], data: {}, entityRanges: [], text: '9. Click Add.', key: '3o9fq'}, {data: {}, depth: 0, text: ' ', key: '3kdp8', type: 'atomic', entityRanges: [{key: 5, length: 1, offset: 0}], inlineStyleRanges: []}, {text: '10. Click Select a principal > enter the name of the account you found in step 3 above. Click OK.', data: {}, entityRanges: [], depth: 0, key: '86tnj', inlineStyleRanges: [{length: 18, offset: 10, style: 'BOLD'}, {style: 'BOLD', offset: 94, length: 2}], type: 'unstyled'}, {text: ' ', entityRanges: [{key: 6, offset: 0, length: 1}], key: '2fuu0', depth: 0, data: {}, inlineStyleRanges: [], type: 'atomic'}, {entityRanges: [], key: 'cm1cb', depth: 0, data: {}, text: '11. Click the Applies to drop-down and select Descendant User Objects.', inlineStyleRanges: [{offset: 14, style: 'BOLD', length: 10}, {length: 23, style: 'BOLD', offset: 46}], type: 'unstyled'}, {depth: 0, data: {}, entityRanges: [{key: 7, length: 1, offset: 0}], key: '7vgee', text: ' ', inlineStyleRanges: [], type: 'atomic'}, {depth: 0, text: '12. Click Reset password (located under Permissions).', key: 'cs4cg', inlineStyleRanges: [{length: 14, offset: 10, style: 'BOLD'}], type: 'unstyled', entityRanges: [], data: {}}, {key: '2tt2j', entityRanges: [{key: 8, length: 1, offset: 0}], data: {}, text: ' ', type: 'atomic', depth: 0, inlineStyleRanges: []}, {inlineStyleRanges: [{length: 17, offset: 19, style: 'BOLD'}], type: 'unstyled', depth: 0, text: '13. Find and check Write lockoutTime.', entityRanges: [], key: '7le94', data: {}}, {type: 'atomic', depth: 0, data: {}, key: '8ulo2', inlineStyleRanges: [], text: ' ', entityRanges: [{key: 9, length: 1, offset: 0}]}, {text: '14. Find and check Write pwdLastSet.', data: {}, inlineStyleRanges: [{length: 16, style: 'BOLD', offset: 19}], depth: 0, entityRanges: [], key: '7rbqe', type: 'unstyled'}, {text: ' ', depth: 0, type: 'atomic', data: {}, inlineStyleRanges: [], entityRanges: [{offset: 0, length: 1, key: 10}], key: 'f9uab'}, {depth: 0, type: 'unstyled', entityRanges: [], inlineStyleRanges: [{style: 'BOLD', offset: 10, length: 2}], data: {}, text: '15. Click OK.', key: 'ck07t'}, {data: {}, type: 'unstyled', depth: 0, key: 'en51p', entityRanges: [], inlineStyleRanges: [{offset: 10, length: 3, style: 'BOLD'}], text: '16. Click Add again.'}, {key: '7138s', depth: 0, type: 'atomic', entityRanges: [{offset: 0, key: 11, length: 1}], data: {}, text: ' ', inlineStyleRanges: []}, {data: {}, inlineStyleRanges: [{style: 'BOLD', length: 18, offset: 10}, {style: 'BOLD', length: 2, offset: 94}], depth: 0, text: '17. Click Select a principal > enter the name of the account you found in step 3 above. Click OK.', type: 'unstyled', entityRanges: [], key: '3ugq1'}, {text: ' ', type: 'atomic', inlineStyleRanges: [], depth: 0, data: {}, entityRanges: [{offset: 0, key: 12, length: 1}], key: '4k0t6'}, {type: 'unstyled', depth: 0, key: 'cnlsr', data: {}, inlineStyleRanges: [{offset: 10, style: 'BOLD', length: 17}, {style: 'BOLD', length: 3, offset: 35}], entityRanges: [], text: '18. Click Unexpire password. Click OK until you’ve closed all the windows.'}, {type: 'atomic', depth: 0, key: 'c7gbb', data: {}, entityRanges: [{offset: 0, key: 13, length: 1}], inlineStyleRanges: [], text: ' '}, {text: 'Configure password writeback in AD Connect', depth: 0, data: {}, key: '9ggf5', inlineStyleRanges: [], type: 'header-two', entityRanges: []}, {type: 'unstyled', entityRanges: [], text: 'Next, we’ll need to enable password write-back in AD Connect.', key: '72hor', depth: 0, inlineStyleRanges: [], data: {}}, {data: {}, type: 'unstyled', depth: 0, text: '1. Logon to the AD Connect server.', entityRanges: [], key: '7glma', inlineStyleRanges: []}, {type: 'unstyled', entityRanges: [], text: '2. Double click Azure AD Connect.', inlineStyleRanges: [], depth: 0, data: {}, key: '1015m'}, {entityRanges: [], text: '3. Click Configure.', data: {}, key: '8mbnr', type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', length: 9, offset: 9}], depth: 0}, {text: '4. Click Customize synchronization options. Click Next.', depth: 0, key: '7hs6v', data: {}, entityRanges: [], inlineStyleRanges: [{style: 'BOLD', length: 33, offset: 9}, {style: 'BOLD', length: 4, offset: 50}], type: 'unstyled'}, {entityRanges: [{key: 14, length: 1, offset: 0}], inlineStyleRanges: [], key: '15hum', depth: 0, text: ' ', type: 'atomic', data: {}}, {entityRanges: [], inlineStyleRanges: [{offset: 60, length: 4, style: 'BOLD'}], depth: 0, type: 'unstyled', key: 'anlrb', text: '5. Enter your Microsoft 365 global admin credentials. Click Next. If required, re-enter your credentials in the space provided.', data: {}}, {inlineStyleRanges: [], key: 'fnde8', depth: 0, entityRanges: [{key: 15, length: 1, offset: 0}], text: ' ', data: {}, type: 'atomic'}, {type: 'unstyled', inlineStyleRanges: [{offset: 47, length: 4, style: 'BOLD'}], entityRanges: [], text: '6. On the Connect your directories page, click Next.', data: {}, key: 'fma85', depth: 0}, {inlineStyleRanges: [{offset: 46, style: 'BOLD', length: 4}], data: {}, text: '7. On the Domain and OU filtering page, click Next.', type: 'unstyled', depth: 0, entityRanges: [], key: '3a5g8'}, {data: {}, entityRanges: [], inlineStyleRanges: [{length: 18, style: 'BOLD', offset: 40}, {offset: 66, style: 'BOLD', length: 4}], key: 'a8ofi', depth: 0, text: '8. On the Optional features page, click Password writeback. Click Next.', type: 'unstyled'}, {entityRanges: [{key: 16, length: 1, offset: 0}], data: {}, type: 'atomic', depth: 0, text: ' ', key: 'btqoj', inlineStyleRanges: []}, {depth: 0, key: '63pq', data: {}, text: '9. On the Ready to configure page, click Configure.', type: 'unstyled', inlineStyleRanges: [{length: 9, offset: 41, style: 'BOLD'}], entityRanges: []}, {depth: 0, entityRanges: [], data: {}, text: '10. Wait until the configuration is complete. Then click Exit.', inlineStyleRanges: [{offset: 57, length: 4, style: 'BOLD'}], type: 'unstyled', key: '77m03'}, {type: 'header-two', inlineStyleRanges: [], data: {}, key: 'e858h', text: 'Enable SSPR in Microsoft 365', entityRanges: [], depth: 0}, {type: 'unstyled', key: 'b3334', depth: 0, entityRanges: [], text: 'Lastly, we need to enable self-service password reset in Microsoft 365.', data: {}, inlineStyleRanges: []}, {data: {}, type: 'unstyled', entityRanges: [], key: 'rl50', text: '1. Open Azure Active Directory admin center and login with a global admin account > Azure Active Directory > Password Reset.', inlineStyleRanges: [{length: 22, offset: 84, style: 'BOLD'}, {length: 14, offset: 109, style: 'BOLD'}], depth: 0}, {entityRanges: [{key: 17, length: 1, offset: 0}], inlineStyleRanges: [], data: {}, key: 'agdc8', type: 'atomic', depth: 0, text: ' '}, {data: {}, entityRanges: [], key: '3n121', depth: 0, inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 4}, {offset: 48, style: 'BOLD', length: 4}], type: 'unstyled', text: '2. Click All to enable SSPR for everyone. Click Save.'}, {depth: 0, key: '8lbs7', data: {}, text: ' ', type: 'atomic', entityRanges: [{offset: 0, key: 18, length: 1}], inlineStyleRanges: []}, {text: '3. Go to on-premises integration. Click Yes under Write back passwords to your on-premises directory. Click Save.', data: {}, type: 'unstyled', key: '6g0bn', depth: 0, inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 23}, {style: 'BOLD', length: 3, offset: 40}, {offset: 108, style: 'BOLD', length: 4}], entityRanges: []}, {depth: 0, text: ' ', type: 'atomic', data: {}, entityRanges: [{length: 1, key: 19, offset: 0}], key: '354du', inlineStyleRanges: []}, {type: 'header-two', text: 'Enable combined registration', key: '5ipa8', entityRanges: [], inlineStyleRanges: [], data: {}, depth: 0}, {depth: 0, data: {}, entityRanges: [], text: 'Enabling combined registration will mean users will only need to register a device once for a multifactor and self-service password reset. Without enabling combined registration users will need to add their cell phone twice. This feature is already enabled for new tenants. ', key: 'di9m7', inlineStyleRanges: [], type: 'unstyled'}, {entityRanges: [], depth: 0, text: '1. log in to Azure Active Directory admin center with global admin credentials.', type: 'unstyled', data: {}, key: 'fn0rf', inlineStyleRanges: []}, {key: 'ec459', entityRanges: [], text: '2. Go to Azure Active Directory > User Settings > Manage user feature settings.', type: 'unstyled', data: {}, depth: 0, inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 22}, {length: 13, style: 'BOLD', offset: 34}, {style: 'BOLD', length: 28, offset: 50}]}, {inlineStyleRanges: [], data: {}, entityRanges: [{offset: 0, length: 1, key: 20}], type: 'atomic', key: 'cea92', depth: 0, text: ' '}, {entityRanges: [], key: '9d0ia', text: '3. Click All under Users can use the combined security information registration experience. Click Save.', type: 'unstyled', depth: 0, data: {}, inlineStyleRanges: [{style: 'BOLD', length: 3, offset: 9}, {offset: 98, style: 'BOLD', length: 4}]}, {inlineStyleRanges: [], data: {}, key: '66k3g', depth: 0, entityRanges: [{key: 21, offset: 0, length: 1}], text: ' ', type: 'atomic'}, {key: '57dca', entityRanges: [], type: 'header-two', inlineStyleRanges: [], text: 'Set authentication methods and harden security', depth: 0, data: {}}, {data: {}, entityRanges: [], inlineStyleRanges: [], text: 'So now we\'ve configured self-service password reset but how do we harden the security? There is a couple of ways. First, let\'s jump into the authentication methods.', key: '9u4mk', depth: 0, type: 'unstyled'}, {entityRanges: [], depth: 0, type: 'unstyled', data: {}, inlineStyleRanges: [{style: 'BOLD', offset: 82, length: 22}, {length: 14, offset: 107, style: 'BOLD'}, {offset: 124, length: 22, style: 'BOLD'}], key: 'filnu', text: '1. Sign in to Azure Active Directory admin center with a global admin. Then go to Azure Active Directory > Password reset > Authentication methods.'}, {key: '8c4v1', text: '2. If you want to require a user to have 2 methods of authentication when resetting the password click 2.', type: 'unstyled', data: {}, entityRanges: [], depth: 0, inlineStyleRanges: [{length: 1, offset: 103, style: 'BOLD'}]}, {entityRanges: [], depth: 0, text: '3. If you want to allow the users to provide answers to security questions or an office phone to authenticate click the checkboxes.', data: {}, key: '3r5pq', inlineStyleRanges: [], type: 'unstyled'}, {text: ' ', entityRanges: [{length: 1, key: 22, offset: 0}], key: 'dh89s', depth: 0, data: {}, type: 'atomic', inlineStyleRanges: []}, {data: {}, type: 'unstyled', text: '4. Click Save.', depth: 0, entityRanges: [], key: '9439q', inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 4}]}, {type: 'header-two', data: {}, depth: 0, text: 'End-users experience setting up their own authentication methods', entityRanges: [], key: 'b2u51', inlineStyleRanges: []}, {depth: 0, key: '1nd8d', type: 'unstyled', text: 'Now self-service password reset is enabled for your tenant. How do users configure their authentication methods? It’s easy.', data: {}, entityRanges: [], inlineStyleRanges: []}, {entityRanges: [], type: 'unstyled', key: 'cuc72', text: '1. Go to https://portal.office.com', inlineStyleRanges: [], data: {}, depth: 0}, {text: '2. Login with their work credentials.', data: {}, depth: 0, key: 'c80lc', type: 'unstyled', inlineStyleRanges: [], entityRanges: []}, {inlineStyleRanges: [], type: 'unstyled', entityRanges: [], depth: 0, text: '3. On the More information required page click Next.', data: {}, key: '4urts'}, {entityRanges: [], depth: 0, inlineStyleRanges: [], data: {}, key: '3dt5v', type: 'unstyled', text: '4. Enter your phone number in the space provided. Click Next.'}, {entityRanges: [], inlineStyleRanges: [], text: '5. Enter the code that’s texted to you. Click Next.', depth: 0, type: 'unstyled', key: 'boohp', data: {}}, {data: {}, text: '6. Click Next > Done.', key: '2hced', inlineStyleRanges: [], depth: 0, entityRanges: [], type: 'unstyled'}, {data: {}, key: 'am0b4', type: 'header-two', depth: 0, text: 'End-user experience resetting their passwords', entityRanges: [], inlineStyleRanges: []}, {type: 'unstyled', depth: 0, entityRanges: [], key: '8l6f2', inlineStyleRanges: [], data: {}, text: 'In this section, I\'ll explain the end-user experience of resetting their passwords. '}, {key: '2c42q', data: {}, entityRanges: [{length: 25, offset: 9, key: 23}], depth: 0, type: 'unstyled', text: '1. Go to https://portal.office.com ', inlineStyleRanges: []}, {entityRanges: [], text: '2. Click Can’t access your account?', data: {}, inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 26}], depth: 0, key: '3uqvv', type: 'unstyled'}, {inlineStyleRanges: [], entityRanges: [{offset: 0, length: 1, key: 24}], depth: 0, type: 'atomic', data: {}, key: '53qrh', text: ' '}, {key: '85jjj', entityRanges: [], inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 22}], text: '3. Click Work or school account.', data: {}, type: 'unstyled', depth: 0}, {key: 'amp15', depth: 0, data: {}, text: ' ', entityRanges: [{key: 25, offset: 0, length: 1}], inlineStyleRanges: [], type: 'atomic'}, {depth: 0, data: {}, text: '4. Enter your username in the space provided. Fill out the CAPTCHA in the space provided. Click Next.', key: '2ne0i', entityRanges: [], inlineStyleRanges: [{offset: 96, style: 'BOLD', length: 4}], type: 'unstyled'}, {key: 'dhlks', entityRanges: [{length: 1, offset: 0, key: 26}], data: {}, depth: 0, type: 'atomic', inlineStyleRanges: [], text: ' '}, {key: 'd5bsi', inlineStyleRanges: [{length: 4, offset: 56, style: 'BOLD'}], data: {}, entityRanges: [], type: 'unstyled', depth: 0, text: '5. Enter your phone number in the space provided. Click Text.'}, {depth: 0, entityRanges: [{length: 1, key: 27, offset: 0}], inlineStyleRanges: [], text: ' ', key: 'f0e7q', data: {}, type: 'atomic'}, {data: {}, type: 'unstyled', key: 'ej3pr', text: '6. Enter the code texted to you. Click Next.', entityRanges: [], inlineStyleRanges: [{offset: 39, length: 4, style: 'BOLD'}], depth: 0}, {data: {}, entityRanges: [{offset: 0, length: 1, key: 28}], inlineStyleRanges: [], type: 'atomic', text: ' ', key: '6fgbb', depth: 0}, {entityRanges: [], inlineStyleRanges: [{style: 'BOLD', length: 6, offset: 40}], type: 'unstyled', key: 'drq70', depth: 0, data: {}, text: '7. Enter your new password twice. Click Finish.'}, {entityRanges: [{offset: 0, length: 1, key: 29}], data: {}, key: 'p0sn', type: 'atomic', inlineStyleRanges: [], depth: 0, text: ' '}, {inlineStyleRanges: [], depth: 0, key: '6f977', text: 'There are a few more settings that can be changed in https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/  so be sure to take a look.', entityRanges: [{key: 30, offset: 53, length: 77}], data: {}, type: 'unstyled'}]}, type: 'article', datePublished: '2022/5/26', images: ['https://i.ibb.co/T0TR946/choose-a-new-password.png', 'https://i.ibb.co/xYsJ3gy/enter-the-code-texted-to-you.png', 'https://i.ibb.co/FHym3Rx/get-back-into-your-account-text.png', 'https://i.ibb.co/JRjc77D/enter-the-code.png', 'https://i.ibb.co/mX8t7P0/cant-access-your-account.png', 'https://i.ibb.co/DYBGr63/which-type-of-account-do-you-need-help-with.png', 'https://i.ibb.co/V3qmVYF/get-back-into-your-account.png', 'https://i.ibb.co/Tvwz6YJ/microsoft-365-password-reset-authentication-methods.png', 'https://i.ibb.co/cJLFytw/manage-user-feature-settings.png', 'https://i.ibb.co/61QhNtN/enable-combined-features.png', 'https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png', 'https://i.ibb.co/nLP24yX/enable-sspr.png', 'https://i.ibb.co/BnySDH5/password-reset-options-in-microsoft-365.png', 'https://i.ibb.co/dkbsv38/enable-password-writeback-in-ad-connect.png', 'https://i.ibb.co/X3bdwkd/ad-connect-enter-global-admin-credentials.png', 'https://i.ibb.co/yBsDWSF/unexpire-password.png', 'https://i.ibb.co/SJvpG6h/customize-syncronization-options.png', 'https://i.ibb.co/X3jDPmt/write-pwd-Last-Set.png', 'https://i.ibb.co/JqLvsnC/write-lockouttime.png', 'https://i.ibb.co/ch4C20T/reset-password.png', 'https://i.ibb.co/YTznr3c/descendant-user-objects.png', 'https://i.ibb.co/TT4PC9t/select-a-principal-ad.png', 'https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png', 'https://i.ibb.co/TT4PC9t/select-a-principal-ad.png', 'https://i.ibb.co/XVNpVjD/Add-Permissions.png', 'https://i.ibb.co/XVNpVjD/Add-Permissions.png', 'https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png', 'https://i.ibb.co/HHD24wp/open-ad-properties.png', 'https://i.ibb.co/p4RPcvB/enable-advanced-features.png', 'https://i.ibb.co/LkCDyjm/MSOL-account.png', 'https://i.ibb.co/bmn5HNg/view-current-ad-connect-settings.png'], description: 'Self-service password reset in Microsoft 365 is a great way to empower users and decrease call volume to your IT help desk.'},
      nextContentSlug: 'Locking-down-your-Microsoft-365-tenant-from-Microsoft-engineers-FldNualGC',
      previousContentSlug: 'The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk',
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
                <div><p>Self-service password reset (SSPR) is a possibility you're used to with other websites you log on to. For example, Gmail has a self-service password reset. In short, self-service password reset means a user that forgot their password can reset it without contacting an administrator. The user can authorize themselves in another fashion whether it's a text message using the Microsoft authenticator app or a phone call.</p>
                  <p>While self-service password reset doesn't enhance the security of your Microsoft 365 tenant it does reduce the call volume to your help desk.</p>
                  <p>If you’re synchronizing your on-premises AD to Office 365 setting up a self-service password reset service isn't as easy as flipping a switch. The good thing about synchronizing your on-premises AD to Microsoft 365 and configuring a self-service password reset service is users can reset their on-premises AD password using the Microsoft 365 self-service portal. When configuring SSPR while you have AD connect configured Microsoft calls it password writeback.&nbsp;</p>
                  <p>As I said earlier, configuring SSPR when synchronizing your user accounts from your on-premises AD isn't as easy as flipping a switch. First will need to configure the on-premises AD to allow Office 365 to reset the passwords. Then we all need to configure AD connect to allow users to reset their passwords. Finally, we’ll need to configure Microsoft 365 to allow users to reset their passwords.</p>
                  <h2>License Requirements</h2>
                  <p>If you're configured with a Microsoft 365 cloud-only account, which means you're not using AD Connect to synchronize your on-premises AD to Office 365 then the self-service password reset it's free. If you are synchronizing your on-premises AD to Office 365 then you'll need an Azure AD Premium P1 license. Azure AD P1 licenses or included In Microsoft 365 business premium licensing.&nbsp;</p>
                  <h2>Configuring on-premises AD to prepare for SSPR</h2>
                  <p>First, will need to give the AD connect account permission to reset users’ passwords.&nbsp;</p>
                  <p>1. Log onto the server that has AD Connect installed.</p>
                  <p>2. Open Azure AD Connect. Click <strong>Configure</strong>. Click <strong>View or export current configuration</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/bmn5HNg/view-current-ad-connect-settings.png" alt="View current AD connect settings" style="height: auto;width: auto" /></div>
                  <p>3. Take note of the account listed under <strong>Synchronized Directories</strong> &gt; <strong>Account</strong>.</p>
                  <div ><img src="https://i.ibb.co/LkCDyjm/MSOL-account.png" alt="MSOL Account" style="height: auto;width: auto" /></div>
                  <p>4. Exit the AD Connect wizard.</p>
                  <p>5. Login onto a server that has Active Directory Users &amp; Computers.</p>
                  <p>6. Open Active Directory Users and Computers. Click <strong>View </strong>&gt; <strong>Advanced Features</strong><br />(if there is a checkbox next to Advanced Features then don’t click it.)</p>
                  <div ><img src="https://i.ibb.co/p4RPcvB/enable-advanced-features.png" alt="Enable Advanced features" style="height: auto;width: auto" /></div>
                  <p>7. Right-click the root domain &gt; <strong>Properties</strong>.</p>
                  <div ><img src="https://i.ibb.co/HHD24wp/open-ad-properties.png" alt="Open AD properties" style="height: auto;width: auto" /></div>
                  <p>8. Click the <strong>Security</strong> tab &gt; <strong>Advanced</strong>.</p>
                  <div ><img src="https://i.ibb.co/4fpNryL/open-advanced-properties-in-ad.png" alt="Open advanced properties" style="height: auto;width: auto" /></div>
                  <p>9. Click <strong>Add</strong>.</p>
                  <div ><img src="https://i.ibb.co/XVNpVjD/Add-Permissions.png" alt="Add permissions in AD" style="height: auto;width: auto" /></div>
                  <p>10. Click <strong>Select a principal</strong> &gt; enter the name of the account you found in step 3 above. Click <strong>OK</strong>.</p>
                  <div ><img src="https://i.ibb.co/TT4PC9t/select-a-principal-ad.png" alt="Select a principal" style="height: auto;width: auto" /></div>
                  <p>11. Click the <strong>Applies to</strong> drop-down and select <strong>Descendant User Objects</strong>.</p>
                  <div ><img src="https://i.ibb.co/YTznr3c/descendant-user-objects.png" alt="Select Descendant User Objects" style="height: auto;width: auto" /></div>
                  <p>12. Click <strong>Reset password</strong> (located under Permissions).</p>
                  <div ><img src="https://i.ibb.co/ch4C20T/reset-password.png" alt="Reset password permissions" style="height: auto;width: auto" /></div>
                  <p>13. Find and check <strong>Write lockoutTime</strong>.</p>
                  <div ><img src="https://i.ibb.co/JqLvsnC/write-lockouttime.png" alt="Write lockoutTime" style="height: auto;width: auto" /></div>
                  <p>14. Find and check <strong>Write pwdLastSet</strong>.</p>
                  <div ><img src="https://i.ibb.co/X3jDPmt/write-pwd-Last-Set.png" alt="Write pwdLastSet" style="height: auto;width: auto" /></div>
                  <p>15. Click <strong>OK</strong>.</p>
                  <p>16. Click <strong>Add</strong> again.</p>
                  <div ><img src="https://i.ibb.co/XVNpVjD/Add-Permissions.png" alt="Add permissions in AD" style="height: auto;width: auto" /></div>
                  <p>17. Click <strong>Select a principal</strong> &gt; enter the name of the account you found in step 3 above. Click <strong>OK</strong>.</p>
                  <div ><img src="https://i.ibb.co/TT4PC9t/select-a-principal-ad.png" alt="Select a principal" style="height: auto;width: auto" /></div>
                  <p>18. Click <strong>Unexpire password</strong>. Click <strong>OK </strong>until you’ve closed all the windows.</p>
                  <div ><img src="https://i.ibb.co/yBsDWSF/unexpire-password.png" alt="Unexpire password" style="height: auto;width: auto" /></div>
                  <h2>Configure password writeback in AD Connect</h2>
                  <p>Next, we’ll need to enable password write-back in AD Connect.</p>
                  <p>1. Logon to the AD Connect server.</p>
                  <p>2. Double click Azure AD Connect.</p>
                  <p>3. Click <strong>Configure</strong>.</p>
                  <p>4. Click <strong>Customize synchronization options</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/SJvpG6h/customize-syncronization-options.png" alt="Customize synchronization options" style="height: auto;width: auto" /></div>
                  <p>5. Enter your Microsoft 365 global admin credentials. Click <strong>Next</strong>. If required, re-enter your credentials in the space provided.</p>
                  <div ><img src="https://i.ibb.co/X3bdwkd/ad-connect-enter-global-admin-credentials.png" alt="AD Connect enter your global admin credentials" style="height: auto;width: auto" /></div>
                  <p>6. On the Connect your directories page, click <strong>Next</strong>.</p>
                  <p>7. On the Domain and OU filtering page, click <strong>Next</strong>.</p>
                  <p>8. On the Optional features page, click <strong>Password writeback</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/dkbsv38/enable-password-writeback-in-ad-connect.png" alt="Enable password write-back in AD Connect" style="height: auto;width: auto" /></div>
                  <p>9. On the Ready to configure page, click <strong>Configure</strong>.</p>
                  <p>10. Wait until the configuration is complete. Then click <strong>Exit</strong>.</p>
                  <h2>Enable SSPR in Microsoft 365</h2>
                  <p>Lastly, we need to enable self-service password reset in Microsoft 365.</p>
                  <p>1. Open Azure Active Directory admin center and login with a global admin account &gt; <strong>Azure Active Directory</strong> &gt; <strong>Password Reset</strong>.</p>
                  <div ><img src="https://i.ibb.co/BnySDH5/password-reset-options-in-microsoft-365.png" alt="Password reset options in Microsoft 365" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>All </strong>to enable SSPR for everyone. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/nLP24yX/enable-sspr.png" alt="Enable SSPR" style="height: auto;width: auto" /></div>
                  <p>3. Go to <strong>on-premises integration</strong>. Click <strong>Yes</strong> under Write back passwords to your on-premises directory. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/58y9JVg/write-back-passwords-to-on-premises-directory.png" alt="Write-back on-premises integration" style="height: auto;width: auto" /></div>
                  <h2>Enable combined registration</h2>
                  <p>Enabling combined registration will mean users will only need to register a device once for a multifactor and self-service password reset. Without enabling combined registration users will need to add their cell phone twice. This feature is already enabled for new tenants.&nbsp;</p>
                  <p>1. log in to Azure Active Directory admin center with global admin credentials.</p>
                  <p>2. Go to <strong>Azure Active Directory</strong> &gt; <strong>User Settings</strong> &gt; <strong>Manage user feature settings</strong>.</p>
                  <div ><img src="https://i.ibb.co/cJLFytw/manage-user-feature-settings.png" alt="Microsoft 365 manage user feature settings" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>All</strong> under Users can use the combined security information registration experience. Click <strong>Save</strong>.</p>
                  <div ><img src="https://i.ibb.co/61QhNtN/enable-combined-features.png" alt="Microsoft 365 enabled combined features" style="height: auto;width: auto" /></div>
                  <h2>Set authentication methods and harden security</h2>
                  <p>So now we've configured self-service password reset but how do we harden the security? There is a couple of ways. First, let's jump into the authentication methods.</p>
                  <p>1. Sign in to Azure Active Directory admin center with a global admin. Then go to <strong>Azure Active Directory</strong> &gt; <strong>Password reset</strong> &gt; <strong>Authentication methods</strong>.</p>
                  <p>2. If you want to require a user to have 2 methods of authentication when resetting the password click <strong>2</strong>.</p>
                  <p>3. If you want to allow the users to provide answers to security questions or an office phone to authenticate click the checkboxes.</p>
                  <div ><img src="https://i.ibb.co/Tvwz6YJ/microsoft-365-password-reset-authentication-methods.png" alt="Microsoft 365 password reset authentication methods" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Save</strong>.</p>
                  <h2>End-users experience setting up their own authentication methods</h2>
                  <p>Now self-service password reset is enabled for your tenant. How do users configure their authentication methods? It’s easy.</p>
                  <p>1. Go to https://portal.office.com</p>
                  <p>2. Login with their work credentials.</p>
                  <p>3. On the More information required page click Next.</p>
                  <p>4. Enter your phone number in the space provided. Click Next.</p>
                  <p>5. Enter the code that’s texted to you. Click Next.</p>
                  <p>6. Click Next &gt; Done.</p>
                  <h2>End-user experience resetting their passwords</h2>
                  <p>In this section, I'll explain the end-user experience of resetting their passwords.&nbsp;</p>
                  <p>1. Go to <a href="https://portal.office.com" target="_blank" rel="noreferrer">https://portal.office.com</a>&nbsp;</p>
                  <p>2. Click <strong>Can’t access your account?</strong></p>
                  <div ><img src="https://i.ibb.co/mX8t7P0/cant-access-your-account.png" alt="Can't access your account? Microsoft 365" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Work or school account</strong>.</p>
                  <div ><img src="https://i.ibb.co/DYBGr63/which-type-of-account-do-you-need-help-with.png" alt="Which type of account do you need help with?" style="height: auto;width: auto" /></div>
                  <p>4. Enter your username in the space provided. Fill out the CAPTCHA in the space provided. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/V3qmVYF/get-back-into-your-account.png" alt="Get back into your account" style="height: auto;width: auto" /></div>
                  <p>5. Enter your phone number in the space provided. Click <strong>Text</strong>.</p>
                  <div ><img src="https://i.ibb.co/FHym3Rx/get-back-into-your-account-text.png" alt="Get back into your account text message" style="height: auto;width: auto" /></div>
                  <p>6. Enter the code texted to you. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/xYsJ3gy/enter-the-code-texted-to-you.png" alt="Enter the code texted to you" style="height: auto;width: auto" /></div>
                  <p>7. Enter your new password twice. Click <strong>Finish</strong>.</p>
                  <div ><img src="https://i.ibb.co/T0TR946/choose-a-new-password.png" alt="Choose a new password in SSPR for Microsoft 365" style="height: auto;width: auto" /></div>
                  <p>There are a few more settings that can be changed in <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/" target="_blank" rel="noreferrer">https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PasswordResetMenuBlade/</a>  so be sure to take a look.</p>
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
