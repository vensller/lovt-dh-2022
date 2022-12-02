module.exports = (sequelize, DataTypes) => {
  const LoginHistory = sequelize.define(
    "LoginHistory",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      login_date: {
        type: DataTypes.DATE,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "login_history",
      timestamps: false,
    }
  );

  return LoginHistory;
};
