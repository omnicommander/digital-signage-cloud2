import Campaign from "../models/campaignModel.js";
import Pushes from "../models/pushModel.js";
import Clients from "../models/clientsModel.js";
import Videos from "../models/videoModel.js";
export const getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.findAll();
        res.json(campaigns);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const getCampaignById = async (req, res) => {
    const c_id = req.params.campaign_id;
    try {
        const campaign = await Campaign.findAll({
            where: {
                campaign_id: c_id
            }
        });
        const clients = await Clients.findAll({
            where: {
                campaign_id: c_id
            },
            raw: true,
            attributes: ['campaign_id', 'PI_UID']
        });





        res.json(campaign[0]);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const getCampaignsByCustomerId = async (req, res) => {
    try {

        let campaign_ids = [];
        /* Return Active Campaigns For Customer */
        const campaigns = await Campaign.findAll({
            where: {
                customer_id: req.params.customer_id
            },
            raw: true,
            attributes: ['customer_id', 'campaign_id', 'campaign_name']
        });

        for (let campaign in campaigns) {
            campaign_ids.push(campaigns[campaign].campaign_id)
        }
        
        const clients = await Clients.findAll({
            where: {
                campaign_id: campaign_ids
            },
            raw: true,
            attributes: ['campaign_id', 'PI_UID']
        });
        let activePI_UIDs = [];
        let pi_ids = [];
        let camp_ids = [];
        for (let campaign in campaigns) {
            /* Get Clients (Devices) For Campaigns */
            for (let client in clients) {
                if (campaigns[campaign].campaign_id === clients[client].campaign_id) {
                    camp_ids.push(campaigns[campaign].campaign_id);
                    pi_ids.push(clients[client].PI_UID);
                    activePI_UIDs.push(clients[client].PI_UID);
                    campaigns[campaign].PI_UID = clients[client].PI_UID;
                }
            }
            /* ----------------------------------------- */
            /*  Get And Combine Pushes */
            const pushes = await Pushes.findAll({
                where: {
                    PI_UID: activePI_UIDs
                },
                raw: true
            });

            let tempPush = [];
            for (let push in pushes) {
                if (campaigns[campaign].PI_UID == pushes[push].PI_UID) {
                    tempPush.push(pushes[push])
                }
            }
            campaigns[campaign].pushes = tempPush;
            /* ----------------------------------------- */
            /* Get Videos Associated With Each Campaign */
            let campaignVideos = [];
            const videos = await Videos.findAll({
                where: {
                    campaign_id: campaign_ids
                },
                raw: true
            });
            for(let video in videos)
            {
                if(videos[video].campaign_id === campaigns[campaign].campaign_id)
                {
                    campaignVideos.push(videos[video]);
                }
            }
            campaigns[campaign].videos = campaignVideos;
        }
        res.json({
            campaigns: campaigns
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}
export const createCampaign = async (req, res) => {
    let campaignObject = {
          ...req.body  
    }
    try {
        await Campaign.create(campaignObject);
        const campaigns = await Campaign.findAll({
            where: {
                customer_id: campaignObject.customer_id
            },
            raw: true,
            attributes: ['campaign_id']
        });
        const lastID = {
            campaign_id: campaigns.slice(-1)[0].campaign_id         
        }
        let clientObject = {
            ...campaignObject,
            ...lastID  
        }
        await Clients.create(clientObject);
        res.json({
            "message": "Customer Created"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
    
}
export const updateCampaign = async (req, res) => {
    try {
        await Campaign.update(req.body, {
            where: {
                campaign_id: req.params.campaign_id
            }
        });
        res.json({
            "message": "Customer Updated"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const deleteCampaign = async (req, res) => {
    try {
        await Campaign.destroy({
            where: {
                campaign_id: req.params.campaign_id
            }
        });
        await Clients.destroy({
            where: {
                campaign_id: req.params.campaign_id
            }
        });
        res.json({
            "message": "Customer Deleted"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}