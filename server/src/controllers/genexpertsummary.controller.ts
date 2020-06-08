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
import {Genexpertsummary} from '../models';
import {GenexpertsummaryRepository} from '../repositories';

export class GenexpertsummaryController {
  constructor(
    @repository(GenexpertsummaryRepository)
    public genexpertsummaryRepository : GenexpertsummaryRepository,
  ) {}

  @post('/genexpertsummaries', {
    responses: {
      '200': {
        description: 'Genexpertsummary model instance',
        content: {'application/json': {schema: getModelSchemaRef(Genexpertsummary)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genexpertsummary, {
            title: 'NewGenexpertsummary',
            exclude: ['id'],
          }),
        },
      },
    })
    genexpertsummary: Omit<Genexpertsummary, 'id'>,
  ): Promise<Genexpertsummary> {
    return this.genexpertsummaryRepository.create(genexpertsummary);
  }

  @get('/genexpertsummaries/count', {
    responses: {
      '200': {
        description: 'Genexpertsummary model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Genexpertsummary) where?: Where<Genexpertsummary>,
  ): Promise<Count> {
    return this.genexpertsummaryRepository.count(where);
  }

  @get('/genexpertsummaries', {
    responses: {
      '200': {
        description: 'Array of Genexpertsummary model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Genexpertsummary, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Genexpertsummary) filter?: Filter<Genexpertsummary>,
  ): Promise<Genexpertsummary[]> {
    return this.genexpertsummaryRepository.find(filter);
  }

  @patch('/genexpertsummaries', {
    responses: {
      '200': {
        description: 'Genexpertsummary PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genexpertsummary, {partial: true}),
        },
      },
    })
    genexpertsummary: Genexpertsummary,
    @param.where(Genexpertsummary) where?: Where<Genexpertsummary>,
  ): Promise<Count> {
    return this.genexpertsummaryRepository.updateAll(genexpertsummary, where);
  }

  @get('/genexpertsummaries/{id}', {
    responses: {
      '200': {
        description: 'Genexpertsummary model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Genexpertsummary, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Genexpertsummary, {exclude: 'where'}) filter?: FilterExcludingWhere<Genexpertsummary>
  ): Promise<Genexpertsummary> {
    return this.genexpertsummaryRepository.findById(id, filter);
  }

  @patch('/genexpertsummaries/{id}', {
    responses: {
      '204': {
        description: 'Genexpertsummary PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genexpertsummary, {partial: true}),
        },
      },
    })
    genexpertsummary: Genexpertsummary,
  ): Promise<void> {
    await this.genexpertsummaryRepository.updateById(id, genexpertsummary);
  }

  @put('/genexpertsummaries/{id}', {
    responses: {
      '204': {
        description: 'Genexpertsummary PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() genexpertsummary: Genexpertsummary,
  ): Promise<void> {
    await this.genexpertsummaryRepository.replaceById(id, genexpertsummary);
  }

  @del('/genexpertsummaries/{id}', {
    responses: {
      '204': {
        description: 'Genexpertsummary DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.genexpertsummaryRepository.deleteById(id);
  }
}
