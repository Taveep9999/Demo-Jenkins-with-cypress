pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Taveep9999/Demo-Jenkins-with-cypress.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run API Server') {
            steps {
                bat 'start /B npm start'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                bat 'npm run cypress:run'
            }
        }
    }

    post {
        always {
            bat 'taskkill /F /IM node.exe /T'
        }
    }
}
