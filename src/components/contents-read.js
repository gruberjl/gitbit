import {h} from 'preact'
import {useState, useEffect} from 'preact/hooks'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Article from '@mui/icons-material/Article'
import CheckBox from '@mui/icons-material/CheckBox'
import Quiz from '@mui/icons-material/Quiz'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import {onAuthStateChanged} from './firebase/on-auth-state-changed'
import {getDoc} from './firebase/get-doc'
import course from '../data/course'
import contents from '../data/contents'

const isBrowser = () => typeof window !== 'undefined'

const Comp = ({children, comp}) => {
  if (comp === 'div')
    return <div>{children}</div>

  return <aside>{children}</aside>
}

const ContentsRead = ({completedContent, comp='aside'}) => {
  const [userAcct, setUserAcct] = useState({completedContent: completedContent || []})

  useEffect(() => {
    if (isBrowser()) {
      const onAuthStateChangedListener = onAuthStateChanged((user) => {
        if (user) {
          if (!completedContent) {
            getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
              if (!userAcct.completedContent)
                userAcct.completedContent = []

              setUserAcct(userAcct)
            })
          }
        }
      })

      return () => onAuthStateChangedListener()
    }
  }, [completedContent])

  return (
    <Comp comp={comp}>
      {course.sections.map((section, idx) => (
        <Accordion key={idx} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
            <Typography>{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              { contents.filter((content) => content.sectionId === section.id).map((content, contentIdx) => (
                <ListItem key={contentIdx} disablePadding>
                  <ListItemButton href={`/course/ms-500/${content.type === 'article' ? 'learn' : 'test'}/${content.slug}`}>
                    {
                      (completedContent || userAcct.completedContent).includes(content.id) ?
                        <ListItemIcon><CheckBox color="success" fontSize="large" /></ListItemIcon> :
                        <ListItemIcon>{
                          content.type === 'article' ?
                            <Article fontSize="large" /> :
                            <Quiz fontSize="large" />
                        }</ListItemIcon>
                    }
                    <Typography>{content.title}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Comp>
  )
}

export default ContentsRead
