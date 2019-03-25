const React = require('react')
const {Link} = require('react-router-dom')

const Nav = () => (
  <nav className="pure-u-1-5">
    <ul className="pure-menu-list">
      <li className="pure-menu-item"><Link to="/edit-story" className="pure-menu-link">New Story</Link></li>
      <li className="pure-menu-item"><Link to="/stories" className="pure-menu-link">Stories</Link></li>
      <li className="pure-menu-item"><Link to="/settings" className="pure-menu-link">General</Link></li>
      <li className="pure-menu-item"><Link to="/edit-template" className="pure-menu-link">New Template</Link></li>
      <li className="pure-menu-item"><Link to="/templates" className="pure-menu-link">Templates</Link></li>
      <li className="pure-menu-item"><Link to="/edit-assets" className="pure-menu-link">Assets</Link></li>
      <li className="pure-menu-item"><Link to="/edit-user" className="pure-menu-link">User</Link></li>
    </ul>
  </nav>
)

module.exports = {Nav}
