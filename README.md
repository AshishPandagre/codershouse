<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Codershouse</h3>

  <p align="center">
    A platform to exchange ideas with other developers.
    <br />
    <br />
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

Clubhouse is a social network based on voice—where developers around the world come together to talk, listen and learn from each other in real-time.

### Built With

* [![React][React.js]][React-url]
* [![ExpressJS][ExpressJs]][express-url]
* [![MongoDB][MongoDB]][mongoDB-url]
* [![webRTC][webRTC]][webRTC-url]
* [![HTML][HTML]][html-url]
* [![CSS][CSS]][css-url]
* [![Twilio][Twilio]][twilio-url]

<!-- GETTING STARTED -->
## Getting Started

Below are the methods needed to follow to get it running locally.

### Prerequisites

This is a list of things you need to use the project.
* npm
* mongodb

### Installation

Since codershouse uses Twilio for sending OTPs.

1. Get a free API Key at [https://www.twilio.com/](https://www.twilio.com/)
2. Generate SMS_SID and SMS_AUTH_TOKEN.
2. Clone the repo
   ```sh
   git clone https://github.com/AshishPandagre/codershouse
   ```
3. Install NPM packages 
   ```sh
   cd backend
   npm i
   cd ..
   cd frontend
   npm i
   ```
4. Create a .env file in frontend and backend folder using data from '.env.example'.
5. Enter your Twilio keys and other required details.
6. Run the backend server
    ```sh
    npm start
    ```
7. Run the frontend
    ```sh
    npm start
    ```



## Screenshots

OTP page <br/><img src="https://raw.githubusercontent.com/AshishPandagre/codershouse/main/screenshots/Screenshot%20from%202022-07-08%2023-49-49.png?token=GHSAT0AAAAAABVWBDWQ6AXV5U4TGU2DPYYKYWIQYPQ" width="40%" height="40%"> <br/> <br/>

Add profile picture <br/> <img src="https://raw.githubusercontent.com/AshishPandagre/codershouse/main/screenshots/Screenshot%20from%202022-07-08%2023-50-09.png?token=GHSAT0AAAAAABVWBDWQHQEH6XD4RWNFQAKUYWIQYAQ " width="40%" height="40%"><br/><br/>

Audio Rooms <br/><img src="https://raw.githubusercontent.com/AshishPandagre/codershouse/main/screenshots/Screenshot%20from%202022-07-08%2023-55-06.png?token=GHSAT0AAAAAABVWBDWRQUBHVEXTNGZLPFK6YWIQYQQ" width="40%" height="40%"><br/><br/>

SIngle Audio room layout<br/><img src="https://raw.githubusercontent.com/AshishPandagre/codershouse/main/screenshots/Screenshot%20from%202022-07-09%2000-02-11.png?token=GHSAT0AAAAAABVWBDWQLTKCOKNRWSCIXPJAYWIQYRA" width="40%" height="40%"><br/><br/>


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[ExpressJS]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: http://expressjs.com/

[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[mongoDB-url]: https://www.mongodb.com/

[webRTC]: https://img.shields.io/static/v1?style=for-the-badge&message=WebRTC&color=333333&logo=WebRTC&logoColor=FFFFFF&label=
[webRTC-url]: https://webrtc.org/

[HTML]: https://img.shields.io/static/v1?style=for-the-badge&message=HTML5&color=E34F26&logo=HTML5&logoColor=FFFFFF&label=
[html-url]: https://www.w3schools.com/html/

[Twilio]: https://img.shields.io/static/v1?style=for-the-badge&message=Twilio&color=F22F46&logo=Twilio&logoColor=FFFFFF&label=
[twilio-url]: https://www.twilio.com/

[CSS]: https://img.shields.io/static/v1?style=for-the-badge&message=CSS3&color=1572B6&logo=CSS3&logoColor=FFFFFF&label=
[css-url]: https://www.w3schools.com/css/
