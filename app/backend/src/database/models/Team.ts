import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class Teams extends Model {
  id!: number;
  teamName: string;
}

Teams.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  modelName: 'teams',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

export default Teams;
