# Stock Search App

This is a Stock Search App built with Next.js. The application provides stock search functionality and detailed views of stocks.

## Getting Started

### Check out the application

The application is deployed to Vercel: https://stock-search-app-two.vercel.app, but please note that the api key only allows 25 requests per day.

### Prerequisites

- Node.js
- pnpm
- Api key for Alpha Vantage API
- REDIS_URL

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/JozsefMezosi/stock-search-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd stock-search-app
   ```
3. Install dependencies:
   ```sh
   pnpm install
   ```

### Running the Development Server

To start the development server, run:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the project for production, run:

```sh
pnpm build
```

### Running in Production Mode

To run the project in production mode, run:

```sh
pnpm start
```

### Linting

To lint the project, run:

```sh
pnpm lint
```

## Features

### Stock Search

- Users can search for stocks using the search bar.
- The search results are displayed in a list with the stock name and symbol.
- Each search result item includes a link to view detailed stock information and a button to add/remove the stock from favorites.

### Stock Details

- Detailed stock information is displayed on a separate page.
- The stock details page includes:
  - Stock symbol, name and price
  - A button to add/remove stock from favorites
  - Last updated date
  - Stock price card
  - Stock volume and change card
  - Stock price comparison card
  - Stock price over time chart

### Favorites

- Users can add stocks to their favorites.
- The favorites list is displayed with the ability to search within the favorites.
- Each favorite item includes a link to view detailed stock information and a button to remove the stock from favorites.

## API Integration

- The app integrates with the Alpha Vantage API to fetch stock data.
- The API key is stored in the `.env` file.
- The REDIS_URL is store in the `.env` file.

## Redis Caching

- The app uses Redis for caching API responses to improve performance and reduce the number of API requests.
- Cached results are stored for one hour.
- The caching logic is implemented in the fetchAlphavantageApi function located in src/utils/fetch-alphavantage-api.ts.
