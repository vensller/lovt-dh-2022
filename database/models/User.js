module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
      },
      upassword: {
        type: DataTypes.STRING,
      },
      uname: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      history: {
        type: DataTypes.VIRTUAL,
        get() {
          return `http://localhost:3000/users/${this.id}/login_history`;
        },
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  User.associate = function (models) {
    User.hasMany(models.LoginHistory, {
      as: "login_history",
      foreignKey: "user_id",
    });
  };

  return User;
};
