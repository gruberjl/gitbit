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
      article: {article: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4rah2', text: '', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '5sd6m', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c6tab', text: 'Phishing is a popular technique used by hackers to steal confidential information from unsuspecting victims. They do this by sending out emails that look like they are from a trusted company or individual, but in reality, they are not.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e5gds', text: 'Phishing emails are emails that try to trick you into disclosing personal information, such as passwords and credit card numbers. Phishing emails can be hard to identify because they look like legitimate messages from companies or organizations you know. It\'s important to be able to identify a phishing email so that you don\'t fall victim to a scam and lose your personal information.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd049d', text: 'The goal of these phishing emails is to get the victim to click on an embedded link or attachment, which can then download malware onto their computer. Once the victim has clicked on the link or downloaded the attachment, their computer is compromised and the hacker can do whatever they want with it. They can steal personal information such as bank account numbers and passwords and then use them for identity theft. They could also use this information to access sensitive files stored on their computer.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '58d96', text: 'But that’s not all. Sometimes, phishing emails are simply trying to trick the user into doing something. For example, they may send an email to an accountant that appears to be from the CEO asking for the accountant to wire some money.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 234, offset: 0, style: 'ITALIC'}], key: 'cmseq', text: 'Note: This is a guide to show people how easy and cheap it is to create a phishing campaign. I hope no one would follow this advice. Plus, I intentionally left out a few key details so you would get caught if you attempted to do this.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '91mt1', text: 'The attack strategy', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3dmk2', text: 'There are two common attack strategies: whaling and spear phishing. Whaling is typically targeting very specific people within an organization. Spear phishing is still fairly targeted but typically targets a category of people. Let’s take a quick look at 2 examples.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'di75g', text: 'Whaling', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a4lf4', text: 'The hacker may follow the CEO on LinkedIn and Facebook. Then gather information, for example, the email address, and signature of the CEO. Then wait for the CEO to leave the country or go on a road trip. Once the CEO leaves the office the hacker can send an email to an accountant saying “My car broke down. Please wire $10,000 to bank account XXX”. This is a whaling attack', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6j92e', text: 'Spear Phishing', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2nc2n', text: 'In this scenario, the hacker may gather 1,000 email addresses of different users in different companies that all use Microsoft 365. Then they send an email to all 1,000 users saying “I’m from Microsoft you need to click this link and login or your account will be deleted” Once someone goes to the link and enters their credentials the hacker can then access the user’s mailbox and other Microsoft 365 data.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '53o3k', text: 'Finally, we are through the background information', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1iori', text: 'Phew, we are through the background information. Let’s craft our excellent phishing email. In our scenario, we’ll use a spear phishing attack.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '918k5', text: 'Our goal', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'd93a4', text: 'The goal of our phishing campaign is to get the username and password for Microsoft 365 users. To do that, we’ll send our victims fake emails from Microsoft. We’ll pretend to be from Microsoft targeting Microsoft 365 users. Let\'s tell them their mailboxes are almost full and they need to go to a website and log in. We\'ll tell them it\'s to enable the Auto Expanding Mailbox feature. Once a user logs in (giving us their credentials) we\'ll say something like "It\'s all set up. No need to worry about the mailbox size anymore" Most likely, the user will think they now have enough space to continue working and they\'ll forget all about us.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9bagh', text: 'Great subject lines for phishing emails', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aamkp', text: 'The subject line of a great phishing email is critical. It’s what makes or breaks any email. Will it entice the user to open and read the email? Does it follow the logical flow of the campaign? Lastly, does it create urgency so the victim will click on the link and enter their credentials before anyone notices our attack and blocks us / warns everyone?  In our example, we are using a spear phishing attack from Microsoft so it wouldn’t make sense to use “Free vacation home rental”. Let’s copy a message from Microsoft 365. Let’s go with “Your mailbox is almost full.”', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '9l1cj', text: 'The from address', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8740t', text: 'Other than the subject line the from address is the second thing someone notices and checks. It’s where someone will first look and ask “Who is this from?” If it’s from their mother or CEO they’ll probably pay closer attention. But again, we aren’t whaling here. We are sending a phishing attack to a thousand users and hoping to snag a couple.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5035q', text: 'Now, there are two parts to an email address: Domain & Username.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 10, offset: 120, style: 'BOLD'}], key: '47knc', text: 'The domain name and the username. The domain name is everything after the @ symbol. For example, in john@gitbit.org the gitbit.org part is the domain name.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 4, offset: 93, style: 'BOLD'}], key: 'empoi', text: 'The username. That’s everything before the @ symbol. In the example john@gitbit.org it’s the john part of the email address.', type: 'ordered-list-item'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 9, offset: 89}, {key: 2, length: 23, offset: 172}], inlineStyleRanges: [], key: '16s0b', text: 'With our spear phishing strategy, it wouldn’t make sense for the email to be coming from gmail.com. No, we will need a legitimate domain to send the emails from. Let’s use supportmicrosoft365.com. It looks legitimate enough to full a few victims.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5o28o', text: 'Purchase a domain name', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 3, length: 19, offset: 142}], inlineStyleRanges: [], key: '323jn', text: 'Being the cunning attacker we are we purchase the domain! I know, it seems crazy but you have to spend money to make money. So hop on over to Unstoppable Domains and sign up. Once signed up simply buy the domain!', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '67m2t', text: 'Purchase a cloud email provider', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 4, length: 17, offset: 113}], inlineStyleRanges: [], key: '34p1m', text: 'Once we\'ve purchased the domain name we can hop into Microsoft 365 and purchase a new tenant. So jump on over to www.microsoft.com and purchase yourself a Microsoft 365 tenant. Now, we’ll set up our MX records, SPF, DKIM, and DMARC records. Let’s make sure we get through the spam/phishing filters!', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bqjbu', text: 'Now that we picked out the domain name let\'s pick a username. Using Bill Gates wouldn\'t make sense because why is Bill sending emails about mailboxes being full? No, we need it to appear legit. At first, I thought "Support" but then I read the email out loud and it sounded funny Support@supportmicrosoft365.com. The 2 supports are throwing me for a loop. Let\'s use CustomerCare. CustomerCare@supportmicrosoft.com sounds good. So go to your Microsoft 365 tenant and create your username.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e309i', text: 'Email warm-up service', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 5, length: 12, offset: 508}], inlineStyleRanges: [], key: '8gcl3', text: 'Now that we purchased the domain and picked our email address, we know spam filters look at one more thing. The length of time the domain has been purchased and if there have been legitimate emails flowing from the domain. Instead of sending emails to our friends (that may identify us as the hacker later) let’s use an email warm-up service. These services are used to send/receive seemingly legitimate emails to a mailbox so email providers think it’s a legit email domain/address. So let\'s pop on over to Warmup Inbox and sign up. Now some people say a couple of weeks is long enough of a warm-up, but we\'re pros. Let\'s let that run for 6 months.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'ok07', text: 'Gather email addresses', type: 'header-three'}, {data: {}, depth: 0, entityRanges: [{key: 6, length: 6, offset: 63}], inlineStyleRanges: [], key: '3blaj', text: 'Next, we\'ll need to gather some email addresses. So go over to Apollo gather a list of email addresses and export them to CSV.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '6tjg8', text: 'The body of the email', type: 'header-two'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'btelf', text: 'Now we\'re to the bread and butter. The meat and potatoes. We already set up the hook and line, now for the sinker. The body of the email. Let\'s just copy the body of an email I\'ve received from Microsoft 365 prior.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 7, length: 1, offset: 0}], inlineStyleRanges: [], key: '9eojt', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '20m6i', text: 'With this template, we are practically there. Heck, we can just change the words. We can leave the font and the pretty image showing the 49.11 GB to 49.5 GB. All we need to do is change the "To make room in your mailbox, delete any items you don\'t need and empty your Deleted Items folder." to "Your IT team has enabled the auto-expanding feature for your mailbox. To activate please go to enable auto-expanding mailbox."', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2q197', text: 'So here\'s the million-dollar question. How do you make sure none of your users fall for such an attack?', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 8, length: 41, offset: 6}], inlineStyleRanges: [], key: '11vs4', text: 'Go to Protecting email against phishing attacks for a getting-started guide on phishing protection.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 9, length: 37, offset: 6}], inlineStyleRanges: [], key: 'ef0t9', text: 'Go to Simulating attacks with Microsoft 365 for a getting-started guide on setting up phishing simulations to teach your users.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8dig2', text: '', type: 'unstyled'}], entityMap: {0: {data: {alt: 'How to create a great phishing campaign', height: '960', href: 'http://gmail.com', rel: 'noopener noreferrer nofollow', src: 'https://i.ibb.co/R760yZT/How-to-create-a-great-phishing-campaign.jpg', target: '_blank', url: 'http://gmail.com/', width: '720'}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 1: {data: {alt: 'Your mailbox is almost full', href: 'http://gmail.com', rel: 'noopener noreferrer nofollow', src: 'https://i.ibb.co/j6WNy7y/mailbox-is-almost-full.png', target: '_blank', url: 'http://gmail.com/'}, mutability: 'MUTABLE', type: 'LINK'}, 10: {data: {alt: 'Your mailbox is almost full', height: 263, href: 'mailto:john@gmail.com', rel: 'noopener noreferrer nofollow', src: 'https://i.ibb.co/j6WNy7y/mailbox-is-almost-full.png', target: '_blank', url: 'mailto:john@gmail.com', width: 684}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 11: {data: {url: 'https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT'}, mutability: 'MUTABLE', type: 'LINK'}, 12: {data: {url: 'https://www.gitbit.org/course/ms-500/learn/Simulating-attacks-with-Microsoft-365-GG4cMY8pK'}, mutability: 'MUTABLE', type: 'LINK'}, 2: {data: {alt: 'Your mailbox is almost full', href: 'http://supportmicrosoft365.com', rel: 'noopener noreferrer nofollow', src: 'https://i.ibb.co/j6WNy7y/mailbox-is-almost-full.png', target: '_blank', url: 'http://supportmicrosoft365.com/'}, mutability: 'MUTABLE', type: 'LINK'}, 3: {data: {alt: 'Your mailbox is almost full', href: 'mailto:john@gmail.com', rel: 'noopener noreferrer nofollow', src: 'https://i.ibb.co/j6WNy7y/mailbox-is-almost-full.png', target: '_blank', url: 'https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=944100.2&type=3&subid=0'}, mutability: 'MUTABLE', type: 'LINK'}, 4: {data: {alt: 'Your mailbox is almost full', href: 'mailto:john@gmail.com', rel: 'noopener noreferrer nofollow', src: 'https://i.ibb.co/j6WNy7y/mailbox-is-almost-full.png', target: '_blank', url: 'https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.40&type=3&subid=0'}, mutability: 'MUTABLE', type: 'LINK'}, 5: {data: {alt: 'Your mailbox is almost full', href: 'mailto:john@gmail.com', rel: 'noopener noreferrer nofollow', src: 'https://i.ibb.co/j6WNy7y/mailbox-is-almost-full.png', target: '_blank', url: 'https://app.warmupinbox.com/signup?code=S6XeWGVvP'}, mutability: 'MUTABLE', type: 'LINK'}, 6: {data: {alt: 'Your mailbox is almost full', href: 'mailto:john@gmail.com', rel: 'noopener noreferrer nofollow', src: 'https://i.ibb.co/j6WNy7y/mailbox-is-almost-full.png', target: '_blank', url: 'https://apollo.grsm.io/bpcl25ib688h'}, mutability: 'MUTABLE', type: 'LINK'}, 7: {data: {alt: 'Your mailbox is almost full', height: '263', href: 'mailto:john@gmail.com', rel: 'noopener noreferrer nofollow', src: 'https://i.ibb.co/MpJDrdM/mailbox-is-almost-full.png', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT', width: '684'}, mutability: 'IMMUTABLE', type: 'IMAGE'}, 8: {data: {alt: 'Your mailbox is almost full', href: 'mailto:john@gmail.com', rel: 'noopener noreferrer nofollow', src: 'https://i.ibb.co/j6WNy7y/mailbox-is-almost-full.png', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT'}, mutability: 'MUTABLE', type: 'LINK'}, 9: {data: {alt: 'Your mailbox is almost full', href: 'mailto:john@gmail.com', rel: 'noopener noreferrer nofollow', src: 'https://i.ibb.co/j6WNy7y/mailbox-is-almost-full.png', target: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Simulating-attacks-with-Microsoft-365-GG4cMY8pK'}, mutability: 'MUTABLE', type: 'LINK'}}}, datePublished: '2022/11/16', description: 'Everything you need to know about the anatomy of a great phishing email, with insights from a cybersecurity expert. We\'ll walk you through exactly what a hacker will do to track your users into giving up access to their accounts', featuredImage: 'https://i.ibb.co/MpJDrdM/mailbox-is-almost-full.png', id: 'xgbfcvv4n', images: ['https://i.ibb.co/j6WNy7y/mailbox-is-almost-full.png', 'https://i.ibb.co/GFy1CXc/How-to-create-a-great-phishing-campaign.jpg', 'https://i.ibb.co/R760yZT/How-to-create-a-great-phishing-campaign.jpg', 'https://i.ibb.co/MpJDrdM/mailbox-is-almost-full.png', 'https://i.ibb.co/R760yZT/How-to-create-a-great-phishing-campaign.jpg', 'https://i.ibb.co/MpJDrdM/mailbox-is-almost-full.png'], publish: true, slug: 'the-anatomy-of-great-phishing-emails-xgbfcvv4n', title: 'The Anatomy of Great Phishing Emails', type: 'article'},
      decideHeight: '1000px'
    }
  }

  componentDidMount() {
    this.mountAds1()
    this.mountAds2()
    const setDecideHeight = (a) => {
      if (!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))))
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
                  <p style="position: absolute;">Reserved for ads. Please scroll down.</p>
                </div>
                <h1 style={marginTop24Style}>{this.state.article.title}</h1>
                <div><p />
                  <img src="https://i.ibb.co/R760yZT/How-to-create-a-great-phishing-campaign.jpg" alt="How to create a great phishing campaign" height="960" width="720" style="aspect-ratio: auto 720 / 960; height: auto;" />
                  <p>Phishing is a popular technique used by hackers to steal confidential information from unsuspecting victims. They do this by sending out emails that look like they are from a trusted company or individual, but in reality, they are not.</p>
                  <p>Phishing emails are emails that try to trick you into disclosing personal information, such as passwords and credit card numbers. Phishing emails can be hard to identify because they look like legitimate messages from companies or organizations you know. It's important to be able to identify a phishing email so that you don't fall victim to a scam and lose your personal information.</p>
                  <p>The goal of these phishing emails is to get the victim to click on an embedded link or attachment, which can then download malware onto their computer. Once the victim has clicked on the link or downloaded the attachment, their computer is compromised and the hacker can do whatever they want with it. They can steal personal information such as bank account numbers and passwords and then use them for identity theft. They could also use this information to access sensitive files stored on their computer.</p>
                  <p>But that’s not all. Sometimes, phishing emails are simply trying to trick the user into doing something. For example, they may send an email to an accountant that appears to be from the CEO asking for the accountant to wire some money.</p>
                  <p><em>Note: This is a guide to show people how easy and cheap it is to create a phishing campaign. I hope no one would follow this advice. Plus, I intentionally left out a few key details so you would get caught if you attempted to do this.</em></p>
                  <div id="ld-7740-2760" style={{height: this.state.decideHeight, overflow: 'hidden'}} /><h2>The attack strategy</h2>
                  <p>There are two common attack strategies: whaling and spear phishing. Whaling is typically targeting very specific people within an organization. Spear phishing is still fairly targeted but typically targets a category of people. Let’s take a quick look at 2 examples.</p>
                  <h3>Whaling</h3>
                  <p>The hacker may follow the CEO on LinkedIn and Facebook. Then gather information, for example, the email address, and signature of the CEO. Then wait for the CEO to leave the country or go on a road trip. Once the CEO leaves the office the hacker can send an email to an accountant saying “My car broke down. Please wire $10,000 to bank account XXX”. This is a whaling attack</p>
                  <h3>Spear Phishing</h3>
                  <p>In this scenario, the hacker may gather 1,000 email addresses of different users in different companies that all use Microsoft 365. Then they send an email to all 1,000 users saying “I’m from Microsoft you need to click this link and login or your account will be deleted” Once someone goes to the link and enters their credentials the hacker can then access the user’s mailbox and other Microsoft 365 data.</p>
                  <h2>Finally, we are through the background information</h2>
                  <p>Phew, we are through the background information. Let’s craft our excellent phishing email. In our scenario, we’ll use a spear phishing attack.</p>
                  <h2>Our goal</h2>
                  <p>The goal of our phishing campaign is to get the username and password for Microsoft 365 users. To do that, we’ll send our victims fake emails from Microsoft. We’ll pretend to be from Microsoft targeting Microsoft 365 users. Let's tell them their mailboxes are almost full and they need to go to a website and log in. We'll tell them it's to enable the Auto Expanding Mailbox feature. Once a user logs in (giving us their credentials) we'll say something like "It's all set up. No need to worry about the mailbox size anymore" Most likely, the user will think they now have enough space to continue working and they'll forget all about us.</p>
                  <h2>Great subject lines for phishing emails</h2>
                  <p>The subject line of a great phishing email is critical. It’s what makes or breaks any email. Will it entice the user to open and read the email? Does it follow the logical flow of the campaign? Lastly, does it create urgency so the victim will click on the link and enter their credentials before anyone notices our attack and blocks us / warns everyone?  In our example, we are using a spear phishing attack from Microsoft so it wouldn’t make sense to use “Free vacation home rental”. Let’s copy a message from Microsoft 365. Let’s go with “Your mailbox is almost full.”</p>
                  <h2>The from address</h2>
                  <p>Other than the subject line the from address is the second thing someone notices and checks. It’s where someone will first look and ask “Who is this from?” If it’s from their mother or CEO they’ll probably pay closer attention. But again, we aren’t whaling here. We are sending a phishing attack to a thousand users and hoping to snag a couple.</p>
                  <p>Now, there are two parts to an email address: Domain &amp; Username.</p>
                  <ol>
                    <li>The domain name and the username. The domain name is everything after the @ symbol. For example, in john@gitbit.org the <strong>gitbit.org</strong> part is the domain name.</li>
                    <li>The username. That’s everything before the @ symbol. In the example john@gitbit.org it’s the <strong>john</strong> part of the email address.</li>
                  </ol>
                  <p>With our spear phishing strategy, it wouldn’t make sense for the email to be coming from <a href="http://gmail.com/" target="_self">gmail.com</a>. No, we will need a legitimate domain to send the emails from. Let’s use <a href="http://supportmicrosoft365.com/" target="_self">supportmicrosoft365.com</a>. It looks legitimate enough to full a few victims.</p>
                  <h3>Purchase a domain name</h3>
                  <p>Being the cunning attacker we are we purchase the domain! I know, it seems crazy but you have to spend money to make money. So hop on over to <a href="https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=944100.2&type=3&subid=0" target="_self">Unstoppable Domains</a> and sign up. Once signed up simply buy the domain!</p>
                  <h3>Purchase a cloud email provider</h3>
                  <p>Once we've purchased the domain name we can hop into Microsoft 365 and purchase a new tenant. So jump on over to <a href="https://click.linksynergy.com/fs-bin/click?id=iOIpmChCQh0&offerid=817940.40&type=3&subid=0" target="_self">www.microsoft.com</a> and purchase yourself a Microsoft 365 tenant. Now, we’ll set up our MX records, SPF, DKIM, and DMARC records. Let’s make sure we get through the spam/phishing filters!</p>
                  <p>Now that we picked out the domain name let's pick a username. Using Bill Gates wouldn't make sense because why is Bill sending emails about mailboxes being full? No, we need it to appear legit. At first, I thought "Support" but then I read the email out loud and it sounded funny Support@supportmicrosoft365.com. The 2 supports are throwing me for a loop. Let's use CustomerCare. CustomerCare@supportmicrosoft.com sounds good. So go to your Microsoft 365 tenant and create your username.</p>
                  <h3>Email warm-up service</h3>
                  <p>Now that we purchased the domain and picked our email address, we know spam filters look at one more thing. The length of time the domain has been purchased and if there have been legitimate emails flowing from the domain. Instead of sending emails to our friends (that may identify us as the hacker later) let’s use an email warm-up service. These services are used to send/receive seemingly legitimate emails to a mailbox so email providers think it’s a legit email domain/address. So let's pop on over to <a href="https://app.warmupinbox.com/signup?code=S6XeWGVvP" target="_self">Warmup Inbox</a> and sign up. Now some people say a couple of weeks is long enough of a warm-up, but we're pros. Let's let that run for 6 months.</p>
                  <h3>Gather email addresses</h3>
                  <p>Next, we'll need to gather some email addresses. So go over to <a href="https://apollo.grsm.io/bpcl25ib688h" target="_self">Apollo</a> gather a list of email addresses and export them to CSV.</p>
                  <h2>The body of the email</h2>
                  <p>Now we're to the bread and butter. The meat and potatoes. We already set up the hook and line, now for the sinker. The body of the email. Let's just copy the body of an email I've received from Microsoft 365 prior.</p>
                  <img src="https://i.ibb.co/MpJDrdM/mailbox-is-almost-full.png" alt="Your mailbox is almost full" height="263" width="684" style="aspect-ratio: auto 684 / 263; height: auto;" />
                  <p>With this template, we are practically there. Heck, we can just change the words. We can leave the font and the pretty image showing the 49.11 GB to 49.5 GB. All we need to do is change the "To make room in your mailbox, delete any items you don't need and empty your Deleted Items folder." to "Your IT team has enabled the auto-expanding feature for your mailbox. To activate please go to enable auto-expanding mailbox."</p>
                  <p>So here's the million-dollar question. How do you make sure none of your users fall for such an attack?</p>
                  <p>Go to <a href="https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT" target="_self">Protecting email against phishing attacks</a> for a getting-started guide on phishing protection.</p>
                  <p>Go to <a href="https://www.gitbit.org/course/ms-500/learn/Simulating-attacks-with-Microsoft-365-GG4cMY8pK" target="_self">Simulating attacks with Microsoft 365</a> for a getting-started guide on setting up phishing simulations to teach your users.</p>
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
