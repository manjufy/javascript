/**
 * This pattern can come very handy when you have a certain algorithm that repeats itself throughout your application with a slight variation in its logic. 
 * The algorithm in this case is called “context” while the variable part is called “strategy”.
 * 
 * https://isamatov.com/avoid-ugly-if-else-blocks-with-strategy/
 */

 // Email Strategy
const mailgun = require('mailgun-js')({
    apiKey: api_key,
    domain: domain
});

const EmailStrategy = {
    send: function(receiptHtml, userEmail) {
        const emailBody = getEmailBody(receiptHtml, userEmail);
        mailgun
            .messages()
            .send(emailBody, function (error, body) {
                console.log(body);
            });
    }
}

// Slack Strategy
const slack = require('slack') 
const SlackStrategy = {
    send: function(receiptHtml, userEmail) {
        const user = getUserFromEmail(userEmail);
        const slackMessageBody = getSlackMessageBody(receiptHtml, userEmail);
        slack.chat.postEphemeral({ token, channel, slackMessageBody, user })
    }
}

// Manager
class ReceiptManager {
    _generateReceiptHtml(orderId, userEmail) {
        // generates and returns HTML of the receipt
    }

    sendReceipt(orderId, userEmail, sendStrategy) {
        const receiptHTML = this._generateReceiptHtml(orderId, userEmail);
        sendStrategy.send(receiptHTML, userEmail);
    }
}

// Client
const ReceiptManager = require('./receipt-manager');
const {
    EmailStrategy,
    SlackStrategy,
} = require('./strategy');
 
function main(orderId, userEmail) {
    const manager = new ReceiptManager();
 
    const email = new EmailStrategy();
    manager.sendReceipt(orderId, userEmail, email);
 
    const slack = new SlackStrategy();
    manager.sendReceipt(orderId, userEmail, slack);
}