import {h} from 'preact'
import {useState, useEffect} from 'preact/hooks'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import {onAuthStateChanged} from '../components/firebase/on-auth-state-changed'
import getAllDocs from '../components/firebase/get-all-docs'
import deleteDoc from '../components/firebase/delete-doc'

const isBrowser = () => typeof window !== 'undefined'

const MyTests = () => {
  const [uid, setUid] = useState('')
  const [tests, setTests] = useState([])

  useEffect(() => {
    if (isBrowser()) {
      const onAuthStateChangedListener = onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid)
          getAllDocs(`users/${user.uid}/tests`).then(setTests)
        } else
          window.location.href = '/login'
      })

      return () => onAuthStateChangedListener()
    }
  }, [])

  const deleteTest = (event) => {
    const id = event.target.dataset.id
    deleteDoc(`users/${uid}/tests`, id).then(() => {
      const newTests = tests.filter((test) => {
        return test.id !== id
      })

      setTests(newTests)
    }).catch((error) => {
      console.error('Error removing document: ', error)
    })
  }

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course</TableCell>
            <TableCell>Number of Questions</TableCell>
            <TableCell>Is Complete</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tests.map((doc, idx) => (
            <TableRow key={idx}>
              <TableCell><Button variant="text" href={`/course/ms-500/test/?testid=${doc.id}`}>MS-500</Button></TableCell>
              <TableCell>{Object.keys(doc.questions).length}</TableCell>
              <TableCell>{doc.isComplete ? 'Complete' : 'Incomplete'}</TableCell>
              <TableCell><Button onClick={deleteTest} data-id={doc.id}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MyTests
