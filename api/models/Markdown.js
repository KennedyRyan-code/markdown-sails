/**
 * Markdown.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'markdowns',

  attributes: {
    title: {
      type: 'string',
      defaultsTo: 'Untitled',
      maxLength: 255,
      example: 'My first Markdown file'
    },
    content: {
      type: 'ref',
      defaultsTo: '# New Markdown File...',
    },
    shareId: {
      type: 'string',
      allowNull: true,
      columnName: 'share_id'
    },

    owner: {
      model: 'user',
      required: true
    }

  },

};

