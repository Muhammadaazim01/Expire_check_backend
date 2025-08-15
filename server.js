require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const NotificationController = require('./notificationController'); // capital C

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Notification backend is running');
});

app.post('/send-notification', async (req, res) => {
    await NotificationController.sendNotification(req, res);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
