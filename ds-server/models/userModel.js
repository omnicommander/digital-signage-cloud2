import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Admin = db.define('admin',{

    adminName:{
        type: DataTypes.STRING
    },
    role:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    last_logged:
    {
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.STRING
    }
    
},{
    freezeTableName: true,
    timestamps: false
});
 
export default Admin;