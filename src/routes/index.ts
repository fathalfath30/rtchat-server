/*
//
//  ______    _   _           _  __      _   _     ____   ___
// |  ____|  | | | |         | |/ _|    | | | |   |___ \ / _ \
// | |__ __ _| |_| |__   __ _| | |_ __ _| |_| |__   __) | | | |
// |  __/ _` | __| '_ \ / _` | |  _/ _` | __| '_ \ |__ <| | | |
// | | | (_| | |_| | | | (_| | | || (_| | |_| | | |___) | |_| |
// |_|  \__,_|\__|_| |_|\__,_|_|_| \__,_|\__|_| |_|____/ \___/
//
// Written by Fathalfath30.
// Email : fathalfath30@gmail.com
// Follow me on:
//  Github : https://github.com/fathalfath30
//  Gitlab : https://gitlab.com/Fathalfath30
//
*/
import express, {Request, Response, NextFunction} from "express";
import {api} from './api'
import {response} from '../Modules/response'

class RtchatServerRoutes {
  private r = express.Router()

  public Routes() {
    this.r.use((req: Request, res: Response, next: NextFunction) => {
      console.log(`Something happening! [${req.headers['x-forwarded-for'] || req.connection.remoteAddress}]`)

      next()
    })

    this.r.get('/', (req: Request, res: Response, next: NextFunction) => {
      response(res, {}, 200, "It's works!")
    })

    this.r.use('/api', api)

    return this.r
  }
}

const BaseRoutes = new RtchatServerRoutes();
export {BaseRoutes}
