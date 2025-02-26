// Strategy 1: Credit Card Payment
class CreditCardPayment {
    pay(amount) {
        console.log(`Paid $${amount} using Credit Card.`);
    }
}

// Strategy 2: PayPal Payment
class PayPalPayment {
    pay(amount) {
        console.log(`Paid $${amount} using PayPal.`);
    }
}

// Strategy 3: Bitcoin Payment
class BitcoinPayment {
    pay(amount) {
        console.log(`Paid $${amount} using Bitcoin.`);
    }
}

// Context Class
class PaymentContext {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    setStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    executePayment(amount) {
        this.paymentStrategy.pay(amount);
    }
}

// Usage
const payment = new PaymentContext(new CreditCardPayment());
payment.executePayment(150); // Output: Paid $150 using Credit Card.

payment.setStrategy(new PayPalPayment());
payment.executePayment(250); // Output: Paid $250 using PayPal.

payment.setStrategy(new BitcoinPayment());
payment.executePayment(350); // Output: Paid $350 using Bitcoin.
