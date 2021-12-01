import { Router } from 'express'
import * as rootController from '@/controllers/rootController'

export const router = Router()

router.get('/', rootController.root_get)
