class StoreUserInformation {
    constructor() {
        this.usersFollowers = {};
        this.nextUserId = 1;
    }
    addUser(username) {
        const userId = this.nextUserId++;
        this.usersFollowers[userId] = { username: username };
        return userId;
    }
}
// Example usage:
const userStore = new StoreUserInformation();
const userId1 = userStore.addUser("Nancy");
const userId2 = userStore.addUser("Vivian");
const userId3 = userStore.addUser("Mary");
console.log(userStore.usersFollowers);