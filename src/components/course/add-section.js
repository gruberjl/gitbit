import {h} from 'preact'
import Grid from '@mui/material/Grid'
import Add from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

const AddSection = ({addSection, hidden, idx}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Divider>
          <Button className="inline-flex-align-center link" onClick={addSection}>
            <Add /> Add Section
          </Button>
        </Divider>
      </Grid>
    </Grid>
  )
}

export default AddSection
