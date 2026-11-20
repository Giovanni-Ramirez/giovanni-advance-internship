
## This is Summarist a online book subscription service to read and enjoy all your favorite books. 

This website takes you from Account creation, to viewing your book and subscribing to a monthly service through strip and all through a responsive and clean UI.


### This the landing page
<img width="2065" height="1199" alt="image" src="https://github.com/user-attachments/assets/7194717d-5d7d-47ca-a6cd-160717498188" />
This is the landing page where you can read about the website and why you should become a member

### This is the for you page
<img width="2451" height="1196" alt="image" src="https://github.com/user-attachments/assets/b6101809-6a62-4a05-9379-2da12d4c5962" />
This is where you can see the book that have been call by the website

### This is the read / audio page
<img width="2529" height="1186" alt="image" src="https://github.com/user-attachments/assets/78425f72-91d2-440c-895e-440099818427" />
This is where you can read the longer summary of the book and also listen to the audio with the audio interface


## How to test the site

There is two accounts you can use to login
  1. email: testemail123@gmail.com
     password: testemail123
  This on will have a subscription and be able to see any books

  2. email: testemail12345@gmail.com
     password: testemail12345
  This one will just be an account with no subscription so you can view the plan page.

  3. uses your email to make an account and if you want to test out the stripe subscription then use 4242 4242 4242 4242

## Getting Started

### Prerequisites

* **Node.js:** `v20.19.41` (or any Node `v20.9+` LTS)
  * *If you use [nvm](https://github.com) (or [nvm-windows](https://github.com)), run:*
    ```bash
    nvm install 20.19.41
    nvm use 20.19.41
    ```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd giovanni-advance-internship
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Firebase and Stripe configuration keys:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
   ```
   *(Note: This project uses `@dotenvx/dotenvx`—if you have a `.env.keys` file for encrypted variables, place it in the root directory.)*

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application locally, or visit the live deployment at [giovanni-advance-internship.vercel.app](https://vercel.app).

