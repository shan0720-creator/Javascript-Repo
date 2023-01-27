//Reduce - Objects

//cart example

const cart = [
    {
        title: 'Samsung Galaxy S7',
        price: 599.99,
        amount: 1,
    },
    {
       title: 'google pixel',
       price: 499.99,
       amount: 2,
    },

    {
        title: 'Xiaomi Redmi Note 2',
        price: 699.99,
        amount: 4,
    },
    {
        title: 'Xiamo Redmi Note 5',
        price: 399.99,
        amount: 3,
    }
]

let total = cart.reduce((total,cartItem)=>{
    const {amount,price} = cartItem;
    //count items
    total.totalItems += amount
    //count sum
     total.cartTotal += amount.price;
 
},{
     totalItems :0,
     cartTotal: 0,

})
// github repo example

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'


