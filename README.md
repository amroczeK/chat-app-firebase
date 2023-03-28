# Realtime Chat App &middot; <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/REACT-17.0.2-blue?longCache=true&style=for-the-badge" alt="Flutter"></a> <a href="https://firebase.google.com/" target="_blank"><img src="https://img.shields.io/badge/Firebase-Cloud-orange.svg?longCache=true&style=for-the-badge" alt="Firebase"></a>

This project was developed using ReactJs, Socket.io and deployed to Firebase, utilizing various cloud services like Firestore, Authentication, and Hosting.

[Live Demo](https://chat-app-realtime-f8f3b.web.app/)

### Features

- Secure Firestore rules
- Authentication via Google OAuth

### Chat App Preview

| Login View                                               | Chat Lobby View                                         |
| -------------------------------------------------------- | ------------------------------------------------------- |
| ![Alt text](./loginpreview.PNG?raw=true 'Login Preview') | ![Alt text](./chatpreview.PNG?raw=true 'Login Preview') |

## Getting Started

You can follow these instructions to build the project.

### Prerequisites

- Setup a project in GCP Firebase
- Enabled Authentication using 'Google' Sign-in method
- Enabled Cloud Firestore
- Enabled Hosting
- Configured the .env file in root directory with your projects Firebase config

#### Environment Variables (.env)

```
REACT_APP_API_KEY=<api key>
REACT_APP_AUTH_DOMAIN=<auth domain>
REACT_APP_PROJECT_ID=<project id>
REACT_APP_STORAGE_BUCKET=<storage bucket>
REACT_APP_MSG_SENDER_ID=<sender id>
REACT_APP_APPLICATION_ID=1:<app id>
REACT_APP_MEASUREMENT_ID=<measure id>
```

### Setup

#### Clone repistory

```
git clone https://github.com/amroczeK/chat-app-firebase .
```

#### Install dependencies

```
npm install
```

#### Run application

```
npm start
```

## Deployment

#### Build and deploy to Firebase

```
npm run build && firebase deploy
```
