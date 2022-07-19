import { h, Component } from "preact"
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

 
class BlogArticle extends Component {
  render() {
    const title = "Interview with Simon Chan on the Future of Microsoft To-Do"
    const jsonLd = {
      headline: title,
      datePublished: '2-5-2018',
      keywords: [
        "Microsoft",
        "Microsoft To-Do",
        "Microsoft 365",
        "Office 365",
        "Productivity"
      ],
      "author": {
        "@type": "Person",
        "name": "John Gruber",
        url: 'https://medium.com/@gruberjl'
      }
    }

    return (
      <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={'https://miro.medium.com/max/1400/1*t2GmJE7phLo75UsqCeiurw.jpeg'} canonical={'https://medium.com/gitbit/interview-with-simon-chan-on-the-future-of-microsoft-to-do-aee3a460610'} title={title} description={"Meet Simon Chan. After developing Wunderlist’s client base to 20 mil, he joined Microsoft as Senior Product Manager of To-Do. Find out about the eventual fate of To-Do and how Simon intends to proceed"}>
        <main>
          <div>
            <Container className="blog-article">
              <Grid container>
                <Grid item>
                  <Typography variant="h3" component="h1" sx={{mt:4, mb:4}}>Interview with Simon Chan on the Future of Microsoft To-Do</Typography>
                  <figure style={{margin: 0, textAlign: 'center'}}>
                   <div><img style={{maxWidth: '100%', height: 'auto'}} alt="Interview with Simon Chan on the Future of Microsoft To-Do" src="https://miro.medium.com/max/1400/1*t2GmJE7phLo75UsqCeiurw.jpeg" width="1400" height="350" role="presentation"/></div>
                  </figure>
                  <Typography variant="body1" gutterBottom>Microsoft recently announced it will replace Wunderlist with a newly released app to the Office 365 suite, . <strong>Wunderlist is the reigning champion of productivity and to-do apps on virtually all platforms. Its growth exploded to over 20 million users with a loyal set of followers.</strong> The fate of Microsoft To-Do will be tremendous. Being a Microsoft fan, I needed to give it a shot. To-Do is magnificent! The simplicity of the app and the ‘My Day’ view clears clutter and helps me stay focused.</Typography>
                  <Typography variant="body1" gutterBottom>Although I was excited about the app design, I wasn’t ready to ride into the sunset. I couldn’t share tasks with others nor could I integrate it into my 30 other Office 365 apps! Optimistically, I started reaching out to find answers to my questions and, to my surprise, Microsoft’s Senior Product Manager of To-Do, Simon Chan, answered the call!</Typography>
                  <blockquote>
                   <Typography variant="body1" gutterBottom>“From [Wunderlist] to Microsoft, I still wake up every day with something on my to-do list about making to-do lists simpler, better, and more helpful.” — Simon Chan</Typography>
                  </blockquote>
                  <Typography variant="body1" gutterBottom><strong>After growing Wunderlist’s user base from 3 to 20+ million customers worldwide</strong>, Simon joined Microsoft as a part of the Wunderlist acquisition in 2015. He quickly became the Senior Product Manager of Microsoft To-Do, where his role is to lead UX and product strategy for Microsoft To-Do. Microsoft hopes to continue his proven track record of success with To-Do.</Typography>
                  <blockquote>
                   <Typography variant="body1" gutterBottom>“If you can write it in a list, it’s been created by someone. The key is simplicity. There’s a lot of tools for task management, but our biggest competitor is paper. It’s beautifully simple: elegant, tactile, and convenient. When we built Microsoft To-Do, we wanted to recreate that feeling.” — Simon Chan’s interview with The Guardian</Typography>
                  </blockquote>
                  <Typography variant="h4" component="h2" gutterBottom>The Interview</Typography>
                  <Typography variant="h5" component="h3" gutterBottom>Question: Typically, I keep up with Office 365 through the Roadmap. Will To-Do be on the Office 365 Roadmap in the future? What’s the best place to find news about upcoming changes on Microsoft To-Do?</Typography>
                  <Typography variant="body1" gutterBottom>“Yes. To-Do will begin showing up on the Office 365 Roadmap in the not-too-distant future. To also stay in touch with what’s coming up for To-Do, join us on the <a href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.google.de%2Furl%3Fsa%3Dt%26rct%3Dj%26q%3D%26esrc%3Ds%26source%3Dweb%26cd%3D1%26cad%3Drja%26uact%3D8%26ved%3D0ahUKEwiepvXClYXZAhUKEVAKHc9LBIYQFggmMAA%26url%3Dhttps%253A%252F%252Ftechcommunity.microsoft.com%252Ft5%252FMicrosoft-To-Do%252Fct-p%252FMicrosoftTo-Do%26usg%3DAOvVaw3CIao0Gf8wUx1ReXODKYrG&amp;data=02%7C01%7Csimon.chan%40microsoft.com%7C55b4ea195fa94ee9587608d569ab08cf%7Cee3303d7fb734b0c8589bcd847f1c277%7C1%7C0%7C636531105679760951&amp;sdata=NBzmfz1tUcunX4z8OCuHQ2QjflQVgXxyiXUDOZ6M690%3D&amp;reserved=0" rel="noopener">Microsoft Tech Community</a>.”</Typography>
                  <Typography variant="h5" component="h3" gutterBottom>Question: Outlook Tasks have always been a bit lacking and hasn’t been upgraded to fit into Microsoft’s productivity and collaboration suite well. To-Do is a much better option. Is Microsoft To-Do going to replace Outlook Tasks?</Typography>
                  <Typography variant="body1" gutterBottom>“You might be surprised to learn this, but there’s actually a sizable active customer base of Outlook Tasks! But <strong>almost every customer we talk to tends to agree that Outlook Tasks is in need of some attention. </strong><strong>Long term, we are looking to simplify and unify the tasks experience customers have across the Microsoft ecosystem which includes improving Outlook Tasks.</strong> We don’t have an exact schedule of when you’ll be seeing a new Outlook Tasks experience, but it’s something that we’re working towards.”</Typography>
                  <Typography variant="h5" component="h3" gutterBottom>Question: What are you most excited about on the To-Do Roadmap?</Typography>
                  <Typography variant="body1" gutterBottom>“Microsoft Teams, Outlook Mail, and Calendar integration. As a Product Manager, so much of the collaboration I do within the To-Do team and partner teams across Microsoft involves a lot of delegation as well as requests for work and needing to find time to follow up. <strong>Being able to easily turn those messages and emails into tasks that I can manage at a later point, either within those apps or in To-Do, would take a massive cognitive load off my shoulders.</strong> Add that with To-Do’s My Day feature and Suggestions, and it’ll make life so much easier not just for me of course, but all our customers too.”</Typography>
                  <Typography variant="h5" component="h3" gutterBottom>Question: Wunderlist has been the top app for a long time in a field with a ton of competitors. What are the top factors in its success and how will you continue that success with Microsoft To-Do?</Typography>
                  <Typography variant="body1" gutterBottom>“For lack of a better phrase, it’s a process of developing ‘<strong>simple mechanics</strong>’. At first glance, Wunderlist appears to be a very basic task management app. We designed To-Do so it’s features tend to only show up as the customer needs them. That also means that we didn’t build every feature we possibly could. Rather, we focus on offering an intentionally limited set of experiences that are simple in nature so as many people as possible can easily understand the product and use it. But we also make sure they are flexible enough to cater to customers who want more control in how they organize their tasks. <strong>The key here is that it’s the customer who adds the complexity only when they need it and not the other way around.</strong> Continuing that product philosophy is what will make Microsoft To-Do just as easy and fun to use.”</Typography>
                  <Typography variant="h5" component="h3" gutterBottom>Question: How do you expect the future of planners and task management apps to change in the next couple of years? Is artificial intelligence going to be a factor?</Typography>
                  <Typography variant="body1" gutterBottom>“Our industry loves throwing around AI and machine learning as buzzwords, but it’s for a very good reason. We’re only scratching the surface of its potential to help people achieve more. In respect to task management so much of what we do today is cognitively taxing on the user. Right now, I need to proactively create a task. Then I either need to remember to schedule it or put it on a list, etc. Then, of course, I need to actually make sure I follow up and complete it. <strong>In the next few years, I see AI and ML transforming task management by enabling experiences that will proactively help you capture your tasks, schedule them, or reduce the steps you need to take to complete them.</strong> There are so many ways to improve what we have now. It’s an incredibly exciting time to be working in this space!”</Typography>
                  <Typography variant="h5" component="h3" gutterBottom>Question: The To-Do app really has unlimited potential to bring value to everyone. Do you have an intentional ‘customer persona’ for the future of the product? Do you see it being used on a personal, SMB, and enterprise level? Are you focused on a niche?</Typography>
                  <Typography variant="body1" gutterBottom>“Unfortunately, I can’t go into a lot of detail on this as it’s confidential, but the general answer is that yes, we do use personas when building features and planning out a vision. We use multiple personas that represent different target markets. <strong>The product management challenge is to shape features that cater to most, if not all, of those customers without causing a detrimental effect on other customers</strong> and the overall product’s unique selling point and UX.”</Typography>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="body1" gutterBottom>I would like to thank Simon Chan for taking the time to answer my questions about Microsoft To-Do. I’m excited about the future of To-Do and I look forward to the release of the upcoming features!</Typography>
                      </div>
                   </div>
                  </section>
                  <div role="separator"><span></span><span></span><span></span></div>
                  <section>
                   <div>
                      <div>
                         <Typography variant="body1" gutterBottom><strong>Thank you for taking the time to read my article. I hope you found it beneficial.</strong></Typography>
                         <ul>
                            <li>Follow me for more great content</li>
                            <li><a href="https://businesscenter.office.com/b/gitbit/signup" rel="noopener">Sign up for my weekly newsletter</a></li>
                         </ul>
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
}

export default BlogArticle
