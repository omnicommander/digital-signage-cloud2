import Push from "../models/pushModel.js";
/* router.get('/pushes', getAllPushes);
router.get('/pushes/:id', getPushById);
router.get('/pushes/customer/:id', getPushesByCustomerId);
router.get('/client-status/:id', getPushByPI_UID);
router.post('/pushes/create/', createPush);
router.patch('/pushes/update/:id', updatePush);
router.delete('/pushes/remove/:id', deletePush); */

export const getAllPushes = async (req, res) => {
    try {
        const customers = await Push.findAll();

        res.json(customers);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getPushById = async (req, res) => {
    try {
        const customer = await Push.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(customer[0]);
    } catch (error) {
        res.json({ message: error.message });
    }

    
}

export const getPushesByCustomerId = async (req, res) => {
    try {
        const pushes = await Push.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(pushes);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getPushByPI_UID = async (req, res) => {
    
    try {
        const pushes = await Push.findAll({
            where: {
                PI_UID: req.params.id
            }
        });
        res.json(pushes);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createPush = async (req, res) => {
    try {
        await Push.create(req.body);
        res.json({
            "message": "Push Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updatePush = async (req, res) => {
    try {
        await Push.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Push Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deletePush = async (req, res) => {
    try {
        await Push.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Push Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}