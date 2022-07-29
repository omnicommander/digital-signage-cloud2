import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Clients = db.define('client',{

    PI_UID:{
        type: DataTypes.STRING
    },
    customer_id:{
        type: DataTypes.STRING
    },
    campaign_id:{
        type: DataTypes.STRING
    }
    
},{
    freezeTableName: true,
    timestamps: false
});
 
export default Clients;