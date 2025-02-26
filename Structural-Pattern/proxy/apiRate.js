function apiCall() {
    console.log("API request sent...");
}

const limitedApiCall = new Proxy(apiCall, {
    apply(target, thisArg, args) {
        if (!limitedApiCall.lastCall || Date.now() - limitedApiCall.lastCall > 3000) {
            limitedApiCall.lastCall = Date.now();
            return target.apply(thisArg, args);
        } else {
            console.log("API rate limit exceeded. Try again later.");
        }
    }
});

// Usage
limitedApiCall(); // Output: API request sent...
limitedApiCall(); // Output: API rate limit exceeded. Try again later.
setTimeout(() => limitedApiCall(), 4000); // Output (after 4 sec): API request sent...
