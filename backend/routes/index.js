import express from "express"
import dotenv from 'dotenv';
import { listTables } from '../db/dynamo.js'; // Import the function

dotenv.config();

//import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";

const router = express.Router()
console.log(process.env.AWS_REGION);

/* GET home page. */
router.get('/', async (req, res) => {
    try {
        const tables = await listTables();
        res.json({ message: 'Welcome to the API', tables });
    } catch (error) {
        res.status(500).json({ error: 'Error listing tables' });
    }
});
export default router