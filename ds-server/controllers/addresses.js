import CustomerAddresses from "../models/customerAddressesModel.js";


export const createNewAddress = async (req, res) => {

    try {
        await CustomerAddresses.create(req.body);
        res.json({
            "message": "User Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}