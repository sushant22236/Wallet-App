import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { errorHandler } from "./shared/middleware/error-handler";
import transactionRoutes from "./api-gateway/routes/transaction-routes";
import walletRoutes from "./api-gateway/routes/wallet-routes";



export function createApp(): Express {
    const app = express();

    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/health', (req, res) => {
        res.json({ status: 'ok', time: new Date().toISOString() });
    });

    app.use('/api/wallets', walletRoutes);
    app.use('/api/transaction', transactionRoutes);

    app.use(errorHandler);

    return app;
}