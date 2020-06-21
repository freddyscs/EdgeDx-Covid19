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
import {SurveyCa} from '../models';
import {SurveyCaRepository} from '../repositories';

export class SurveyCaController {
  constructor(
    @repository(SurveyCaRepository)
    public surveyCaRepository : SurveyCaRepository,
  ) {}

  @post('/surveyca', {
    responses: {
      '200': {
        description: 'SurveyCa model instance',
        content: {'application/json': {schema: getModelSchemaRef(SurveyCa)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SurveyCa, {
            title: 'NewSurveyCa',
            exclude: ['id'],
          }),
        },
      },
    })
    surveyCa: Omit<SurveyCa, 'id'>,
  ): Promise<SurveyCa> {
    return this.surveyCaRepository.create(surveyCa);
  }

  @get('/surveyca/count', {
    responses: {
      '200': {
        description: 'SurveyCa model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(SurveyCa) where?: Where<SurveyCa>,
  ): Promise<Count> {
    return this.surveyCaRepository.count(where);
  }

  @get('/surveyca', {
    responses: {
      '200': {
        description: 'Array of SurveyCa model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(SurveyCa, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(SurveyCa) filter?: Filter<SurveyCa>,
  ): Promise<SurveyCa[]> {
    return this.surveyCaRepository.find(filter);
  }

  @patch('/surveyca', {
    responses: {
      '200': {
        description: 'SurveyCa PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SurveyCa, {partial: true}),
        },
      },
    })
    surveyCa: SurveyCa,
    @param.where(SurveyCa) where?: Where<SurveyCa>,
  ): Promise<Count> {
    return this.surveyCaRepository.updateAll(surveyCa, where);
  }

  @get('/surveyca/{id}', {
    responses: {
      '200': {
        description: 'SurveyCa model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SurveyCa, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SurveyCa, {exclude: 'where'}) filter?: FilterExcludingWhere<SurveyCa>
  ): Promise<SurveyCa> {
    return this.surveyCaRepository.findById(id, filter);
  }

  @patch('/surveyca/{id}', {
    responses: {
      '204': {
        description: 'SurveyCa PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SurveyCa, {partial: true}),
        },
      },
    })
    surveyCa: SurveyCa,
  ): Promise<void> {
    await this.surveyCaRepository.updateById(id, surveyCa);
  }

  @put('/surveyca/{id}', {
    responses: {
      '204': {
        description: 'SurveyCa PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() surveyCa: SurveyCa,
  ): Promise<void> {
    await this.surveyCaRepository.replaceById(id, surveyCa);
  }

  @del('/surveyca/{id}', {
    responses: {
      '204': {
        description: 'SurveyCa DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.surveyCaRepository.deleteById(id);
  }
}
