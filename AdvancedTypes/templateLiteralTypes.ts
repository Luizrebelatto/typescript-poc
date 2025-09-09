type WelcomeMessage = `Welcome ${string}`;

let message: WelcomeMessage = `Welcome Luiz`;  // ok
let messageWelcome: WelcomeMessage = `Welcome. Luiz`;  // Type '"Welcome. Luiz"' is not assignable to type '`Welcome ${string}`'.
