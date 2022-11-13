import 'dotenv/config';
import { App } from './App';
import { foo } from './Db/knex';
foo(); // Replys whats config db is using   

const app = App.getInstance();

app.start();

