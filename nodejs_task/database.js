const {DataSource}=require("typeorm");
const datasource = new DataSource({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"tectoro123",
    database: 'nodeoperations',
    entities:['app/entities/*.js'],
    migrations:['migrations/*.js'],
    migrationsTableName:'nodeoperations_migrations',

    cli: {
        entitiesDir: ['app/entities/*.js'],
      },
      synchronize:true,

});
module.exports={datasource};