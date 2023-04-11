import axios from 'axios'

export default ({ $config, store, error }, inject) => {
  inject('calls', {
    // API
    items: async (args) => {
      const filter = JSON.stringify(args.filter)
      const fields = args.fields || '*'
      const limit = args.limit || '-1'
      const sort = args?.sort
      const page = args.page || ''
      const meta = args.meta

      const config = {
        method: 'GET',
        url: `${$config.apiURL}/items/${args.collection}/?fields=${fields}${
          filter ? `&filter=${filter}` : ''
        }&limit=${limit}${page ? `&page=${page}` : ''}${
          meta ? `&meta=${meta}` : ''
        }${sort ? `&sort=${sort}` : ''}`,
        headers: {
          Authorization: `Bearer ${$config.apiToken}`,
        },
      }

      const data = await axios(config)
        .then(function (response) {
          return response.data
        })
        .catch(function (error) {
          // TODO: Create Errors Handle
          // eslint-disable-next-line no-console
          console.log(error)
        })

      return data
    },

    create: async (args) => {
      const fields = args.fields

      const config = {
        method: 'POST',
        url: `${$config.apiURL}/items/${args.collection}`,
        data: JSON.stringify(fields),
        headers: {
          Authorization: `Bearer ${$config.apiToken}`,
          'Content-Type': 'application/json'
        },
      }

      const data = await axios(config)
        .then(function (response) {
          return response.data
        })
        .catch(function (error) {
          // TODO: Create Errors Handle
          // eslint-disable-next-line no-console
          console.log(error)
        })

      return data
    },

    update: async (args) => {
      const fields = args.fields
      const id = args.id

      const config = {
        method: 'PATCH',
        url: `${$config.apiURL}/items/${args.collection}/${id}`,
        data: JSON.stringify(fields),
        headers: {
          Authorization: `Bearer ${$config.apiToken}`,
          'Content-Type': 'application/json'
        },
      }

      const data = await axios(config)
        .then(function (response) {
          return response.data
        })
        .catch(function (error) {
          // TODO: Create Errors Handle
          // eslint-disable-next-line no-console
          console.log(error)
        })

      return data
    },
  })
}
