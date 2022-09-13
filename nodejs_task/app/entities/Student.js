const EntitySchema =require("typeorm").EntitySchema;
//const{adress}=require("/home/tectoro/Desktop/nodejs_task/app/entities/Adress.js")

const student =new EntitySchema({
    name:"student",
    tableName:"student",
    columns:{
        id:{
          type:'int',
          primary:true,
          generated:true

        },
        firstName:{
            type:'varchar'
        },
        lastName:{
            type:'varchar'
        },
        email:{
            type:'varchar'
        }
        

    },
    /*
    relations:{
        adress:{
           target:adress,
           type:'one-to-one',
           joinColumn:true,
           joinTable: true,
           inverseSide:"adress",
           cascade: true,
           eager: true
        }
   }
  
*/
});
module.exports={student};