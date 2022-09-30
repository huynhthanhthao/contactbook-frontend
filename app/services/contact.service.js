import Contact from "../models/Contact.js";

const ContactServices = {
    async createContact(payload) {
        try {
            const result = await Contact.findOneAndUpdate(
                payload,
                {
                    name: payload.name,
                    email: payload.email,
                    phone: payload.phone,
                    address: payload.address,
                    favorite: payload.favorite,
                    urlFacebook: payload.urlFacebook,
                    urlInstagram: payload.urlInstagram,
                    urlTwitter: payload.urlTwitter,
                },
                { upsert: true, new: true }
            );
            return result;
        } catch (error) {
            console.log(error);
        }
    },
    async getAllContacts() {
        try {
            return await Contact.find({});
        } catch (error) {
            console.log(error);
        }
    },
    async getContactId(payload) {
        try {
            return await Contact.findOne({ _id: payload.id });
        } catch (error) {
            console.log(error);
            next();
        }
    },
    async getContactByName(payload) {
        try {
            return await Contact.find({
                name: { $regex: new RegExp(payload.name), $options: "i" },
            });
        } catch (error) {
            console.log(error);
            next();
        }
    },
    async getFavorite() {
        try {
            const res = await Contact.find({ favorite: true });
            return res;
        } catch (error) {
            console.log(error);
        }
    },
    async deleteAllContacts() {
        try {
            return await Contact.deleteMany({});
        } catch (error) {
            console.log(error);
        }
    },
    async deleteContactId(payload) {
        try {
            return await Contact.findOneAndDelete({ _id: payload.id });
        } catch (error) {
            console.log(error);
        }
    },
    async updateContact(id, payload) {
        try {
            return await Contact.findByIdAndUpdate(
                { _id: id },
                {
                    name: payload.name,
                    email: payload.email,
                    phone: payload.phone,
                    address: payload.address,
                    favorite: payload.favorite,
                    urlFacebook: payload.urlFacebook,
                    urlInstagram: payload.urlInstagram,
                    urlTwitter: payload.urlTwitter,
                },
                { new: true }
            );
        } catch (error) {
            console.log(error);
        }
    },
    async checkContactExist(condition) {
        try {
            const contactData = await Contact.findOne(condition);
            if (contactData == null) {
                return false;
            }
            return true;
        } catch (error) {
            return false;
        }
    },
    validate(contact) {
        if (contact.name && contact.email && contact.phone && contact.address) {
            return true;
        }
        return false;
    },
};

export default ContactServices;
