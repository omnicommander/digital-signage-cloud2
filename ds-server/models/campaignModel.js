import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Campaign = db.define('campaign',{

    customer_id:{
        type: DataTypes.INTEGER
    },
    campaign_id:{
        type: DataTypes.INTEGER
    },
    campaign_name:{
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.STRING
    }
    
},{
    freezeTableName: true,
    timestamps: false
});
 
export default Campaign;