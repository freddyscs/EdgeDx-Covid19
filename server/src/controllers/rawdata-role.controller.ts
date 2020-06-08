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
import {RawdataRole} from '../models';
import {RawdataRoleRepository} from '../repositories';

export class RawdataRoleController {
  constructor(
    @repository(RawdataRoleRepository)
    public rawdataRoleRepository : RawdataRoleRepository,
  ) {}

  @post('/roles', {
    responses: {
      '200': {
        description: 'RawdataRole model instance',
        content: {'application/json': {schema: getModelSchemaRef(RawdataRole)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RawdataRole, {
            title: 'NewRawdataRole',
            exclude: ['id'],
          }),
        },
      },
    })
    rawdataRole: Omit<RawdataRole, 'id'>,
  ): Promise<RawdataRole> {
    return this.rawdataRoleRepository.create(rawdataRole);
  }

  @get('/roles/count', {
    responses: {
      '200': {
        description: 'RawdataRole model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(RawdataRole) where?: Where<RawdataRole>,
  ): Promise<Count> {
    return this.rawdataRoleRepository.count(where);
  }

  @get('/roles', {
    responses: {
      '200': {
        description: 'Array of RawdataRole model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(RawdataRole, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(RawdataRole) filter?: Filter<RawdataRole>,
  ): Promise<RawdataRole[]> {
    return this.rawdataRoleRepository.find(filter);
  }

  @patch('/roles', {
    responses: {
      '200': {
        description: 'RawdataRole PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RawdataRole, {partial: true}),
        },
      },
    })
    rawdataRole: RawdataRole,
    @param.where(RawdataRole) where?: Where<RawdataRole>,
  ): Promise<Count> {
    return this.rawdataRoleRepository.updateAll(rawdataRole, where);
  }

  @get('/roles/{id}', {
    responses: {
      '200': {
        description: 'RawdataRole model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(RawdataRole, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RawdataRole, {exclude: 'where'}) filter?: FilterExcludingWhere<RawdataRole>
  ): Promise<RawdataRole> {
    return this.rawdataRoleRepository.findById(id, filter);
  }

  @patch('/roles/{id}', {
    responses: {
      '204': {
        description: 'RawdataRole PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RawdataRole, {partial: true}),
        },
      },
    })
    rawdataRole: RawdataRole,
  ): Promise<void> {
    await this.rawdataRoleRepository.updateById(id, rawdataRole);
  }

  @put('/roles/{id}', {
    responses: {
      '204': {
        description: 'RawdataRole PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() rawdataRole: RawdataRole,
  ): Promise<void> {
    await this.rawdataRoleRepository.replaceById(id, rawdataRole);
  }

  @del('/roles/{id}', {
    responses: {
      '204': {
        description: 'RawdataRole DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.rawdataRoleRepository.deleteById(id);
  }
}
