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
import {ResultNotification} from '../models';
import {ResultNotificationRepository} from '../repositories';

export class ResultNotificationController {
  constructor(
    @repository(ResultNotificationRepository)
    public resultNotificationRepository : ResultNotificationRepository,
  ) {}

  @post('/result-notifications', {
    responses: {
      '200': {
        description: 'ResultNotification model instance',
        content: {'application/json': {schema: getModelSchemaRef(ResultNotification)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultNotification, {
            title: 'NewResultNotification',
            exclude: ['id'],
          }),
        },
      },
    })
    resultNotification: Omit<ResultNotification, 'id'>,
  ): Promise<ResultNotification> {
    return this.resultNotificationRepository.create(resultNotification);
  }

  @get('/result-notifications/count', {
    responses: {
      '200': {
        description: 'ResultNotification model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ResultNotification) where?: Where<ResultNotification>,
  ): Promise<Count> {
    return this.resultNotificationRepository.count(where);
  }

  @get('/result-notifications', {
    responses: {
      '200': {
        description: 'Array of ResultNotification model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ResultNotification, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ResultNotification) filter?: Filter<ResultNotification>,
  ): Promise<ResultNotification[]> {
    return this.resultNotificationRepository.find(filter);
  }

  @patch('/result-notifications', {
    responses: {
      '200': {
        description: 'ResultNotification PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultNotification, {partial: true}),
        },
      },
    })
    resultNotification: ResultNotification,
    @param.where(ResultNotification) where?: Where<ResultNotification>,
  ): Promise<Count> {
    return this.resultNotificationRepository.updateAll(resultNotification, where);
  }

  @get('/result-notifications/{id}', {
    responses: {
      '200': {
        description: 'ResultNotification model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ResultNotification, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ResultNotification, {exclude: 'where'}) filter?: FilterExcludingWhere<ResultNotification>
  ): Promise<ResultNotification> {
    return this.resultNotificationRepository.findById(id, filter);
  }

  @patch('/result-notifications/{id}', {
    responses: {
      '204': {
        description: 'ResultNotification PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ResultNotification, {partial: true}),
        },
      },
    })
    resultNotification: ResultNotification,
  ): Promise<void> {
    await this.resultNotificationRepository.updateById(id, resultNotification);
  }

  @put('/result-notifications/{id}', {
    responses: {
      '204': {
        description: 'ResultNotification PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() resultNotification: ResultNotification,
  ): Promise<void> {
    await this.resultNotificationRepository.replaceById(id, resultNotification);
  }

  @del('/result-notifications/{id}', {
    responses: {
      '204': {
        description: 'ResultNotification DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.resultNotificationRepository.deleteById(id);
  }
}
