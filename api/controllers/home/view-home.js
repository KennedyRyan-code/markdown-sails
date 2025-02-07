module.exports = {
  friendlyName: 'Home',

  description: 'Home index.',

  inputs: {
    publicId: (
      {
        type: 'string',
        description: 'Public ID',
        required: false
      }
    )
  },

  exits: {
    success: {
      responseType: 'inertia'
    },
    notFound: {
      responseType: 'notFound'
    }
  },

  fn: async function ({ publicId }) {
    if (!publicId) {
      return {
        page: 'index',
        props: { message: 'Open a Markdown file to get started.' }
      }
    }
    const Markdown = await Markdown.findOne({ publicId });
    if (!Markdown) {
      throw 'notFound';
    }
    return {
      page: 'index',
      props: { markdown: Markdown }
    }
  }
}
