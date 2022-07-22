import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = '8 Reasons Startups Choose Office 365'
  const jsonLd = {
    headline: title,
    datePublished: '10-22-2018',
    keywords: [
      'Microsoft',
      'startup',
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
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/700/1*5WDkCFfsNRXviWiQReDefw.jpeg'} canonical={'https://medium.com/gitbit/8-reasons-startups-chose-office-365-366823158f94'} title={title} description={'Before I get started I’d like to note: This isn’t a G-Suite vs Office 365 or anything else vs Office 365. This is a breakdown of the best parts of Office 365. There’s a lot of great options for…'}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
                <Typography variant="h3" component="h1" sx={{mt: 4, mb: 4}}>8 Reasons Startups Choose Office 365</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Desktop with Windows 10 start menu open" src="https://miro.medium.com/max/700/1*5WDkCFfsNRXviWiQReDefw.jpeg" width="700" height="394" role="presentation" /></div>
                  </div>
                  <figcaption>source: <a href="https://www.pexels.com/@jay-kunwar-55532" rel="noopener">Jay Kunwar</a></figcaption>
                </figure>
                <Typography variant="body1" gutterBottom>Before I get started I’d like to note: This isn’t a G-Suite vs Office 365 or anything else vs Office 365. This is a breakdown of the best parts of Office 365. There’s a lot of great options for startups and it’s up to founders to be informed an pick the best one for their organization.</Typography>
                <Typography variant="h4" component="h2" gutterBottom>1. Hyper-Growth</Typography>
                <Typography variant="body1" gutterBottom>Startups have scalability issues beyond our wildest imaginations. You need a platform that offers a low-cost today but can scale to 100 employees in a day. If you're not planning for unparalleled growth and ready for it at any time you’re doomed to fail.</Typography>
                <div>
                  <div>
                    <div>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div><img style={{maxWidth: '100%', height: 'auto'}} alt="How AirBNB started" src="https://miro.medium.com/max/1000/0*9M81K3fDYLanjOQ1" width="1000" height="780" role="presentation" /></div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <Typography variant="body1" gutterBottom>Look at Airbnb, they were a struggling startup going door to door taking pictures, being rejected by venture capitalists, to being a $10 billion dollar business practically overnight. That’s what being a startup is all about.</Typography>
                    <Typography variant="body1" gutterBottom>Microsoft’s Office 365 is designed for small and big business. With a per-user monthly fee the prices start low allowing you to grow your business without worrying about your storage, email, and collaboration tools growing with you. You can easily add and remove hundreds of users at anytime.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>2. Employee Experience that Attracts Star Talent</Typography>
                    <Typography variant="body1" gutterBottom>Does anyone join a startup and plan to work 9–5? Does anyone want to be at the office until midnight or drive to the office on a Saturday? Who doesn’t want to work in their pajamas?</Typography>
                    <Typography variant="body1" gutterBottom>The journey people take with your organization and the interactions they have with colleagues and the tools you provide are crucial to attracting and keeping the best employees in the world. Startups need tools that deliver the best employee experience.</Typography>
                    <blockquote>
                      <Typography variant="body1" gutterBottom>It’s paramount that startups strategically and thoughtfully manage every step of the employee experience.</Typography>
                    </blockquote>
                    <Typography variant="body1" gutterBottom>Engaging top talent and prospective star employees starts with leadership and ends at the tools they use every day. From the iconic Office suite to Microsoft Teams (Slack competitor), Office 365 is designed to deliver the best employee experience.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>3. Focus on the Core</Typography>
                    <blockquote>
                      <Typography variant="body1" gutterBottom>“Customer service shouldn’t be a department; it should be the entire company.” — Tony Hsieh, CEO of Zappos</Typography>
                    </blockquote>
                    <Typography variant="body1" gutterBottom>It’s crucial for startups to find the one thing that brings value to their customers and focus on it. Make the best solution, continue to fight every day to add value and take care of customers. Leadership cannot waste time with vendors and must keep the day-to-day overhead as low as possible.</Typography>
                    <Typography variant="body1" gutterBottom>Before we go any further let’s list out all the products bundled into Office 365.</Typography>
                    <table style={{margin: '0 auto'}}>
                      <thead>
                        <tr>
                          <th>Office 365 Product</th>
                          <th>Category</th>
                          <th>Competitors</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Microsoft Teams</td>
                          <td>Collaboration</td>
                          <td>Slack, Ryver</td>
                        </tr>
                        <tr>
                          <td>Exchange Online</td>
                          <td>Email</td>
                          <td>G-Suite, In-house solution</td>
                        </tr>
                        <tr>
                          <td>OneDrive</td>
                          <td>File Storage</td>
                          <td>Dropbox, Box, Google Drive</td>
                        </tr>
                        <tr>
                          <td>Office Suite</td>
                          <td>Productivity</td>
                          <td>LibreOffice, Google Docs</td>
                        </tr>
                        <tr>
                          <td>SharePoint Online</td>
                          <td>CMS</td>
                          <td>Jive, Confluence</td>
                        </tr>
                        <tr>
                          <td>Microsoft Flow</td>
                          <td>Automation</td>
                          <td>IFTTT, Zapier</td>
                        </tr>
                        <tr>
                          <td>ToDo</td>
                          <td>Task Management</td>
                          <td>Todoist, Wunderlist</td>
                        </tr>
                        <tr>
                          <td>Outlook Customer Manager</td>
                          <td>CRM</td>
                          <td>Salesforce, HubSpot</td>
                        </tr>
                        <tr>
                          <td>Planner</td>
                          <td>Project Management</td>
                          <td>Trello, Asana</td>
                        </tr>
                        <tr>
                          <td>PowerBI</td>
                          <td>Business Analytics</td>
                          <td>Tableau</td>
                        </tr>
                        <tr>
                          <td>Bookings</td>
                          <td>Appointment Scheduling</td>
                          <td>Acuity, 10to8</td>
                        </tr>
                        <tr>
                          <td>Microsoft Forms</td>
                          <td>Online Surveys &amp; Signups</td>
                          <td>Google Forms, SurveyMonkey</td>
                        </tr>
                        <tr>
                          <td>Microsoft Invoicing</td>
                          <td>Billing &amp; Invoicing</td>
                          <td>Zoho Invoice, TimeSolv</td>
                        </tr>
                        <tr>
                          <td>Office Lens</td>
                          <td>Mobile Scanning</td>
                          <td>Adobe Scan</td>
                        </tr>
                        <tr>
                          <td>PowerApps</td>
                          <td>Customer Business Apps</td>
                          <td>Google App Maker</td>
                        </tr>
                        <tr>
                          <td>StaffHub</td>
                          <td>Staff Management</td>
                          <td>Deputy</td>
                        </tr>
                      </tbody>
                    </table>
                    <Typography variant="body1" gutterBottom>How long will it take to pick each piece of software? How many sales meetings will you need to schedule? How many hours will you spend researching, signing up for free trials and testing each product?</Typography>
                    <blockquote>
                      <Typography variant="body1" gutterBottom>As leaders (at Airbnb) looked at the future organization, they found that too many of their current employees were involved in setting up partnerships. As they were growing their brand, they were being approached by a multitude of companies in every market where they had a presence… This inflow of interest resulted in their setting up too many small partnerships in too many locations. — <a href="https://www.inc.com/alison-eyring/airbnbs-founders-knew-they-were-growing-too-fast-heres-how-they-saved-their-cult.html" rel="noopener">Inc.</a></Typography>
                    </blockquote>
                    <Typography variant="body1" gutterBottom>Each application and service you add to your business will take ongoing time too. How will you integrate the products? How will you add each new user to each vendors software? Who’s going to maintain each product?</Typography>
                    <Typography variant="body1" gutterBottom>The nightmare of having too many vendors doesn’t stop there. Each new employee will need to be trained on each piece of software. Every product will need to be watched for changes and you’ll need to update your documentation.</Typography>
                    <Typography variant="body1" gutterBottom>With Office 365 everything is bundled into one price. Every employee receives the software they need. All the software is integrated and has the same Fabric based UI to make the learning curve simple and easy. When a new employee is hired you add one license and they receive everything. When an employee is terminated remove the license and disable one account.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>4. Hackable</Typography>
                    <Typography variant="body1" gutterBottom>Being able to customize the products your employees use almost seems counter-intuitive to the previous point “Focus on the Core”. Customizing your tools can actually save time.</Typography>
                    <Typography variant="body1" gutterBottom>When you have a dozen social media accounts to manage it’s hard to keep track. Instead of opening a dozen browsers every morning, pull the data into Microsoft Teams.</Typography>
                    <Typography variant="body1" gutterBottom>Sales finding the process to approve quotes time-consuming? Automate it with SharePoint’s approval workflows.</Typography>
                    <Typography variant="body1" gutterBottom>Need to manage a dozen mailboxes (marketing@yourcompany.com, support@yourcompany.com, etc.)? Add permissions in the admin portal and have the mailboxes automatically connect to Outlook.</Typography>
                    <Typography variant="body1" gutterBottom>Need a custom app that your team can use to add prospective customer information during a trade-show? Whip up the app using PowerApps and have the data automatically sync to Outlook Customer Manager.</Typography>
                    <blockquote>
                      <Typography variant="body1" gutterBottom>There’s a reason 80% of Fortune 500 companies use Office 365.</Typography>
                    </blockquote>
                    <Typography variant="body1" gutterBottom>It’s mathematics. When you’re performing the same 1-hour repetitive task every week that’s 52 hours a year. Multiple that by 50 employees and you have to hire a new (and overworked) employee to cover the time. Sometimes spending 40 hours customizing a solution makes sense.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>5. Office Suite</Typography>
                    <Typography variant="body1" gutterBottom>Number 5 and we’re FINALLY getting to one of the products. Honestly, I thought this would be a list of apps and why they’re awesome but I never really know where I’ll go with these articles.</Typography>
                    <Typography variant="body1" gutterBottom>There’s no comparing Microsoft Office to any other solution. With Dictate you can <strong>write a document in Word by speaking</strong>. Using PowerPoint’s Design Ideas you can create a presentation that will <strong>blow your customers out of the water with a couple of clicks</strong>. Outlook is basically where everyone lives. Email, tasks, calendar, and contacts that all integrate into CRM, Teams, WebEx and everything else. Excel’s formulas and charts make data fast and easy.</Typography>
                    <Typography variant="body1" gutterBottom>Last but not least, most people already know Microsoft Office. They used it at school; They used it at their last job. There’s virtually no training.</Typography>
                    <Typography variant="body1" gutterBottom>I can go on and on about the value of the Office suite (and I literally do):</Typography>
                    <ul>
                      <li />
                      <li><a href="https://writingcooperative.com/10-writing-tips-for-microsoft-word-60ed6e645515" rel="noopener follow">10 Writing Tips for Microsoft Word</a></li>
                      <li />
                    </ul>
                    <Typography variant="body1" gutterBottom>The Office suite improves productivity out of the box but the more you learn and hack, the more value you gain.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>6. Collaborate with Teams</Typography>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <figure style={{margin: 0, textAlign: 'center'}}>
                        <div role="button" tabIndex="0">
                          <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Microsoft Teams screenshot" src="https://miro.medium.com/max/1000/1*T3KaU7zCj1nYDYNPMT0MfQ.png" width="1000" height="533" role="presentation" /></div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <Typography variant="body1" gutterBottom>Microsoft Teams is the fastest growing app in Microsoft’s history. Let me say that again. Microsoft, who dominates the industry, who is in virtually every business, is seeing its fastest adoption of a new application with Microsoft Teams.</Typography>
                    <Typography variant="body1" gutterBottom>If you don’t know, Microsoft Teams is a Slack competitor that’s directly integrated into Office 365. Group chat with one-to-many messaging to collaborate with coworkers and external users. Keep projects, departments, and everyone up-to-date and organized all in one place. Private Messaging for one-to-one communication to collaborate with coworkers or external users. Collaborate using text, voice, or video. Quickly share documents, images, and more. Every team has their own customizable workspace with Tabs, Connectors and Bots. With over 150 integrations, file uploads, and chat every team can build a custom space for their team.</Typography>
                    <Typography variant="body1" gutterBottom>Microsoft Teams is becoming the center of people’s workday. Create a team and watch the team share documents, communicate, integrate their project management, to-do lists, and more directly into Teams. Fast and easy to setup improving productivity and the on-boarding process.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>7. Safe &amp; Secure File Storage with OneDrive</Typography>
                    <Typography variant="body1" gutterBottom>The world is changing. Data is growing at a rapid pace. By 2020 the world will have accumulated 44 zettabytes or 44,000,000,000,000 GB of data. The rapid expansion of data has become a challenge for people and organizations alike.</Typography>
                    <Typography variant="body1" gutterBottom>Meanwhile, the amount of smart devices per person is growing significantly. By 2020 each person will own an average of 7 connected devices. Work computers, home laptops, smartphones, and tablets. The data we use must be accessible any time, anywhere, and on every device. The challenges of data accessibility don’t stop there. The data has to be available on Microsoft, Apple, and Android devices.</Typography>
                    <Typography variant="body1" gutterBottom>Startups are ahead of the curve. The traditional methods of data storage on personal devices and servers will fall short. Lost and stolen devices, server outages, and the inability to access data while on the road have all caused a loss of productivity, missed deadlines, and decrease the customer experience.</Typography>
                    <Typography variant="body1" gutterBottom>Employees expect fast, easy access to their files from the device of their choice. The sales team can review the quote in their car before the big meeting. Teams working and updating spreadsheets at the same time. Leadership accessing and reviewing orders without a hassle.</Typography>
                    <Typography variant="body1" gutterBottom>OneDrive for Business stores your files in the secure Microsoft cloud. Every employee has their own personal OneDrive where they can store, manage, and share documents at any time.</Typography>
                    <Typography variant="body1" gutterBottom>With the OneDrive apps for Windows, Mac, Android, and iPhone you can access and sync your data so you’re never waiting for the document to download or wasting time with VPNs.</Typography>
                    <blockquote>
                      <Typography variant="body1" gutterBottom><em>“Only solution that enables you to edit and co-author Office documents across browser, mobile, and desktop apps.”</em></Typography>
                    </blockquote>
                    <Typography variant="body1" gutterBottom>The simple sharing feature empowers people to share a document while maintaining it in Microsoft’s cloud. You won’t have to worry about emailing copies and keeping track of the revisions.</Typography>
                    <Typography variant="h4" component="h2" gutterBottom>8. Set It and Forget It Email</Typography>
                    <Typography variant="body1" gutterBottom>Finally, we’ve come to the core of Office 365, email. Every business has it. Every professional has it. We all know it. Love it or hate it, you need it.</Typography>
                    <blockquote>
                      <Typography variant="body1" gutterBottom>Exchange Online is winning.</Typography>
                    </blockquote>
                    <Typography variant="body1" gutterBottom>I’m not going to go into a lot of detail but Exchange Online can do everything I can think of for your email needs. Huge mailboxes, automatic setup of smartphones, tablets, and Outlook, 0 maintenance make it completely hassle-free. Secure, compliant, reliable, and flexible, Exchange Online is one thing you’ll never worry about and always love.</Typography>
                    <Typography variant="body1" gutterBottom>To read more see <a href="https://hackernoon.com/19-reasons-exchange-online-is-winning-195f2188150d" rel="noopener">19 Reasons Exchange Online is Winning</a>.</Typography>
                  </div>
                </div>
                <div role="separator"><span /><span /><span /></div>
                <section>
                  <div>
                    <div>
                      <Typography variant="body1" gutterBottom>And that’s just the tip of the iceberg. Check out the <a href="https://microsoft-us.evyy.net/c/1313195/190407/3327" rel="noopener">most popular Office 365 plans for startups</a>. If you have any questions don’t hesitate to reach out below or find me on <a href="https://twitter.com/gruberjl" rel="noopener">Twitter @gruberjl</a> and <a href="https://www.linkedin.com/in/gruberjl/" rel="noopener">LinkedIn</a>.</Typography>
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
