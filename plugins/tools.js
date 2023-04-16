export default ({ $config }, inject) => {
  inject('tools', {
    image: (imageUUID) => {
      return imageUUID ? `${$config.apiURL}/assets/${imageUUID}` : ''
    },
  })
}
