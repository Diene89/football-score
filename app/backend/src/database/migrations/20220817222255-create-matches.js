'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('matches', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false, 
      },
      homeTeam: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id',
        },
        allowNull: false,
        field: 'home_team',
        onDelete: 'CASCADE',
      },
      homeTeamGoals: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'home_team_goals',
      },
      awayTeam: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id',
        },
        allowNull: false,
        field: 'away_team',
        onDelete: 'CASCADE',
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('matches')
  }
};
