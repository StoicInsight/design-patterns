class OrderManager {
    constructor(){
        this.orders = []
    }

    placeOrder(order, id) {
        this.orders.push(id)
        return `You have successfully orderd ${order} (${id})`
    }

    trackOrder(id) {
        return `Your order ${id} will arrive in 20 minutes`
    }

    cancelOrder(id) {
        this.orders = this.orders.filter(order => order.id !== id)
        return `You have canceled you ${id}`
    }
}

const manager = new OrderManager()