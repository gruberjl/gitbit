import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const BlogArticle = () => {
  const title = '10 Reasons SharePoint Online Destroys File Shares'
  const jsonLd = {
    headline: title,
    datePublished: '2-1-2018',
    keywords: [
      'Microsoft',
      'SharePoint Online',
      'Microsoft 365',
      'Office 365',
      'Productivity'
    ],
    author: {
      '@type': 'Person',
      name: 'John Gruber',
      url: 'https://medium.com/@gruberjl'
    }
  }

  return (
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1306/1*px7gQaOUIJmLN2LhwNgyFQ.jpeg'} canonical={'https://medium.com/gitbit/10-reasons-sharepoint-online-destroys-file-shares-7c2c2680f1e9'} title={title} description={'The IT department of the future leads the business driving innovation. We streamline the day to day, improve customer experience, and help the sales team close more deals!'}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
                <Typography variant="h3" component="h1" sx={{mt: 4, mb: 4}}>10 Reasons SharePoint Online Destroys File Shares</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft SharePoint" src="https://miro.medium.com/max/1306/1*px7gQaOUIJmLN2LhwNgyFQ.jpeg" width="866" height="487" role="presentation" /></div>
                </figure>
                <Typography variant="body1" gutterBottom>Ever since I was little I dreamed of being in IT. Hiding in a windowless office, where users would request access and equipment to empower them to do their jobs. Working on cool technology and generally tinkering with the latest gear. When I was in high school, that’s what IT looked like… <strong>The world has changed</strong>. IT is no longer expected to support the business, <strong>we’re innovating to drive growt</strong><strong>h</strong>. <strong>It’s</strong> <strong>our job to transform the older outdated practices into a mobile, agile business</strong>. Migrating to SharePoint Online is the best way to transform an organization.</Typography>
                <Typography variant="h4" component="h2" gutterBottom>1. Maintenance</Typography>
                <blockquote>
                  <Typography variant="body1" gutterBottom>With a cloud-based portal, updates happen automatically, and the IT team spends less time on maintenance tasks. “Now that we’re in the cloud, we no longer have to worry about maintenance weekends, patching, or the system going down,” says Graeme Cuthbertson, IT Manager at Thermo Fisher.</Typography>
                </blockquote>
                <Typography variant="body1" gutterBottom><strong>When I originally heard about the cloud, my first thought wasn’t what value it could provide to the business. My first instinct was survival.</strong> My day to day job was managing backups, monitoring disk space, and replacing servers. What would I do if everything I managed become someone else’s responsibility? I’ve been a cloud engineer for over 5 years, half my career. I’m busier and better paid than ever. <strong>I’m no longer seen as an expense on the business. I drive value and innovation</strong><strong>.</strong> Even in this article, I hope clients read it and decide to move their workloads to Office 365. But enough about me.</Typography>
                <Typography variant="body1" gutterBottom>SharePoint Online has a lot of capabilities that can be changed and configured to meet a TON of needs. From lists, Yammer, and internal websites the workload for SharePoint Online admins can be extensive. But that’s not what we’re discussing today. <strong>If you’re only using SharePoint Online as a file store, there’s generally no maintenance</strong>. Even group permissions can be delegated to the teams. Surprisingly, people love being able to manage their own team. They don’t want to bother the IT staff and wait for our response. They want to grant the new user all the access themselves. If you want IT staff to retain control, it’s fast and easy.</Typography>
                <Typography variant="body1" gutterBottom>I won’t go into a lot of detail about file shares. Group Policy can automate some tasks, backups can run on a schedule, etc. But, group policy fails, users drives don’t connect. Backups fail. It happens with on-premise file shares. In summary, <strong>SharePoint Online requires less maintenance.</strong></Typography>
                <Typography variant="h4" component="h2" gutterBottom>2. Cost</Typography>
                <blockquote>
                  <Typography variant="body1" gutterBottom>Putting a race together requires the same coordinated teamwork you see in the pit, and with SharePoint Online, we’re driving productivity into a new era of time- and cost-savings. That’s great news for NASCAR. — Stephen Byrd</Typography>
                </blockquote>
                <Typography variant="body1" gutterBottom>If you’re already on Office 365, <strong>SharePoint Online is included and using it wouldn’t cost you anything</strong>. If you’re not in Office 365, SharePoint Online has a user based monthly fee. You can squash the CAPEX for a low OPEX. I’d expect the hardware, software, VPN, and the backup solution would end up costing your organization more but you’ll have to run the numbers for yourself. Including the maintenance of file shares, <strong>I’ve never seen on-premise storage being cheaper than SharePoint Online</strong>. But who cares about cost!? <em>If you learn one thing from this article, let it be this</em>: <strong>The IT department of the future delivers innovation to help lead the business. We streamline the day to day, improve customer experience, and help the sales team close more deals!</strong></Typography>
                <Typography variant="h4" component="h2" gutterBottom>3. Security</Typography>
                <blockquote>
                  <Typography variant="body1" gutterBottom>We’re achieving our vision of accessing our business content and communicating across the globe — anywhere, anytime, on any device, in a more secure way.</Typography>
                </blockquote>
                <Typography variant="body1" gutterBottom>Answer honestly, if I tried to gain physical access to your data center could I? If I ran a dictionary attack against an admin account would I be stopped? <strong>If I purchased a hack that takes advantage of the latest vulnerability would you update before I gained access</strong>? If you can honestly answer yes, you are worth a lot more than you’re being paid and you will never receive the recognition you deserve. Your job is to prevent attacks from happening. Who will give you an attaboy because you stopped something before it started? If you fail once, you’ll pay for it…</Typography>
                <Typography variant="body1" gutterBottom>I know you’ve heard it, we all have. The cloud isn’t secure. This is something that makes big headlines and attracts readers. I’m here to tell you, this simply isn’t true. <strong>These stories remind me of the notorious hacker Kevin Mitnick. They wouldn’t allow him to use a telephone from jail because they thought he could shoot off nukes with a phone call</strong>. The fact is, the media and a lot of other smart people don’t understand technology. They don’t know how it works, but security threats make headlines.</Typography>
                <Typography variant="body1" gutterBottom>SharePoint Online is always up-to-date. It has a team of resources dedicated to hardening and protecting the data. If someone finds a breach, Microsoft will pay for the tip! Lastly, SharePoint Online can be hardened with MFA. Depending on your Office 365 package it may be included!</Typography>
                <Typography variant="body1" gutterBottom><em>Quick shout out to current </em><a href="https://goo.gl/GPEvM2" rel="noopener"><em>TierPoint </em></a><em>customers, if your interested in MFA give me shout. Microsoft has a charge if you’re using a sync or hybrid package. Cloud only customers get it for free and my time is included in your package.</em></Typography>
                <Typography variant="h4" component="h2" gutterBottom>4. Compliance</Typography>
                <blockquote>
                  <Typography variant="body1" gutterBottom>Assurant achieves (a high) level of mobility while still complying with industry regulations</Typography>
                  <Typography variant="body1" gutterBottom>there’s never a good quote on compliance — John Gruber</Typography>
                </blockquote>
                <Typography variant="body1" gutterBottom>My favorite topic. I talk about it all the time. It’s so unbelievably boring, but it can mean life or death for an organization or millions of dollars in fines. SharePoint Online can be configured for a long list of different industry standards including HIPAA. I want you to finish reading the article so I’m not going into more detail, but remember, <strong>SharePoint Online can be compliant but isn’t out of the box</strong>.</Typography>
                <Typography variant="h4" component="h2" gutterBottom>5. Search &amp; Discovery</Typography>
                <Typography variant="body1" gutterBottom>I won’t go into huge detail here because honestly, I think highly of file share’s search capability. SharePoint Online’s search is amazing. Everything’s indexed and searchable. A bit easier and more robust thanks to the web portal and more advanced features with metadata but I never found search lacking in file shares. If you found search and discovery a problem with file shares, you’ll love SharePoint Online.</Typography>
                <Typography variant="h4" component="h2" gutterBottom>6. Remote Workforce</Typography>
                <blockquote>
                  <Typography variant="body1" gutterBottom>Mobile access to content on OneDrive for Business and SharePoint Online is key for our productivity. And it helps to have the option to share a link rather than attach documents in email. I also consider the security features in OneDrive for Business and SharePoint reassuringly comprehensive. — Shire Case Study</Typography>
                </blockquote>
                <Typography variant="body1" gutterBottom>The workforce is becoming more remote. People are working from home, their cars, and while sitting in their doctor’s waiting room. By design, file shares are a local-only resource. We’ve overcome this limitation with a VPN. The increase in maintenance and complexity of a VPN can add to your maintenance and costs but works well over high-speed internet. SharePoint Online can be accessed from anywhere, without the headaches. Users can sync their data to their local computers too. Lastly, SharePoint Online can be accessed from any device. Managers can review and sign off on the latest sales order from their phone while they don’t have internet access. Once they have access again, their approval will be automatically synced to SharePoint Online.</Typography>
                <Typography variant="h4" component="h2" gutterBottom>7. Teamwork Makes the Dream Work</Typography>
                <blockquote>
                  <Typography variant="body1" gutterBottom>With SharePoint, McMillan and his sales team have one place to send and share files and collaborate with version-control support. “When teams work together in SharePoint Online, everybody always has access to the latest information,” says McMillan. “We’re in a different universe now in terms of document control.”</Typography>
                </blockquote>
                <Typography variant="body1" gutterBottom>Two people can’t open the same document on a file share. It can’t be done. How many times have you had to track someone down or force a terminal session closed because someone left a file open? Luckily, it never happens in SharePoint Online. SharePoint Online has a feature called Co-Author which allows multiple people to edit the document at the same time.</Typography>
                <Typography variant="h4" component="h2" gutterBottom>8. Customer Engagement Through External Sharing</Typography>
                <blockquote>
                  <Typography variant="body1" gutterBottom>Previously, business units had their own shared drive and employees emailed documents back and forth, while the attendant redundancies and version control issues impeded progress. “We use Office 365 as an enterprise collaboration platform that connects business units, so for the first time, we can work together to purchase aircraft as a single team,” says Pizzey. “We’re reducing duplication of effort and getting things done more efficiently.”</Typography>
                </blockquote>
                <Typography variant="body1" gutterBottom><strong>Typically, if a file is kept on a share, there’s only one option for external sharing, email.</strong> What your users don’t tell you, if it doesn’t fit in an email, they use their personal OneDrive, DropBox, or Google Drive. It’s important to grant users access to tools they require to do their job in a secure way.</Typography>
                <Typography variant="body1" gutterBottom>SharePoint Online has secure file sharing. External users can collaborate in real-time with your team and be required to have a username and password. The best part? You don’t have to set up the account! Your users can create a document and share a link via email to key external users. Those users can then create an account (using the specified email address and link) and gain access to the documents.</Typography>
                <Typography variant="body1" gutterBottom>I can’t drive this point home enough, if you don’t provide the technology that your users need, they will bypass you and do what they want because their boss doesn’t care about your compliance and security concerns. Their boss cares about their employees getting their jobs done and if that means bypassing the internal IT then so be it. <strong>Empower and train your users to do things right and they will.</strong></Typography>
                <Typography variant="h4" component="h2" gutterBottom>9. Web Portal</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div>
                    <div>
                      <div>
                        <div />
                        <img style={{maxWidth: '100%', height: 'auto'}} alt="SharePoint Online screenshot with documents" width="351" height="611" role="presentation" src="https://miro.medium.com/max/351/1*6qMH63R0tNbpS-F7jRqOuA.png" sizes="351px" srcSet="https://miro.medium.com/max/276/1*6qMH63R0tNbpS-F7jRqOuA.png 276w, https://miro.medium.com/max/351/1*6qMH63R0tNbpS-F7jRqOuA.png 351w" />
                      </div>
                    </div>
                  </div>
                  <figcaption>SharePoint Online from a SmartPhone</figcaption>
                </figure>
                <Typography variant="body1" gutterBottom>Web portals empower users. Secret right-click menus are confusing to regular users. They have their own jobs to worry about, they don’t want to waste time trying to figure out the VPN and shared drive nonsense. Through the SharePoint Online web portal, you can search, open, share, etc. It’s easy. I won’t go into detail because I’m sure you’ve seen the web portal for some other cloud storage. SharePoint Online can be as simple as Google Drive but customized to meet your organization’s needs.</Typography>
                <Typography variant="h4" component="h2" gutterBottom>10. Workflows and Automation</Typography>
                <blockquote>
                  <Typography variant="body1" gutterBottom>Hershey created SharePoint Online teams to build workflows that save the company time and money. One team created two collaboration sites and a workflow to streamline audits, reducing internal audit time and trimming 1,250 hours out of the audit management process annually. Another team improved collaboration with one of the company’s leading suppliers of cocoa, Barry Callebaut, by giving the supplier access to a highly secure portal on The Conche. Hershey and Barry Callebaut employees use (SharePoint Online) to share files on joint projects and coauthor documents, saving the Barry Callebaut team at Hershey 70 hours a week.</Typography>
                </blockquote>
                <Typography variant="body1" gutterBottom>SharePoint Online has workflow and automation capabilities built-in. We can make workflows that pass documents around to get them signed, team input, or whatever else you may need. Want someone to review and approve a document before pushing it to the client? No problem with SharePoint Online!</Typography>
                <Typography variant="body1" gutterBottom><strong>Pro Tip:</strong> I have law firms set up special little areas for their customers. Then I have the paralegal create the document and put it in the client’s section. SharePoint automatically holds the document until the lawyer approves it. Then the document is showcased to the client.</Typography>
                <Typography variant="h4" component="h2" gutterBottom>Summary</Typography>
                <Typography variant="body1" gutterBottom>In conclusion, SharePoint Online is one of the most powerful and innovative products in the Office 365 suite but doesn’t get the recognition it deserves. If you’re a current Office 365 customer you already have access. Make a site and perform some testing. Jump to the <a href="https://support.office.com/en-us/sharepoint" rel="noopener">SharePoint Online Training Site</a> to learn more. If you’re a <a href="https://goo.gl/GPEvM2" rel="noopener">TierPoint </a>customer and would like more information, please don’t hesitate to contact me. We’ll schedule a time where we can help you get started or migrate your data. If you’re not a current customer, drop me an email on my personal account: john.gruber@gitbit.org. I‘ll do my best to help in any way I can.</Typography>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="body1" gutterBottom>Thank you for reading my article, I hope you found it beneficial. In the coming weeks I plan to create more guides to help you get started using SharePoint Online. Follow me to stay in touch.</Typography>
                      <Typography variant="body1" gutterBottom>— <a href="https://goo.gl/HALQd2" rel="noopener">John Gruber </a>— <a href="https://goo.gl/GPEvM2" rel="noopener">TierPoint Collaboration Engineer</a></Typography>
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
