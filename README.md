# Sanity CMS investigation

## Stack

- Nextjs (app router)
- Sanity CMS v3
- Tailwind CSS

## Setup

Follow these steps to set up the project in your local development environment:

1. **Clone the Repository**

   Navigate to the location where you want the repository on your local machine and run:

   ```bash
   git clone <repo-url>
   ```

2. **Install Dependencies**

   Navigate into the cloned repository and install the required packages by running:

   ```bash
   npm install
   ```

3. **Environment Variables Setup**

   Create a `.env` file in the root directory of the project and update the following keys with your respective values:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=
   NEXT_PUBLIC_SANITY_DATASET=
   SANITY_API_READ_TOKEN=
   ```

4. **Run the Development Server**

   Start the local development server by running:

   ```bash
   npm run dev
   ```

5. **Visit the App**

   Open your web browser and go to `http://localhost:3000` to see the running app.

6. **Visit the Sanity CMS**

   To explore the Sanity CMS, navigate to `http://localhost:3000/studio`.
