import express, { Request, Response } from 'express';
import { partnerController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    partnerController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
    partnerController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    partnerController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    partnerController.delete(req, res);
});