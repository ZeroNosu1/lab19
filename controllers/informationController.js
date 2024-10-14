const Information = require('../models/information'); // เรียกใช้โมเดล Information

// CRUD Operations
exports.getInformations = async (req, res) => {
    try {
        const informations = await Information.find();
        res.status(200).json(informations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getInformation = async (req, res) => {
    try {
        const { id } = req.params;
        const information = await Information.findById(id);
        if (!information) return res.status(404).json({ message: "Information not found" });
        res.status(200).json(information);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createInformation = async (req, res) => {
    const { fullName, workHours, sickLeave, personalLeave, vacationLeave, offsiteWork, nonWorkingDays } = req.body;

    const newInformation = new Information({ fullName, workHours, sickLeave, personalLeave, vacationLeave, offsiteWork, nonWorkingDays });
    try {
        const savedInformation = await newInformation.save();
        res.status(201).json(savedInformation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateInformation = async (req, res) => {
    try {
        const { id } = req.params;
        const information = await Information.findById(id);

        if (!information) return res.status(404).json({ message: 'Information not found' });

        const updatedInformation = await Information.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ message: 'Information updated successfully', updatedInformation });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteInformation = async (req, res) => {
    try {
        const { id } = req.params;
        const information = await Information.findById(id);
        if (!information) return res.status(404).json({ message: 'Information not found' });

        await Information.findByIdAndDelete(id);
        res.status(200).json({ message: 'Information deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
