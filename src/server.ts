import 'dotenv/config';
import { App } from './App';
import { getKnexConfig } from './Db/knex';

getKnexConfig(); // Replys whats config db is using   

const app = App.getInstance();

app.start();

