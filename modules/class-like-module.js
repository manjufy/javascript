const run = (jobId) => {};
const stop = (jobId) => {};
const pause = (jobId) => {};
const get = (jobId) => {};
module.exports = {
 run,
 stop,
 pause,
 get,
};

// Just an example
const UserModel = require('models/user');
const EmailService = require('services/email');
const NotificationService = require('services/notification');
const FileModel = require('models/file');
const Logger = require('services/logger');
const removeUserHandler = await (userId) => {
  const message = 'Your account has been deleted';
  try {
    const user = await UserModel.getUser(userId);
    await UserModel.removeUser(userId);
    await EmailService.send(userId, message);
    await NotificationService.push(userId, message);
    return true;
  } catch (e) {
    console.error(e);
    Logger.send('removeUserHandler', e);
  };
  return true;
};