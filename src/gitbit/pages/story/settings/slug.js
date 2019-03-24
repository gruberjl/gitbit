const React = require('react')

const Slug = ({slug, onChange}) => (
  <div>
    <h4>Story Link</h4>
    <div>
      <input type="text" name="slug" placeholder="url" value={slug} onChange={onChange} className="pure-input-1" />
    </div>
  </div>
)

module.exports = {Slug}
