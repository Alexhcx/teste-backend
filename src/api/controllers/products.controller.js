import db from "../../db/models/index.js";

const { Products } = db;

export const createProduct = async (req, res) => {
  const { name, idCateg } = req.body;

  const image = req.file ? `/images/products/${req.file.filename}` : null;

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

  try {
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    const { name, idCateg } = req.body;
    const updatedData = {};

    if (name) {
      updatedData.name = name;
    }
    if (idCateg) {
      updatedData.idCateg = parseInt(idCateg, 10);
    }
    if (req.file) {
      updatedData.image = `/images/products/${req.file.filename}`;
    }

    if (Object.keys(updatedData).length > 0) {
      await product.update(updatedData);
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Erro ao atualizar o produto:", error);
    res
      .status(500)
      .json({
        message: "Erro no servidor ao atualizar o produto.",
        error: error.message,
      });
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
