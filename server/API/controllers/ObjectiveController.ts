import * as express from 'express';
import {
  controller,
  httpGet,
  httpPost,
  httpPatch,
  interfaces,
  response,
  requestParam,
  requestBody,
  httpDelete,
} from 'inversify-express-utils';
import { inject } from 'inversify';

import { IObjectiveService } from './../../Domain/Services/index';
import handleError from './handleError';

/**
 * Operations about objectives.
 */
@controller('/api/objectives')
export class ObjectiveController implements interfaces.Controller {
  private readonly _objectiveService: IObjectiveService;

  constructor(@inject('ObjectiveService') objectiveService: IObjectiveService) {
    this._objectiveService = objectiveService;
  }

  /**
   * Get objectives
   * id: employee id
   */
  @httpGet('/:id')
  private async get(
    @requestParam('id') id: number,
    @response() res: express.Response,
  ): Promise<void> {
    try {
      res.json(await this._objectiveService.getObjectivesByCareerDayId(id));
    } catch (err) {
      handleError(err, res);
    }
  }

  /**
   * Add objectives
   */
  @httpPost('/')
  private async add(
    @requestBody() body: any,
    @response() res: express.Response,
  ): Promise<void> {
    try {
      res.json(await this._objectiveService.addObjective(body));
    } catch (err) {
      handleError(err, res);
    }
  }

  /**
   * Update objective
   * id: objective
   */
  @httpPatch('/:id')
  private async updateObjective(
    @requestParam('id') id: number,
    @requestBody('title') title: string,
    @requestBody('description') description: string,
    @response() res: express.Response,
  ): Promise<void> {
    try {
      res.json(await this._objectiveService.updateObjective(id, title, description));
    } catch (err) {
      handleError(err, res);
    }
  }

  /**
   * Delete objective
   * id: objective
   */
  @httpDelete('/:id')
  private async delete(
    @requestParam('id') id: number,
    @response() res: express.Response,
  ): Promise<void> {
    try {
      res.json(await this._objectiveService.deleteObjective(id));
    } catch (err) {
      handleError(err, res);
    }
  }
}
