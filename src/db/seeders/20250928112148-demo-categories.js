'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Categories', [
    {
      id: 1,
      name: 'Eletrônicos',
      image: '/images/categories/eletronicos.jpg', 
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Roupas e Acessórios',
      image: '/images/categories/roupas.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'Livros',
      image: '/images/categories/livros.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      name: 'Casa e Cozinha',
      image: '/images/categories/casa-cozinha.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Categories', null, {});
}