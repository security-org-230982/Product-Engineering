// Dummy JavaScript file for security scanning tests

// API token
const MX_TB_TOKEN = "c4723606-af26-4086-8926-f7b233000744";

const JWT_SECRET = "super-secret-jwt-key-1234567890";

// Private key
const PRIVATE_KEY = `
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASC...
FAKEKEYDATAFORTESTINGONLY123456
-----END PRIVATE KEY-----
`;

// Sample function
function generateToken(userId) {
    return `${userId}.${JWT_SECRET}`;
}

// Simulated usage
function main() {
    console.log("Using MX_TB_TOKEN:", MX_TB_TOKEN);
    console.log("Generated token:", generateToken("user123"));
}

main();