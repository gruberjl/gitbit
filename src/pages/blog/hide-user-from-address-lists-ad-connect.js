import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const BlogArticle = () => {
  const title = 'Hide User from Address Lists (AD Connect)'
  const jsonLd = {
    headline: title,
    datePublished: '11-2-2018',
    keywords: [
      'Microsoft',
      'Active Directory',
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
    <Page jsonLdType={'BlogPosting'} jsonLd={jsonLd} image={''} canonical={'https://medium.com/gitbit/hide-user-from-address-lists-ad-connect-ee67f2369bc1'} title={title} description={'How to hide a user from the address book in Office 365 when using AD Connect'}>
      <main>
        <div>
          <Container className="blog-article">
            <Grid container>
              <Grid item>
                <Typography variant="h3" component="h1" sx={{mt: 4, mb: 4}}>Hide User from Address Lists (AD Connect)</Typography>
                <Typography variant="body1" gutterBottom>When using Office 365 and AD Connect you may not be able to mark a mailbox <strong>Hide from address lists</strong> using the Office 365 portal if you are syncing users from your on-premise Active Directory.</Typography>
                <Typography variant="body1" gutterBottom>When a user is being synchronized from your on-premise Active Directory and you attempt to hide the user from the address book using the Microsoft Office 365 portal you’ll receive the following error:</Typography>
                <blockquote>
                  <Typography variant="body1" gutterBottom>The operation on mailbox failed because it’s out of the current users’s write scope. The action ‘Set-Mailbox’, ‘HiddenFromAddressListsEnabled’, can’t be performed on the object because the object is being synchronized from your on-premises organization. This action should be performed on the object in your on-premises organization.</Typography>
                </blockquote>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="Error hiding mailbox from Microsoft 365" width="700" height="614" role="presentation" src="https://miro.medium.com/max/700/1*nSGfArEq7cmtEwXqn0Pavg.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*nSGfArEq7cmtEwXqn0Pavg.png 276w, https://miro.medium.com/max/552/1*nSGfArEq7cmtEwXqn0Pavg.png 552w, https://miro.medium.com/max/640/1*nSGfArEq7cmtEwXqn0Pavg.png 640w, https://miro.medium.com/max/700/1*nSGfArEq7cmtEwXqn0Pavg.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
                <Typography variant="body1" gutterBottom>This error will always happen because Office 365 knows that user is being synced from your Active Directory so if you make any changes to the user in Office 365 the change will be overwritten the next time Active Directory syncs.</Typography>
                <Typography variant="h4" component="h2" gutterBottom>How to Hide a Mailbox from the Address Lists using the Office 365 Portal</Typography>
                <Typography variant="body1" gutterBottom><em>If you create a user or shared mailbox using the Office 365 portal the user isn’t synchronized from your Active Directory follow the following steps:</em></Typography>
                <ol>
                  <li>Log in to the <a href="https://outlook.office365.com/ecp" rel="noopener">Exchange Admin Center</a> using your Office 365 global admin credentials.</li>
                  <li>Navigate to <strong>recipients &gt; mailboxes</strong> (or shared if it’s a shared mailbox)</li>
                </ol>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="Exchange Admin center mailboxes" width="700" height="190" role="presentation" src="https://miro.medium.com/max/700/1*hrka8gHVYSbAc-RruAczdw.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*hrka8gHVYSbAc-RruAczdw.png 276w, https://miro.medium.com/max/552/1*hrka8gHVYSbAc-RruAczdw.png 552w, https://miro.medium.com/max/640/1*hrka8gHVYSbAc-RruAczdw.png 640w, https://miro.medium.com/max/700/1*hrka8gHVYSbAc-RruAczdw.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
                <Typography variant="body1" gutterBottom>3. Find and double-click the user you want to hide.</Typography>
                <Typography variant="body1" gutterBottom>4. Check the <strong>Hide from address lists</strong> checkbox. Click <strong>Save</strong>.</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div role="button" tabIndex="0">
                    <div>
                      <div>
                        <div>
                          <div />
                          <img style={{maxWidth: '100%', height: 'auto'}} alt="Exchange Online hide from address lists checkbox" width="700" height="614" role="presentation" src="https://miro.medium.com/max/700/1*VVwU5iB6ABRBWZj4tHbUQQ.png" sizes="700px" srcSet="https://miro.medium.com/max/276/1*VVwU5iB6ABRBWZj4tHbUQQ.png 276w, https://miro.medium.com/max/552/1*VVwU5iB6ABRBWZj4tHbUQQ.png 552w, https://miro.medium.com/max/640/1*VVwU5iB6ABRBWZj4tHbUQQ.png 640w, https://miro.medium.com/max/700/1*VVwU5iB6ABRBWZj4tHbUQQ.png 700w" />
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
                <Typography variant="body1" gutterBottom>If you receive <strong>The operation on mailbox failed because it’s out of the current user’s write scope</strong> error follow the steps below to make the change in Active Directory.</Typography>
                <Typography variant="body1" gutterBottom><em>The address books are downloaded to the Outlook client once every 24 hours so the user will still be visible in the address book for 1 day.</em></Typography>
                <Typography variant="h4" component="h2" gutterBottom>How to Hide a User from the Address Lists using Active Directory (AD Connect)</Typography>
                <ol>
                  <li>Open Active Directory Users &amp; Computers.</li>
                  <li>Enable Advanced Features by clicking <strong>View &gt; Advanced Features</strong>.<br /><em>When Advanced Features is turned on you’ll see a checkbox as the image below</em></li>
                </ol>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div>
                    <div>
                      <div>
                        <div />
                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Active Directory users and computers advanced features" width="459" height="260" role="presentation" src="https://miro.medium.com/max/459/1*0UUHKe2o2sDBu3y3Mh5Irg.png" sizes="459px" srcSet="https://miro.medium.com/max/276/1*0UUHKe2o2sDBu3y3Mh5Irg.png 276w, https://miro.medium.com/max/459/1*0UUHKe2o2sDBu3y3Mh5Irg.png 459w" />
                      </div>
                    </div>
                  </div>
                </figure>
                <Typography variant="body1" gutterBottom>3. Find and open the properties for the user you want to hide. Click the <strong>Attribute Editor</strong> tab.</Typography>
                <Typography variant="body1" gutterBottom>4. Find and double-click the <strong>msExchHideFromAddressLists </strong>attribute to change its value.</Typography>
                <Typography variant="body1" gutterBottom>5. Set the value to <strong>True </strong>and save your changes.</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div>
                    <div>
                      <div>
                        <div />
                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Active Directory Users and computers hide user from address lists" width="424" height="563" role="presentation" src="https://miro.medium.com/max/424/1*gH_nb_4mos3xXYdHNb8UfQ.png" sizes="424px" srcSet="https://miro.medium.com/max/276/1*gH_nb_4mos3xXYdHNb8UfQ.png 276w, https://miro.medium.com/max/424/1*gH_nb_4mos3xXYdHNb8UfQ.png 424w" />
                      </div>
                    </div>
                  </div>
                </figure>
                <Typography variant="body1" gutterBottom>6. Next, you’ll need to set the mailNickname field. It should be set to the first part of the primary email address. For example, my email is john.gruber@gitbit.org so the mailNickname should be set to john.gruber.</Typography>
                <figure style={{margin: 0, textAlign: 'center'}}>
                  <div>
                    <div>
                      <div>
                        <div />
                        <img style={{maxWidth: '100%', height: 'auto'}} alt="Active Directory Users & Computers mailNickname" width="262" height="36" role="presentation" src="https://miro.medium.com/max/262/1*H3mGyMet9IekLq1xCEXDgg.png" sizes="262px" srcSet="" />
                      </div>
                    </div>
                  </div>
                </figure>
                <Typography variant="body1" gutterBottom><em>The change will be visible in the Office 365 portal after the next AD Connect job runs which may take up to an hour. The address books are downloaded to the Outlook client once every 24 hours so the user will still be visible in the address book for 1 day.</em></Typography>
                <Typography variant="body1" gutterBottom>If you can’t find the attribute you may have a filter enabled. Click the Filter button and verify you’re showing all properties.</Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </Page>
  )
}

export default BlogArticle
