function reject(message: string): never {
    throw new Error(message);
}

function processEvents(): never {
    while (true) {
        // Read message from a queue
    }
}

// processEvents();
reject('...');
console.log('Hello World');
