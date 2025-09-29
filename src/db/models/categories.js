"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      this.hasMany(models.Products, {
        foreignKey: "idCateg",
        as: "products",
      });
    }
  }
  Categories.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Categories",
    }
  );
  return Categories;
};
