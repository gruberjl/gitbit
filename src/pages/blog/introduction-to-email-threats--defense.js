import { h, Component } from "preact"
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

 
class BlogArticle extends Component {
  render() {
    const title = "Introduction to Email Threats & Defense"
    const jsonLd = {
      headline: title,
      datePublished: '6-10-2019',
      keywords: [
        "Microsoft",
        "Exchange Online",
        "Microsoft 365",
        "Office 365",
        "Cloud security"
      ],
      "author": {
        "@type": "Person",
        "name": "John Gruber",
        url: 'https://medium.com/@gruberjl'
      }
    }

    return (
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/2000/1*Ijemqp-iDELaFM_DK0PX0g.png'} canonical={'https://medium.com/hackernoon/introduction-to-email-threats-defense-9735ba4b193e'} title={title} description={"There’s a constant threat to your organization. Email is one of the most common ways hackers attempt to breach your organization’s security. Over half of the messages received are spam, phishing…"}>
        <main>
          <div>
            <Container className="blog-article">
              <Grid container>
                <Grid item>
                <Typography variant="h3" component="h1" sx={{mt:4, mb:4}}>Introduction to Email Threats &amp; Defense</Typography>
                <div>
                   <div>
                      <div>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Threat landscape" src="https://miro.medium.com/max/2000/1*Ijemqp-iDELaFM_DK0PX0g.png" width="1000" height="522" role="presentation"/></div>
                            </div>
                            <figcaption>source: <a href="https://channel9.msdn.com/events/Ignite/2015/BRK3106" rel="noopener">Microsoft</a></figcaption>
                         </figure>
                      </div>
                   </div>
                </div>
                <div>
                   <div>
                      <Typography variant="body1" gutterBottom>There’s a constant threat to your organization. Email is one of the most common ways hackers attempt to breach your organization’s security. Over half of the messages received are spam, phishing campaigns, and malicious. Staying up-to-date with the latest email related threats isn’t an easy task. It’s virtually every company uses third-party email hosting with built-in spam protection or opts for third-party spam protection in front of on-premise servers. Like its competitors, Office 365 comes with built-in protection for your environment, Microsoft’s Information Protection team is staying up-to-date and evolving the email security of Office 365 to protect Microsoft customers from threats. The default configuration isn’t always enough to keep your organization secure and compliant.</Typography>
                      <Typography variant="h5" component="h3" gutterBottom>Why is Spam Still a Problem?</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Canadian Pharmacy screenshot" src="https://miro.medium.com/max/1400/1*ItQjoOfDWjmFkv70jmVB1Q.png" width="700" height="507" role="presentation"/></div>
                         </div>
                         <figcaption>Source: <a href="https://www.icsi.berkeley.edu/pubs/networking/2008-ccs-spamalytics.pdf" rel="noopener">ICSI</a></figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>Despite years of combating spam, the campaigns are still relentless. To understand why there’s so much spam we have to ask, <strong>How successful is a spam campaign?</strong> Since spammers typically work in the shadows it’s a difficult question to answer. Fortunately, the International Computer Science Institute (ICSI) performed an interesting and surprising <a href="https://www.icsi.berkeley.edu/pubs/networking/2008-ccs-spamalytics.pdf" rel="noopener">study</a>. <strong>The ICSI hijacked an existing botnet</strong> to determine how successful these campaigns truly are. By redirecting the botnet to a fake pharmacy website and throwing an error instead of completing a purchase the ICSI was able to provide insight into the spam plague that has troubled us for so long.</Typography>
                      <blockquote>
                         <Typography variant="body1" gutterBottom>By emailing 200 million email addresses the fake pharmacy site led to over 10,000 people visiting the site with 28 purchases. This would have led to almost $9500 a day in sales.</Typography>
                      </blockquote>
                      <Typography variant="h5" component="h3" gutterBottom>What’s Phishing?</Typography>
                      <Typography variant="body1" gutterBottom>“Phishing is a cybercrime in which a target or targets are contacted by email by someone posing as a legitimate institution to lure individuals into providing sensitive data such as credit card details and passwords. The information is then used to access important accounts and can result in identity theft and financial loss.” — <a href="http://www.phishing.org/what-is-phishing" rel="noopener">phishing.org</a></Typography>
                      <blockquote>
                         <Typography variant="body1" gutterBottom>30% of phishing messages get opened by targeted users and 12% of those users click on the malicious attachment or link. — <a href="https://enterprise.verizon.com/resources/reports/dbir/" rel="noopener">verizon.com</a></Typography>
                      </blockquote>
                      <Typography variant="h5" component="h3" gutterBottom>How a Phishing Attack Affected U.S. Elections</Typography>
                      <Typography variant="body1" gutterBottom>In September of 2015, the FBI contacted the Democratic National Committee (DNC) to inform them that at least one of their computers has been compromised and sending information to Russian based computers. Six months later a campaign chairman receives a phishing email masked as a fake alert stating another user attempted to breach his account and he needs to change his password. The DNC chairman clicks the link that directs his browser to a fake website where he types in his password giving Russian hackers access to his account.</Typography>
                      <blockquote>
                         <Typography variant="body1" gutterBottom>The average cost of a phishing attack for a mid-sized company is $1.6 million.</Typography>
                      </blockquote>
                      <Typography variant="body1" gutterBottom>On July 22, 2016, WikiLeaks posts emails that were stolen through the phishing attack. For weeks, the emails consumed the media. No one can say for certain how much the phishing attack affected the election but the damage was done.</Typography>
                      <Typography variant="h5" component="h3" gutterBottom>What is Malware?</Typography>
                      <Typography variant="body1" gutterBottom>Malware is any form of malicious code that is often distributed via email. It can be distributed using a direct attachment, stored in a Word or PDF document, or can be downloaded once a person clicks a link in an email.</Typography>
                      <Typography variant="h5" component="h3" gutterBottom>The 1st Email Virus</Typography>
                      <Typography variant="body1" gutterBottom>In January 1999, a new threat emerged. Codenamed Happy99, it was one of the first known viruses spread through email. The malicious code would attach itself as an email attachment and send an email with fireworks saying Happy New Year. Unknown to the user, the code would install itself on the computer and begin spreading again.</Typography>
                      <Typography variant="body1" gutterBottom>Unlike today, the Happy99 virus wouldn’t do anything other than send itself to the next computer. Today, malicious code is used to steal identities, financial information, and other private corporate information.</Typography>
                      <Typography variant="h4" component="h2" gutterBottom>How is Spam Detected in Office 365?</Typography>
                      <Typography variant="body1" gutterBottom>Office 365 uses a multi-layered spam protection system. Every email is scanned using a number of different algorithms to detect and block unwanted messages.</Typography>
                      <Typography variant="h5" component="h3" gutterBottom>Content Filters</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Outlook email" width="580" height="596" role="presentation" src="https://miro.medium.com/max/580/1*vGRkytpbfYnDVILBbOaAVQ.png" sizes="580px" srcSet="https://miro.medium.com/max/276/1*vGRkytpbfYnDVILBbOaAVQ.png 276w, https://miro.medium.com/max/552/1*vGRkytpbfYnDVILBbOaAVQ.png 552w, https://miro.medium.com/max/580/1*vGRkytpbfYnDVILBbOaAVQ.png 580w"/>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <figcaption>Source: <a href="https://channel9.msdn.com/events/Ignite/2015/BRK3106" rel="noopener">Microsoft</a></figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>Content filters are used to detect words and phrases that are known to be related to spam. It’s a constant struggle because content continues to change. Microsoft handles the content filtering behind the scenes but you can create a transport rule in EOP to add words and phrases your company would like to block.</Typography>
                      <Typography variant="body1" gutterBottom>See the section “Custom Content Filtering in Office 365” below to customize your tenant.</Typography>
                      <Typography variant="h5" component="h3" gutterBottom>Connection Filters</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Screenshot of EAC Connection FIltering Customizations" width="700" height="570" role="presentation" src="https://miro.medium.com/max/700/1*aqme4trTJPzDQH1b8tECIw.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*aqme4trTJPzDQH1b8tECIw.png 276w, https://miro.medium.com/max/552/1*aqme4trTJPzDQH1b8tECIw.png 552w, https://miro.medium.com/max/640/1*aqme4trTJPzDQH1b8tECIw.png 640w, https://miro.medium.com/max/700/1*aqme4trTJPzDQH1b8tECIw.png 700w"/>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <figcaption>Screenshot of EAC Connection FIltering Customizations</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>Connection filters block emails from known bad IP addresses. Spammers will typically use botnets and hijack legitimate companies to send spam. Microsoft will detect an IP address that has an infected device and immediately blocks the bad email from your organization. Once the issue is resolved by the sender, Microsoft will remove the IP address from the block lists and allow email to reach the destination. Additionally, your organization can add IP addresses to a block list or allow list from the EAC.</Typography>
                      <Typography variant="body1" gutterBottom>See the section “Custom Connection Filtering” below to customize your tenant.</Typography>
                      <Typography variant="body1" gutterBottom><strong>Domain Filtering</strong></Typography>
                      <Typography variant="body1" gutterBottom>A domain is the second part of your email address, everything after the @ symbol. For example, the domain of john.gruber@gitbit.org is gitbit.org.</Typography>
                      <Typography variant="body1" gutterBottom>Domain filtering is a broad term used to determine the authenticity of the email senders. If a particular domain continues to send unwanted or malicious emails, the entire domain may be blocked. Microsoft uses a number of complex algorithms to determine the validity of a domain.</Typography>
                      <Typography variant="body1" gutterBottom>For example, many spammers will create a new domain and immediately start sending spam and malicious code. Since most organizations are established and have had an email system for years, Office 365 is more likely to block an email from a new domain.</Typography>
                      <Typography variant="body1" gutterBottom>At the same time, using ‘fuzzy-match’ technology Microsoft will review the sender’s domain for suspicious activity. If someone sends an email from micros0ft.com (a zero replaces the O) it will be blocked.</Typography>
                      <Typography variant="body1" gutterBottom>See the section “How to Whitelist and Blacklist Senders as Spam” below to customize your tenant.</Typography>
                      <Typography variant="h5" component="h3" gutterBottom>SPF / Spoofing Protection</Typography>
                      <Typography variant="body1" gutterBottom>Technically, SPF filtering could be part of the domain or connection filtering based on how it works. In short, a hacker can send an email from their computer and set the from address to another. While the email will appear legitimate it can be sent from another location.</Typography>
                      <Typography variant="body1" gutterBottom>To put this in real-world terms, imagine receiving a letter with your mom’s name and address in the return address field. You would immediately assume the letter originated from your mom but in reality, anyone could have sent the letter.</Typography>
                      <Typography variant="body1" gutterBottom>An organization can and should configure an SPF record from each domain they own. For example, if I send email from the IP address 1.1.1.1 using my gitbit.org domain I should create a TXT record to inform the world that 1.1.1.1 is the only IP address that is allowed to send gitbit.org email.</Typography>
                      <pre><span>{'// Example SPF record<br/>v=spf1 ip4:1.1.1.1/32'}</span></pre>
                      <Typography variant="body1" gutterBottom>Office 365 automatically reviews SPF records of anyone that sends you an email to keep your organization safe. You’ll need to configure the SPF record for your organization when migrating to Office 365 to help protect your outbound email as well. Microsoft will verify your SPF record after you add it to the Office 365 tenant.</Typography>
                      <Typography variant="body1" gutterBottom>I haven’t added a section on how to set up your SPF record. Microsoft provides some assistance to their customers but I recommend asking a professional if you haven’t managed SPF records before.</Typography>
                      <Typography variant="h5" component="h3" gutterBottom>Reputation Filtering</Typography>
                      <Typography variant="body1" gutterBottom>Bulk emails are a bit different than spam. A bulk email is typically a newsletter or an offer from organizations that you know. They usually appear in your inbox after signing up for a new website.</Typography>
                   </div>
                </div>
                <div>
                   <div>
                      <div>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="An email sent to a large list of recipients for promotional purposes." src="https://miro.medium.com/max/2000/1*-3Yr_wi9UPTh98Q2ukw-UQ.png" width="1000" height="468" role="presentation"/></div>
                            </div>
                            <figcaption>Source: <a href="https://channel9.msdn.com/events/Ignite/2015/BRK3106" rel="noopener">Microsoft Channel 9</a></figcaption>
                         </figure>
                      </div>
                   </div>
                </div>
                <div>
                   <div>
                      <Typography variant="body1" gutterBottom>Some users want bulk email while others don’t. Microsoft uses a feedback loop to know when to block bulk emails. If Microsoft receives a certain amount of complaints they will start to block a bulk message.</Typography>
                      <Typography variant="body1" gutterBottom>See the section “Spam and Bulk Actions” and “Adjusting the Reputation Filter” below to customize the reputation filtering for your organization.</Typography>
                      <Typography variant="h5" component="h3" gutterBottom>Malware / Attachment Filtering</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Screenshot of EOP’s Malware Policies" src="https://miro.medium.com/max/1400/1*xwrJUFEff3QhpVcdYNTtMQ.png" width="700" height="737" role="presentation"/></div>
                         </div>
                         <figcaption>Screenshot of EOP’s Malware Policies</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>Malware filtering is fairly straightforward. Microsoft will scan and block emails that contain known malware or suspicious code.</Typography>
                      <blockquote>
                         <Typography variant="body1" gutterBottom>“Using multiple anti-malware engines, EOP offers multilayered protection that’s designed to catch all known malware. Messages transported through the service are scanned for malware (viruses and spyware). If malware is detected, the message is deleted.” — <a href="https://docs.microsoft.com/en-us/office365/servicedescriptions/exchange-online-protection-service-description/anti-spam-and-anti-malware-protection-eop" rel="noopener">Microsoft</a></Typography>
                      </blockquote>
                      <Typography variant="body1" gutterBottom>You can customize the attachment filter by blocking and allowing certain types of attachments. For example, most organizations don’t need VBS files so you may want to add it to your blocked attachment list. Microsoft does block the most dangerous attachments from your organization out of the box.</Typography>
                      <Typography variant="body1" gutterBottom>See the section “Protecting Office 365 from Malicious Attachments” below to customize the reputation filtering for your organization.</Typography>
                      <Typography variant="h4" component="h2" gutterBottom>Defending an Organization from Email Threats</Typography>
                      <Typography variant="body1" gutterBottom>Microsoft has designed Office 365 to support all verticals and organizations. Since every organization’s requirements are different, Microsoft has provided a number of customization options to help you tailor your tenant to your specific needs. Most of these customizations are configurable using the <a href="https://outlook.office365.com/ecp" rel="noopener">Exchange Admin Center (EAC)</a>.</Typography>
                      <Typography variant="body1" gutterBottom><strong>Accessing the Exchange Admin Center</strong></Typography>
                      <Typography variant="body1" gutterBottom>Most of the customizations are provided through the Exchange Admin Center (EAC). Only administrators will be able to find and change options so be sure the account you use to log in is an admin in your Office 365 tenant.</Typography>
                      <ol>
                         <li>Go to <a href="https://outlook.office365.com/ecp" rel="noopener">https://outlook.office365.com/ecp</a></li>
                         <li>Login with your admin credentials.</li>
                      </ol>
                      <Typography variant="h5" component="h3" gutterBottom>Customizing Office 365 SPAM Filtering</Typography>
                      <Typography variant="body1" gutterBottom>Customizing the SPAM filtering can be done from <strong>EAC &gt; protection &gt; spam filter</strong>.</Typography>
                   </div>
                </div>
                <div>
                   <div>
                      <div>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Screenshot of Office 365 Exchange Admin Center spam filter" src="https://miro.medium.com/max/2000/1*9jcoSlNebptoUnj7vwVFUA.png" width="1000" height="620" role="presentation"/></div>
                            </div>
                            <figcaption>Screenshot of Office 365 Exchange Admin Center spam filter</figcaption>
                         </figure>
                      </div>
                   </div>
                </div>
                <div>
                   <div>
                      <Typography variant="body1" gutterBottom>Typically, there is only one policy used across the organization called default. Double-clicking the policy will open the spam filter options window.</Typography>
                      <Typography variant="body1" gutterBottom>The spam settings cover a number of options included reputation filtering, block/allow email or domain, and other advanced options.</Typography>
                      <Typography variant="body1" gutterBottom><strong>Spam and Bulk Actions</strong></Typography>
                      <Typography variant="body1" gutterBottom>The second tab in the spam filter options window gives the most common and broad setting adjustments. These settings are used to customize the reputation filtering for your organization.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div><img style={{maxWidth: '100%', height: 'auto'}} alt="screenshot of Office 365’s spam and bulk actions" src="https://miro.medium.com/max/1400/1*muwFt77HL13wVboNLu_Ryw.png" width="700" height="683" role="presentation"/></div>
                         </div>
                         <figcaption>screenshot of Office 365’s spam and bulk actions</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom><strong>What should happen to spam/bulk email?</strong></Typography>
                      <Typography variant="body1" gutterBottom>The first section gives you options on how to handle spam. Microsoft classifies a message as good, spam, and high confidence spam (meaning Microsoft is quite sure it’s spam). By default, spam/bulk email will appear in a users junk folder.</Typography>
                      <Typography variant="body1" gutterBottom>Another common option is to move the messages to the <strong>quarantine</strong>. Quarantined messages won’t be delivered to the user’s mailbox. Instead, they’ll be moved to a special place only accessible by administrators. Currently, the quarantine is located in <strong>EAC &gt; protection &gt; quarantine</strong>. An administrator will need to release an email from the quarantine prior to the user seeing the message in their mailbox.</Typography>
                      <Typography variant="body1" gutterBottom><strong>Adjusting the Reputation Filter</strong></Typography>
                      <Typography variant="body1" gutterBottom>Some organizations prefer more bulk emails to arrive in the junk email folder while other organizations would prefer bulk email to arrive in the inbox. Microsoft uses a rating system of 1–9. Nine meaning Microsoft is confident it’s unwanted bulk email while one means it’s probably a good email.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Screen to adjust Office 365’s spam confidence level" width="700" height="596" role="presentation" src="https://miro.medium.com/max/700/1*qzQjVrwVZCgK3HNuK34kUw.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*qzQjVrwVZCgK3HNuK34kUw.png 276w, https://miro.medium.com/max/552/1*qzQjVrwVZCgK3HNuK34kUw.png 552w, https://miro.medium.com/max/640/1*qzQjVrwVZCgK3HNuK34kUw.png 640w, https://miro.medium.com/max/700/1*qzQjVrwVZCgK3HNuK34kUw.png 700w"/>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <figcaption>Screen to adjust Office 365’s spam confidence level</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>You can adjust the bulk email rating for your organization to meet your needs.</Typography>
                      <Typography variant="body1" gutterBottom><strong>How to Whitelist and Blacklist Senders as Spam</strong></Typography>
                      <Typography variant="body1" gutterBottom>The next two tabs (block lists, and allow lists) allow you to define your organizations black and white lists.</Typography>
                      <Typography variant="body1" gutterBottom>Whitelisting an email address or domain will allow all mail from the sender through the spam filter. Microsoft refers to the whitelist as Allow List. If you are having difficulty receiving emails from a person or partner that you trust you can add their email addresses or domains to the allow list.</Typography>
                      <Typography variant="body1" gutterBottom>Blacklisting an email address or domain will block all mail from the sender through the spam filter. Microsoft refers to the blacklist as Block List. If you’re receiving a lot of spam from a particular company or person you can add them to the block lists.</Typography>
                      <Typography variant="body1" gutterBottom>In the screenshot below I’ve marked all email from marketing@contoso.com as spam. Any other email from contoso.com users will travel through the standard spam filtering policy. I’ve also marked all email from the gmail.com domain as spam. The gmail.com policy will mark any email that comes from someone using Gmail as spam.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="screenshot of Office 365 block lists" width="700" height="596" role="presentation" src="https://miro.medium.com/max/700/1*j5K8sFlrf-S9jFzF5_ydWg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*j5K8sFlrf-S9jFzF5_ydWg.png 276w, https://miro.medium.com/max/552/1*j5K8sFlrf-S9jFzF5_ydWg.png 552w, https://miro.medium.com/max/640/1*j5K8sFlrf-S9jFzF5_ydWg.png 640w, https://miro.medium.com/max/700/1*j5K8sFlrf-S9jFzF5_ydWg.png 700w"/>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <figcaption>screenshot of Office 365 block lists</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>A lot of CRM systems, forms, and third-party tools will have emails caught in the spam filters. To make sure people receive the emails to their inbox you should add them to the allow list.</Typography>
                      <Typography variant="body1" gutterBottom>In the screenshot below I’ve added website-forms@themisdigital.com to the allow list. This will verify all of my email forms from website-forms@themisdigital.com go directly to a person’s inbox even if Microsoft thinks the email is spam. I’ve also added fabrikam.com to my allow list as a domain. Fabrikam is a fictitious organization I partner with so I’ve verified any emails that come from this domain will arrive at my users’ inbox.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Exchange Online spam filter policy" width="700" height="555" role="presentation" src="https://miro.medium.com/max/700/1*fDl7yLKpWWaJ0zYrfjLgdw.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*fDl7yLKpWWaJ0zYrfjLgdw.png 276w, https://miro.medium.com/max/552/1*fDl7yLKpWWaJ0zYrfjLgdw.png 552w, https://miro.medium.com/max/640/1*fDl7yLKpWWaJ0zYrfjLgdw.png 640w, https://miro.medium.com/max/700/1*fDl7yLKpWWaJ0zYrfjLgdw.png 700w"/>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </figure>
                      <Typography variant="h5" component="h3" gutterBottom>Protecting Office 365 from Phishing Attacks</Typography>
                      <Typography variant="body1" gutterBottom>Phishing attacks are one of the most dangerous and difficult attacks to protect your organization. The best way to protect your organization from phishing attacks is by training and testing your users.</Typography>
                      <Typography variant="body1" gutterBottom>Below is a quick list of things your users should know to help protect against phishing attacks:</Typography>
                      <ul>
                         <li>Don’t trust the Display Name in the sender information. Review the email address.</li>
                         <li>Check the from address carefully. Verify the letter o isn’t replaced with zeros, etc.</li>
                         <li>Don’t trust an email because it has your name or other personal information on it. A lot of information is available through social media and online that may be used to give you false confidence.</li>
                         <li>Hover over links to verify the link is going to the correct URL.</li>
                         <li>When in doubt, don’t click a link. Instead, go directly to the company’s website and log in.</li>
                         <li>Ask the IT department to verify the email prior to taking any action.</li>
                      </ul>
                      <Typography variant="h5" component="h3" gutterBottom>Protecting Office 365 from Malicious Attachments</Typography>
                      <Typography variant="body1" gutterBottom>Out of the box, Microsoft will scan and block emails with attachments that fail a virus check. You can add extensions that you want to block to help keep your organization secure.</Typography>
                      <Typography variant="body1" gutterBottom>For example, “.VBS” files are Visual Basic Script files that can be used to pass malicious code through email. Since most organizations will never receive a good VBS file through email it’s a safe bet to block them from entering your organization.</Typography>
                      <Typography variant="body1" gutterBottom>Customizing the attachment filtering can be done from the <strong>EAC &gt; protection &gt; malware filter</strong>. Double click the <strong>Default </strong>policy to view your options.</Typography>
                   </div>
                </div>
                <div>
                   <div>
                      <div>
                         <figure style={{margin: 0, textAlign: 'center'}}>
                            <div role="button" tabIndex="0">
                               <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Screenshot of Office 365 Exchange Admin Center malware filter" src="https://miro.medium.com/max/2000/1*8XRcQZ6FzI3cbiAnOAQpOw.png" width="1000" height="743" role="presentation"/></div>
                            </div>
                            <figcaption>Screenshot of Office 365 Exchange Admin Center malware filter</figcaption>
                         </figure>
                      </div>
                   </div>
                </div>
                <div>
                   <div>
                      <Typography variant="body1" gutterBottom>From the <strong>settings </strong>tab, you can enable <strong>Common Attachment Types Filter</strong> which will block dangerous file types. Once turned on you can add and remove file types to customize the malware filter for your organization.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div><img style={{maxWidth: '100%', height: 'auto'}} alt="screenshot of Office 365’s Common Attachment Types Filter" src="https://miro.medium.com/max/1400/1*4dsU2pUnzf6L5X9XkQKAQg.png" width="700" height="454" role="presentation"/></div>
                         </div>
                         <figcaption>screenshot of Office 365’s Common Attachment Types Filter</figcaption>
                      </figure>
                      <Typography variant="h5" component="h3" gutterBottom>Custom Content Filtering in Office 365</Typography>
                      <Typography variant="body1" gutterBottom>Content filtering is difficult to customize. It’s easy for spammers to change the wording or your IT staff may get too aggressive and block good messages.</Typography>
                      <Typography variant="body1" gutterBottom>“Viagra” can typically be blocked in most organizations and it’s common for spammers to send emails about Viagra.</Typography>
                      <Typography variant="body1" gutterBottom>To block content we can create a transport rule: <strong>EAC &gt; mail flow &gt; rules &gt; plus sign (+) &gt; Create a new rule…</strong></Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Exchange Online create rules" width="700" height="524" role="presentation" src="https://miro.medium.com/max/700/1*bUNjQVUwNAhJ8n8OwFsNDw.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*bUNjQVUwNAhJ8n8OwFsNDw.png 276w, https://miro.medium.com/max/552/1*bUNjQVUwNAhJ8n8OwFsNDw.png 552w, https://miro.medium.com/max/640/1*bUNjQVUwNAhJ8n8OwFsNDw.png 640w, https://miro.medium.com/max/700/1*bUNjQVUwNAhJ8n8OwFsNDw.png 700w"/>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </figure>
                      <Typography variant="body1" gutterBottom>Create a rule with the following settings:</Typography>
                      <ul>
                         <li>Name: Block Content (or anything you want)</li>
                         <li>Apply this rule if…: The subject or body includes.</li>
                         <li>Add the word viagra to the list of words.</li>
                         <li>Do the following… Delete the message without notifying anyone.</li>
                         <li>Save your new rule.</li>
                      </ul>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Exchange Online create rules page" width="700" height="701" role="presentation" src="https://miro.medium.com/max/700/1*0RQ-nrWdDdJuHNNzzEcTug.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*0RQ-nrWdDdJuHNNzzEcTug.png 276w, https://miro.medium.com/max/552/1*0RQ-nrWdDdJuHNNzzEcTug.png 552w, https://miro.medium.com/max/640/1*0RQ-nrWdDdJuHNNzzEcTug.png 640w, https://miro.medium.com/max/700/1*0RQ-nrWdDdJuHNNzzEcTug.png 700w"/>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </figure>
                      <Typography variant="body1" gutterBottom>Transport rules can take up to an hour to take effect.</Typography>
                      <Typography variant="body1" gutterBottom>If you click <strong>More options…</strong> you’ll have a number of other options. After clicking more options you can update the<strong> Do the following…</strong> selection with <strong>Reject the message with the explanation</strong>. Doing so will provide the sender with a detailed error so they know to remove the word.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Exchange Online rule > do the following" width="700" height="555" role="presentation" src="https://miro.medium.com/max/700/1*02bcRzS_CC9k5slWSH1b8w.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*02bcRzS_CC9k5slWSH1b8w.png 276w, https://miro.medium.com/max/552/1*02bcRzS_CC9k5slWSH1b8w.png 552w, https://miro.medium.com/max/640/1*02bcRzS_CC9k5slWSH1b8w.png 640w, https://miro.medium.com/max/700/1*02bcRzS_CC9k5slWSH1b8w.png 700w"/>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </figure>
                      <Typography variant="h5" component="h3" gutterBottom>Custom Connection Filtering</Typography>
                      <Typography variant="body1" gutterBottom>Connection filtering is fairly straightforward. You can allow or block IP addresses through your SPAM filter.</Typography>
                      <Typography variant="body1" gutterBottom>To access the connection filtering go to <strong>EAC &gt; protection &gt; connection filter &gt; double-click Default</strong>.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Office 365 Connection Filtering" width="700" height="524" role="presentation" src="https://miro.medium.com/max/700/1*NCitlkTLh412ff7hm_n7Fg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*NCitlkTLh412ff7hm_n7Fg.png 276w, https://miro.medium.com/max/552/1*NCitlkTLh412ff7hm_n7Fg.png 552w, https://miro.medium.com/max/640/1*NCitlkTLh412ff7hm_n7Fg.png 640w, https://miro.medium.com/max/700/1*NCitlkTLh412ff7hm_n7Fg.png 700w"/>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <figcaption>Office 365 Connection Filtering</figcaption>
                      </figure>
                      <Typography variant="body1" gutterBottom>From the connection filtering tab, you add the IP address or range to the filters.</Typography>
                      <Typography variant="body1" gutterBottom>Microsoft also provides the ability to enable or disable the “safe list”. The safe list is a range of IP addresses that Microsoft knows are used by safe senders.</Typography>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                         <div role="button" tabIndex="0">
                            <div>
                               <div>
                                  <div>
                                     <div></div>
                                     <img style={{maxWidth: '100%', height: 'auto'}} alt="Exchange Online enable safe list" width="700" height="577" role="presentation" src="https://miro.medium.com/max/700/1*o_VlYMhsYwV_9Va39NQFVw.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*o_VlYMhsYwV_9Va39NQFVw.png 276w, https://miro.medium.com/max/552/1*o_VlYMhsYwV_9Va39NQFVw.png 552w, https://miro.medium.com/max/640/1*o_VlYMhsYwV_9Va39NQFVw.png 640w, https://miro.medium.com/max/700/1*o_VlYMhsYwV_9Va39NQFVw.png 700w"/>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </figure>
                      <Typography variant="body1" gutterBottom>Any changes may take up to an hour to take effect.</Typography>
                   </div>
                </div>
                <div role="separator"><span></span><span></span><span></span></div>
                <section>
                   <div>
                      <div>
                         <Typography variant="body1" gutterBottom>There are more options that I haven’t covered. If you’d like to more about a particular feature please let me know in the comments.</Typography>
                         <Typography variant="body1" gutterBottom>Thanks,</Typography>
                      </div>
                   </div>
                </section>
                </Grid>
              </Grid>
            </Container>
          </div>
        </main>
      </Page>
    )
  }
}

export default BlogArticle
