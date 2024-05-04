//  Start coding here
class User {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }
}

class PostList {
    constructor(posts = []) {
        this.posts = posts
    }

    addPost(post) {
        this.posts.push(post)
    }

    sharePost(post) {
        console.log(`You've shared post ${post.title} to your friend.`)
    }
}

class Post {
    constructor(id, title, content, comments = []) {
        this.id = id
        this.title = title
        this.content = content
        this.comments = comments
    }

    addComment(comment) {
        this.comments.push(comment)
    }
}

class Comment {
    constructor(id, content, createdBy, like = 0) {
        this.id = id
        this.content = content
        this.createdBy = createdBy
        this.like = like
    }

    addLike() {
        this.like += 1
    }
}

class Facebook {
    constructor(groupList = [], pageList = []) {
        this.groupList = groupList
        this.pageList = pageList
    }

    addGroup(group) {
        this.groupList.push(group)
    }

    addPage(page) {
        this.pageList.push(page)
    }
}

class FacebookPage {
    constructor(name) {
        this.name = name
    }
}

class FacebookGroup {
    constructor(name) {
        this.name = name
    }
}

class Notification {
    constructor(id) {
        this.id = id
    }

    send(post, comment) {
        console.log(`Notification: ${comment.createdBy} has just commented on this post—${post.title}`)
    }
}

