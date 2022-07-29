import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
const Addresses = db.define('customer-addresses',{

    customer_id:{
        type: DataTypes.INTEGER
    },
    campaign_id:{
        type: DataTypes.INTEGER
    },

    branch:{
        type: DataTypes.STRING
    }
    ,
    address:{
        type: DataTypes.STRING
    }
    ,
    city:{
        type: DataTypes.STRING
    }
    ,
    state:{
        type: DataTypes.STRING
    }
    ,
    zip:{
        type: DataTypes.STRING
    }
    ,
    country:{
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
 
export default Addresses;