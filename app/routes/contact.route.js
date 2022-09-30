import express from "express";

// Import Controller
import {
    createContact,
    deleteAllContacts,
    deleteContactById,
    getAllContacts,
    getAllFavorites,
    getContactById,
    updateContact,
    getContactsByName,
} from "../controller/contact.controller.js";

const router = express.Router();

router.get("/favorite", getAllFavorites);

router.get("/:id", getContactById);

router.get("/", getAllContacts);

router.get("/get-name/:name", getContactsByName);

router.post("/", createContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContactById);

router.delete("/", deleteAllContacts);

export default router;
