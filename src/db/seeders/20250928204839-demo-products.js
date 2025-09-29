'use strict';
import { v4 as uuidv4 } from "uuid";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Products', [
    {
      id: uuidv4(),
      name: 'Camiseta Básica de Algodão',
      image: '/images/products/image-1759185331748-621265836.jpg',
      idCateg: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Apple iPhone 17 Pro Max (1 TB) - Azul intenso',
      image: '/images/products/image-1759185670953-879286343.jpg',
      idCateg: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Jogo de Panelas Tramontina Turim',
      image: '/images/products/image-1759185776675-347331423.jpg',
      idCateg: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Fones de ouvido Monster Open Ear Ac600',
      image: '/images/products/image-1759185896234-579587242.jpg',
      idCateg: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Torto Arado',
      image: '/images/products/image-1759185972072-782174351.jpg',
      idCateg: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'O Senhor dos Anéis: A Sociedade do Anel',
      image: '/images/products/image-1759186059023-209601332.jpg',
      idCateg: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Cafeteira Nescafé Dolce Gusto Arno Mini Me Preta',
      image: '/images/products/image-1759186153611-855363745.jpg',
      idCateg: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Calças Jeans Masculina Modelo Slim',
      image: '/images/products/image-1759186235274-549117969.jpg',
      idCateg: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Products', null, {});
}