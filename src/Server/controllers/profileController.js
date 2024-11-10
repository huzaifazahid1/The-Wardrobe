const { getUserById } = require('../models/User');

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

module.exports = {
    getUserProfile
};
