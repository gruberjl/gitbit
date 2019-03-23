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
      <div className="pure-g">
        <Nav />
        <main className="pure-u-4-5">
          <h1>Assets</h1>
          <form className="pure-form pure-form-stacked">
            <input onChange={this.setFile.bind(this)} type="file" className="pure-input-1" />
            <input onChange={this.setName.bind(this)} type="text" placeholder="Enter the desired name of file" className="pure-input-1" />
            <button onClick={this.submit.bind(this)} type="button" className="pure-input-1">Upload</button>
          </form>
        </main>
      </div>
    )
  }
}

module.exports = {Assets}
