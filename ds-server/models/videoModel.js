import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Videos = db.define('video',{

    video_id:{
        type: DataTypes.STRING
    },
    video_title:{
        type: DataTypes.STRING
    },
    campaign_id:{
        type: DataTypes.STRING
    },
    youtube_id:
    {
        type: DataTypes.STRING
    },
    date_created:{
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.TINYINT
    }
    
},{
    freezeTableName: true,
    timestamps: false
});
 
export default Videos  ;