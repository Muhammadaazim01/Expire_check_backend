const NotificationService = require('./notification');

module.exports = {
    sendNotification: async (req, res) => {
        try {
            const { token, title, body } = req.body;

            if (!token || !title || !body) {
                return res.status(400).json({ message: 'Token, title, aur body required hain' });
            }

            const response = await NotificationService.sendPushNotification(token, title, body);
            res.status(200).json({ message: 'Notification sent', response });
        } catch (error) {
            console.error('Error in sendNotification:', error);
            res.status(500).json({ message: 'Error sending notification', error: error.message });
        }
    }
};
