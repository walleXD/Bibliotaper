const { resolve } = require('path')

module.exports = {
  resolve: {
    extensions: [ '.web.js', '.js' ],
    alias: {
      'react-native': 'react-native-web',
      'react/lib/ReactNativePropRegistry': 'react-native-web/dist/modules/ReactNativePropRegistry',
      'components': resolve(__dirname, '../', 'src', 'renderer', 'components')
    }
  }
}
