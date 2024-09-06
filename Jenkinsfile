pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://your-repo-url.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run API Server') {
            steps {
                sh 'npm start &'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npm run cypress:run'
            }
        }
    }

    post {
        always {
            sh 'pkill node'
        }
    }
}
