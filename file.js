// class StoreUserInformation {
//     constructor() {
//         this.usersFollowers = {};
//         this.nextUserId = 1;
//     }
//     addUser(username) {
//         const userId = this.nextUserId++;
//         this.usersFollowers[userId] = { username: username };
//         return userId;
//     }
// }

// const userStore = new StoreUserInformation();
// const userId1 = userStore.addUser("Nancy");
// const userId2 = userStore.addUser("Vivian");
// const userId3 = userStore.addUser("Mary");
// console.log(userStore.usersFollowers);


class product{
    constructor(name,price){
        this.name = name
        this.price = price
    }
    calculateDiscount(){
        discount = this.price*20/100
        return discount
    }

}
const productStore = new product("rice", 2000);
product.calculateDiscount(20)
console.log(product);