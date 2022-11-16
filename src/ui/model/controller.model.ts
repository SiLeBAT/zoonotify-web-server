import { Response } from 'express';

export interface SystemInfoController {
    getSystemInfo(res: Response): Promise<void>;
}
