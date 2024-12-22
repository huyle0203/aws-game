import dotenv from 'dotenv'
import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";

dotenv.config();
console.log(process.env.AWS_REGION);

const client = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

export async function listTables() {
    try {
        const listTablesCommand = new ListTablesCommand({});
        const res = await client.send(listTablesCommand);
        console.log({ tables: res.TableNames });
        return res.TableNames;
    } catch (error) {
        console.error('Error listing tables:', error);
        throw error;
    }
}

