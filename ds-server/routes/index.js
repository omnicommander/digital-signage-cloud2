import express from "express";
 
import { 
    getAllCustomers,
    createCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer
} from "../controllers/customers.js";
import {
    createNewAddress
} from "../controllers/addresses.js";
import { 
    getAllClients,
    createClient,
    getClientById,
    getClientsByCustomerId,
    updateClient,
    deleteClient
   
} from "../controllers/clients.js";

import {
    getClientByPI_UID
} from "../controllers/clientstatus.js";

import { 
    getAllCampaigns,
    createCampaign,
    getCampaignById,
    getCampaignsByCustomerId,
    updateCampaign,
    deleteCampaign
   
} from "../controllers/campaigns.js";

import { 
    getAllPushes,
    getPushById,
    getPushesByCustomerId,
    getPushByPI_UID,
    createPush,
    updatePush,
    deletePush
   
} from "../controllers/push.js";

import { 
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser   
} from "../controllers/users.js"; 

import { 
    getAllVideos,
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo   
} from "../controllers/videos.js"; 

const router = express.Router();
 console.log('!!');

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users/create/', createUser);
router.patch('/users/update/:id', updateUser);
router.delete('/users/remove/:id', deleteUser);
/*  */
router.get('/customers', getAllCustomers);
router.get('/customers/:id', getCustomerById);
router.post('/customers/create/', createCustomer);
router.patch('/customers/update/:id', updateCustomer);
router.delete('/customers/remove/:id', deleteCustomer);
/*  */
router.post('/customers/addresses/create', createNewAddress);
/*  */
router.get('/clients', getAllClients);
router.get('/clients/:id', getClientById);
router.get('/clients/customer/:id', getClientsByCustomerId);
router.get('/client-status/:id', getClientByPI_UID);
router.post('/clients/create/', createClient);
router.patch('/clients/update/:id', updateClient);
router.delete('/clients/remove/:id', deleteClient);

router.get('/campaigns', getAllCampaigns);
router.get('/campaigns/:campaign_id', getCampaignById);
router.get('/campaigns/customer/:customer_id', getCampaignsByCustomerId);
router.post('/campaigns/create/', createCampaign);
router.patch('/campaigns/update/:campaign_id', updateCampaign);
router.delete('/campaigns/remove/:campaign_id', deleteCampaign);

router.get('/pushes', getAllPushes);
router.get('/push/:id', getPushById);
router.get('/pushes/customer/:id', getPushesByCustomerId);
router.get('/push/client-push/:id', getPushByPI_UID);
router.post('/pushes/create/', createPush);
router.patch('/pushes/update/:id', updatePush);
router.delete('/pushes/remove/:id', deletePush);

router.get('/videos', getAllVideos);
router.get('/videos/:id', getVideoById);
router.post('/videos/create/', createVideo);
router.post('/videos/update/:id', updateVideo);
router.delete('/videos/remove/:id', deleteVideo);


export default router;