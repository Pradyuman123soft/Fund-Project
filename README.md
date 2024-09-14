# Fund-Project
This is a web application for fundraising, built using Next.js and Tailwind CSS, with payment integration via Razorpay. The platform allows users to contribute funds securely and efficiently.

# Table of Contents
* Features
* Technologies Used
* Usage
* APIs
* Payment Integration
* Contributing
# Features
Responsive Design: Optimized for mobile, tablet, and desktop devices using Tailwind CSS.
Secure Payments: Integrated Razorpay for secure fund transactions.
User-friendly UI: Simple and intuitive interface to easily contribute to fundraisers.
API Integration: Fetch and manage fundraising campaigns using API endpoints.
Form Validation: Secure and validated forms for user inputs.
# Technologies Used
Next.js: React framework for building server-side rendered and static web applications.
Tailwind CSS: Utility-first CSS framework for custom design.
Razorpay: Payment gateway for secure fund transfers.
MongoDB (optional): For database management and storing user/fund data.
# Usage
1. Register as a user or log in to your account.
2. Browse fundraising campaigns.
3. Select a campaign and contribute by clicking the "Donate" button.
4. Enter the amount and proceed with the payment via Razorpay.
# APIs
The platform uses custom API routes for managing fundraisers and handling payment requests. Below are the key API routes:

* GET /api/campaigns: Fetch all available campaigns.
* POST /api/campaigns: Create a new fundraising campaign (admin only).
* POST /api/payment: Initialize the Razorpay payment process.
* For detailed API documentation, please refer to the /pages/api/ directory in the source code.

# Payment Integration
We use Razorpay for handling payments. The integration includes the following steps:

1. User selects a fundraiser and enters the amount.
2. A payment request is sent to the /api/payment endpoint.
3. Razorpay processes the payment, and the user receives a confirmation.
# Razorpay Setup
To set up Razorpay:

1. Create a Razorpay account and generate API keys.
2. Store the keys in the .env.local file.
3. Update the payment flow in the /pages/api/payment.js file.
# Contributing
If you'd like to contribute to this project, feel free to open a pull request. Any suggestions, bug fixes, or feature additions are welcome!
