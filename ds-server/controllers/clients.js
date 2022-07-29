import Client from "../models/clientsModel.js";
import Campaign from "../models/campaignModel.js";
 
export const getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getClientById = async (req, res) => {
    try {
        const client = await Client.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(client[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
export const getClientsByCustomerId = async (req, res) => {
    try {
        const campaigns = await Campaigns.findAll({
            where: {
                customer_id: req.params.id
            } 
        })
        let camp_ids = [];
        for(var campaign in campaigns)
        {
            camp_ids.push(campaigns[campaign].campaign_id);
        }
        const clients = await Client.findAll({
            where: {
                campaign_id: camp_ids
            }
        });
      
        let pi_ids = [];
        for(var client in clients)
        {
            pi_ids.push(clients[client].PI_UID)
        }
        res.json(clients);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createClient = async (req, res) => {
   
    try {
        await Client.create(req.body);
        res.json({
            "message": "Customer Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateClient = async (req, res) => {
    try {
        await Client.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Customer Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteClient = async (req, res) => {
    try {
        await Client.destroy({
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