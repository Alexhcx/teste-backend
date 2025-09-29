'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Products', [
    {
      name: 'Smartphone Pro Max',
      image: '/images/products/smartphone.jpg',
      idCateg: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Fone de Ouvido Bluetooth',
      image: '/images/products/fone-bluetooth.jpg',
      idCateg: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Camiseta Básica de Algodão',
      image: '/images/products/camiseta.jpg',
      idCateg: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Calça Jeans Slim',
      image: '/images/products/calca-jeans.jpg',
      idCateg: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'O Senhor dos Anéis: A Sociedade do Anel',
      image: '/images/products/senhor-dos-aneis.jpg',
      idCateg: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Torto Arado',
      image: '/images/products/torto-arado.jpg',
      idCateg: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Jogo de Panelas Antiaderente',
      image: '/images/products/panelas.jpg',
      idCateg: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Cafeteira Elétrica Programável',
      image: '/images/products/cafeteira.jpg',
      idCateg: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Products', null, {});
}