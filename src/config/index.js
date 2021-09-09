require("dotenv").config();
export default {
  ENVIRONMENT: process.env.NODE_ENV,
  RICKANDMORTY_API_BASE_URL: process.env.RICKANDMORTY_API_BASE_URL,
};
