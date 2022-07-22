import {h} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const TestPage = () => {
  return (
    <Page title={'Ready to begin your exam?'} description={'Microsoft 365 MS-500 practice test prep page'}>
      <main>
        <div>
          <Container>
            <Grid container>
              <Grid item>
                <h1>MS-500 Test</h1>
                <h2>Skills measured</h2>
                <ul>
                  <li>Implement and manage identity and access (30-35%)</li>
                  <li>Implement and manage threat protection (20-25%)</li>
                  <li>Implement and manage information protection (15-20%)</li>
                  <li>Manage governance and compliance features in Microsoft 365 (25-30%)</li>
                </ul>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </Page>
  )
}

export default TestPage
