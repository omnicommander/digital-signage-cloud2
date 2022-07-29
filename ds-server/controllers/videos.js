
import Videos from "../models/videoModel.js";

export const getAllVideos = async (req, res) => {
    try {
    
        
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getVideoById = async (req, res) => {
    try {
        const video = await Videos.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(customer[0]);
    } catch (error) {
        res.json({ message: error.message });
    }   
}
export const getVideosByCampaignId = async (req, res) => {
    console.log(req)
    /* try {
        const videos = await Videos.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(customer[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  */  
}
export const createVideo = async (req, res) => {
   
    try {
        await Videos.create(req.body)
        res.json({
            "message": "Video Created"
        })
       
    } catch (error) {
        res.json({ message: error.message });
    }   
}
 
export const updateVideo = async (req, res) => {
    console.log(req.body)
    try {
        await Videos.update(req.body, {
            where: {
                video_id: req.params.id
            }
        });
        res.json({
            "message": ("Customer Updated : " + res)
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteVideo = async (req, res) => {
    try {
        await Video.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Customer Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}