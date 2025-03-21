# Cloud Video Streaming Service

A simple video streaming service using AWS S3, CloudFront for CDN, and a React-based frontend.

## Features
- Video storage in S3 bucket
- Fast content delivery via CloudFront
- React frontend to display and stream videos
- Optimized caching and access control

## Tech Stack
- **Frontend:** React
- **Backend:** AWS S3 + CloudFront (No dedicated backend)
- **Deployment:** AWS S3 + CloudFront

## Setup Instructions

1. **Clone the Repository:**
```bash
git clone https://github.com/AKBaman/Cloud_Mini_Project.git
cd Cloud_Mini_Project
```

2. **Install Dependencies:**
```bash
npm install
```

3. **Create a .env File:**
```plaintext
REACT_APP_CLOUDFRONT_URL=https://your-cloudfront-distribution-url
```

4. **Run the Application:**
```bash
npm start
```

## AWS Configuration
1. **S3 Bucket:**
   - Upload your videos to an S3 bucket.
   - Set the bucket to private and configure a CloudFront distribution to access it.

2. **CloudFront:**
   - Create a CloudFront distribution pointing to your S3 bucket.
   - Enable caching and compression for faster delivery.

## Optimizations
- Implemented CloudFront caching policies.
- Used lazy loading for videos in React.
- Added error handling for video loading failures.

## Usage
- Navigate to `http://localhost:3000` to access the video streaming interface.
- Videos are fetched from CloudFront, ensuring low latency and smooth streaming.

## Future Enhancements
- Add authentication for video access.
- Implement a backend to handle user management and video uploads.
- Improve UI with pagination and search for videos.

## Contributing
Feel free to fork the repo, create a new branch, and submit a pull request. Contributions are welcome!

## License
This project is licensed under the MIT License.

## Author
[Aman Batsh](https://github.com/AKBaman)

---

Now you’re all set! Let me know if you want to add any more details, like screenshots, API routes, or deployment steps.

