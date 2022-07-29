import Customer from "../models/customerModels.js";
import Client from "../models/clientsModel.js";
import Campaign from "../models/campaignModel.js";
import CustomerAddresses from "../models/customerAddressesModel.js";
import Push from "../models/pushModel.js";

export const getAllCustomers = async (req, res) => {
    try {
    
        const customers = await Customer.findAll({raw: true,});
        
        let customer_id = [];
        
        for(let customer in customers)
        {
            customer_id.push(customers[customer].id)
        }

        let campaign_id = [];
        const campaigns = await Campaign.findAll({
            where: {
                customer_id: customer_id
                /* Test for removal of after : */
            },
            raw:true,
            attributes: ['customer_id', 'campaign_id', 'campaign_name']
        });
        
        for(let campaign in campaigns)
        {
            campaign_id.push(campaigns[campaign].campaign_id)
        }
        const clients = await Client.findAll({
            where: {
                campaign_id: campaign_id
            },
            raw: true,
            attributes: ['campaign_id', 'PI_UID']
        });

        let activePI_UIDs = [];
        for (let customer in customers)
        {
            let pi_ids = [];
            let camp_ids = [];
            for(let campaign in campaigns)
            {
                if(campaigns[campaign].customer_id === customers[customer].id)
                {
                   for(let client in clients)
                    {
                        /* console.log(campaigns[campaign].campaign_id ,' === ', clients[client].campaign_id) */
                        if(campaigns[campaign].campaign_id === clients[client].campaign_id)
                        {
                           /* console.log(clients[client].PI_UID);  */
                           camp_ids.push(campaigns[campaign].campaign_id);
                           pi_ids.push(clients[client].PI_UID);
                           activePI_UIDs.push(clients[client].PI_UID);
                        }
                    }
                }
            }
            customers[customer].campaign_ids = camp_ids;
            customers[customer].activeDevicesPI_UIDs = pi_ids;
            customers[customer].activeDevices = pi_ids.length;
        }
        const pushes = await Push.findAll({
            where: {
                PI_UID: activePI_UIDs
            },
            raw: true,
            attributes: ['id', 'PI_UID', 'vlc']
        });
        const addresses = await CustomerAddresses.findAll({
            where: {
                customer_id: customer_id
                /* Test for removal of after : */
            },
            raw:true,
            attributes: ['customer_id', 'Address', 'City', 'State', 'Zip']
        });
        

        for (let customer in customers)
        {
            let tempPush = []
            for(let pi_uid in customers[customer].activeDevicesPI_UIDs)
            {
                for(let push in pushes)
                {
                    if(customers[customer].activeDevicesPI_UIDs[pi_uid] == pushes[push].PI_UID){
                        tempPush.push(pushes[push])
                    }
                }
            }

            customers[customer].pushes = tempPush;

            
            /* Add Addresses While We Are Looping */
            for(let address in addresses)
            {
                if(customers[customer].id === addresses[address].customer_id)
                {
                    customers[customer].main_address = addresses[address];
                }
            } 
        }
        res.json({
            customers: customers
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
 
export const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(customer[0]);
    } catch (error) {
        res.json({ message: error.message });
    }   
}
export const createCustomer = async (req, res) => {
   
    try {
        await Customer.create(req.body)
        res.json({
            "message": "Customer Created"
        })
       
    } catch (error) {
        res.json({ message: error.message });
    }   
}
 
export const updateCustomer = async (req, res) => {
    try {
        await Customer.update(req.body, {
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
 
export const deleteCustomer = async (req, res) => {
    try {
        await Customer.destroy({
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