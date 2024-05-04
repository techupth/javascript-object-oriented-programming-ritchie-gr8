class EmailNotification {
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

class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId
        this.createdTime = createdTime
        this.content = content
        this.phoneNumber = phoneNumber
    }

    send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`)
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
