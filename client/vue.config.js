// vue.config.js
module.exports = {
    publicPath: ProcessingInstruction.env.NODE_ENV === 'production'
        ? '/portfolio/'
        : '/'
  }