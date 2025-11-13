const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
    try {
        const result = await mongodb
            .getDb()
            .db()
            .collection('contacts')
            .find({});
        const contacts = await result.toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getById = async (req, res, next) => {
    try {
        const contactId = new ObjectId(req.params.id);
        const result = await mongodb
            .getDb()
            .db()
            .collection('contacts')
            .findOne({ _id: contactId });

        if (!result) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const create = async (req, res, next) => {
    try {
        // Validate required fields
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;

        if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
            return res.status(400).json({
                message: 'All fields are required: firstName, lastName, email, favoriteColor, birthday'
            });
        }

        const contact = {
            firstName,
            lastName,
            email,
            favoriteColor,
            birthday
        };

        const result = await mongodb
            .getDb()
            .db()
            .collection('contacts')
            .insertOne(contact);

        res.setHeader('Content-Type', 'application/json');
        res.status(201).json({
            id: result.insertedId,
            message: 'Contact created successfully'
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const update = async (req, res, next) => {
    try {
        const contactId = new ObjectId(req.params.id);
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;

        const updateData = {};
        if (firstName) updateData.firstName = firstName;
        if (lastName) updateData.lastName = lastName;
        if (email) updateData.email = email;
        if (favoriteColor) updateData.favoriteColor = favoriteColor;
        if (birthday) updateData.birthday = birthday;

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ message: 'No fields to update' });
        }

        const result = await mongodb
            .getDb()
            .db()
            .collection('contacts')
            .updateOne({ _id: contactId }, { $set: updateData });

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({ message: 'Contact updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const remove = async (req, res, next) => {
    try {
        const contactId = new ObjectId(req.params.id);

        const result = await mongodb
            .getDb()
            .db()
            .collection('contacts')
            .deleteOne({ _id: contactId });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAll, getById, create, update, remove };
