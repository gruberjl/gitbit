import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '19 Reasons Exchange Online is Winning'
  const jsonLd = {
    headline: title,
    datePublished: '1-19-2019',
    keywords: [
      'Microsoft',
      'Exchange Online',
      'Microsoft 365',
      'Office 365'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1280/1*06thNHYNsN-FgSa_w4GhaQ.jpeg'} canonical={'https://medium.com/gitbit/19-reasons-exchange-online-is-winning-195f2188150d'} title={title} description={'Exchange Online is Microsoft’s hosted email for businesses. It’s the industry-leading cloud solution adopted by small businesses and fortune 500 companies. Microsoft Exchange Online provides the…'}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
                <Typography variant="h3" component="h1" sx={{mt: 4, mb: 4}}>19 Reasons Exchange Online is Winning</Typography>
                <div>
                  <figure style={{margin: 0, textAlign: 'center'}}><img style={{maxWidth: '100%', height: 'auto'}} alt="19 reasons Exchange Online is Winning" src="https://miro.medium.com/max/1280/1*06thNHYNsN-FgSa_w4GhaQ.jpeg" width="1280" height="720" role="presentation" /></figure>
                </div>
                <div>
                  <div>
                    <Typography variant="h4" component="h2" gutterBottom>What’s Exchange Online?</Typography>
                    <Typography variant="body1" gutterBottom>Exchange Online is Microsoft’s hosted email for businesses. It’s the industry-leading cloud solution adopted by small businesses and fortune 500 companies. Microsoft Exchange Online provides the benefits of a cloud-based email service with the robust capabilities of an on-premises server deployment. Simply put, Microsoft will store, manage, and secure your businesses email for a low monthly cost. Microsoft is always looking to improve the capabilities provided to customers, so they continually ask, ‘what do you like?’ and ‘why did you choose Exchange Online?’. Here are 19 answers that come up repeatedly.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>1. Access Anywhere</Typography>
                    <Typography variant="body1" gutterBottom>Easy access to email from anywhere is essential to improving sales, productivity, innovation, and customer engagement. Salespeople can increase sales by responding to prospects faster. Managers can approve projects and proposals faster to increase agility and innovation. The front-line worker is empowered and optimized to improve productivity and increase customer engagement. Exchange Online is top of its class with anywhere access. You won’t need a VPN or your work computer. Users can easily configure their smartphones and tablets or access their email on any web browser. Windows, Mac, Linux, Android, or iOS the access is always available.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>2. Reliability &amp; Available Anytime</Typography>
                    <Typography variant="body1" gutterBottom>Microsoft has a financially backed SLA for 99.9% up-time. Below is a list of up-times by quarter since 2015:</Typography>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Exchange Online uptime" src="https://miro.medium.com/max/1000/1*IKTF1XoJcRf18kPGReT-Kg.png" width="1000" height="225" role="presentation" /></div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <Typography variant="body1" gutterBottom>Microsoft manages multiple data centers across the world. If a large storm is hitting an area, Microsoft will seamlessly migrate your email to a safe data center. Your organization will keep moving, regardless of world events.</Typography>
                    <Typography variant="body1" gutterBottom>On a more personal note, I manage over 100 tenants, I’ve been working with Office 365 since the beginning and I cannot remember the last time I had a major outage.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>3. Hybrid Flexibility</Typography>
                    <Typography variant="body1" gutterBottom>One of Exchange Online’s primary selling points for mid-size and enterprise organizations is its hybrid flexibility. Deploying email in a hybrid configuration an organization can keep some user mailboxes on their on-premise Exchange server while moving others to Exchange Online. This is a great way to migrate to Exchange Online using a staged migration. User migrations between on-premise servers and the cloud are seamless. Hybrid deployments are a great way to move heavier workloads off of your on-premise servers freeing resources to be used in other ways. Lastly, hybrid deployments give an organization the flexibility of the cloud, allowing massive increases and decreases in users and usage without a capital expenditure.</Typography>
                    <Typography variant="body1" gutterBottom><strong>Pro-tip</strong>: Take those few pesky users with 15 GB mailboxes and move them to Office 365; continue running the rest of your small mailboxes on premise. Office 365 will even let you use their SPAM filtering for all your users without the additional cost! If you’ve seen there recent financial reports you wouldn’t mind letting them fork the bill!</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>4. Single-Sign-On</Typography>
                    <Typography variant="body1" gutterBottom>Integrating your on-premises directories with Exchange Online makes your users more productive by providing a common identity for accessing both cloud and on-premises resources. Users and organizations can take advantage of the following:</Typography>
                    <ul>
                      <li>Users can use a single identity to access on-premises applications and Exchange Online. Users won’t need to remember additional passwords, decreasing the number of password resets and support incidents related to authentication.</li>
                      <li>Single tool to provide an easy deployment experience for synchronization and sign-in. Since user accounts created on-premise are used for your Exchange Online authentication, admins won’t need to create multiple accounts, decreasing the time it takes to deploy new users.</li>
                      <li>Without single-sign-on administrators are required to deactivate accounts in multiple locations when an employee is terminated. Every account increases the chances of an error causing a security vulnerability.</li>
                    </ul>
                    <Typography variant="h4" component="h2" gutterBottom>5. Large Mailboxes &amp; Emails</Typography>
                    <Typography variant="body1" gutterBottom>50 GB mailboxes; 150 GB archive mailboxes; 150 MB email sizes. Employees will never have to worry about managing their mailbox growth again. Keep everything! Send anything! Every couple of years Microsoft increases the limits. Shared mailboxes and resource mailboxes have a 50 GB limit too, and the best part? Shared mailboxes and resource mailboxes are completely free. Every team can have a shared mailbox (marketing, sales, help desk), and every conference room can be automatically managed through Exchange Online, for free!</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>6. Real-Time Collaboration with Office 365 Groups</Typography>
                    <Typography variant="body1" gutterBottom>Office 365 groups are completely unique to the Office 365 experience. A team in your organization can create a group. The group will have a special shared mailbox where members of the group can post updates and make notes on emails and collaborate in real time. All in a special secure area for the team! Office 365 groups are free with your Exchange Online tenant so make as many as you want!</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>7. In-Place Archive</Typography>
                    <Typography variant="body1" gutterBottom>“Exchange Online Archiving offers users advanced archiving capabilities with the archive mailbox feature. An archive mailbox is a specialized mailbox that appears alongside the users’ primary mailbox folders in Outlook or Outlook Web App. Users can access the archive in the same way that they access their primary mailboxes. In addition, they can search both their archives and primary mailboxes.”</Typography>
                    <Typography variant="body1" gutterBottom>Archive mailboxes are a great way to allow users to have HUGE mailboxes while automatically moving old information out of their primary mailbox into a separate archive mailbox. Moving the data keeps their primary mailbox small and fast while allowing the users to keep everything so they don’t have to waste time cleaning up their inbox. With the automatic archiving system, which has customization GALORE, no one will waste time with maintenance!</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>8. E-Discovery</Typography>
                    <Typography variant="body1" gutterBottom>E-Discovery can be one of the most boring, yet important things IT manages. “<strong>Electronic discovery</strong> (sometimes known as e-discovery, ediscovery, eDiscovery, or e-Discovery)<strong> is the <em>electronic</em> aspect of identifying, collecting and producing electronically stored information</strong> (ESI) <strong>in response to a request for production in a lawsuit or investigation.</strong> ESI includes, but is not limited to, emails, documents, presentations, databases, voicemail, audio and video files, social media, and websites.</Typography>
                    <Typography variant="body1" gutterBottom>The processes and technologies around e-discovery are often complex because of the sheer volume of electronic data produced and stored. Additionally, unlike hardcopy evidence, electronic documents are more dynamic and often contain metadata such as time-date stamps, author and recipient information, and file properties. Preserving the original content and metadata for electronically stored information is required in order to eliminate claims of spoliation or tampering with evidence later in the litigation.”</Typography>
                    <Typography variant="body1" gutterBottom>Exchange Online allows admins to <strong>search across the entire tenant</strong> to find exactly what you need. Exchange Online takes the complexity and management of E-Discovery out of the hands of admins and builds it directly into the product!</Typography>
                    <Typography variant="body1" gutterBottom>Since Exchange Online is one of the most popular products on the market, almost every 3rd party tool can be added on. If you’re happy with your Barracuda, Mimecast, or another service, continue to use it. It’s no problem for an Exchange Online admin!</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>9. Litigation Hold / In-Place Hold</Typography>
                    <Typography variant="body1" gutterBottom>Litigation Hold &amp; In-Place Holds are the latest evolution, or alternative, to journaling and email backups. It’s a way to keep email even after a user has deleted it. Holds solve two problems in a simple and effortless way:</Typography>
                    <Typography variant="body1" gutterBottom>1. Electronic information storage for compliance and regulation requirements.</Typography>
                    <Typography variant="body1" gutterBottom>2. Backup and recovery of accidentally deleted items.</Typography>
                    <Typography variant="body1" gutterBottom>An excerpt from Microsoft “When a reasonable expectation of litigation exists, organizations are required to preserve electronically stored information (ESI), including email that’s relevant to the case. This expectation can occur before the specifics of the case are known, and preservation is often broad. Organizations may preserve all email related to a specific topic, or all email for certain individuals.”</Typography>
                    <Typography variant="body1" gutterBottom>Before we talk about litigation hold let’s review journaling. Journaling has been a way to permanently store all email within your organization. It’s typically configured along with backups. Journaling is configured in case an organization ever needs to prove something for a legal challenge. As anyone who’s managed journaling before, it can be tedious and time-consuming. If you’re managing the journaling destination, the emails pile up quickly. Mid-sized and enterprise organizations may require a dedicated administrator for journal management. Constantly creating new mailboxes and redirecting journaling to the new locations. Large amounts of processor and storage must be dedicated for the filing, archiving, and indexing of the journaling mailboxes. An alternative to self-hosted journaling is using a third party such as Mimecast. These third-party options work very well and will typically need little maintenance to manage. Most third-parties work with Office 365, in most cases, they work with Office 365 better than on-premise or alternative email hosting platforms. Many organizations are still choosing to use third-party journaling over litigation hold. They’re both fantastic options.</Typography>
                    <Typography variant="body1" gutterBottom>Holds work differently. Journaling will send a copy of an email to another location. Litigation Hold will maintain a copy of the email in place. A user can still delete the email or content as they’d expect, but Microsoft will continue to retain the email in a hidden location only administrators can access.</Typography>
                    <Typography variant="body1" gutterBottom>In Exchange Online, you can use In-Place Hold or Litigation Hold to accomplish the following goals:</Typography>
                    <ul>
                      <li>Enable users to be placed on hold and preserve mailbox items immutably</li>
                      <li>Preserve mailbox items deleted by users or automatic deletion processes such as MRM</li>
                      <li>Protect mailbox items from tampering, changes by a user, or automatic processes by saving a copy of the original item</li>
                      <li>Preserve items indefinitely or for a specific duration</li>
                      <li>Keep holds transparent from the user by not having to suspend MRM</li>
                      <li>Use In-Place eDiscovery to search mailbox items, including items placed on hold</li>
                    </ul>
                    <Typography variant="body1" gutterBottom>Additionally, you can use In-Place Hold:</Typography>
                    <ul>
                      <li>Search and hold items matching specified criteria</li>
                      <li>Place a user on multiple In-Place Holds for different cases or investigations</li>
                    </ul>
                    <Typography variant="h4" component="h2" gutterBottom>10. Automated Mail Flow Rules &amp; Disclaimers</Typography>
                    <Typography variant="body1" gutterBottom>Is there anything better than automation? Getting more done while doing less? It doesn’t get much better than that! Exchange Online has two different ways to automate mail flow: transport rules and mailbox rules.</Typography>
                    <Typography variant="body1" gutterBottom>Transport rules are configured by administrators. They’re commonly used to require encryption, apply disclaimers or signatures to every email. Other common options are requiring approval before delivering messages and prevent sensitive information from accidentally leaving the company. There are a ton of different ways to filter the transport rules and create rules as granular as needed.</Typography>
                    <Typography variant="body1" gutterBottom>The other type of automation is performed by the user on a mailbox level. This is where users can automatically move items to different folders, apply special sounds when important emails arrive, etc. Mailbox rules are a great way to help employees improve efficiency and organize their mailboxes.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>11. Compliance</Typography>
                    <Typography variant="body1" gutterBottom>Exchange Online meets many compliance and regulations certifications. Microsoft uses third-party auditors to certify they meet the compliance and regulatory goals. Not only does Exchange Online meet large regulations such as ISO 27001, European Union (EU) Model Clauses, the Health Insurance Portability and Accountability Act Business Associate Agreement (HIPAA BAA), and the Federal Information Security Management Act (FISMA) but Office 365 is also designed to meet local requirements for data management. Exchange Online meets the following regulations:</Typography>
                    <ul>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">HIPAA / HITECH</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">ISO/IEC 27001</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">ISO/IEC 27018</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">SOC 1</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">SOC-2</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">DISA</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">FDA 21 CFR Part 11</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">FERPA</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">Argentina PDPA</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">CSA-CCM</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">CS Mark (Gold)</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">ENISA IAF</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">EU Model Clauses</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">FedRAMP</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">FIPS 140–2</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">FISC</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">FISMA</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">GxP</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">CCSL (IRAP)</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">Japan My Number Act</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">MTCS</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">NZ CC Framework</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">Section 508 / VPATs</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">SHARED ASSESSMENTS</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">ENS Spain</a></li>
                      <li><a href="https://products.office.com/en-us/business/office-365-trust-center-compliance-certifications#" rel="noopener">UK G-Cloud</a></li>
                    </ul>
                    <Typography variant="body1" gutterBottom><strong>Pro-Tip:</strong> Compliance isn’t configured out of the box. Special commands must be run on each mailbox and rules must be applied in your organization. Don’t leave compliance to a non-compliant admin.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>12. Security</Typography>
                    <Typography variant="body1" gutterBottom>Today, cyber-criminals are more organized and motivated than any time in history. It is easier than ever to attack an organization. Criminals have become organized and now offer Cyber-crime as a Service (CaaS). CaaS is a kit or service you can purchase to attack people and organizations. They’ll target known exploits. Without proper patching, maintenance, and a dedicated staff your organization is more susceptible than ever before. Fortunately, Exchange Online has world-class protection from cyber-crime.</Typography>
                    <Typography variant="body1" gutterBottom>Employees want the freedom to access the applications and data they need on whatever PC or device they choose — whether at the office, at home, or on the road. At the same time, you need to make sure data is protected and available only to the people who should have access.</Typography>
                    <Typography variant="body1" gutterBottom>Exchange Online has automatic, always-on protection. Microsoft has a dedicated staff to keep your organization safe from new threats. Patching is automatic, and maintenance is always up-to-date.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>13. SPAM Filters</Typography>
                    <Typography variant="body1" gutterBottom>100% of known viruses blocked. 99% spam stopped. All email into Exchange Online is fed through 5 different SPAM filters! The filters can be customized to allow certain partners, safe/dangerous IP addresses, content filtering, and more. For additional security, many third-party solutions are available, for example, Mimecast. Can you tell I’m a fan of Mimecast? When using a third party SPAM filter, Exchange Online can be configured to prevent any mail except a list of safe senders.</Typography>
                    <Typography variant="body1" gutterBottom>Outbound email is also secured. Designed to prevent spoofing to keep your organization off blacklists. I’ve been working with Office 365 since its inception (it used to be called BPOS) I haven’t had to remove a single organization from a blacklist. Anyone that’s ever had to deal with those troubles is a little excited about that!</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>14. Encrypted Email</Typography>
                    <Typography variant="body1" gutterBottom>“In computing, encryption is the method by which plain text or any other type of data is converted from a readable form to an encoded version that can only be decoded by another entity if they have access to a decryption key. Encryption is one of the most important methods for providing data security, especially for end-to-end protection of data transmitted across networks.” — <a href="http://searchsecurity.techtarget.com/definition/encryption" rel="noopener">TechTarget</a></Typography>
                    <Typography variant="body1" gutterBottom>Exchange Online provides encryption at every level and many ways to encrypt email outside of your organization.</Typography>
                    <ul>
                      <li>All data is encrypted at rest. “Data at rest” refers to data that isn’t actively in transit. In Exchange Online, email data at rest (sitting on a hard drive in a secure data center) is encrypted.</li>
                      <li>Exchange Online will encrypt communication going to and coming from the client. Whether the client uses Android, Apple, Outlook, Windows, Mac, or a web browser.</li>
                      <li>Email to other organizations can get a bit tricky. The email protocol doesn’t require encryption but supports it. Exchange Online will always try to send and receive email over encrypted channels. If another organization doesn’t allow encryption, the email will be sent in plain text. BUT, an administrator can require email between two organizations to be encrypted (and it’s a whole lot easier to configure in Exchange Online than on-premise). Also, a user can encrypt an email using Office Message Encryption. If a user is sending confidential information, they can add encryption to the email and ensure the security of the data transmitted.</li>
                    </ul>
                    <Typography variant="h4" component="h2" gutterBottom>15. Data Loss Prevention</Typography>
                    <Typography variant="body1" gutterBottom>Who hasn’t laughed too hard and had a little leakage, am I right? (I swear I’m an adult writing a professional blog.) Eventually, every organization will have someone accidentally send information they shouldn’t. Whether it’s a credit card number, social security number, or some other protected information. Exchange Online can identify and protect against the loss of sensitive data.</Typography>
                    <Typography variant="body1" gutterBottom>You can educate your users about DLP policies and help them remain compliant without blocking their work. For example, if a user tries to share a document containing sensitive information, a DLP policy can both send them an email notification and show them a policy tip that allows them to override the policy if they have a business justification. The same policy tips also appear in Outlook on the web, Outlook 2013 and later.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>16. Multi-Factor Authentication</Typography>
                    <Typography variant="body1" gutterBottom>“Multi-factor authentication is a method of verifying who you are that requires the use of more than just a username and password. Using MFA for Office 365, users are required to acknowledge a phone call, text message, or app notification on their smartphones after correctly entering their passwords. They can sign in only after this second authentication factor has been satisfied.” — <a href="https://support.office.com/en-us/article/Set-up-multi-factor-authentication-for-Office-365-users-8f0454b2-f51a-4d9c-bcde-2c48e41621c6" rel="noopener">Microsoft</a></Typography>
                    <Typography variant="body1" gutterBottom>I use MFA for most of my accounts nowadays. It’s one of the best ways to prevent unauthorized users from accessing your account. With Exchange Online, MFA can be enabled for everyone or a subset of users. This flexibility allows an organization to test MFA, or only secure the most critical accounts such as admins, and accountants.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>17. Smartphone Access Control &amp; Security</Typography>
                    <Typography variant="body1" gutterBottom>Using mobile devices like smartphones and tablets to access to work email, calendar, contacts, and tasks play a big part in making sure that employees get their work done anytime, from anywhere. But it’s critical that you can manage and secure these devices when they’re connected to your Exchange Online organization.</Typography>
                    <Typography variant="body1" gutterBottom>Exchange Online will allow a user to sync their email, contacts, calendar, and tasks directly to their handheld device. Exchange Online has the capability to require a secure device in many ways:</Typography>
                    <ul>
                      <li>Block, allow, and wipe a device remotely. If a device is lost or stolen, an admin to login to the Exchange Online admin portal and wipe the device or email.</li>
                      <li>Admins can configure access rules for specific device families and models. When a new security vulnerability is discovered on older devices, Exchange Online admins don’t lose any sleep! They can quickly track and report on those devices in their environment and block them from future access.</li>
                      <li>Exchange Online also hosts a series of different device policies. For example, an organization can force all users to encrypt their device or require a complex password to unlock the device.</li>
                    </ul>
                    <Typography variant="h4" component="h2" gutterBottom>18. Bring Your Own Device (BYOD)</Typography>
                    <Typography variant="body1" gutterBottom>Exchange Online comes with a myriad of support for BYOD. Since it’s cloud-hosted, the users can access their email from their home or on the road. Supporting all common email protocols, a user can access their email on any device using any mail software they want. Thanks to AutoDiscover, a protocol designed by Microsoft to make client setup easy, a user can jump in without support from an administrator. Lastly, the browser is always a possibility for email access.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>19. Automated Maintenance &amp; Updates</Typography>
                    <Typography variant="body1" gutterBottom>Exchange Online is the fastest evolving solution on the market. Microsoft automatically provides security patches and product enhancements without any intervention from users or administrators. Automated updates mean less time maintaining and more time growing.</Typography>
                    <Typography variant="body1" gutterBottom>Don’t have Exchange Online or Office 365? Take a peak at the .</Typography>
                  </div>
                </div>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="body1" gutterBottom>Thank you for taking the time to read my article. I hope you found it beneficial. If you have any questions or feedback, please don’t hesitate to reach out.</Typography>
                      <Typography variant="body1" gutterBottom>— <a href="https://www.linkedin.com/in/johnlgruber/" rel="noopener">John Gruber</a> — <a href="https://www.tierpoint.com/managed-services/office365/" rel="noopener">TierPoint Collaboration Engineer</a></Typography>
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

export default BlogArticle
