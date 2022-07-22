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
      path: '/course/ms-500/learn/Simulating-attacks-with-Microsoft-365-GG4cMY8pK',
      article: {article: {blocks: [{data: {}, key: 'bjqbc', inlineStyleRanges: [], text: 'Phishing attacks are one of the most common ways an organization is attacked. According to the FBI, there were 241,342 complaints, with adjusted losses of over $54 million in 2020 alone. So the question is, is your organization ready?', type: 'unstyled', entityRanges: [], depth: 0}, {entityRanges: [], depth: 0, data: {}, type: 'header-two', inlineStyleRanges: [], key: '4bn4f', text: 'What’s a phishing attack?'}, {entityRanges: [], data: {}, depth: 0, type: 'unstyled', inlineStyleRanges: [], key: '7l5ug', text: 'Phishing attacks are a type of social engineering attack used to steal data, typically credit card or login credentials. In short, the malicious person would send an email pretending to be from someone else and ask the victim to either go to a website enter their credentials or send them a credit card or a money transfer. For the victim, either your organization or the user the attack can be devastating. You can lose financially, or the attacker may use the credentials to send malicious emails to your partners, as well as the world discrediting you and your business.'}, {depth: 0, type: 'header-three', inlineStyleRanges: [], text: 'Phishing attack techniques', entityRanges: [], data: {}, key: '5q6hb'}, {depth: 0, inlineStyleRanges: [], text: 'There are several techniques used in a phishing attack and the number continues to grow but for now, we’ll focus on 5 different phishing attack techniques.', key: 'fq7d5', entityRanges: [], type: 'unstyled', data: {}}, {depth: 0, entityRanges: [], text: 'Credential harvest', key: '307vu', type: 'header-four', data: {}, inlineStyleRanges: []}, {inlineStyleRanges: [], data: {}, entityRanges: [], type: 'unstyled', key: 'd9u3g', depth: 0, text: 'In credential harvesting attacks the malicious person is attempting to get your user’s credentials. The malicious user will typically send an email with a URL to a bogus site to trick your users into entering their credentials.'}, {key: 'dknie', inlineStyleRanges: [], text: 'Malware attachment', depth: 0, type: 'header-four', entityRanges: [], data: {}}, {data: {}, type: 'unstyled', text: 'In malware attachment attacks a malicious person will send an email to your users with a malicious attachment. A lot of times the attachment will look like a simple Word or Excel document but the attachment will have malicious code baked into it.', key: 'jd58', inlineStyleRanges: [], depth: 0, entityRanges: []}, {entityRanges: [], key: '12vnj', type: 'header-four', data: {}, text: 'Link in attachment', depth: 0, inlineStyleRanges: []}, {depth: 0, entityRanges: [], type: 'unstyled', data: {}, inlineStyleRanges: [], text: 'With Link in attachment attacks, the malicious user will be attacking your users using the credential harvest technique. The only difference being the malicious user will put the link inside an attachment.', key: 'pdiu'}, {key: '57bvf', type: 'header-four', depth: 0, data: {}, text: 'Link to malware', entityRanges: [], inlineStyleRanges: []}, {entityRanges: [], key: '44usg', type: 'unstyled', depth: 0, inlineStyleRanges: [], text: 'Link to malware attacks will send an email to your users with a link where the user needs to go to a website and download the malicious file. Like the malware attachment attack technique, the file will contain code that is run on your user\'s computer. Often the malicious person will host the malicious code on common sites like Dropbox, SharePoint, or Google Drive.', data: {}}, {entityRanges: [], text: 'Drive-by URL', depth: 0, data: {}, inlineStyleRanges: [], type: 'header-four', key: 'eulsv'}, {key: '3g8d7', type: 'unstyled', depth: 0, text: 'Drive-by URL also known as the watering hole technique is an attack sequence where the malicious user sends an email with a URL inside. The URL will point to a website with malicious code running it to get information from your users. Typically the website will be a good site that has been hacked or a clone of a good site so the user doesn’t even realize it’s happening.', inlineStyleRanges: [], entityRanges: [], data: {}}, {data: {}, entityRanges: [], inlineStyleRanges: [], key: 'e99f6', type: 'header-two', depth: 0, text: 'How to stop phishing attacks?'}, {depth: 0, entityRanges: [], data: {}, inlineStyleRanges: [], type: 'unstyled', text: 'One of the best ways to prevent phishing attacks is user training. Training your users to detect malicious emails can prevent your organization from losing financially or credibility. In short, we’ll set up a simulated phishing email and send it to your users. Then we’ll track who opened the links and you can work with those specific users to help them learn to avoid getting tricked again.', key: 'fgcdv'}, {key: 'fm5le', inlineStyleRanges: [], depth: 0, type: 'header-two', data: {}, text: 'What’s an attack simulation?', entityRanges: []}, {text: 'An attack simulation is a way for you to send an email to your users that is a fake phishing attack. In short, Microsoft has created several sample emails that you can use to send to your users. The sample emails will direct the user to go to a fake malicious site or download a fake malicious attachment. When the user opens the site or attachment they are informed that this was a simulation. Microsoft’s attack simulation will also report on who opened the malicious URLs or attachments so you can provide them with more training.', type: 'unstyled', depth: 0, inlineStyleRanges: [], data: {}, entityRanges: [], key: 'f2cet'}, {data: {}, key: '7bq9p', inlineStyleRanges: [], type: 'header-two', entityRanges: [], text: 'What licenses are required?', depth: 0}, {entityRanges: [], text: 'To use the attack simulation training built into Microsoft 365 you’ll need Microsoft 365 E5 or Microsoft Defender for Office 365 Plan 2 licenses.', data: {}, inlineStyleRanges: [], type: 'unstyled', depth: 0, key: 'dabt4'}, {inlineStyleRanges: [], entityRanges: [], type: 'header-two', depth: 0, key: '52l44', data: {}, text: 'What roles are required?'}, {key: 'c3akv', type: 'unstyled', entityRanges: [], depth: 0, inlineStyleRanges: [], data: {}, text: 'You need to be a member of one of the following roles to set up the attack simulation training:'}, {depth: 0, data: {}, type: 'unordered-list-item', entityRanges: [], key: 'colng', inlineStyleRanges: [], text: 'Organization Management'}, {type: 'unordered-list-item', text: 'Security Administrator', key: '5srjs', depth: 0, data: {}, entityRanges: [], inlineStyleRanges: []}, {text: 'Attack Simulation Administrators can create and manage all aspects of attack simulation campaigns.', inlineStyleRanges: [], data: {}, depth: 0, key: '9lnp7', entityRanges: [], type: 'unordered-list-item'}, {depth: 0, key: 'pm7p', inlineStyleRanges: [], text: 'Attack Payload Author can create attack payloads that an admin can initiate later.', type: 'unordered-list-item', entityRanges: [], data: {}}, {data: {}, entityRanges: [], depth: 0, type: 'header-two', inlineStyleRanges: [], text: 'How to configure an attack simulation', key: 'al20s'}, {key: 'eoj72', depth: 0, inlineStyleRanges: [{length: 25, style: 'BOLD', offset: 13}, {offset: 41, style: 'BOLD', length: 26}, {length: 11, style: 'BOLD', offset: 70}, {style: 'BOLD', offset: 89, length: 19}], entityRanges: [{key: 0, offset: 70, length: 11}], data: {}, text: '1. Go to the Microsoft Defender portal > Attack simulation training > Simulations. Click Launch a simulation.', type: 'unstyled'}, {entityRanges: [{length: 1, offset: 0, key: 1}], data: {}, type: 'atomic', inlineStyleRanges: [], key: 'fj9f5', depth: 0, text: ' '}, {inlineStyleRanges: [{style: 'BOLD', offset: 71, length: 18}, {length: 4, style: 'BOLD', offset: 108}], text: '2. Select the technique you want to use. In this scenario, we’ll leave Credential Harvest checked and click Next.', key: 'cj0hk', depth: 0, data: {}, entityRanges: [], type: 'unstyled'}, {data: {}, text: ' ', inlineStyleRanges: [], depth: 0, type: 'atomic', entityRanges: [{offset: 0, length: 1, key: 2}], key: '38am9'}, {entityRanges: [], key: '594ak', inlineStyleRanges: [{style: 'BOLD', length: 15, offset: 32}, {length: 4, style: 'BOLD', offset: 77}], data: {}, text: '3. Enter the simulation name of Test Simulation in the space provided. Click Next.', depth: 0, type: 'unstyled'}, {inlineStyleRanges: [], entityRanges: [{offset: 0, length: 1, key: 3}], text: ' ', type: 'atomic', key: '6qlpe', depth: 0, data: {}}, {inlineStyleRanges: [{style: 'BOLD', offset: 14, length: 17}, {offset: 47, length: 4, style: 'BOLD'}], text: '4. Select the 2 Failed Messages payload. Click Next.', data: {}, entityRanges: [], key: '7p6pm', depth: 0, type: 'unstyled'}, {text: ' ', data: {}, entityRanges: [{length: 1, offset: 0, key: 4}], key: 'a4d00', depth: 0, inlineStyleRanges: [], type: 'atomic'}, {type: 'unstyled', key: 'fpckk', entityRanges: [], data: {}, inlineStyleRanges: [{length: 37, style: 'BOLD', offset: 105}, {offset: 222, style: 'BOLD', length: 4}], depth: 0, text: '5. On the Target Users page you can either select the users you want to test the deployment with or click Include all users in my organization. Set up the users you want to send the attack simulation training to and click Next.'}, {data: {}, entityRanges: [{length: 1, key: 5, offset: 0}], inlineStyleRanges: [], key: 'a57dh', depth: 0, type: 'atomic', text: ' '}, {key: '1sama', data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], text: '6. On the Assign Training page leave the defaults and click Next.', type: 'unstyled'}, {data: {}, inlineStyleRanges: [], key: 'dosge', type: 'unstyled', entityRanges: [], depth: 0, text: '7. On the landing page window leave the defaults and click Next.'}, {depth: 0, key: '961n4', text: '8. On the select end-user notification page click Microsoft default notification (recommended). Then click Delivery preferences > Deliver during campaign. Click Next.', entityRanges: [], type: 'unstyled', data: {}, inlineStyleRanges: [{style: 'BOLD', length: 44, offset: 50}, {style: 'BOLD', length: 20, offset: 107}, {style: 'BOLD', length: 23, offset: 130}, {length: 4, offset: 161, style: 'BOLD'}]}, {type: 'atomic', entityRanges: [{length: 1, key: 6, offset: 0}], key: '56mvv', depth: 0, inlineStyleRanges: [], text: ' ', data: {}}, {key: 'cp136', entityRanges: [], data: {}, inlineStyleRanges: [{length: 4, offset: 36, style: 'BOLD'}], type: 'unstyled', text: '9. On the Launch details page click Next.', depth: 0}, {depth: 0, type: 'unstyled', key: '1i5ce', text: '10. Click Submit. Click Done.', inlineStyleRanges: [{offset: 10, style: 'BOLD', length: 6}, {style: 'BOLD', length: 4, offset: 24}], entityRanges: [], data: {}}, {entityRanges: [], key: 'fl4ag', inlineStyleRanges: [], type: 'header-two', depth: 0, data: {}, text: 'What will users experience?'}, {type: 'unstyled', text: '', data: {}, entityRanges: [], key: '4fgar', depth: 0, inlineStyleRanges: []}, {text: ' ', entityRanges: [{key: 7, length: 1, offset: 0}], depth: 0, type: 'atomic', data: {}, key: '7e7p2', inlineStyleRanges: []}, {entityRanges: [], type: 'unstyled', data: {}, depth: 0, key: '573te', text: 'Each user you selected to receive the phishing simulation will receive the same email. The email will contain a link to a website that appears to be from Microsoft. When the user enters their credentials they’ll receive a page informing them that they were duped. Once on the page, Microsoft will explain a couple of things that they review to know if the email is a phishing scam or not. Under the quick guide will be a link to training that the user can attend to learn more.', inlineStyleRanges: []}, {depth: 0, data: {}, key: 'fvsoj', text: ' ', type: 'atomic', inlineStyleRanges: [], entityRanges: [{offset: 0, key: 8, length: 1}]}, {inlineStyleRanges: [], key: 'epoav', data: {}, type: 'header-two', depth: 0, text: 'How to view the report on who clicked the link?', entityRanges: []}, {type: 'unstyled', entityRanges: [], depth: 0, inlineStyleRanges: [], key: '3d4k2', data: {}, text: 'So now, we have some data. We’ve sent the email to some users in our organization but how do we check on who clicked the link / completed the training? It’s easy!'}, {entityRanges: [{offset: 70, key: 9, length: 11}], text: '1. Go to the Microsoft Defender portal > Attack simulation training > Simulations. Click Test Simulation.', data: {}, type: 'unstyled', key: '9t9rv', depth: 0, inlineStyleRanges: [{length: 26, offset: 41, style: 'BOLD'}, {length: 11, style: 'BOLD', offset: 70}, {style: 'BOLD', length: 15, offset: 89}]}, {entityRanges: [{offset: 0, key: 10, length: 1}], type: 'atomic', inlineStyleRanges: [], key: '8dia0', depth: 0, data: {}, text: ' '}, {key: 'kdn3', data: {}, inlineStyleRanges: [], entityRanges: [], type: 'unstyled', text: 'From this page, you have a quick overview of the simulation. You can see how many users reported the email as phishing, clicked the link, and who entered their credentials.', depth: 0}, {key: '94s5f', depth: 0, data: {}, inlineStyleRanges: [{style: 'BOLD', offset: 9, length: 10}], entityRanges: [], text: '2. Click View users to see where your users landed in the simulation.', type: 'unstyled'}, {depth: 0, type: 'atomic', entityRanges: [{length: 1, key: 11, offset: 0}], text: ' ', data: {}, key: 'e0mf5', inlineStyleRanges: []}, {entityRanges: [], type: 'unstyled', depth: 0, text: 'From this page, you can see which users were compromised and which users completed the training.', inlineStyleRanges: [], data: {}, key: '57jbj'}, {inlineStyleRanges: [], entityRanges: [], text: 'How do we automatically schedule simulations?', key: '96pkp', depth: 0, type: 'header-two', data: {}}, {depth: 0, key: '16u9q', type: 'unstyled', data: {}, entityRanges: [], inlineStyleRanges: [], text: 'So now you’ve evaluated the simulation and maybe even sent the simulation to some of your end-users. The next question is, how do we make the simulations reoccur? Let’s take a look.'}, {text: '1. Go to Microsoft 365 Defender Portal > Attack simulation training > Simulation automations. Click Create automation.', data: {}, type: 'unstyled', inlineStyleRanges: [{length: 26, offset: 41, style: 'BOLD'}, {style: 'BOLD', offset: 70, length: 22}, {offset: 100, style: 'BOLD', length: 17}], depth: 0, key: 'c2lam', entityRanges: [{key: 12, length: 22, offset: 70}]}, {entityRanges: [{key: 13, length: 1, offset: 0}], text: ' ', data: {}, key: 'dnqbm', depth: 0, inlineStyleRanges: [], type: 'atomic'}, {type: 'unstyled', depth: 0, data: {}, inlineStyleRanges: [{style: 'BOLD', length: 21, offset: 19}, {length: 4, style: 'BOLD', offset: 48}], text: '2. Set the name to Simulation Automation. Click Next.', entityRanges: [], key: 'cltvc'}, {entityRanges: [{length: 1, offset: 0, key: 14}], depth: 0, type: 'atomic', data: {}, text: ' ', inlineStyleRanges: [], key: '3ue11'}, {data: {}, inlineStyleRanges: [{style: 'BOLD', length: 18, offset: 9}, {style: 'BOLD', offset: 35, length: 4}], key: 'bj8ei', type: 'unstyled', depth: 0, text: '3. Click Credential Harvest. Click Next.', entityRanges: []}, {key: 'bsrr8', inlineStyleRanges: [], depth: 0, entityRanges: [{key: 15, length: 1, offset: 0}], text: ' ', type: 'atomic', data: {}}, {depth: 0, data: {}, entityRanges: [], text: '4. Click Randomize. Click Next.', key: 'bs0vq', inlineStyleRanges: [{style: 'BOLD', length: 9, offset: 9}, {offset: 26, length: 4, style: 'BOLD'}], type: 'unstyled'}, {data: {}, text: ' ', type: 'atomic', key: '2kv91', inlineStyleRanges: [], entityRanges: [{offset: 0, length: 1, key: 16}], depth: 0}, {type: 'unstyled', key: '3f0af', inlineStyleRanges: [{style: 'BOLD', length: 36, offset: 144}, {length: 4, style: 'BOLD', offset: 188}], text: '5. Select the users you want to be tested. As a start, you may want to select a couple of users. Then later you may want to come back and click Include all users in my organization. Click Next.', entityRanges: [], depth: 0, data: {}}, {entityRanges: [{key: 17, length: 1, offset: 0}], key: 'e066k', type: 'atomic', inlineStyleRanges: [], text: ' ', depth: 0, data: {}}, {depth: 0, key: 'ffuni', inlineStyleRanges: [{offset: 38, style: 'BOLD', length: 4}], type: 'unstyled', entityRanges: [], text: '6. On the assign training page, click Next.', data: {}}, {entityRanges: [], key: 'bl0la', type: 'unstyled', depth: 0, text: '7. On the Landing page window, click Next.', data: {}, inlineStyleRanges: [{offset: 37, style: 'BOLD', length: 4}]}, {type: 'unstyled', data: {}, text: '8. On the Select end user notification page click Microsoft default notification (recommended). Set Delivery preferences to Deliver during campaign. Click Next.', key: '9dddn', inlineStyleRanges: [{style: 'BOLD', length: 44, offset: 50}, {offset: 100, length: 20, style: 'BOLD'}, {offset: 124, style: 'BOLD', length: 23}, {length: 4, style: 'BOLD', offset: 155}], depth: 0, entityRanges: []}, {entityRanges: [{length: 1, offset: 0, key: 18}], text: ' ', inlineStyleRanges: [], type: 'atomic', key: '4194b', depth: 0, data: {}}, {key: '8ekcm', type: 'unstyled', inlineStyleRanges: [{length: 4, style: 'BOLD', offset: 41}], depth: 0, data: {}, entityRanges: [], text: '9. On the Simulation schedule page click Next.'}, {text: '10. Set the simulation recurrence. Then click Next.', depth: 0, data: {}, type: 'unstyled', entityRanges: [], key: '17h4m', inlineStyleRanges: [{length: 21, style: 'BOLD', offset: 12}, {style: 'BOLD', offset: 46, length: 4}]}, {data: {}, text: ' ', inlineStyleRanges: [], key: 'a7aau', entityRanges: [{key: 19, length: 1, offset: 0}], depth: 0, type: 'atomic'}, {type: 'unstyled', data: {}, key: 'a4ojt', depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 4, offset: 37}], entityRanges: [], text: '11. On the launch details page click Next.'}, {inlineStyleRanges: [{offset: 10, style: 'BOLD', length: 6}, {length: 4, offset: 24, style: 'BOLD'}], text: '12. Click Submit. Click Done.', data: {}, key: '2bcct', entityRanges: [], depth: 0, type: 'unstyled'}, {key: '4tn71', entityRanges: [], text: '', inlineStyleRanges: [], data: {}, type: 'unstyled', depth: 0}], entityMap: {0: {mutability: 'MUTABLE', data: {url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', targetOption: '_blank'}, type: 'LINK'}, 1: {mutability: 'MUTABLE', type: 'IMAGE', data: {alignment: 'none', targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', alt: 'Launch a phishing attack simulation', height: 'auto', width: 'auto', src: 'https://i.ibb.co/HxvgcYk/launch-a-simulation.png'}}, 2: {data: {url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', alignment: 'none', width: 'auto', src: 'https://i.ibb.co/YTvnDry/select-a-technique.png', height: 'auto', targetOption: '_blank', alt: 'Select a Technique'}, mutability: 'MUTABLE', type: 'IMAGE'}, 3: {data: {height: 'auto', alignment: 'none', alt: 'Name your simulation then click Next', targetOption: '_blank', width: 'auto', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', src: 'https://i.ibb.co/JtdZw5W/name-your-simulation.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 4: {type: 'IMAGE', data: {url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', src: 'https://i.ibb.co/6BPbMjC/select-a-payload.png', alt: 'Select the 2 failed messages payload. Then click Next', alignment: 'none', height: 'auto', targetOption: '_blank', width: 'auto'}, mutability: 'MUTABLE'}, 5: {type: 'IMAGE', data: {targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', alt: 'Select the users to target. Then click Next', height: 'auto', alignment: 'none', src: 'https://i.ibb.co/hdj5mcc/target-users.png', width: 'auto'}, mutability: 'MUTABLE'}, 6: {type: 'IMAGE', mutability: 'MUTABLE', data: {alignment: 'none', height: 'auto', targetOption: '_blank', src: 'https://i.ibb.co/SQTjGBD/select-end-user-notification.png', width: 'auto', alt: 'Select end user notifications', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations'}}, 7: {mutability: 'MUTABLE', data: {targetOption: '_blank', alignment: 'none', alt: 'Fake phishing email', src: 'https://i.ibb.co/nkq9MsK/fake-phishing-email.png', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', height: 'auto', width: 'auto'}, type: 'IMAGE'}, 8: {mutability: 'MUTABLE', type: 'IMAGE', data: {targetOption: '_blank', alt: 'Fake phishing landing page', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations', height: 'auto', alignment: 'none', src: 'https://i.ibb.co/PYx0XxT/fake-phishing-landing-page.png', width: 'auto'}}, 9: {data: {targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulations'}, type: 'LINK', mutability: 'MUTABLE'}, 10: {mutability: 'MUTABLE', type: 'IMAGE', data: {alignment: 'none', width: 'auto', alt: 'View phishing simulation', src: 'https://i.ibb.co/Sdkb0n4/view-phishing-simulation.png', height: 'auto'}}, 11: {data: {alignment: 'none', src: 'https://i.ibb.co/NyvnbMK/simulation-overview-view-users-circled.png', height: 'auto', width: 'auto', alt: 'Simulation overview view users circled'}, mutability: 'MUTABLE', type: 'IMAGE'}, 12: {data: {targetOption: '_blank', url: 'https://security.microsoft.com/attacksimulator?viewid=simulationautomation'}, type: 'LINK', mutability: 'MUTABLE'}, 13: {type: 'IMAGE', data: {alt: 'Create phishing simulation automation', src: 'https://i.ibb.co/x3gkQK4/create-phishing-simulation-automation.png', width: 'auto', alignment: 'none', height: 'auto'}, mutability: 'MUTABLE'}, 14: {mutability: 'MUTABLE', data: {height: 'auto', alt: 'Name your automation. Click next', width: 'auto', alignment: 'none', src: 'https://i.ibb.co/X3ztyC5/name-your-automation.png'}, type: 'IMAGE'}, 15: {data: {alt: 'Select social engineering technique', alignment: 'none', height: 'auto', src: 'https://i.ibb.co/D9Vp9q5/Select-social-engineering-technique.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 16: {data: {height: 'auto', src: 'https://i.ibb.co/4N4906n/select-payloads.png', width: 'auto', alignment: 'none', alt: 'Set payloads to randomize. Click Next'}, type: 'IMAGE', mutability: 'MUTABLE'}, 17: {mutability: 'MUTABLE', type: 'IMAGE', data: {height: 'auto', alt: 'Select the target users.', alignment: 'none', src: 'https://i.ibb.co/RywpK18/select-the-target-users.png', width: 'auto'}}, 18: {type: 'IMAGE', mutability: 'MUTABLE', data: {width: 'auto', alt: 'Select end user notifications', height: 'auto', src: 'https://i.ibb.co/wgKfQNX/select-end-user-notifications-page.png', alignment: 'none'}}, 19: {mutability: 'MUTABLE', type: 'IMAGE', data: {height: 'auto', src: 'https://i.ibb.co/2yBQcj2/schedule-details.png', width: 'auto', alt: 'Schedule details', alignment: 'none'}}}}, datePublished: '2022/5/26', publish: true, images: ['https://i.ibb.co/HxvgcYk/launch-a-simulation.png', 'https://i.ibb.co/b6c9c4W/select-a-technique.png', 'https://i.ibb.co/YTvnDry/select-a-technique.png', 'https://i.ibb.co/JtdZw5W/name-your-simulation.png', 'https://i.ibb.co/6BPbMjC/select-a-payload.png', 'https://i.ibb.co/hdj5mcc/target-users.png', 'https://i.ibb.co/SQTjGBD/select-end-user-notification.png', 'https://i.ibb.co/nkq9MsK/fake-phishing-email.png', 'https://i.ibb.co/PYx0XxT/fake-phishing-landing-page.png', 'https://i.ibb.co/Sdkb0n4/view-phishing-simulation.png', 'https://i.ibb.co/NyvnbMK/simulation-overview-view-users-circled.png', 'https://i.ibb.co/x3gkQK4/create-phishing-simulation-automation.png', 'https://i.ibb.co/X3ztyC5/name-your-automation.png', 'https://i.ibb.co/D9Vp9q5/Select-social-engineering-technique.png', 'https://i.ibb.co/4N4906n/select-payloads.png', 'https://i.ibb.co/RywpK18/select-the-target-users.png', 'https://i.ibb.co/wgKfQNX/select-end-user-notifications-page.png', 'https://i.ibb.co/2yBQcj2/schedule-details.png'], id: 'GG4cMY8pK', type: 'article', description: 'Phishing attacks are one of the most common ways an organization is attacked. According to the FBI, there were 241,342 complaints, with adjusted losses of over $54 million in 2020 alone. So the question is, is your organization ready?', slug: 'Simulating-attacks-with-Microsoft-365-GG4cMY8pK', featuredImage: 'https://i.ibb.co/NyvnbMK/simulation-overview-view-users-circled.png', sectionId: 'QScYfSu74', title: 'Simulating attacks with Microsoft 365'},
      nextContentSlug: 'Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T',
      previousContentSlug: 'Protecting-email-against-phishing-attacks-GCOOUsSBT',
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
                <div><p>Phishing attacks are one of the most common ways an organization is attacked. According to the FBI, there were 241,342 complaints, with adjusted losses of over $54 million in 2020 alone. So the question is, is your organization ready?</p>
                  <h2>What’s a phishing attack?</h2>
                  <p>Phishing attacks are a type of social engineering attack used to steal data, typically credit card or login credentials. In short, the malicious person would send an email pretending to be from someone else and ask the victim to either go to a website enter their credentials or send them a credit card or a money transfer. For the victim, either your organization or the user the attack can be devastating. You can lose financially, or the attacker may use the credentials to send malicious emails to your partners, as well as the world discrediting you and your business.</p>
                  <h3>Phishing attack techniques</h3>
                  <p>There are several techniques used in a phishing attack and the number continues to grow but for now, we’ll focus on 5 different phishing attack techniques.</p>
                  <h4>Credential harvest</h4>
                  <p>In credential harvesting attacks the malicious person is attempting to get your user’s credentials. The malicious user will typically send an email with a URL to a bogus site to trick your users into entering their credentials.</p>
                  <h4>Malware attachment</h4>
                  <p>In malware attachment attacks a malicious person will send an email to your users with a malicious attachment. A lot of times the attachment will look like a simple Word or Excel document but the attachment will have malicious code baked into it.</p>
                  <h4>Link in attachment</h4>
                  <p>With Link in attachment attacks, the malicious user will be attacking your users using the credential harvest technique. The only difference being the malicious user will put the link inside an attachment.</p>
                  <h4>Link to malware</h4>
                  <p>Link to malware attacks will send an email to your users with a link where the user needs to go to a website and download the malicious file. Like the malware attachment attack technique, the file will contain code that is run on your user's computer. Often the malicious person will host the malicious code on common sites like Dropbox, SharePoint, or Google Drive.</p>
                  <h4>Drive-by URL</h4>
                  <p>Drive-by URL also known as the watering hole technique is an attack sequence where the malicious user sends an email with a URL inside. The URL will point to a website with malicious code running it to get information from your users. Typically the website will be a good site that has been hacked or a clone of a good site so the user doesn’t even realize it’s happening.</p>
                  <h2>How to stop phishing attacks?</h2>
                  <p>One of the best ways to prevent phishing attacks is user training. Training your users to detect malicious emails can prevent your organization from losing financially or credibility. In short, we’ll set up a simulated phishing email and send it to your users. Then we’ll track who opened the links and you can work with those specific users to help them learn to avoid getting tricked again.</p>
                  <h2>What’s an attack simulation?</h2>
                  <p>An attack simulation is a way for you to send an email to your users that is a fake phishing attack. In short, Microsoft has created several sample emails that you can use to send to your users. The sample emails will direct the user to go to a fake malicious site or download a fake malicious attachment. When the user opens the site or attachment they are informed that this was a simulation. Microsoft’s attack simulation will also report on who opened the malicious URLs or attachments so you can provide them with more training.</p>
                  <h2>What licenses are required?</h2>
                  <p>To use the attack simulation training built into Microsoft 365 you’ll need Microsoft 365 E5 or Microsoft Defender for Office 365 Plan 2 licenses.</p>
                  <h2>What roles are required?</h2>
                  <p>You need to be a member of one of the following roles to set up the attack simulation training:</p>
                  <ul>
                    <li>Organization Management</li>
                    <li>Security Administrator</li>
                    <li>Attack Simulation Administrators can create and manage all aspects of attack simulation campaigns.</li>
                    <li>Attack Payload Author can create attack payloads that an admin can initiate later.</li>
                  </ul>
                  <h2>How to configure an attack simulation</h2>
                  <p>1. Go to the <strong>Microsoft Defender portal</strong> &gt; <strong>Attack simulation training</strong> &gt; <a href="https://security.microsoft.com/attacksimulator?viewid=simulations" target="_blank" rel="noreferrer"><strong>Simulations</strong></a>. Click <strong>Launch a simulation</strong>.</p>
                  <div ><img src="https://i.ibb.co/HxvgcYk/launch-a-simulation.png" alt="Launch a phishing attack simulation" style="height: auto;width: auto" /></div>
                  <p>2. Select the technique you want to use. In this scenario, we’ll leave <strong>Credential Harvest</strong> checked and click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/YTvnDry/select-a-technique.png" alt="Select a Technique" style="height: auto;width: auto" /></div>
                  <p>3. Enter the simulation name of <strong>Test Simulation</strong> in the space provided. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/JtdZw5W/name-your-simulation.png" alt="Name your simulation then click Next" style="height: auto;width: auto" /></div>
                  <p>4. Select the <strong>2 Failed Messages</strong> payload. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/6BPbMjC/select-a-payload.png" alt="Select the 2 failed messages payload. Then click Next" style="height: auto;width: auto" /></div>
                  <p>5. On the Target Users page you can either select the users you want to test the deployment with or click<strong> Include all users in my organization</strong>. Set up the users you want to send the attack simulation training to and click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/hdj5mcc/target-users.png" alt="Select the users to target. Then click Next" style="height: auto;width: auto" /></div>
                  <p>6. On the Assign Training page leave the defaults and click Next.</p>
                  <p>7. On the landing page window leave the defaults and click Next.</p>
                  <p>8. On the select end-user notification page click <strong>Microsoft default notification (recommended)</strong>. Then click <strong>Delivery preferences</strong> &gt; <strong>Deliver during campaign</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/SQTjGBD/select-end-user-notification.png" alt="Select end user notifications" style="height: auto;width: auto" /></div>
                  <p>9. On the Launch details page click <strong>Next</strong>.</p>
                  <p>10. Click <strong>Submit</strong>. Click <strong>Done</strong>.</p>
                  <h2>What will users experience?</h2>
                  <p />
                  <div ><img src="https://i.ibb.co/nkq9MsK/fake-phishing-email.png" alt="Fake phishing email" style="height: auto;width: auto" /></div>
                  <p>Each user you selected to receive the phishing simulation will receive the same email. The email will contain a link to a website that appears to be from Microsoft. When the user enters their credentials they’ll receive a page informing them that they were duped. Once on the page, Microsoft will explain a couple of things that they review to know if the email is a phishing scam or not. Under the quick guide will be a link to training that the user can attend to learn more.</p>
                  <div ><img src="https://i.ibb.co/PYx0XxT/fake-phishing-landing-page.png" alt="Fake phishing landing page" style="height: auto;width: auto" /></div>
                  <h2>How to view the report on who clicked the link?</h2>
                  <p>So now, we have some data. We’ve sent the email to some users in our organization but how do we check on who clicked the link / completed the training? It’s easy!</p>
                  <p>1. Go to the Microsoft Defender portal &gt; <strong>Attack simulation training</strong> &gt; <a href="https://security.microsoft.com/attacksimulator?viewid=simulations" target="_blank" rel="noreferrer"><strong>Simulations</strong></a>. Click <strong>Test Simulation</strong>.</p>
                  <div ><img src="https://i.ibb.co/Sdkb0n4/view-phishing-simulation.png" alt="View phishing simulation" style="height: auto;width: auto" /></div>
                  <p>From this page, you have a quick overview of the simulation. You can see how many users reported the email as phishing, clicked the link, and who entered their credentials.</p>
                  <p>2. Click <strong>View users</strong> to see where your users landed in the simulation.</p>
                  <div ><img src="https://i.ibb.co/NyvnbMK/simulation-overview-view-users-circled.png" alt="Simulation overview view users circled" style="height: auto;width: auto" /></div>
                  <p>From this page, you can see which users were compromised and which users completed the training.</p>
                  <h2>How do we automatically schedule simulations?</h2>
                  <p>So now you’ve evaluated the simulation and maybe even sent the simulation to some of your end-users. The next question is, how do we make the simulations reoccur? Let’s take a look.</p>
                  <p>1. Go to Microsoft 365 Defender Portal &gt; <strong>Attack simulation training</strong> &gt; <a href="https://security.microsoft.com/attacksimulator?viewid=simulationautomation" target="_blank" rel="noreferrer"><strong>Simulation automations</strong></a>. Click <strong>Create automation</strong>.</p>
                  <div ><img src="https://i.ibb.co/x3gkQK4/create-phishing-simulation-automation.png" alt="Create phishing simulation automation" style="height: auto;width: auto" /></div>
                  <p>2. Set the name to <strong>Simulation Automation</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/X3ztyC5/name-your-automation.png" alt="Name your automation. Click next" style="height: auto;width: auto" /></div>
                  <p>3. Click <strong>Credential Harvest</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/D9Vp9q5/Select-social-engineering-technique.png" alt="Select social engineering technique" style="height: auto;width: auto" /></div>
                  <p>4. Click <strong>Randomize</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/4N4906n/select-payloads.png" alt="Set payloads to randomize. Click Next" style="height: auto;width: auto" /></div>
                  <p>5. Select the users you want to be tested. As a start, you may want to select a couple of users. Then later you may want to come back and click <strong>Include all users in my organization</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/RywpK18/select-the-target-users.png" alt="Select the target users." style="height: auto;width: auto" /></div>
                  <p>6. On the assign training page, click <strong>Next</strong>.</p>
                  <p>7. On the Landing page window, click <strong>Next</strong>.</p>
                  <p>8. On the Select end user notification page click <strong>Microsoft default notification (recommended)</strong>. Set <strong>Delivery preferences</strong> to <strong>Deliver during campaign</strong>. Click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/wgKfQNX/select-end-user-notifications-page.png" alt="Select end user notifications" style="height: auto;width: auto" /></div>
                  <p>9. On the Simulation schedule page click <strong>Next</strong>.</p>
                  <p>10. Set the <strong>simulation recurrence</strong>. Then click <strong>Next</strong>.</p>
                  <div ><img src="https://i.ibb.co/2yBQcj2/schedule-details.png" alt="Schedule details" style="height: auto;width: auto" /></div>
                  <p>11. On the launch details page click <strong>Next</strong>.</p>
                  <p>12. Click <strong>Submit</strong>. Click <strong>Done</strong>.</p>
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
