module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Cname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "category",
      timestamps: false,
    }
  );

  Category.associate = (models) => {
    Category.hasMany(models.Immobile, {
      as: "Immobile",
      foreignKey: "category_id",
    });
  };

  return Category;
};
