const React = require('react')
const clone = require('clone-deep')
const {fetch} = require('whatwg-fetch')
const {toast} = require('react-toastify')
const {Prompt} = require('react-router-dom')
const {Nav} = require('../../components/nav')
const {save} = require('./lib/save')
const {updatePassword} = require('./lib/update-password')

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: ''
      },
      newPassword: '',
      hasChanged: false
    }
    this.onUnload = this.onUnload.bind(this)
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onUnload)
    const self = this
    fetch('/api/users/find-me')
      .then(res => res.json())
      .then((res) => {
        self.setState({user: res.doc})
      })
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onUnload)
  }

  onUnload() {
    if (this.state.hasChanged) {
      const confirmationMessage = 'Quit without saving?'
      window.event.returnValue = confirmationMessage
      return confirmationMessage
    }

    return undefined
  }

  setValue(event) {
    const {name, value} = event.target
    this.setState((prevState) => {
      const user = clone(prevState.user)
      user[name] = value
      return {user, hasChanged: true}
    })
  }

  setPassword(event) {
    this.setState({newPassword: event.target.value})
  }

  save() {
    save(this.state.user).then((savedDoc) => {
      toast('saved')
      this.setState({user: savedDoc.doc, hasChanged: false})
    })
      .catch(err => toast.error(err.toString()))
  }

  updatePassword() {
    updatePassword(this.state.newPassword).then(() => {
      toast('Password updated')
    })
      .catch(err => toast.error(err.toString()))
  }

  render() {
    const {email} = this.state.user

    return (
      <div className="pure-g">
        <Prompt when={this.state.hasChanged} message="Quit without saving?" />
        <Nav />
        <main className="pure-u-4-5">
          <h1>Settings</h1>
          <form className="pure-form pure-form-stacked">
            <label htmlFor="email">email</label>
            <input className="pure-input-1" type="email" id="email" name="email" placeholder="email" value={email} onChange={this.setValue.bind(this)} />
            <button onClick={this.save.bind(this)} type="button">Save</button>
          </form>
          <hr />
          <h1>Change Password</h1>
          <form className="pure-form pure-form-stacked">
            <label htmlFor="new-password">password</label>
            <input className="pure-input-1" type="password" id="new-password" name="new-password" placeholder="password" value={this.state.newPassword} onChange={this.setPassword.bind(this)} />
            <button onClick={this.updatePassword.bind(this)} type="button">Update Password</button>
          </form>
        </main>
      </div>
    )
  }
}

module.exports = {User}
