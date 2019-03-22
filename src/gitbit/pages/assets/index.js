const React = require('react')
const {fetch} = require('whatwg-fetch')
const {toast} = require('react-toastify')
const {Nav} = require('../../components/nav')


class Assets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filename: '',
      file: {}
    }
  }

  setFile(event) {
    this.setState({file: event.target.files[0]})
  }

  setName(event) {
    this.setState({filename: event.target.value})
  }

  submit() {
    const data = new FormData()
    data.append('filename', this.state.filename)
    data.append('file', this.state.file)

    fetch('/api/assets/create', {method: 'POST', body: data})
      .then(response => response.json())
      .then(() => {
        toast('saved')
      })
      .catch(err => toast.error(err.toString()))
  }

  render() {
    return (
      <div className="page">
        <Nav />
        <main>
          <h1>Assets</h1>
          <div>
            <input onChange={this.setFile.bind(this)} type="file" />
          </div>
          <div>
            <input onChange={this.setName.bind(this)} type="text" placeholder="Enter the desired name of file" />
          </div>
          <br />
          <div>
            <button onClick={this.submit.bind(this)} type="button">Upload</button>
          </div>
        </main>
      </div>
    )
  }
}

module.exports = {Assets}
