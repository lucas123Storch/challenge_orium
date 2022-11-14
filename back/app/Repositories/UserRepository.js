/* eslint-disable camelcase */
'use strict';

const BaseRepository = use('./BaseRepository');
const { ioc } = require('@adonisjs/fold');
const Env = use('Env');
const shortid = require('shortid');

class UserRepository extends BaseRepository {
  constructor(model) {
    super(model);
    this.model = model;
  }

  async store({ request, response, auth }) {
    const { email, password, username } = request.all();
    const emailLower = email.toLowerCase();

    const existUser = await this.model.findBy('email', emailLower);

    if (existUser) {
      return response.status(403).json({
        msg: 'Falha ao cadastrar usuário, email já cadastrado!',
        email: emailLower,
      });
    }

    const newUser = await this.model.create({
      email: emailLower,
      password,
      username,
    });

    const accessToken = await auth.attempt(email.toLowerCase(), password);

    return response.status(201).json({
      msg: 'User created successfully.',
      access_token: accessToken.token,
      newUser,
    });
  }


  async _saveToken(user, token) {
    user.reset_token = token;

    await user.save();
  }
}

ioc.singleton(
  'UserRepository',
  (app) => new UserRepository(app.use('App/Models/User')),
);

module.exports = ioc.use('UserRepository');
