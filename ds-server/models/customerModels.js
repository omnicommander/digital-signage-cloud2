import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
const Customer = db.define('customer',{

    customer_name:{
        type: DataTypes.STRING
    },
    customer_contact_name:{
        type: DataTypes.STRING
    }
    ,
    customer_contact_email:{
        type: DataTypes.STRING
    },
    customer_contact_phone:{
        type: DataTypes.STRING
    }
    ,
    date_updated:{
        type: DataTypes.STRING
    }
    
},{
    freezeTableName: true,
    timestamps: false
});
 
export default Customer;