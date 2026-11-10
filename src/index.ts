import dotenv from 'dotenv';
import { createApp } from './app';

dotenv.config();

const PORT = process.env.PORT || 4001;
const app = createApp();

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});