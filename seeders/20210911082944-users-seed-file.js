'use strict'
const bcrypt = require('bcryptjs')
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      id: 5,
      email: 'root@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      role: 'admin',
      name: 'root',
      avatar: `https://loremflickr.com/240/240/?lock=${Math.random() * 100}`,
      introduction: faker.lorem.text().substring(0, 160),
      account: 'root',
      cover: `https://loremflickr.com/720/240/?lock=${Math.random() * 100}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      email: 'user1@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      role: 'user',
      name: 'user1',
      avatar: `https://loremflickr.com/240/240/?lock=${Math.random() * 100}`,
      introduction: faker.lorem.text().substring(0, 160),
      account: 'user1',
      cover: `https://loremflickr.com/720/240/?lock=${Math.random() * 100}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 25,
      email: 'user2@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      role: 'user',
      name: 'user2',
      avatar: `https://loremflickr.com/240/240/?lock=${Math.random() * 100}`,
      introduction: faker.lorem.text().substring(0, 160),
      account: 'user2',
      cover: `https://loremflickr.com/720/240/?lock=${Math.random() * 100}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 35,
      email: 'user3@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      role: 'user',
      name: 'user3',
      avatar: `https://loremflickr.com/240/240/?lock=${Math.random() * 100}`,
      introduction: faker.lorem.text().substring(0, 160),
      account: 'user3',
      cover: `https://loremflickr.com/720/240/?lock=${Math.random() * 100}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 45,
      email: 'user4@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      role: 'user',
      name: 'user4',
      avatar: `https://loremflickr.com/240/240/?lock=${Math.random() * 100}`,
      introduction: faker.lorem.text().substring(0, 160),
      account: 'user4',
      cover: `https://loremflickr.com/720/240/?lock=${Math.random() * 100}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 55,
      email: 'user5@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      role: 'user',
      name: 'user5',
      avatar: `https://loremflickr.com/240/240/?lock=${Math.random() * 100}`,
      introduction: faker.lorem.text().substring(0, 160),
      account: 'user5',
      cover: `https://loremflickr.com/720/240/?lock=${Math.random() * 100}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}