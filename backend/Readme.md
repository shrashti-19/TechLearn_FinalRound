🔗 API Endpoints

🔐 Authentication

POST /api/auth/signup

Description: Register a new user.

Request Body:
```bash
{
    "username": "ABC",
    "password" : "abc"
}
```
Response:
```bash
{
  "message": "User registered successfully."
}
```

POST /api/auth/login
Description: Log in with existing user credentials.

Request Body:
```bash
{
  "username": "ABC",
  "password": "yourPassword"
}
```

Response:
```bash
{
  "message": "Login successful",
  "token": "JWT_TOKEN_HERE"
}
```

📚 Exercises
GET /api/exercises
Description: Fetch all available exercises.

Response:

```bash
[
  {
    "id": "1",
    "title": "Exercise 1",
    "description": "..."
  },
  ...
]
```
📈 User Progress
GET /api/progress/:username
Example: /api/progress/ABC

Description: Get progress data for a specific user.

Response:
```bash
{
  "completed": ["exercise1", "exercise2"],
  "lastExercise": "exercise2"
}
```

POST /api/progress/:username
Example: /api/progress/ABC

Description: Save or update progress for a specific user.

Request Body:
```bash

{
  "completed": ["exercise1", "exercise2"],
  "lastExercise": "exercise2"
}

```
Response:
```
{
  "message": "Progress saved successfully."
}
```


⚠️ Important Notes
Ensure db/progress.json exists and contains {} before any progress data is saved.

All endpoints use JSON format for request/response.