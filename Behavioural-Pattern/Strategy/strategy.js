//strategy-1: Credit Card Payment
const creditCardPayment = {
    pay(amount){
        console.log(`Paid $${amount} using Credit Card.`);
    }
};

//Strategy-2: PayPal Payment
const paypalPayment = {
    pay(amount){
        console.log(`Paid $${amount} using PayPal.`);
    }
}

//Strategy-3: Bitcoin payment
const bitcoinPayment = {
    pay(amount){
        console.log(`Paid $${amount} using Bitcoin.`);
    }
}

//Context Class(handles strategy)
class PaymentContext{
    constructor(paymentStrategy){
        this.paymentStrategy = paymentStrategy;
    }

    setStrategy(paymentStrategy){
        this.paymentStrategy = paymentStrategy;
    }

    executePayment(amount){
        this.paymentStrategy.pay(amount)
    }
}


// Usage
const payment = new PaymentContext(creditCardPayment);
payment.executePayment(100); // Output: Paid $100 using Credit Card.

payment.setStrategy(payPalPayment);
payment.executePayment(200); // Output: Paid $200 using PayPal.

payment.setStrategy(bitcoinPayment);
payment.executePayment(300); // Output: Paid $300 using Bitcoin.