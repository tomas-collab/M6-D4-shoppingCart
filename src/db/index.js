import s from "sequelize";
const{ Sequelize,QueryTypes} = s

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  port: PGPORT,
  dialect: "postgres",
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //   },
  // },
});

const schemas = ["development", "production"]
  .map(
    (schema) => `CREATE SCHEMA  IF NOT EXISTS ${schema} AUTHORIZATION ${PGUSER}`
  )
  .join(";");


export const syncSequelize = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.query(schemas, { type: QueryTypes.SELECT });
    await sequelize.sync({
        alter: true,
      logging: false,
      schema: "development",
    });
    console.log("DB authenticated");
  } catch (error) {
    console.log(error);
  }
};



export default sequelize;
