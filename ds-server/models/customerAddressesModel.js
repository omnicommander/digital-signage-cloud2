import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
const CustomerAddressesModel = db.define('customer-addresses',{

    customer_id:{
        type: DataTypes.INTEGER
    },
    Address:{
        type: DataTypes.STRING
    }
    ,
    City:{
        type: DataTypes.STRING
    }
    ,
    State:{
        type: DataTypes.STRING
    }
    ,
    Zip:{
        type: DataTypes.STRING
    }
    
},{
    freezeTableName: true,
    timestamps: false
});
 
export default CustomerAddressesModel;