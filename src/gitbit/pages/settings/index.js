const React = require('react')
const clone = require('clone-deep')
const {toast} = require('react-toastify')
const {Nav} = require('../../components/nav')
const {getTenant} = require('./lib/get-tenant')
const {save} = require('./lib/save')

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tenant: {
        title: '',
        description: '',
        image: '',
        favicon: ''
      }
    }
  }

  componentDidMount() {
    getTenant().then(tenant => this.setState({tenant}))
  }

  setValue(event) {
    const {name, value} = event.target
    this.setState((prevState) => {
      const tenant = clone(prevState.tenant)
      tenant[name] = value
      return {tenant}
    })
  }

  save() {
    save(this.state.tenant).then((savedDoc) => {
      toast('saved')
      this.setState({tenant: savedDoc})
    })
      .catch(err => toast.error(err.toString()))
  }

  render() {
    const {
      title, description, image, favicon
    } = this.state.tenant

    return (
      <div className="page">
        <Nav />
        <main>
          <h1>Settings</h1>
          <div>
            <input type="text" name="title" placeholder="title" value={title} onChange={this.setValue.bind(this)} />
          </div>
          <div>
            <input type="text" name="description" placeholder="description" value={description} onChange={this.setValue.bind(this)} />
          </div>
          <div>
            <input type="text" name="image" placeholder="image" value={image} onChange={this.setValue.bind(this)} />
          </div>
          <div>
            <input type="text" name="favicon" placeholder="favicon" value={favicon} onChange={this.setValue.bind(this)} />
          </div>
          <div>
            <button onClick={this.save.bind(this)} type="button">Save</button>
          </div>
        </main>
      </div>
    )
  }
}

module.exports = {Settings}
