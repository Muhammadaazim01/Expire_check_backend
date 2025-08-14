const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const NotificationController = require('./notificationcontroller');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Notification send route
app.post('/send-notification', NotificationController.sendNotification);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
