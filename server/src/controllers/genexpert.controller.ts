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
import {Genexpert} from '../models';
import {GenexpertRepository} from '../repositories';

export class GenexpertController {
  constructor(
    @repository(GenexpertRepository)
    public genexpertRepository : GenexpertRepository,
  ) {}

  @post('/genexperts', {
    responses: {
      '200': {
        description: 'Genexpert model instance',
        content: {'application/json': {schema: getModelSchemaRef(Genexpert)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genexpert, {
            title: 'NewGenexpert',
            
          }),
        },
      },
    })
    genexpert: Genexpert,
  ): Promise<Genexpert> {
    return this.genexpertRepository.create(genexpert);
  }

  @get('/genexperts/count', {
    responses: {
      '200': {
        description: 'Genexpert model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Genexpert) where?: Where<Genexpert>,
  ): Promise<Count> {
    return this.genexpertRepository.count(where);
  }

  @get('/genexperts', {
    responses: {
      '200': {
        description: 'Array of Genexpert model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Genexpert, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Genexpert) filter?: Filter<Genexpert>,
  ): Promise<Genexpert[]> {
    return this.genexpertRepository.find(filter);
  }

  @patch('/genexperts', {
    responses: {
      '200': {
        description: 'Genexpert PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genexpert, {partial: true}),
        },
      },
    })
    genexpert: Genexpert,
    @param.where(Genexpert) where?: Where<Genexpert>,
  ): Promise<Count> {
    return this.genexpertRepository.updateAll(genexpert, where);
  }

  @get('/genexperts/{id}', {
    responses: {
      '200': {
        description: 'Genexpert model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Genexpert, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Genexpert, {exclude: 'where'}) filter?: FilterExcludingWhere<Genexpert>
  ): Promise<Genexpert> {
    return this.genexpertRepository.findById(id, filter);
  }

  @patch('/genexperts/{id}', {
    responses: {
      '204': {
        description: 'Genexpert PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genexpert, {partial: true}),
        },
      },
    })
    genexpert: Genexpert,
  ): Promise<void> {
    await this.genexpertRepository.updateById(id, genexpert);
  }

  @put('/genexperts/{id}', {
    responses: {
      '204': {
        description: 'Genexpert PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() genexpert: Genexpert,
  ): Promise<void> {
    await this.genexpertRepository.replaceById(id, genexpert);
  }

  @del('/genexperts/{id}', {
    responses: {
      '204': {
        description: 'Genexpert DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.genexpertRepository.deleteById(id);
  }
}
