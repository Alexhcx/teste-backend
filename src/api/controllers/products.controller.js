import db from "../../db/models/index.js";

const { Products } = db;

export const createProduct = async (req, res) => {
  const { name, image, idCateg } = req.body;
  try {
    const newProduct = await Products.create({ name, image, idCateg });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar o produto", error });
  }
};

export const getAllProducts = async (req, res) => {
  const { idCateg } = req.query;
  try {
    const where = idCateg ? { idCateg } : {};
    const products = await Products.findAll({ where });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar os produtos", error });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar o produto", error });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, image, idCateg } = req.body;
  try {
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    await product.update({ name, image, idCateg });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar o produto", error });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    await product.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar o produto", error });
  }
};
