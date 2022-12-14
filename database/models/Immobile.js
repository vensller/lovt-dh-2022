module.exports = (sequelize, DataTypes) => {
  const Immobile = sequelize.define(
    "Immobile",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      istatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "immobile",
      timestamps: false,
    }
  );

  Immobile.associate = (models) => {
    Immobile.belongsTo(models.Category, {
      as: "category",
      foreignKey: "category_id",
    });
  };

  return Immobile;
};
