# WebdriverIO tests

WebdriverIO tests Automated Tests for android app.

## Table of Contents
1. [Summary](#summary)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Usage](#usage)

## Summary
This repository contains automated tests for android using the WebdriverIO framework and Browserstack.

## Requirements
- Node.js (v20.13.1 or higher)
- WebdriverIO (v9.10.1 or higher)
- Appium UiAutomator2 Driver (v4.1.0 or higher)

Most of the dependencies can be downloaded throught using this command after cloning repository:
    ```
    npm install
    ```
Please make sure you have the necessary dependencies installed and the environment properly configured before running the tests. You can customize the tests in the [specs](test/specs/) directory and configure the WebdriverIO options in the [config](wdio.config.js) file as needed.

## Installation
1. Clone this repository to your local machine.
    ```
    git clone https://github.com/wasadar/test-native-demo-app.git
    ```

2. Navigate to the project directory.
    ```
    cd test-native-demo-app
    ```

3. Install test's required dependencies.
    ```
    npm install
    ```

4. Execute this command to upload app to Browserstack:
    ```
    curl -u "browserstack-login:browserstack-key" -X POST "https://api-cloud.browserstack.com/app-automate/upload" -F "file=@./android.wdio.native.app.v1.0.8.apk" -F "custom_id=DemoApp"
    ```

5. Copy .env.example and name .env, fill all variables with it's actual values.

## Usage
### Running Tests
To run the automated tests using WebdriverIO, you can use the following npm scripts defined in the `package.json` file:

- Run the automated tests using WebdriverIO:
    ```
    npm run test
    ```