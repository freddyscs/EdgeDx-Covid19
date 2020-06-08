import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {RawdataUser} from '../models';
import {RawdataUserRepository} from '../repositories';
import { inject } from '@loopback/core';
import { PasswordHasherBindings, TokenServiceBindings, UserServiceBindings } from '../keys';
import { PasswordHasher } from '../services/hash.password.bcryptjs';
import { TokenService, authenticate } from '@loopback/authentication';
import {
  CredentialsRequestBody,
  UserProfileSchema,
} from './specs/user-controller.specs';
import {Credentials} from '../repositories/rawdata-user.repository';
import {
  UserService,
} from '@loopback/authentication';


export class RawdataUserController {
  constructor(
    @repository(RawdataUserRepository)
    public rawdataUserRepository : RawdataUserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: UserService<RawdataUser, Credentials>,
  ) {}

  @post('/users', {
    responses: {
      '200': {
        description: 'RawdataUser model instance',
        content: {'application/json': {schema: getModelSchemaRef(RawdataUser)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RawdataUser, {
            title: 'NewRawdataUser',
            exclude: ['id'],
          }),
        },
      },
    })
    rawdataUser: Omit<RawdataUser, 'id'>,
  ): Promise<RawdataUser> {
    //console.log(rawdataUser.password);
    //return this.rawdataUserRepository.create(rawdataUser);
    console.log(rawdataUser);
     // encrypt the password
     const password = await this.passwordHasher.hashPassword(
      rawdataUser.password,
     );


     console.log("nueva:" + password);
    
     rawdataUser.password = password;
     return this.rawdataUserRepository.create(rawdataUser);
   
 
  }


  @get('/users/count', {
    responses: {
      '200': {
        description: 'RawdataUser model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(RawdataUser) where?: Where<RawdataUser>,
  ): Promise<Count> {
    return this.rawdataUserRepository.count(where);
  }

  @get('/users', {
    responses: {
      '200': {
        description: 'Array of RawdataUser model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(RawdataUser, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async find(
    @param.filter(RawdataUser) filter?: Filter<RawdataUser>,
  ): Promise<RawdataUser[]> {
    return this.rawdataUserRepository.find(filter);
  }

  @patch('/users', {
    responses: {
      '200': {
        description: 'RawdataUser PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RawdataUser, {partial: true}),
        },
      },
    })
    rawdataUser: RawdataUser,
    @param.where(RawdataUser) where?: Where<RawdataUser>,
  ): Promise<Count> {
    return this.rawdataUserRepository.updateAll(rawdataUser, where);
  }

  @get('/users/{id}', {
    responses: {
      '200': {
        description: 'RawdataUser model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(RawdataUser, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RawdataUser, {exclude: 'where'}) filter?: FilterExcludingWhere<RawdataUser>
  ): Promise<RawdataUser> {
    return this.rawdataUserRepository.findById(id, filter);
  }

  @patch('/users/{id}', {
    responses: {
      '204': {
        description: 'RawdataUser PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RawdataUser, {partial: true}),
        },
      },
    })
    rawdataUser: RawdataUser,
  ): Promise<void> {
    await this.rawdataUserRepository.updateById(id, rawdataUser);
  }

  @put('/users/{id}', {
    responses: {
      '204': {
        description: 'RawdataUser PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() rawdataUser: RawdataUser,
  ): Promise<void> {
    await this.rawdataUserRepository.replaceById(id, rawdataUser);
  }

  @del('/users/{id}', {
    responses: {
      '204': {
        description: 'RawdataUser DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.rawdataUserRepository.deleteById(id);
  }

  
  @post('/users/login', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  })
  async login(
    @requestBody(CredentialsRequestBody) credentials: Credentials,
  ): Promise<{token: string}> {
    // ensure the user exists, and the password is correct
    const user = await this.userService.verifyCredentials(credentials);
    console.log("user" + user)

    // convert a User object into a UserProfile object (reduced set of properties)
    const userProfile = this.userService.convertToUserProfile(user);
    console.log("userProfile" + userProfile)

    // create a JSON Web Token based on the user profile
    const token = await this.jwtService.generateToken(userProfile);
    console.log("token:" + token)

    return {token};
  }

}
