
// Create an Express application with:

// 1. A logging middleware that prints the HTTP method and URL.
// 2. An authentication middleware that checks whether an `Authorization` header exists.
// 3. A protected `GET /dashboard` route.
// 4. If the header is missing, return `401`.
// 5. If the header exists, allow the request to reach the route.
// 6. Register the middleware in the correct order.

// Test both cases using Postman:

// - Without Authorization header.
// - With Authorization header.
// Don't implement actual JWT verification yet; we'll cover that in authentication.