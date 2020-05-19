var Sequelize = require("sequelize");
var db = require('../db/index')
//-- Page Model
class Page extends Sequelize.Model {}
Page.init(
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    urlTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM("open", "closed"),
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    router: {
    type: Sequelize.VIRTUAL,
    get(){
    return `/wiki/${this.getDataValue('urlTitle')}`
        }
    }
  },
  { sequelize:db, modelName: "page" }
);

module.exports = Page