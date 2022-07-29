import Push from "../models/clientStatusModel.js";


export const getClientByPI_UID = async (req, res) => {
    try {
        console.log(req);
        const clientStatus = await Push.findAll({
            
            where: {
                PI_UID: req.params.id
            }
        });
        console.log(clientStatus)
        res.json(clientStatus);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 