import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Team';

import { Response } from 'superagent';
import { ITeam } from '../interfaces/ITeam';

chai.use(chaiHttp);

const { expect } = chai;

const MockTeam: ITeam[] = [{
  id: 5,
  teamName: 'trybol',
}]

const MockToken: string = '123456'

describe('Teams', () => {
  beforeEach(() => {
    sinon.stub(Team, 'findAll').resolves(MockTeam as unknown as Team[])});

  afterEach(() => sinon.restore())

  it('should return status 200', async () => {

    const response = await chai.request(app)
      .get('/teams')
      .send(MockTeam)
    expect(response.status).to.be.equal(200);
  });

  it('should return team id and name', async () => {

    const response = await chai.request(app)
      .get('/teams/5')
    expect(response.body).to.deep.equal(MockTeam);
  });
});
