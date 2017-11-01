import { Component, Children } from 'react'
import { func, node } from 'prop-types'

import flexStyleGenerator from '../lib/dynamicStylesheet/flex'
import spaceStyleGenerator from '../lib/dynamicStylesheet/space'
import textStyleGenerator from '../lib/dynamicStylesheet/text'

class PeppyProvider extends Component {
  static propTypes = {
    children: node
  }

  static childContextTypes = {
    flexStyleGenerator: func,
    spaceStyleGenerator: func,
    textStyleGenerator: func
  }

  getChildContext = () => ({
    flexStyleGenerator,
    spaceStyleGenerator,
    textStyleGenerator
  })

  render = () => Children.only(this.props.children)
}

export default PeppyProvider
