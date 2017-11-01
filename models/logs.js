'use strict';
module.exports = (sequelize, DataTypes) => {
  var Logs = sequelize.define(
    'Logs',
    {
      datecreated: DataTypes.DATE,
      message: DataTypes.STRING
    },
    { timestamps: false }
  );
  return Logs;
};
