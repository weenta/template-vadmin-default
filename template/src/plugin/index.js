import Element from 'element-ui'

export default {
  error(msg) {
    let options = {
      type: 'error',
      message: msg || '错误',
      title: 'Error'
    }
    Element.Notification(options)
  },

  success(msg) {
    let options = {
      type: 'success',
      message: msg || '成功',
      title: 'Success'
    }
    Element.Notification(options)
  },

  warn(msg) {
    let options = {
      type: 'warning',
      message: msg || '警告',
      title: 'Warning'
    }
    Element.Notification(options)
  },
}