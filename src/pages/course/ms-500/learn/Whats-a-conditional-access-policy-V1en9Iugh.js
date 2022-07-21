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
      path: '/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh',
      article: {"publish":true,"slug":"Whats-a-conditional-access-policy-V1en9Iugh","article":{"entityMap":{"0":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PolicyBlade"}},"1":{"data":{"targetOption":"_blank","height":"auto","src":"https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png","width":"auto","alt":"Create a conditional access policy","alignment":"none","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations"},"mutability":"MUTABLE","type":"IMAGE"},"2":{"type":"IMAGE","data":{"targetOption":"_blank","src":"https://i.ibb.co/G7QBxPT/name-your-conditional-access-policy.png","alt":"Name your conditional access policy","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","height":"auto","width":"auto","alignment":"left"},"mutability":"MUTABLE"},"3":{"type":"IMAGE","data":{"height":"auto","width":"auto","src":"https://i.ibb.co/ZBhyf3h/set-conditional-access-policy-to-apply-to-admins.png","alt":"set conditional access policy to apply to admins","alignment":"none","targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations"},"mutability":"MUTABLE"},"4":{"data":{"src":"https://i.ibb.co/K9J1dVJ/conditional-access-policy-set-all-cloud-apps.png","targetOption":"_blank","alignment":"none","width":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","height":"auto","alt":"Conditional access policy set all cloud apps"},"type":"IMAGE","mutability":"MUTABLE"},"5":{"type":"IMAGE","mutability":"MUTABLE","data":{"targetOption":"_blank","alignment":"none","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","src":"https://i.ibb.co/PTQmjND/conditional-access-policy-require-mfa.png","width":"auto","alt":"conditional access policy require mfa","height":"auto"}},"6":{"data":{"alt":"Conditional access warning: Don't lock yourself out! We recommend applying a policy to a small set of users first to verify it behaves as expected.","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","targetOption":"_blank","width":"auto","height":"auto","src":"https://i.ibb.co/bJPCQ7w/conditional-access-warning.png","alignment":"none"},"type":"IMAGE","mutability":"MUTABLE"},"7":{"data":{"alignment":"none","src":"https://i.ibb.co/5rJVTmz/conditional-access-policy-users-or-workload-identities.png","width":"auto","targetOption":"_blank","height":"auto","alt":"conditional access policy users or workload identities","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations"},"type":"IMAGE","mutability":"MUTABLE"},"8":{"data":{"height":"auto","alignment":"none","alt":"Conditional access policy cloud apps or actions","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","src":"https://i.ibb.co/X7XTxRK/Conditional-access-policy-cloud-apps-or-actions.png","targetOption":"_blank","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"9":{"type":"IMAGE","mutability":"MUTABLE","data":{"height":"auto","alt":"conditional access policy conditions","targetOption":"_blank","src":"https://i.ibb.co/Yypqyqs/conditional-access-policy-conditions.png","alignment":"none","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","width":"auto"}},"10":{"mutability":"MUTABLE","type":"IMAGE","data":{"targetOption":"_blank","src":"https://i.ibb.co/K5PZLY8/conditional-access-policy-grant.png","width":"auto","height":"auto","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","alt":"Conditional access policy grant","alignment":"none"}},"11":{"data":{"src":"https://i.ibb.co/jDj8CpP/conditional-access-policy-session.png","height":"auto","alt":"conditional access policy session","targetOption":"_blank","width":"auto","alignment":"none","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations"},"type":"IMAGE","mutability":"MUTABLE"},"12":{"mutability":"MUTABLE","data":{"width":"auto","src":"https://i.ibb.co/SBvR7ry/conditional-access-policy-logs.png","alt":"conditional access policy logs","height":"auto","alignment":"none","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","targetOption":"_blank"},"type":"IMAGE"},"13":{"mutability":"MUTABLE","data":{"url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations","targetOption":"_blank"},"type":"LINK"},"14":{"mutability":"MUTABLE","type":"IMAGE","data":{"src":"https://i.ibb.co/G54Sy34/conditional-access-policy-new-named-location.png","height":"auto","targetOption":"_blank","alignment":"none","width":"auto","alt":"conditional access policy new named location","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies"}},"15":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"none","height":"auto","width":"auto","targetOption":"_blank","src":"https://i.ibb.co/nshF1qX/conditional-access-policy-named-location-by-ip-address.png","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies","alt":"conditional access policy named location by ip address"}},"16":{"data":{"targetOption":"_blank","url":"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies"},"type":"LINK","mutability":"MUTABLE"},"17":{"mutability":"MUTABLE","data":{"alignment":"none","alt":"conditional access policy exclude location","height":"auto","src":"https://i.ibb.co/zb3v6Nm/conditional-access-policy-exclude-location.png","width":"auto"},"type":"IMAGE"}},"blocks":[{"entityRanges":[],"data":{},"inlineStyleRanges":[],"text":"Conditional access policies help organizations improve security and compliance. They are used to fine-tune and customize the authentication of your users in Microsoft 365. Let me explain. ","key":"8ikeh","depth":0,"type":"unstyled"},{"key":"6tcip","data":{},"type":"unstyled","inlineStyleRanges":[],"text":"In the simplest terms, it’s a series of if statements. For example, you can create a conditional access policy to require all members of a particular group to use Multi-Factor Authentication to log in to Microsoft 365. “If the user is part of group X then require MFA”.","depth":0,"entityRanges":[]},{"entityRanges":[],"inlineStyleRanges":[],"key":"6p02s","data":{},"depth":0,"type":"unstyled","text":"You can set a lot of different options in conditional access policies. For example, you can create a policy so a certain set of users can only log in from specific IP addresses. “If the user is part of group X and not logging in from IP address 1.1.1.1 then block access”"},{"text":"License Requirements","entityRanges":[],"depth":0,"inlineStyleRanges":[],"data":{},"type":"header-two","key":"1n69g"},{"inlineStyleRanges":[],"depth":0,"entityRanges":[],"text":"You’re required to have an Azure AD Premium P1, Azure AD Premium P2 license, or Microsoft 365 Business Premium license. The Conditional access policies are also included in the following licenses:","key":"elnuf","type":"unstyled","data":{}},{"text":"Microsoft 365 E3 & E5","key":"e54sf","entityRanges":[],"type":"unordered-list-item","depth":0,"data":{},"inlineStyleRanges":[]},{"text":"Microsoft 365 F3","type":"unordered-list-item","data":{},"key":"2dbae","depth":0,"entityRanges":[],"inlineStyleRanges":[]},{"type":"unordered-list-item","inlineStyleRanges":[],"text":"Enterprise Mobility + Security E3 (EMS E3), and E5 (EMS E5)","key":"5uish","data":{},"depth":0,"entityRanges":[]},{"data":{},"inlineStyleRanges":[],"entityRanges":[],"type":"header-two","text":"Creating your first conditional access policy","key":"6pl7d","depth":0},{"text":"Let’s create a conditional access policy that requires all our admins to use MFA to sign in to Microsoft 365.","entityRanges":[],"data":{},"key":"ed03u","type":"unstyled","inlineStyleRanges":[],"depth":0},{"entityRanges":[{"length":17,"offset":109,"key":0}],"key":"2gr0m","inlineStyleRanges":[],"type":"unstyled","data":{},"depth":0,"text":"1. log in to Azure Active Directory admin center > All services > Azure AD Conditional Access > New Policy > Create new policy."},{"key":"82alu","data":{},"type":"atomic","entityRanges":[{"offset":0,"key":1,"length":1}],"depth":0,"inlineStyleRanges":[],"text":" "},{"key":"9gtfv","depth":0,"data":{},"inlineStyleRanges":[{"offset":11,"style":"BOLD","length":5}],"text":"2. Set the name to “Require MFA for admins”.","type":"unstyled","entityRanges":[]},{"type":"atomic","depth":0,"data":{},"inlineStyleRanges":[],"entityRanges":[{"length":1,"offset":0,"key":2}],"text":" ","key":"7sevv"},{"inlineStyleRanges":[{"length":39,"offset":9,"style":"BOLD"},{"style":"BOLD","length":23,"offset":56},{"length":15,"offset":82,"style":"BOLD"}],"entityRanges":[],"key":"8vdjb","depth":0,"text":"3. Click 0 users or workload identities selected. Click Select users and groups > Directory roles. Then click each role that has administrator in its name.","type":"unstyled","data":{}},{"entityRanges":[{"offset":0,"length":1,"key":3}],"data":{},"depth":0,"key":"7uj17","inlineStyleRanges":[],"text":" ","type":"atomic"},{"entityRanges":[],"data":{},"inlineStyleRanges":[{"style":"BOLD","length":59,"offset":9},{"length":14,"offset":76,"style":"BOLD"}],"depth":0,"type":"unstyled","text":"4. Click No cloud apps, actions, or authentication contexts selected. Click All cloud apps.","key":"8v58r"},{"depth":0,"type":"atomic","text":" ","inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":4,"length":1}],"key":"7oall","data":{}},{"type":"unstyled","text":"5. Click 0 controls selected under Grant. Click Require multi-factor authentication. Click Select. Click On under Enable policy.","key":"8epph","entityRanges":[],"depth":0,"inlineStyleRanges":[{"style":"BOLD","offset":8,"length":20},{"style":"BOLD","offset":48,"length":35},{"length":6,"offset":91,"style":"BOLD"},{"offset":105,"length":2,"style":"BOLD"}],"data":{}},{"type":"atomic","depth":0,"key":"dtguk","text":" ","entityRanges":[{"length":1,"offset":0,"key":5}],"inlineStyleRanges":[],"data":{}},{"type":"unstyled","data":{},"text":"6. At this point you may see a warning say “Don’t lock yourself out!”. Read the recommendation carefully and then make your decision whether to exclude yourself from the policy.","inlineStyleRanges":[],"depth":0,"entityRanges":[],"key":"90a5c"},{"type":"atomic","entityRanges":[{"length":1,"offset":0,"key":6}],"inlineStyleRanges":[],"text":" ","depth":0,"data":{},"key":"5ggfr"},{"entityRanges":[],"type":"unstyled","depth":0,"key":"dci6q","inlineStyleRanges":[{"style":"BOLD","length":6,"offset":9}],"text":"7. Click Create.","data":{}},{"type":"unstyled","depth":0,"data":{},"inlineStyleRanges":[],"key":"3ivov","entityRanges":[],"text":"That’s it. You are now requiring your administrators to configure and use MFA when they log in to Office 365. Now let’s break down the parts of the conditional access policy configuration."},{"type":"header-two","data":{},"key":"2kn73","text":"Understanding conditional access policies","depth":0,"entityRanges":[],"inlineStyleRanges":[]},{"text":"The conditional access policy is broken into two sections: assignments and Access controls.","depth":0,"key":"f0a1i","entityRanges":[],"data":{},"type":"unstyled","inlineStyleRanges":[]},{"depth":0,"text":"The assignments section is the filters. This is where you can decide which users, device OS’s, and apps the policy affects.","inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"1i4at","type":"unstyled"},{"text":"The Access controls section provides your allowed / block controls. It’s also where you can decide things like “require MFA” or block persistent browser sessions.","key":"9q3e1","inlineStyleRanges":[],"data":{},"entityRanges":[],"type":"unstyled","depth":0},{"inlineStyleRanges":[],"text":"User or workload identities","data":{},"depth":0,"type":"header-three","key":"3f1u1","entityRanges":[]},{"key":"7ge57","entityRanges":[{"offset":0,"length":1,"key":7}],"text":" ","depth":0,"data":{},"inlineStyleRanges":[],"type":"atomic"},{"data":{},"depth":0,"text":"In this section, you’re deciding which user accounts will be affected by the policy. You can set up a specific list of users, for example, yourself to test out a policy. You can select a group that would include everyone in the group or you can select admin roles to affect only users that are assigned the specific admin role. Lastly, you can exclude users. So you can create a policy to include All users, then you can exclude guest and external users.","type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"key":"d19q8"},{"entityRanges":[],"key":"9sgru","depth":0,"data":{},"inlineStyleRanges":[{"style":"ITALIC","offset":0,"length":146}],"text":"Remember, the exclusion will take precedence. So if you select to include a user then exclude the user, the user will be excluded from the policy.","type":"unstyled"},{"data":{},"text":"Cloud apps or actions","entityRanges":[],"key":"4fn4o","depth":0,"type":"header-three","inlineStyleRanges":[]},{"key":"1bfii","data":{},"inlineStyleRanges":[],"text":" ","type":"atomic","depth":0,"entityRanges":[{"key":8,"length":1,"offset":0}]},{"data":{},"inlineStyleRanges":[],"text":"The cloud apps or actions section is where you can filter the conditional access policy based on the app. For example, you may need to require MFA for email access but all other access doesn’t require MFA. If you only wanted the policy to affect email then you would click Select apps > Office 365 Exchange Online.","depth":0,"key":"1vms3","entityRanges":[],"type":"unstyled"},{"entityRanges":[],"inlineStyleRanges":[],"key":"2dufg","depth":0,"type":"header-three","text":"Conditions","data":{}},{"type":"atomic","key":"4ecdt","depth":0,"entityRanges":[{"offset":0,"key":9,"length":1}],"text":" ","data":{},"inlineStyleRanges":[]},{"key":"2c1s7","depth":0,"data":{},"type":"unstyled","text":"Conditions provide an additional layer of filtering. From here you can select if the policy only affects the users when certain other criteria is met. For example, you may want to require MFA only when there’s a high User / sign-in risk. Or you may want to block access altogether from certain countries. Or maybe there are no Android devices in your organization. You can easily select Android devices from this page.","entityRanges":[],"inlineStyleRanges":[]},{"inlineStyleRanges":[],"entityRanges":[],"key":"fqam3","data":{},"text":"Access Controls: Grant","depth":0,"type":"header-three"},{"data":{},"key":"9n8io","entityRanges":[{"key":10,"offset":0,"length":1}],"inlineStyleRanges":[],"type":"atomic","text":" ","depth":0},{"entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","data":{},"depth":0,"text":"From the access controls > grant section you can decide what happens when the criteria above is met. For example, you may want to block access. Or you may want to require multi-factor authentication. Or you may want to require the device to be marked compliant in Intune. It’s all possible in the conditional access policies.","key":"fua8a"},{"key":"64rjg","data":{},"text":"Access Controls: Session","type":"header-three","inlineStyleRanges":[],"entityRanges":[],"depth":0},{"text":" ","data":{},"type":"atomic","entityRanges":[{"length":1,"key":11,"offset":0}],"key":"45gpv","depth":0,"inlineStyleRanges":[]},{"text":"Finally, the session controls. From the session tab, you can set if the user can save their browser session or if they have to sign in again after closing the browser. Or you can set how often users need to re-authenticate when using apps like Outlook or Microsoft Teams.","depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"appfe","data":{},"type":"unstyled"},{"text":"Review the status of conditional access policies","entityRanges":[],"depth":0,"key":"675pq","data":{},"type":"header-two","inlineStyleRanges":[]},{"entityRanges":[],"text":"So, you may be wondering, if I create a policy that blocks sign-ins from non-compliant devices how can I view who’s getting blocked? Fortunately, Microsoft has made it easy.","key":"2sav0","depth":0,"inlineStyleRanges":[],"type":"unstyled","data":{}},{"inlineStyleRanges":[{"style":"BOLD","offset":14,"length":35},{"length":6,"style":"BOLD","offset":52},{"style":"BOLD","offset":60,"length":12},{"offset":119,"style":"BOLD","length":18}],"depth":0,"text":"1. Sign in to Azure Active Directory admin center > Users > Sign in logs > click the sign-in you want to investigate > Conditional access.","data":{},"type":"unstyled","key":"6q6de","entityRanges":[]},{"entityRanges":[{"length":1,"offset":0,"key":12}],"type":"atomic","depth":0,"key":"cevv7","inlineStyleRanges":[],"data":{},"text":" "},{"type":"unstyled","key":"9k0gr","data":{},"inlineStyleRanges":[],"depth":0,"entityRanges":[],"text":"From this page you can see all the conditional access policies, whether they were applied to the sign in and whether the attempt passed or failed. To see more information on the conditional access policy click on it."},{"text":"Force multi-factor authentication while not in the main office","entityRanges":[],"type":"header-two","key":"8lo6r","data":{},"inlineStyleRanges":[],"depth":0},{"key":"435i1","text":"Now, let’s get a little trickier. Let’s say the MFA prompt every time a user logs on is too much for your organization. Maybe you only want to prompt for MFA when users are not in your main office. How do you do it?","data":{},"entityRanges":[],"type":"unstyled","inlineStyleRanges":[],"depth":0},{"text":"1. Sign in to Azure Active Directory admin center > All services > Azure AD Conditional access > Named locations.","entityRanges":[{"key":13,"offset":97,"length":15}],"type":"unstyled","key":"ea0fg","data":{},"inlineStyleRanges":[{"style":"BOLD","length":35,"offset":14},{"style":"BOLD","offset":52,"length":12},{"length":27,"style":"BOLD","offset":67},{"length":15,"offset":97,"style":"BOLD"}],"depth":0},{"text":" ","data":{},"inlineStyleRanges":[],"type":"atomic","depth":0,"key":"fubsa","entityRanges":[{"offset":0,"key":14,"length":1}]},{"entityRanges":[],"text":"2. Click IP ranges location. Set the name to \"Main office\". Click Mark as trusted location. Click the plus (+) sign and add your IP address + the subnet (for example 173.49.196.1/32). Click Add. Click Create.","type":"unstyled","key":"7pk4p","inlineStyleRanges":[{"offset":9,"style":"BOLD","length":18},{"style":"BOLD","offset":66,"length":24},{"offset":108,"length":1,"style":"BOLD"},{"length":3,"style":"BOLD","offset":190},{"style":"BOLD","length":6,"offset":201}],"depth":0,"data":{}},{"type":"atomic","data":{},"inlineStyleRanges":[],"depth":0,"entityRanges":[{"key":15,"length":1,"offset":0}],"text":" ","key":"k3uo"},{"inlineStyleRanges":[{"length":27,"offset":14,"style":"BOLD"},{"style":"BOLD","length":8,"offset":44},{"offset":60,"style":"BOLD","length":10},{"style":"BOLD","offset":73,"length":17}],"entityRanges":[{"length":8,"key":16,"offset":44}],"depth":0,"data":{},"text":"3. Go back to Azure AD Conditional access > policies. Click New policy > Create new policy.","type":"unstyled","key":"82f1h"},{"entityRanges":[],"data":{},"inlineStyleRanges":[{"style":"BOLD","offset":20,"length":11}],"text":"4. Enter a name of “Require MFA”","key":"1ghjg","type":"unstyled","depth":0},{"text":"5. Click 0 users or workload identities selected. Click All users.","depth":0,"data":{},"inlineStyleRanges":[{"style":"BOLD","length":39,"offset":9},{"length":9,"style":"BOLD","offset":56}],"key":"dd9d1","entityRanges":[],"type":"unstyled"},{"entityRanges":[],"key":"1lgnp","text":"6. Click No cloud apps, actions, or authentication contexts selected. Click All cloud apps.","depth":0,"type":"unstyled","inlineStyleRanges":[{"offset":9,"length":59,"style":"BOLD"},{"offset":76,"length":14,"style":"BOLD"}],"data":{}},{"inlineStyleRanges":[{"style":"BOLD","length":21,"offset":9},{"offset":38,"style":"BOLD","length":14}],"key":"89j8i","text":"7. Click 0 conditions selected. Click Not configured located under Locations.","data":{},"depth":0,"type":"unstyled","entityRanges":[]},{"depth":0,"inlineStyleRanges":[{"offset":20,"length":3,"style":"BOLD"}],"entityRanges":[],"key":"alif2","data":{},"type":"unstyled","text":"8. Set Configure to Yes."},{"data":{},"inlineStyleRanges":[{"style":"BOLD","length":7,"offset":9},{"length":18,"style":"BOLD","offset":24},{"style":"BOLD","length":4,"offset":50},{"style":"BOLD","offset":62,"length":11},{"length":6,"style":"BOLD","offset":81}],"depth":0,"entityRanges":[],"key":"a9l85","text":"9. Click Exclude. Click Selected locations. Click None. Click Main Office. Click Select.","type":"unstyled"},{"data":{},"entityRanges":[{"key":17,"length":1,"offset":0}],"type":"atomic","depth":0,"inlineStyleRanges":[],"key":"6och4","text":" "},{"depth":0,"entityRanges":[],"text":"10. Click 0 controls selected (under Grant).","type":"unstyled","key":"b7tvf","inlineStyleRanges":[{"style":"BOLD","offset":10,"length":19}],"data":{}},{"depth":0,"data":{},"text":"11. Click Require multi-factor authentication. Click Select.","entityRanges":[],"type":"unstyled","inlineStyleRanges":[{"length":35,"offset":10,"style":"BOLD"},{"offset":53,"length":6,"style":"BOLD"}],"key":"1sddl"},{"text":"12. Click On (under Enable policy). Click Create.","key":"bfv3b","depth":0,"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","length":2,"offset":10},{"offset":42,"length":6,"style":"BOLD"}],"data":{},"type":"unstyled"},{"entityRanges":[],"key":"5htsf","inlineStyleRanges":[],"data":{},"text":"Now when any user logs in from a location other than your main office they’ll need to apply their MFA. When they login from the main office they won’t need their MFA. Of course, if you set up the earlier policy where all admins had to use MFA then admins will be required to use MFA inside and outside the office.","depth":0,"type":"unstyled"},{"depth":0,"key":"dchec","entityRanges":[],"text":"There’s a ton more you can do with conditional access policies including preventing users from downloading, printing, and syncing files in SharePoint Online and secure on-premises VPNs. Don’t worry, we’ll cover both of these options in a later lesson.","type":"unstyled","data":{},"inlineStyleRanges":[]}]},"type":"article","description":"Conditional access policies help organizations improve security and compliance. They are used to fine-tune and customize the authentication of your users in Microsoft 365. Let me explain. In the simplest terms, it’s a series of if statements.","sectionId":"AFV_acckJ","images":["https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png","https://i.ibb.co/G7QBxPT/name-your-conditional-access-policy.png","https://i.ibb.co/ZBhyf3h/set-conditional-access-policy-to-apply-to-admins.png","https://i.ibb.co/K9J1dVJ/conditional-access-policy-set-all-cloud-apps.png","https://i.ibb.co/PTQmjND/conditional-access-policy-require-mfa.png","https://i.ibb.co/bJPCQ7w/conditional-access-warning.png","https://i.ibb.co/5rJVTmz/conditional-access-policy-users-or-workload-identities.png","https://i.ibb.co/X7XTxRK/Conditional-access-policy-cloud-apps-or-actions.png","https://i.ibb.co/Yypqyqs/conditional-access-policy-conditions.png","https://i.ibb.co/K5PZLY8/conditional-access-policy-grant.png","https://i.ibb.co/jDj8CpP/conditional-access-policy-session.png","https://i.ibb.co/SBvR7ry/conditional-access-policy-logs.png","https://i.ibb.co/G54Sy34/conditional-access-policy-new-named-location.png","https://i.ibb.co/nshF1qX/conditional-access-policy-named-location-by-ip-address.png","https://i.ibb.co/zb3v6Nm/conditional-access-policy-exclude-location.png"],"featuredImage":"https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png","title":"What's a conditional access policy?","id":"V1en9Iugh","datePublished":"2022/5/26"},
      nextContentSlug: 'The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk',
      previousContentSlug: 'Securing-and-implementing-enterprise-applications-2QfoI2HxY',
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
<p>1. log in to Azure Active Directory admin center &gt; All services &gt; Azure AD Conditional Access &gt; New Policy &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/PolicyBlade" target="_blank">Create new policy</a>.</p>
<div ><img src="https://i.ibb.co/DQm1sY0/Create-conditional-access-policy.png" alt="Create a conditional access policy" style="height: auto;width: auto"/></div>
<p>2. Set the <strong>name </strong>to “Require MFA for admins”.</p>
<div ><img src="https://i.ibb.co/G7QBxPT/name-your-conditional-access-policy.png" alt="Name your conditional access policy" style="height: auto;width: auto"/></div>
<p>3. Click <strong>0 users or workload identities selected</strong>. Click <strong>Select users and groups</strong> &gt; <strong>Directory roles</strong>. Then click each role that has administrator in its name.</p>
<div ><img src="https://i.ibb.co/ZBhyf3h/set-conditional-access-policy-to-apply-to-admins.png" alt="set conditional access policy to apply to admins" style="height: auto;width: auto"/></div>
<p>4. Click <strong>No cloud apps, actions, or authentication contexts selected</strong>. Click <strong>All cloud apps</strong>.</p>
<div ><img src="https://i.ibb.co/K9J1dVJ/conditional-access-policy-set-all-cloud-apps.png" alt="Conditional access policy set all cloud apps" style="height: auto;width: auto"/></div>
<p>5. Click<strong> 0 controls selected</strong> under Grant. Click <strong>Require multi-factor authentication</strong>. Click <strong>Select</strong>. Click <strong>On</strong> under Enable policy.</p>
<div ><img src="https://i.ibb.co/PTQmjND/conditional-access-policy-require-mfa.png" alt="conditional access policy require mfa" style="height: auto;width: auto"/></div>
<p>6. At this point you may see a warning say “Don’t lock yourself out!”. Read the recommendation carefully and then make your decision whether to exclude yourself from the policy.</p>
<div ><img src="https://i.ibb.co/bJPCQ7w/conditional-access-warning.png" alt="Conditional access warning: Don't lock yourself out! We recommend applying a policy to a small set of users first to verify it behaves as expected." style="height: auto;width: auto"/></div>
<p>7. Click <strong>Create</strong>.</p>
<p>That’s it. You are now requiring your administrators to configure and use MFA when they log in to Office 365. Now let’s break down the parts of the conditional access policy configuration.</p>
<h2>Understanding conditional access policies</h2>
<p>The conditional access policy is broken into two sections: assignments and Access controls.</p>
<p>The assignments section is the filters. This is where you can decide which users, device OS’s, and apps the policy affects.</p>
<p>The Access controls section provides your allowed / block controls. It’s also where you can decide things like “require MFA” or block persistent browser sessions.</p>
<h3>User or workload identities</h3>
<div ><img src="https://i.ibb.co/5rJVTmz/conditional-access-policy-users-or-workload-identities.png" alt="conditional access policy users or workload identities" style="height: auto;width: auto"/></div>
<p>In this section, you’re deciding which user accounts will be affected by the policy. You can set up a specific list of users, for example, yourself to test out a policy. You can select a group that would include everyone in the group or you can select admin roles to affect only users that are assigned the specific admin role. Lastly, you can exclude users. So you can create a policy to include All users, then you can exclude guest and external users.</p>
<p><em>Remember, the exclusion will take precedence. So if you select to include a user then exclude the user, the user will be excluded from the policy.</em></p>
<h3>Cloud apps or actions</h3>
<div ><img src="https://i.ibb.co/X7XTxRK/Conditional-access-policy-cloud-apps-or-actions.png" alt="Conditional access policy cloud apps or actions" style="height: auto;width: auto"/></div>
<p>The cloud apps or actions section is where you can filter the conditional access policy based on the app. For example, you may need to require MFA for email access but all other access doesn’t require MFA. If you only wanted the policy to affect email then you would click Select apps &gt; Office 365 Exchange Online.</p>
<h3>Conditions</h3>
<div ><img src="https://i.ibb.co/Yypqyqs/conditional-access-policy-conditions.png" alt="conditional access policy conditions" style="height: auto;width: auto"/></div>
<p>Conditions provide an additional layer of filtering. From here you can select if the policy only affects the users when certain other criteria is met. For example, you may want to require MFA only when there’s a high User / sign-in risk. Or you may want to block access altogether from certain countries. Or maybe there are no Android devices in your organization. You can easily select Android devices from this page.</p>
<h3>Access Controls: Grant</h3>
<div ><img src="https://i.ibb.co/K5PZLY8/conditional-access-policy-grant.png" alt="Conditional access policy grant" style="height: auto;width: auto"/></div>
<p>From the access controls &gt; grant section you can decide what happens when the criteria above is met. For example, you may want to block access. Or you may want to require multi-factor authentication. Or you may want to require the device to be marked compliant in Intune. It’s all possible in the conditional access policies.</p>
<h3>Access Controls: Session</h3>
<div ><img src="https://i.ibb.co/jDj8CpP/conditional-access-policy-session.png" alt="conditional access policy session" style="height: auto;width: auto"/></div>
<p>Finally, the session controls. From the session tab, you can set if the user can save their browser session or if they have to sign in again after closing the browser. Or you can set how often users need to re-authenticate when using apps like Outlook or Microsoft Teams.</p>
<h2>Review the status of conditional access policies</h2>
<p>So, you may be wondering, if I create a policy that blocks sign-ins from non-compliant devices how can I view who’s getting blocked? Fortunately, Microsoft has made it easy.</p>
<p>1. Sign in to <strong>Azure Active Directory admin center</strong> &gt; <strong>Users </strong>&gt; <strong>Sign in logs</strong> &gt; click the sign-in you want to investigate &gt; <strong>Conditional access</strong>.</p>
<div ><img src="https://i.ibb.co/SBvR7ry/conditional-access-policy-logs.png" alt="conditional access policy logs" style="height: auto;width: auto"/></div>
<p>From this page you can see all the conditional access policies, whether they were applied to the sign in and whether the attempt passed or failed. To see more information on the conditional access policy click on it.</p>
<h2>Force multi-factor authentication while not in the main office</h2>
<p>Now, let’s get a little trickier. Let’s say the MFA prompt every time a user logs on is too much for your organization. Maybe you only want to prompt for MFA when users are not in your main office. How do you do it?</p>
<p>1. Sign in to <strong>Azure Active Directory admin center</strong> &gt; <strong>All services</strong> &gt; <strong>Azure AD Conditional access</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/NamedLocations" target="_blank"><strong>Named locations</strong></a>.</p>
<div ><img src="https://i.ibb.co/G54Sy34/conditional-access-policy-new-named-location.png" alt="conditional access policy new named location" style="height: auto;width: auto"/></div>
<p>2. Click <strong>IP ranges location</strong>. Set the name to "Main office". Click <strong>Mark as trusted location</strong>. Click the plus (<strong>+</strong>) sign and add your IP address + the subnet (for example 173.49.196.1/32). Click <strong>Add</strong>. Click <strong>Create</strong>.</p>
<div ><img src="https://i.ibb.co/nshF1qX/conditional-access-policy-named-location-by-ip-address.png" alt="conditional access policy named location by ip address" style="height: auto;width: auto"/></div>
<p>3. Go back to <strong>Azure AD Conditional access</strong> &gt; <a href="https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ConditionalAccessBlade/Policies" target="_blank"><strong>policies</strong></a>. Click <strong>New policy</strong> &gt; <strong>Create new policy</strong>.</p>
<p>4. Enter a name of “<strong>Require MFA</strong>”</p>
<p>5. Click <strong>0 users or workload identities selected</strong>. Click <strong>All users</strong>.</p>
<p>6. Click <strong>No cloud apps, actions, or authentication contexts selected</strong>. Click <strong>All cloud apps</strong>.</p>
<p>7. Click <strong>0 conditions selected</strong>. Click <strong>Not configured</strong> located under Locations.</p>
<p>8. Set Configure to <strong>Yes</strong>.</p>
<p>9. Click <strong>Exclude</strong>. Click <strong>Selected locations</strong>. Click <strong>None</strong>. Click <strong>Main Office</strong>. Click <strong>Select</strong>.</p>
<div ><img src="https://i.ibb.co/zb3v6Nm/conditional-access-policy-exclude-location.png" alt="conditional access policy exclude location" style="height: auto;width: auto"/></div>
<p>10. Click <strong>0 controls selected</strong> (under Grant).</p>
<p>11. Click <strong>Require multi-factor authentication</strong>. Click <strong>Select</strong>.</p>
<p>12. Click <strong>On</strong> (under Enable policy). Click <strong>Create</strong>.</p>
<p>Now when any user logs in from a location other than your main office they’ll need to apply their MFA. When they login from the main office they won’t need their MFA. Of course, if you set up the earlier policy where all admins had to use MFA then admins will be required to use MFA inside and outside the office.</p>
<p>There’s a ton more you can do with conditional access policies including preventing users from downloading, printing, and syncing files in SharePoint Online and secure on-premises VPNs. Don’t worry, we’ll cover both of these options in a later lesson.</p>
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
