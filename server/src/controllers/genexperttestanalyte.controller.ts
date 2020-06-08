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
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Genexperttestanalyte} from '../models';
import {GenexperttestanalyteRepository} from '../repositories';

export class GenexperttestanalyteController {
  constructor(
    @repository(GenexperttestanalyteRepository)
    public genexperttestanalyteRepository : GenexperttestanalyteRepository,
  ) {}

  @post('/genexperttestanalytes', {
    responses: {
      '200': {
        description: 'Genexperttestanalyte model instance',
        content: {'application/json': {schema: getModelSchemaRef(Genexperttestanalyte)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genexperttestanalyte, {
            title: 'NewGenexperttestanalyte',
            
          }),
        },
      },
    })
    genexperttestanalyte: Genexperttestanalyte,
  ): Promise<Genexperttestanalyte> {
    return this.genexperttestanalyteRepository.create(genexperttestanalyte);
  }

  @get('/genexperttestanalytes/count', {
    responses: {
      '200': {
        description: 'Genexperttestanalyte model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Genexperttestanalyte) where?: Where<Genexperttestanalyte>,
  ): Promise<Count> {
    return this.genexperttestanalyteRepository.count(where);
  }

  @get('/genexperttestanalytes', {
    responses: {
      '200': {
        description: 'Array of Genexperttestanalyte model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Genexperttestanalyte, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Genexperttestanalyte) filter?: Filter<Genexperttestanalyte>,
  ): Promise<Genexperttestanalyte[]> {
    return this.genexperttestanalyteRepository.find(filter);
  }

  @patch('/genexperttestanalytes', {
    responses: {
      '200': {
        description: 'Genexperttestanalyte PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genexperttestanalyte, {partial: true}),
        },
      },
    })
    genexperttestanalyte: Genexperttestanalyte,
    @param.where(Genexperttestanalyte) where?: Where<Genexperttestanalyte>,
  ): Promise<Count> {
    return this.genexperttestanalyteRepository.updateAll(genexperttestanalyte, where);
  }

  @get('/genexperttestanalytes/{id}', {
    responses: {
      '200': {
        description: 'Genexperttestanalyte model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Genexperttestanalyte, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Genexperttestanalyte, {exclude: 'where'}) filter?: FilterExcludingWhere<Genexperttestanalyte>
  ): Promise<Genexperttestanalyte> {
    return this.genexperttestanalyteRepository.findById(id, filter);
  }

  @patch('/genexperttestanalytes/{id}', {
    responses: {
      '204': {
        description: 'Genexperttestanalyte PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genexperttestanalyte, {partial: true}),
        },
      },
    })
    genexperttestanalyte: Genexperttestanalyte,
  ): Promise<void> {
    await this.genexperttestanalyteRepository.updateById(id, genexperttestanalyte);
  }

  @put('/genexperttestanalytes/{id}', {
    responses: {
      '204': {
        description: 'Genexperttestanalyte PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() genexperttestanalyte: Genexperttestanalyte,
  ): Promise<void> {
    await this.genexperttestanalyteRepository.replaceById(id, genexperttestanalyte);
  }

  @del('/genexperttestanalytes/{id}', {
    responses: {
      '204': {
        description: 'Genexperttestanalyte DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.genexperttestanalyteRepository.deleteById(id);
  }
}
