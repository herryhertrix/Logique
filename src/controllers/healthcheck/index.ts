import { Request, Response } from "express"

class HealthcheckCodeController {
    check = (_: Request, res: Response) => {
        try {
            return res.status(200).json({
                errors: '',
                data: 'Ok',
            })
        } catch (error) {
            return res.status(500).json({
                errors: 'Internal server error',
                data: '',
            })
        }
    }
}

const healthcheckCodeController = new HealthcheckCodeController()
export default healthcheckCodeController

