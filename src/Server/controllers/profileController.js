const { getUserById, updateUserById } = require('../models/User');
const ALLOWED_UPDATE_FIELDS = ['name', 'phone', 'locality', 'road', 'house', 'landmark'];

async function getUserProfile(req, res) {
    const { UserId } = req.body;
    try {
        const user = await getUserById(UserId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Destructure to get only the fields we want
        const { _id, password, ...userWithoutSensitiveInfo } = user;
        
        res.status(200).json({ user: userWithoutSensitiveInfo });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error: error.message });
    }
}

async function updateUserProfile(req, res) {
    const { UserId, updates } = req.body;
    try {
        // Filter updates to only include allowed fields
        const filteredUpdates = {};
        ALLOWED_UPDATE_FIELDS.forEach(field => {
            if (updates.hasOwnProperty(field)) {
                filteredUpdates[field] = updates[field];
            }
        });

        if (Object.keys(filteredUpdates).length === 0) {
            return res.status(400).json({ message: 'No valid fields to update' });
        }

        const result = await updateUserById(UserId, filteredUpdates);
        
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Get updated user profile
        const updatedUser = await getUserById(UserId);
        const { _id, password, ...userWithoutSensitiveInfo } = updatedUser;

        res.status(200).json({ 
            message: 'Profile updated successfully',
            user: userWithoutSensitiveInfo 
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user profile', error: error.message });
    }
}

module.exports = {
    getUserProfile,
    updateUserProfile
};
