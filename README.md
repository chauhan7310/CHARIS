# CHARIS - Luxury AI Gift Concierge

CHARIS is an AI-powered luxury gift recommendation platform built with the MERN Stack.

## Features

- User Registration & Login
- JWT Authentication
- MongoDB Database
- AI Gift Consultation
- Personalized Gift Recommendations
- Product Details
- Wishlist
- Dashboard
- Responsive UI

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs

## Folder Structure

```
CHARIS
│
├── client
│   ├── src
│   ├── components
│   ├── context
│   └── app
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   └── data
│
└── README.md
```

## Installation

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the server folder.

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## API Endpoints

### Authentication

- POST /api/auth/register
- POST /api/auth/login

### Consultation

- POST /api/consultation

### Recommendations

- GET /api/recommendations
- GET /api/recommendations/:id

## Future Improvements

- AI Recommendation Engine
- Stripe Payment Integration
- Email Notifications
- Admin Dashboard
- Order History

## Author

Aryan Chauhan