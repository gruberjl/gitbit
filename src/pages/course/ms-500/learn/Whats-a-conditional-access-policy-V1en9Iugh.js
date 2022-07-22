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
      path: '/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh',
      article: {article: {entityMap: {0: {mutability: 'MUTABLE', type: 'LINK', data: {targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PolicyBlade'}}, 1: {type: 'IMAGE', data: {alignment: 'none', height: 'auto', targetOption: '_blank', width: 'auto', alt: 'Create a conditional access policy', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', src: 'https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png'}, mutability: 'MUTABLE'}, 2: {mutability: 'MUTABLE', type: 'IMAGE', data: {height: 'auto', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', width: 'auto', alignment: 'left', alt: 'Name your conditional access policy', targetOption: '_blank', src: 'https://i.ibb.co/G7QBxPT/name-your-conditional-access-policy.png'}}, 3: {type: 'IMAGE', mutability: 'MUTABLE', data: {url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', alt: 'set conditional access policy to apply to admins', width: 'auto', targetOption: '_blank', alignment: 'none', src: 'https://i.ibb.co/ZBhyf3h/set-conditional-access-policy-to-apply-to-admins.png', height: 'auto'}}, 4: {type: 'IMAGE', mutability: 'MUTABLE', data: {alignment: 'none', alt: 'Conditional access policy set all cloud apps', width: 'auto', height: 'auto', src: 'https://i.ibb.co/K9J1dVJ/conditional-access-policy-set-all-cloud-apps.png', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', targetOption: '_blank'}}, 5: {data: {alt: 'conditional access policy require mfa', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', targetOption: '_blank', src: 'https://i.ibb.co/PTQmjND/conditional-access-policy-require-mfa.png', height: 'auto', alignment: 'none', width: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 6: {mutability: 'MUTABLE', type: 'IMAGE', data: {alignment: 'none', width: 'auto', src: 'https://i.ibb.co/bJPCQ7w/conditional-access-warning.png', height: 'auto', alt: 'Conditional access warning: Don\'t lock yourself out! We recommend applying a policy to a small set of users first to verify it behaves as expected.', targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations'}}, 7: {mutability: 'MUTABLE', data: {url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', alignment: 'none', targetOption: '_blank', alt: 'conditional access policy users or workload identities', src: 'https://i.ibb.co/5rJVTmz/conditional-access-policy-users-or-workload-identities.png', width: 'auto', height: 'auto'}, type: 'IMAGE'}, 8: {data: {alignment: 'none', src: 'https://i.ibb.co/X7XTxRK/Conditional-access-policy-cloud-apps-or-actions.png', alt: 'Conditional access policy cloud apps or actions', width: 'auto', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', height: 'auto', targetOption: '_blank'}, type: 'IMAGE', mutability: 'MUTABLE'}, 9: {mutability: 'MUTABLE', type: 'IMAGE', data: {url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', height: 'auto', width: 'auto', alignment: 'none', alt: 'conditional access policy conditions', targetOption: '_blank', src: 'https://i.ibb.co/Yypqyqs/conditional-access-policy-conditions.png'}}, 10: {mutability: 'MUTABLE', type: 'IMAGE', data: {targetOption: '_blank', width: 'auto', alt: 'Conditional access policy grant', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', height: 'auto', alignment: 'none', src: 'https://i.ibb.co/K5PZLY8/conditional-access-policy-grant.png'}}, 11: {data: {alt: 'conditional access policy session', targetOption: '_blank', height: 'auto', alignment: 'none', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', src: 'https://i.ibb.co/jDj8CpP/conditional-access-policy-session.png', width: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 12: {mutability: 'MUTABLE', data: {url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations', width: 'auto', targetOption: '_blank', height: 'auto', src: 'https://i.ibb.co/SBvR7ry/conditional-access-policy-logs.png', alignment: 'none', alt: 'conditional access policy logs'}, type: 'IMAGE'}, 13: {type: 'LINK', mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations'}}, 14: {data: {url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies', height: 'auto', src: 'https://i.ibb.co/G54Sy34/conditional-access-policy-new-named-location.png', targetOption: '_blank', alignment: 'none', alt: 'conditional access policy new named location', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 15: {mutability: 'MUTABLE', data: {targetOption: '_blank', alt: 'conditional access policy named location by ip address', src: 'https://i.ibb.co/nshF1qX/conditional-access-policy-named-location-by-ip-address.png', width: 'auto', url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies', alignment: 'none', height: 'auto'}, type: 'IMAGE'}, 16: {type: 'LINK', mutability: 'MUTABLE', data: {url: 'https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies', targetOption: '_blank'}}, 17: {data: {src: 'https://i.ibb.co/zb3v6Nm/conditional-access-policy-exclude-location.png', alignment: 'none', width: 'auto', height: 'auto', alt: 'conditional access policy exclude location'}, type: 'IMAGE', mutability: 'MUTABLE'}}, blocks: [{entityRanges: [], data: {}, inlineStyleRanges: [], key: '8ikeh', depth: 0, text: 'Conditional access policies help organizations improve security and compliance. They are used to fine-tune and customize the authentication of your users in Microsoft 365. Let me explain. ', type: 'unstyled'}, {entityRanges: [], data: {}, text: 'In the simplest terms, it’s a series of if statements. For example, you can create a conditional access policy to require all members of a particular group to use Multi-Factor Authentication to log in to Microsoft 365. “If the user is part of group X then require MFA”.', key: '6tcip', type: 'unstyled', inlineStyleRanges: [], depth: 0}, {type: 'unstyled', data: {}, inlineStyleRanges: [], text: 'You can set a lot of different options in conditional access policies. For example, you can create a policy so a certain set of users can only log in from specific IP addresses. “If the user is part of group X and not logging in from IP address 1.1.1.1 then block access”', entityRanges: [], key: '6p02s', depth: 0}, {data: {}, inlineStyleRanges: [], text: 'License Requirements', type: 'header-two', entityRanges: [], key: '1n69g', depth: 0}, {inlineStyleRanges: [], entityRanges: [], text: 'You’re required to have an Azure AD Premium P1, Azure AD Premium P2 license, or Microsoft 365 Business Premium license. The Conditional access policies are also included in the following licenses:', data: {}, key: 'elnuf', depth: 0, type: 'unstyled'}, {entityRanges: [], key: 'e54sf', data: {}, depth: 0, text: 'Microsoft 365 E3 & E5', type: 'unordered-list-item', inlineStyleRanges: []}, {key: '2dbae', entityRanges: [], text: 'Microsoft 365 F3', type: 'unordered-list-item', depth: 0, data: {}, inlineStyleRanges: []}, {key: '5uish', text: 'Enterprise Mobility + Security E3 (EMS E3), and E5 (EMS E5)', entityRanges: [], type: 'unordered-list-item', depth: 0, inlineStyleRanges: [], data: {}}, {data: {}, depth: 0, key: '6pl7d', entityRanges: [], inlineStyleRanges: [], type: 'header-two', text: 'Creating your first conditional access policy'}, {key: 'ed03u', depth: 0, type: 'unstyled', text: 'Let’s create a conditional access policy that requires all our admins to use MFA to sign in to Microsoft 365.', entityRanges: [], data: {}, inlineStyleRanges: []}, {text: '1. log in to Azure Active Directory admin center > All services > Azure AD Conditional Access > New Policy > Create new policy.', key: '2gr0m', data: {}, depth: 0, inlineStyleRanges: [], type: 'unstyled', entityRanges: [{key: 0, length: 17, offset: 109}]}, {inlineStyleRanges: [], type: 'atomic', text: ' ', depth: 0, data: {}, key: '82alu', entityRanges: [{offset: 0, length: 1, key: 1}]}, {entityRanges: [], key: '9gtfv', data: {}, depth: 0, inlineStyleRanges: [{offset: 11, length: 5, style: 'BOLD'}], text: '2. Set the name to “Require MFA for admins”.', type: 'unstyled'}, {type: 'atomic', data: {}, inlineStyleRanges: [], text: ' ', entityRanges: [{length: 1, offset: 0, key: 2}], key: '7sevv', depth: 0}, {type: 'unstyled', key: '8vdjb', entityRanges: [], text: '3. Click 0 users or workload identities selected. Click Select users and groups > Directory roles. Then click each role that has administrator in its name.', depth: 0, data: {}, inlineStyleRanges: [{style: 'BOLD', length: 39, offset: 9}, {length: 23, style: 'BOLD', offset: 56}, {offset: 82, style: 'BOLD', length: 15}]}, {inlineStyleRanges: [], key: '7uj17', data: {}, depth: 0, entityRanges: [{length: 1, key: 3, offset: 0}], text: ' ', type: 'atomic'}, {entityRanges: [], data: {}, key: '8v58r', depth: 0, type: 'unstyled', inlineStyleRanges: [{offset: 9, style: 'BOLD', length: 59}, {offset: 76, style: 'BOLD', length: 14}], text: '4. Click No cloud apps, actions, or authentication contexts selected. Click All cloud apps.'}, {inlineStyleRanges: [], key: '7oall', data: {}, depth: 0, type: 'atomic', text: ' ', entityRanges: [{length: 1, key: 4, offset: 0}]}, {entityRanges: [], depth: 0, type: 'unstyled', data: {}, key: '8epph', text: '5. Click 0 controls selected under Grant. Click Require multi-factor authentication. Click Select. Click On under Enable policy.', inlineStyleRanges: [{offset: 8, style: 'BOLD', length: 20}, {style: 'BOLD', offset: 48, length: 35}, {style: 'BOLD', length: 6, offset: 91}, {offset: 105, style: 'BOLD', length: 2}]}, {inlineStyleRanges: [], depth: 0, type: 'atomic', key: 'dtguk', data: {}, entityRanges: [{key: 5, length: 1, offset: 0}], text: ' '}, {type: 'unstyled', data: {}, text: '6. At this point you may see a warning say “Don’t lock yourself out!”. Read the recommendation carefully and then make your decision whether to exclude yourself from the policy.', entityRanges: [], key: '90a5c', inlineStyleRanges: [], depth: 0}, {text: ' ', data: {}, key: '5ggfr', type: 'atomic', depth: 0, entityRanges: [{offset: 0, key: 6, length: 1}], inlineStyleRanges: []}, {inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 6}], entityRanges: [], data: {}, depth: 0, type: 'unstyled', key: 'dci6q', text: '7. Click Create.'}, {entityRanges: [], key: '3ivov', depth: 0, data: {}, text: 'That’s it. You are now requiring your administrators to configure and use MFA when they log in to Office 365. Now let’s break down the parts of the conditional access policy configuration.', type: 'unstyled', inlineStyleRanges: []}, {data: {}, depth: 0, text: 'Understanding conditional access policies', key: '2kn73', inlineStyleRanges: [], entityRanges: [], type: 'header-two'}, {type: 'unstyled', key: 'f0a1i', text: 'The conditional access policy is broken into two sections: assignments and Access controls.', inlineStyleRanges: [], entityRanges: [], depth: 0, data: {}}, {key: '1i4at', data: {}, text: 'The assignments section is the filters. This is where you can decide which users, device OS’s, and apps the policy affects.', inlineStyleRanges: [], depth: 0, type: 'unstyled', entityRanges: []}, {entityRanges: [], type: 'unstyled', depth: 0, data: {}, inlineStyleRanges: [], text: 'The Access controls section provides your allowed / block controls. It’s also where you can decide things like “require MFA” or block persistent browser sessions.', key: '9q3e1'}, {depth: 0, inlineStyleRanges: [], type: 'header-three', entityRanges: [], key: '3f1u1', data: {}, text: 'User or workload identities'}, {key: '7ge57', type: 'atomic', text: ' ', data: {}, depth: 0, inlineStyleRanges: [], entityRanges: [{length: 1, key: 7, offset: 0}]}, {inlineStyleRanges: [], key: 'd19q8', data: {}, type: 'unstyled', depth: 0, text: 'In this section, you’re deciding which user accounts will be affected by the policy. You can set up a specific list of users, for example, yourself to test out a policy. You can select a group that would include everyone in the group or you can select admin roles to affect only users that are assigned the specific admin role. Lastly, you can exclude users. So you can create a policy to include All users, then you can exclude guest and external users.', entityRanges: []}, {inlineStyleRanges: [{style: 'ITALIC', length: 146, offset: 0}], text: 'Remember, the exclusion will take precedence. So if you select to include a user then exclude the user, the user will be excluded from the policy.', type: 'unstyled', key: '9sgru', data: {}, depth: 0, entityRanges: []}, {entityRanges: [], depth: 0, data: {}, key: '4fn4o', text: 'Cloud apps or actions', inlineStyleRanges: [], type: 'header-three'}, {depth: 0, data: {}, entityRanges: [{key: 8, length: 1, offset: 0}], text: ' ', inlineStyleRanges: [], key: '1bfii', type: 'atomic'}, {type: 'unstyled', key: '1vms3', entityRanges: [], depth: 0, text: 'The cloud apps or actions section is where you can filter the conditional access policy based on the app. For example, you may need to require MFA for email access but all other access doesn’t require MFA. If you only wanted the policy to affect email then you would click Select apps > Office 365 Exchange Online.', data: {}, inlineStyleRanges: []}, {text: 'Conditions', key: '2dufg', depth: 0, inlineStyleRanges: [], type: 'header-three', entityRanges: [], data: {}}, {text: ' ', entityRanges: [{length: 1, offset: 0, key: 9}], type: 'atomic', key: '4ecdt', depth: 0, data: {}, inlineStyleRanges: []}, {inlineStyleRanges: [], data: {}, key: '2c1s7', depth: 0, text: 'Conditions provide an additional layer of filtering. From here you can select if the policy only affects the users when certain other criteria is met. For example, you may want to require MFA only when there’s a high User / sign-in risk. Or you may want to block access altogether from certain countries. Or maybe there are no Android devices in your organization. You can easily select Android devices from this page.', entityRanges: [], type: 'unstyled'}, {key: 'fqam3', text: 'Access Controls: Grant', inlineStyleRanges: [], data: {}, type: 'header-three', entityRanges: [], depth: 0}, {depth: 0, data: {}, inlineStyleRanges: [], type: 'atomic', entityRanges: [{length: 1, key: 10, offset: 0}], key: '9n8io', text: ' '}, {depth: 0, type: 'unstyled', data: {}, inlineStyleRanges: [], key: 'fua8a', entityRanges: [], text: 'From the access controls > grant section you can decide what happens when the criteria above is met. For example, you may want to block access. Or you may want to require multi-factor authentication. Or you may want to require the device to be marked compliant in Intune. It’s all possible in the conditional access policies.'}, {inlineStyleRanges: [], data: {}, text: 'Access Controls: Session', type: 'header-three', key: '64rjg', entityRanges: [], depth: 0}, {depth: 0, entityRanges: [{key: 11, length: 1, offset: 0}], type: 'atomic', text: ' ', key: '45gpv', data: {}, inlineStyleRanges: []}, {depth: 0, data: {}, entityRanges: [], inlineStyleRanges: [], type: 'unstyled', key: 'appfe', text: 'Finally, the session controls. From the session tab, you can set if the user can save their browser session or if they have to sign in again after closing the browser. Or you can set how often users need to re-authenticate when using apps like Outlook or Microsoft Teams.'}, {data: {}, type: 'header-two', inlineStyleRanges: [], text: 'Review the status of conditional access policies', key: '675pq', entityRanges: [], depth: 0}, {entityRanges: [], depth: 0, key: '2sav0', inlineStyleRanges: [], data: {}, text: 'So, you may be wondering, if I create a policy that blocks sign-ins from non-compliant devices how can I view who’s getting blocked? Fortunately, Microsoft has made it easy.', type: 'unstyled'}, {entityRanges: [], data: {}, text: '1. Sign in to Azure Active Directory admin center > Users > Sign in logs > click the sign-in you want to investigate > Conditional access.', depth: 0, key: '6q6de', inlineStyleRanges: [{offset: 14, style: 'BOLD', length: 35}, {length: 6, offset: 52, style: 'BOLD'}, {offset: 60, length: 12, style: 'BOLD'}, {offset: 119, style: 'BOLD', length: 18}], type: 'unstyled'}, {entityRanges: [{offset: 0, length: 1, key: 12}], text: ' ', data: {}, depth: 0, inlineStyleRanges: [], key: 'cevv7', type: 'atomic'}, {entityRanges: [], data: {}, inlineStyleRanges: [], type: 'unstyled', key: '9k0gr', depth: 0, text: 'From this page you can see all the conditional access policies, whether they were applied to the sign in and whether the attempt passed or failed. To see more information on the conditional access policy click on it.'}, {inlineStyleRanges: [], depth: 0, text: 'Force multi-factor authentication while not in the main office', entityRanges: [], key: '8lo6r', data: {}, type: 'header-two'}, {key: '435i1', type: 'unstyled', entityRanges: [], depth: 0, data: {}, inlineStyleRanges: [], text: 'Now, let’s get a little trickier. Let’s say the MFA prompt every time a user logs on is too much for your organization. Maybe you only want to prompt for MFA when users are not in your main office. How do you do it?'}, {type: 'unstyled', entityRanges: [{key: 13, length: 15, offset: 97}], data: {}, key: 'ea0fg', text: '1. Sign in to Azure Active Directory admin center > All services > Azure AD Conditional access > Named locations.', inlineStyleRanges: [{length: 35, offset: 14, style: 'BOLD'}, {length: 12, offset: 52, style: 'BOLD'}, {style: 'BOLD', length: 27, offset: 67}, {length: 15, offset: 97, style: 'BOLD'}], depth: 0}, {data: {}, type: 'atomic', entityRanges: [{length: 1, offset: 0, key: 14}], key: 'fubsa', depth: 0, inlineStyleRanges: [], text: ' '}, {text: '2. Click IP ranges location. Set the name to "Main office". Click Mark as trusted location. Click the plus (+) sign and add your IP address + the subnet (for example 173.49.196.1/32). Click Add. Click Create.', type: 'unstyled', depth: 0, inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 18}, {offset: 66, style: 'BOLD', length: 24}, {length: 1, style: 'BOLD', offset: 108}, {style: 'BOLD', length: 3, offset: 190}, {style: 'BOLD', offset: 201, length: 6}], entityRanges: [], key: '7pk4p', data: {}}, {key: 'k3uo', depth: 0, inlineStyleRanges: [], data: {}, type: 'atomic', entityRanges: [{offset: 0, key: 15, length: 1}], text: ' '}, {data: {}, text: '3. Go back to Azure AD Conditional access > policies. Click New policy > Create new policy.', entityRanges: [{length: 8, offset: 44, key: 16}], key: '82f1h', depth: 0, inlineStyleRanges: [{length: 27, offset: 14, style: 'BOLD'}, {style: 'BOLD', length: 8, offset: 44}, {offset: 60, length: 10, style: 'BOLD'}, {offset: 73, length: 17, style: 'BOLD'}], type: 'unstyled'}, {inlineStyleRanges: [{offset: 20, style: 'BOLD', length: 11}], key: '1ghjg', entityRanges: [], depth: 0, data: {}, text: '4. Enter a name of “Require MFA”', type: 'unstyled'}, {depth: 0, text: '5. Click 0 users or workload identities selected. Click All users.', type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 39}, {length: 9, offset: 56, style: 'BOLD'}], key: 'dd9d1', entityRanges: [], data: {}}, {entityRanges: [], type: 'unstyled', key: '1lgnp', data: {}, text: '6. Click No cloud apps, actions, or authentication contexts selected. Click All cloud apps.', inlineStyleRanges: [{offset: 9, length: 59, style: 'BOLD'}, {style: 'BOLD', length: 14, offset: 76}], depth: 0}, {entityRanges: [], data: {}, text: '7. Click 0 conditions selected. Click Not configured located under Locations.', depth: 0, type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', length: 21, offset: 9}, {length: 14, offset: 38, style: 'BOLD'}], key: '89j8i'}, {text: '8. Set Configure to Yes.', key: 'alif2', depth: 0, type: 'unstyled', entityRanges: [], data: {}, inlineStyleRanges: [{offset: 20, style: 'BOLD', length: 3}]}, {text: '9. Click Exclude. Click Selected locations. Click None. Click Main Office. Click Select.', type: 'unstyled', entityRanges: [], data: {}, depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 7, offset: 9}, {offset: 24, style: 'BOLD', length: 18}, {style: 'BOLD', length: 4, offset: 50}, {style: 'BOLD', offset: 62, length: 11}, {length: 6, offset: 81, style: 'BOLD'}], key: 'a9l85'}, {depth: 0, key: '6och4', inlineStyleRanges: [], data: {}, text: ' ', entityRanges: [{length: 1, key: 17, offset: 0}], type: 'atomic'}, {key: 'b7tvf', type: 'unstyled', text: '10. Click 0 controls selected (under Grant).', data: {}, entityRanges: [], depth: 0, inlineStyleRanges: [{length: 19, style: 'BOLD', offset: 10}]}, {depth: 0, text: '11. Click Require multi-factor authentication. Click Select.', data: {}, type: 'unstyled', entityRanges: [], key: '1sddl', inlineStyleRanges: [{offset: 10, style: 'BOLD', length: 35}, {style: 'BOLD', offset: 53, length: 6}]}, {entityRanges: [], key: 'bfv3b', depth: 0, inlineStyleRanges: [{offset: 10, style: 'BOLD', length: 2}, {length: 6, style: 'BOLD', offset: 42}], data: {}, type: 'unstyled', text: '12. Click On (under Enable policy). Click Create.'}, {text: 'Now when any user logs in from a location other than your main office they’ll need to apply their MFA. When they login from the main office they won’t need their MFA. Of course, if you set up the earlier policy where all admins had to use MFA then admins will be required to use MFA inside and outside the office.', inlineStyleRanges: [], depth: 0, entityRanges: [], key: '5htsf', data: {}, type: 'unstyled'}, {entityRanges: [], text: 'There’s a ton more you can do with conditional access policies including preventing users from downloading, printing, and syncing files in SharePoint Online and secure on-premises VPNs. Don’t worry, we’ll cover both of these options in a later lesson.', data: {}, inlineStyleRanges: [], type: 'unstyled', key: 'dchec', depth: 0}]}, slug: 'Whats-a-conditional-access-policy-V1en9Iugh', publish: true, type: 'article', description: 'Conditional access policies help organizations improve security and compliance. They are used to fine-tune and customize the authentication of your users in Microsoft 365. Let me explain. In the simplest terms, it’s a series of if statements.', sectionId: 'AFV_acckJ', images: ['https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png', 'https://i.ibb.co/G7QBxPT/name-your-conditional-access-policy.png', 'https://i.ibb.co/ZBhyf3h/set-conditional-access-policy-to-apply-to-admins.png', 'https://i.ibb.co/K9J1dVJ/conditional-access-policy-set-all-cloud-apps.png', 'https://i.ibb.co/PTQmjND/conditional-access-policy-require-mfa.png', 'https://i.ibb.co/bJPCQ7w/conditional-access-warning.png', 'https://i.ibb.co/5rJVTmz/conditional-access-policy-users-or-workload-identities.png', 'https://i.ibb.co/X7XTxRK/Conditional-access-policy-cloud-apps-or-actions.png', 'https://i.ibb.co/Yypqyqs/conditional-access-policy-conditions.png', 'https://i.ibb.co/K5PZLY8/conditional-access-policy-grant.png', 'https://i.ibb.co/jDj8CpP/conditional-access-policy-session.png', 'https://i.ibb.co/SBvR7ry/conditional-access-policy-logs.png', 'https://i.ibb.co/G54Sy34/conditional-access-policy-new-named-location.png', 'https://i.ibb.co/nshF1qX/conditional-access-policy-named-location-by-ip-address.png', 'https://i.ibb.co/zb3v6Nm/conditional-access-policy-exclude-location.png'], featuredImage: 'https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png', title: 'What\'s a conditional access policy?', id: 'V1en9Iugh', datePublished: '2022/5/26'},
      nextContentSlug: 'The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk',
      previousContentSlug: 'Securing-and-implementing-enterprise-applications-2QfoI2HxY',
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
                <div><p>Conditional access policies help organizations improve security and compliance. They are used to fine-tune and customize the authentication of your users in Microsoft 365. Let me explain.&nbsp;</p>
                  <p>In the simplest terms, it’s a series of if statements. For example, you can create a conditional access policy to require all members of a particular group to use Multi-Factor Authentication to log in to Microsoft 365. “If the user is part of group X then require MFA”.</p>
                  <p>You can set a lot of different options in conditional access policies. For example, you can create a policy so a certain set of users can only log in from specific IP addresses. “If the user is part of group X and not logging in from IP address 1.1.1.1 then block access”</p>
                  <h2>License Requirements</h2>
                  <p>You’re required to have an Azure AD Premium P1, Azure AD Premium P2 license, or Microsoft 365 Business Premium license. The Conditional access policies are also included in the following licenses:</p>
                  <ul>
                    <li>Microsoft 365 E3 &amp; E5</li>
                    <li>Microsoft 365 F3</li>
                    <li>Enterprise Mobility + Security E3 (EMS E3), and E5 (EMS E5)</li>
                  </ul>
                  <h2>Creating your first conditional access policy</h2>
                  <p>Let’s create a conditional access policy that requires all our admins to use MFA to sign in to Microsoft 365.</p>
                  <p>1. log in to Azure Active Directory admin center &gt; All services &gt; Azure AD Conditional Access &gt; New Policy &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PolicyBlade" target="_blank" rel="noreferrer">Create new policy</a>.</p>
                  <div ><img src="https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png" alt="Create a conditional access policy" style="height: auto;width: auto" /></div>
                  <p>2. Set the <strong>name </strong>to “Require MFA for admins”.</p>
                  <div ><img src="https://i.ibb.co/G7QBxPT/name-your-conditional-access-policy.png" alt="Name your conditional access policy" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>0 users or workload identities selected</strong>. Click <strong>Select users and groups</strong> &gt; <strong>Directory roles</strong>. Then click each role that has administrator in its name.</p>
                  <div ><img src="https://i.ibb.co/ZBhyf3h/set-conditional-access-policy-to-apply-to-admins.png" alt="set conditional access policy to apply to admins" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>No cloud apps, actions, or authentication contexts selected</strong>. Click <strong>All cloud apps</strong>.</p>
                  <div ><img src="https://i.ibb.co/K9J1dVJ/conditional-access-policy-set-all-cloud-apps.png" alt="Conditional access policy set all cloud apps" style="height: auto;width: auto" /></div>
                  <p>5. Click<strong> 0 controls selected</strong> under Grant. Click <strong>Require multi-factor authentication</strong>. Click <strong>Select</strong>. Click <strong>On</strong> under Enable policy.</p>
                  <div ><img src="https://i.ibb.co/PTQmjND/conditional-access-policy-require-mfa.png" alt="conditional access policy require mfa" style="height: auto;width: auto" /></div>
                  <p>6. At this point you may see a warning say “Don’t lock yourself out!”. Read the recommendation carefully and then make your decision whether to exclude yourself from the policy.</p>
                  <div ><img src="https://i.ibb.co/bJPCQ7w/conditional-access-warning.png" alt="Conditional access warning: Don't lock yourself out! We recommend applying a policy to a small set of users first to verify it behaves as expected." style="height: auto;width: auto" /></div>
                  <p>7. Click <strong>Create</strong>.</p>
                  <p>That’s it. You are now requiring your administrators to configure and use MFA when they log in to Office 365. Now let’s break down the parts of the conditional access policy configuration.</p>
                  <h2>Understanding conditional access policies</h2>
                  <p>The conditional access policy is broken into two sections: assignments and Access controls.</p>
                  <p>The assignments section is the filters. This is where you can decide which users, device OS’s, and apps the policy affects.</p>
                  <p>The Access controls section provides your allowed / block controls. It’s also where you can decide things like “require MFA” or block persistent browser sessions.</p>
                  <h3>User or workload identities</h3>
                  <div ><img src="https://i.ibb.co/5rJVTmz/conditional-access-policy-users-or-workload-identities.png" alt="conditional access policy users or workload identities" style="height: auto;width: auto" /></div>
                  <p>In this section, you’re deciding which user accounts will be affected by the policy. You can set up a specific list of users, for example, yourself to test out a policy. You can select a group that would include everyone in the group or you can select admin roles to affect only users that are assigned the specific admin role. Lastly, you can exclude users. So you can create a policy to include All users, then you can exclude guest and external users.</p>
                  <p><em>Remember, the exclusion will take precedence. So if you select to include a user then exclude the user, the user will be excluded from the policy.</em></p>
                  <h3>Cloud apps or actions</h3>
                  <div ><img src="https://i.ibb.co/X7XTxRK/Conditional-access-policy-cloud-apps-or-actions.png" alt="Conditional access policy cloud apps or actions" style="height: auto;width: auto" /></div>
                  <p>The cloud apps or actions section is where you can filter the conditional access policy based on the app. For example, you may need to require MFA for email access but all other access doesn’t require MFA. If you only wanted the policy to affect email then you would click Select apps &gt; Office 365 Exchange Online.</p>
                  <h3>Conditions</h3>
                  <div ><img src="https://i.ibb.co/Yypqyqs/conditional-access-policy-conditions.png" alt="conditional access policy conditions" style="height: auto;width: auto" /></div>
                  <p>Conditions provide an additional layer of filtering. From here you can select if the policy only affects the users when certain other criteria is met. For example, you may want to require MFA only when there’s a high User / sign-in risk. Or you may want to block access altogether from certain countries. Or maybe there are no Android devices in your organization. You can easily select Android devices from this page.</p>
                  <h3>Access Controls: Grant</h3>
                  <div ><img src="https://i.ibb.co/K5PZLY8/conditional-access-policy-grant.png" alt="Conditional access policy grant" style="height: auto;width: auto" /></div>
                  <p>From the access controls &gt; grant section you can decide what happens when the criteria above is met. For example, you may want to block access. Or you may want to require multi-factor authentication. Or you may want to require the device to be marked compliant in Intune. It’s all possible in the conditional access policies.</p>
                  <h3>Access Controls: Session</h3>
                  <div ><img src="https://i.ibb.co/jDj8CpP/conditional-access-policy-session.png" alt="conditional access policy session" style="height: auto;width: auto" /></div>
                  <p>Finally, the session controls. From the session tab, you can set if the user can save their browser session or if they have to sign in again after closing the browser. Or you can set how often users need to re-authenticate when using apps like Outlook or Microsoft Teams.</p>
                  <h2>Review the status of conditional access policies</h2>
                  <p>So, you may be wondering, if I create a policy that blocks sign-ins from non-compliant devices how can I view who’s getting blocked? Fortunately, Microsoft has made it easy.</p>
                  <p>1. Sign in to <strong>Azure Active Directory admin center</strong> &gt; <strong>Users </strong>&gt; <strong>Sign in logs</strong> &gt; click the sign-in you want to investigate &gt; <strong>Conditional access</strong>.</p>
                  <div ><img src="https://i.ibb.co/SBvR7ry/conditional-access-policy-logs.png" alt="conditional access policy logs" style="height: auto;width: auto" /></div>
                  <p>From this page you can see all the conditional access policies, whether they were applied to the sign in and whether the attempt passed or failed. To see more information on the conditional access policy click on it.</p>
                  <h2>Force multi-factor authentication while not in the main office</h2>
                  <p>Now, let’s get a little trickier. Let’s say the MFA prompt every time a user logs on is too much for your organization. Maybe you only want to prompt for MFA when users are not in your main office. How do you do it?</p>
                  <p>1. Sign in to <strong>Azure Active Directory admin center</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Conditional access</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations" target="_blank" rel="noreferrer"><strong>Named locations</strong></a>.</p>
                  <div ><img src="https://i.ibb.co/G54Sy34/conditional-access-policy-new-named-location.png" alt="conditional access policy new named location" style="height: auto;width: auto" /></div>
                  <p>2. Click <strong>IP ranges location</strong>. Set the name to "Main office". Click <strong>Mark as trusted location</strong>. Click the plus (<strong>+</strong>) sign and add your IP address + the subnet (for example 173.49.196.1/32). Click <strong>Add</strong>. Click <strong>Create</strong>.</p>
                  <div ><img src="https://i.ibb.co/nshF1qX/conditional-access-policy-named-location-by-ip-address.png" alt="conditional access policy named location by ip address" style="height: auto;width: auto" /></div>
                  <p>3. Go back to <strong>Azure AD Conditional access</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies" target="_blank" rel="noreferrer"><strong>policies</strong></a>. Click <strong>New policy</strong> &gt; <strong>Create new policy</strong>.</p>
                  <p>4. Enter a name of “<strong>Require MFA</strong>”</p>
                  <p>5. Click <strong>0 users or workload identities selected</strong>. Click <strong>All users</strong>.</p>
                  <p>6. Click <strong>No cloud apps, actions, or authentication contexts selected</strong>. Click <strong>All cloud apps</strong>.</p>
                  <p>7. Click <strong>0 conditions selected</strong>. Click <strong>Not configured</strong> located under Locations.</p>
                  <p>8. Set Configure to <strong>Yes</strong>.</p>
                  <p>9. Click <strong>Exclude</strong>. Click <strong>Selected locations</strong>. Click <strong>None</strong>. Click <strong>Main Office</strong>. Click <strong>Select</strong>.</p>
                  <div ><img src="https://i.ibb.co/zb3v6Nm/conditional-access-policy-exclude-location.png" alt="conditional access policy exclude location" style="height: auto;width: auto" /></div>
                  <p>10. Click <strong>0 controls selected</strong> (under Grant).</p>
                  <p>11. Click <strong>Require multi-factor authentication</strong>. Click <strong>Select</strong>.</p>
                  <p>12. Click <strong>On</strong> (under Enable policy). Click <strong>Create</strong>.</p>
                  <p>Now when any user logs in from a location other than your main office they’ll need to apply their MFA. When they login from the main office they won’t need their MFA. Of course, if you set up the earlier policy where all admins had to use MFA then admins will be required to use MFA inside and outside the office.</p>
                  <p>There’s a ton more you can do with conditional access policies including preventing users from downloading, printing, and syncing files in SharePoint Online and secure on-premises VPNs. Don’t worry, we’ll cover both of these options in a later lesson.</p>
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
