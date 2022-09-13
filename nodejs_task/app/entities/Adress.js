   const EntitySchema =require("typeorm").EntitySchema;
   const{student}=require("/home/tectoro/Desktop/nodejs_task/app/entities/Student.js")
   const adress = new EntitySchema({
    name:"adress",
    tableName:"adress",
    columns:{
        adressId:{
            primary:true,
            generated:true,
            type:'int'
        },
        adress:{
            type:"varchar"
        }    
    },
    
    relations:{
         student:{
            target:student,
            type:'one-to-one',
            joinColumn:true,
            joinTable: true,
            inverseSide:"student",
            cascade: true,
            eager: true
         }
    }
    

   });
   module.exports={adress};