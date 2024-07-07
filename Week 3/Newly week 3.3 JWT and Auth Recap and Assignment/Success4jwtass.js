// write a function that takes in username and password as input and returns a JWT token with the username
// encoded inside an object.
// Should return null if the username is not a valid email or if the password is less than 8 characters.
// Use Zod here.

// write a function that takes jwt as an input and returns true if the jwt can be decoded(not verified).
// Return false otherwise.

// write a function that takes jwt as an input and return true if the jwt can be verified.
// return false otherwise.

const jwt = require("jsonwebtoken");
const zod = require("zod");

const jwtPassword = "secret";

// Zod schemas for validation
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(8);

// Function to sign a JWT
function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const token = jwt.sign({ username }, jwtPassword);
    return token;
}

// Function to verify a JWT
function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword);
        return true; // Return true if verification is successful
    } catch (e) {
        return false; // Return false if verification fails
    }
}

// Function to decode a JWT
function decodeJwt(token) {
    const decoded = jwt.decode(token);
    return !!decoded; // Return true if decoded successfully, otherwise false
}

// Example usage
const signedToken = signJwt("abhi@gmail.com", "1234567890");
console.log("Signed Token:", signedToken);

const isVerified = verifyJwt(signedToken);
console.log("Is Verified:", isVerified);

const isDecoded = decodeJwt(signedToken);
console.log("Is Decoded:", isDecoded);


