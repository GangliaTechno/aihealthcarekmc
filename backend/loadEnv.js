import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Required to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly load .env from the backend directory
dotenv.config({ path: path.join(__dirname, ".env") });
