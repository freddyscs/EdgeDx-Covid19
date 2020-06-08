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
import {Genexpertprobecheckdetail} from '../models';
import {GenexpertprobecheckdetailRepository} from '../repositories';

export class GenexpertprobecheckdetailController {
  constructor(
    @repository(GenexpertprobecheckdetailRepository)
    public genexpertprobecheckdetailRepository : GenexpertprobecheckdetailRepository,
  ) {}

  @post('/genexpertprobecheckdetails', {
    responses: {
      '200': {
        description: 'Genexpertprobecheckdetail model instance',
        content: {'application/json': {schema: getModelSchemaRef(Genexpertprobecheckdetail)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genexpertprobecheckdetail, {
            title: 'NewGenexpertprobecheckdetail',
            
          }),
        },
      },
    })
    genexpertprobecheckdetail: Genexpertprobecheckdetail,
  ): Promise<Genexpertprobecheckdetail> {
    return this.genexpertprobecheckdetailRepository.create(genexpertprobecheckdetail);
  }

  @get('/genexpertprobecheckdetails/count', {
    responses: {
      '200': {
        description: 'Genexpertprobecheckdetail model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Genexpertprobecheckdetail) where?: Where<Genexpertprobecheckdetail>,
  ): Promise<Count> {
    return this.genexpertprobecheckdetailRepository.count(where);
  }

  @get('/genexpertprobecheckdetails', {
    responses: {
      '200': {
        description: 'Array of Genexpertprobecheckdetail model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Genexpertprobecheckdetail, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Genexpertprobecheckdetail) filter?: Filter<Genexpertprobecheckdetail>,
  ): Promise<Genexpertprobecheckdetail[]> {
    return this.genexpertprobecheckdetailRepository.find(filter);
  }

  @patch('/genexpertprobecheckdetails', {
    responses: {
      '200': {
        description: 'Genexpertprobecheckdetail PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genexpertprobecheckdetail, {partial: true}),
        },
      },
    })
    genexpertprobecheckdetail: Genexpertprobecheckdetail,
    @param.where(Genexpertprobecheckdetail) where?: Where<Genexpertprobecheckdetail>,
  ): Promise<Count> {
    return this.genexpertprobecheckdetailRepository.updateAll(genexpertprobecheckdetail, where);
  }

  @get('/genexpertprobecheckdetails/{id}', {
    responses: {
      '200': {
        description: 'Genexpertprobecheckdetail model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Genexpertprobecheckdetail, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Genexpertprobecheckdetail, {exclude: 'where'}) filter?: FilterExcludingWhere<Genexpertprobecheckdetail>
  ): Promise<Genexpertprobecheckdetail> {
    return this.genexpertprobecheckdetailRepository.findById(id, filter);
  }

  @patch('/genexpertprobecheckdetails/{id}', {
    responses: {
      '204': {
        description: 'Genexpertprobecheckdetail PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Genexpertprobecheckdetail, {partial: true}),
        },
      },
    })
    genexpertprobecheckdetail: Genexpertprobecheckdetail,
  ): Promise<void> {
    await this.genexpertprobecheckdetailRepository.updateById(id, genexpertprobecheckdetail);
  }

  @put('/genexpertprobecheckdetails/{id}', {
    responses: {
      '204': {
        description: 'Genexpertprobecheckdetail PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() genexpertprobecheckdetail: Genexpertprobecheckdetail,
  ): Promise<void> {
    await this.genexpertprobecheckdetailRepository.replaceById(id, genexpertprobecheckdetail);
  }

  @del('/genexpertprobecheckdetails/{id}', {
    responses: {
      '204': {
        description: 'Genexpertprobecheckdetail DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.genexpertprobecheckdetailRepository.deleteById(id);
  }
}
