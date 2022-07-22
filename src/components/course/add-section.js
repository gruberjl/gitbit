import {h} from 'preact'
import Grid from '@mui/material/Grid'
import Add from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

const AddSection = ({addSection, hidden, allowDrop, onDrop, idx}) => {
  return (
    <Grid container onDrop={onDrop} onDragOver={allowDrop} data-section-idx={idx}>
      <Grid item data-section-idx={idx} xs={12}>
        <Divider data-section-idx={idx}>
          <Button className="inline-flex-align-center link" onClick={addSection} data-section-idx={idx}>
            <Add data-section-idx={idx} /> Add Section
          </Button>
        </Divider>
      </Grid>
    </Grid>
  )
}

export default AddSection
