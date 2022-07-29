import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Push = db.define('push',{

    PI_UID:{
        type: DataTypes.STRING
    },
    timestamp:{
        type: DataTypes.STRING
    },
    vlc:{
        type: DataTypes.STRING
    },
    tempF:{
        type: DataTypes.STRING
    },
    storageUsed:{
        type: DataTypes.STRING  
    },
    storageAvail:{
        type: DataTypes.STRING  
    },
    lsVideo:{
        type: DataTypes.STRING  
    },
    jsonInv:{
        type: DataTypes.STRING  
    }
    
},{
    freezeTableName: true,
    timestamps: false
});
 
export default Push;