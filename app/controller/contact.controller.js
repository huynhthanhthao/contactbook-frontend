import ContactServices from "../services/contact.service.js";

const createContact = function (req, res, next) {
    const payload = req.body;
    if (!ContactServices.validate(payload))
        return res.json({
            success: false,
            message: "Missing data!",
        });

    ContactServices.checkContactExist(payload).then((isExist) => {
        if (isExist) {
            return res.json({
                success: false,
                message: "Contact is already exists!",
            });
        } else
            ContactServices.createContact(payload).then(function (result) {
                return res.json({
                    success: true,
                    message: "Create contact successfully!",
                    result,
                });
            });
    });
};

const deleteAllContacts = function (req, res, next) {
    const result = ContactServices.deleteAllContacts();
    result
        .then((result) => {
            return res.json({
                success: true,
                message: "Delete all contact successfully!",
                result,
            });
        })
        .catch((error) => {
            return res.status(500).json({ success: false, message: error });
        });
};

const deleteContactById = function (req, res, next) {
    const payload = req.params;
    const _id = payload.id;

    ContactServices.checkContactExist({ _id }).then((isExist) => {
        if (isExist) {
            ContactServices.deleteContactId(payload)
                .then((result) => {
                    return res.json({
                        success: true,
                        message: "Delete contact successfully!",
                        result,
                    });
                })
                .catch((error) => {
                    return res
                        .status(500)
                        .json({ success: false, message: error });
                });
        } else
            return res.json({
                success: false,
                message: "ID contact not found!",
            });
    });
};

const getAllContacts = function (req, res, next) {
    const result = ContactServices.getAllContacts();
    result
        .then((data) => {
            return res.json({
                success: true,
                message: "Get all contacts successfully!",
                result: data,
            });
        })
        .catch((err) => {
            return res.status(500).json({
                success: false,
                message: err,
            });
        });
};

const getAllFavorites = function (req, res, next) {
    const result = ContactServices.getFavorite();
    result
        .then((data) => {
            return res.json({
                success: true,
                message: "Get favorite successfully!",
                data,
            });
        })
        .catch((error) => {
            res.status(500).json({ success: false, message: error });
        });
};

const getContactById = function (req, res, next) {
    const payload = req.params;
    const _id = payload.id;
    ContactServices.checkContactExist({ _id }).then((isExist) => {
        if (isExist) {
            const result = ContactServices.getContactId(req.params);
            result.then((data) => {
                return res.json({
                    success: true,
                    message: "Get contacts Id successfully!",
                    result: data,
                });
            });
        } else
            return res.status(500).json({
                success: false,
                message: "Request not found!",
            });
    });
};

const getContactsByName = function (req, res, next) {
    const payload = req.params;

    const result = ContactServices.getContactByName(payload);
    result
        .then((data) => {
            return res.json({
                success: true,
                message: "Get contacts by name successfully!",
                result: data,
            });
        })
        .catch((err) => {
            return res.json({
                success: true,
                message: err,
            });
        });
};

const updateContact = function (req, res, next) {
    const payload = req.body;
    const _id = req.params.id;

    if (!ContactServices.validate(payload))
        return res.json({
            success: false,
            message: "Missing data!",
        });

    ContactServices.checkContactExist({ _id }).then((isExist) => {
        if (isExist) {
            ContactServices.updateContact(_id, payload).then((result) => {
                return res.json({
                    success: true,
                    message: "Update successfully!",
                    result,
                });
            });
        } else
            return res
                .status(500)
                .json({ success: false, message: "Request not found!" });
    });
};

export {
    createContact,
    deleteAllContacts,
    deleteContactById,
    getAllContacts,
    getAllFavorites,
    getContactById,
    updateContact,
    getContactsByName,
};
