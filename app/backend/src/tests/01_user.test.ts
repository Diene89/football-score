import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';
import { ILogin, IUser } from '../interfaces/IUser';
import { IToken } from '../interfaces/IToken';
import createToken from '../middlewares/createToken';
import PasswordService from '../services/bcrypt';

chai.use(chaiHttp);

const { expect } = chai;

const MockUser: IUser = {
  id: 1,
  username: 'Laura',
  role: 'admin',
  email: 'laura@trybe.com',
  password: '123456',
}

const MockLogin: ILogin = {
  email: 'laura@trybe.com',
  password: '123456',
}

const MockToken: string = '123456'

describe('Login', () => {
  beforeEach(() => {
      sinon.stub(User, 'findOne').resolves(MockUser as User),
      sinon.stub(PasswordService, 'encryptedPassword').resolves(true),
      sinon.stub(createToken, 'jwt').resolves(MockToken)
  });
    
  afterEach(() => sinon.restore())
    
    it('should return status 200', async () => {

      const response = await chai.request(app)
      .post('/login')
      .send(MockLogin)
      expect(response.status).to.be.equal(200);
    });
    
    it('should return token', async () => {
     
      const response = await chai.request(app)
        .post('/login')
        .send(MockLogin)
      expect(response.body).to.deep.equal({token: MockToken})
    });
});
