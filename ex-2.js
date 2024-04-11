class Notification {
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId
        this.createdTime = createdTime
        this.content = content
        this.receiver = receiver
    }

    send() {
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class EmailNotification extends Notification {
    constructor(notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver)
    }
}

class SMSNotification extends Notification {
    constructor(notificationId, createdTime, content, phoneNumber) {
        super(notificationId, createdTime, content, phoneNumber)
    }
}


const sendEmail = new EmailNotification(
    1, new Date(), "this is email content", "test@email.com"
)
sendEmail.send()

const sendSms = new SMSNotification(
    1, new Date(), "this is sms content", "0889997777"
)
sendSms.send()
