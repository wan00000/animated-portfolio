pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Clone repository') {
            steps {
                git branch: 'experimental', url: 'https://github.com/wan00000/animated-portfolio.git'
            }
        }
        stage('Build containers') {
            steps {
                sh "docker-compose -f ${DOCKER_COMPOSE_FILE} build"
            }
        }
        stage('Deploy (restart containers)') {
            steps {
                sh "docker-compose -f ${DOCKER_COMPOSE_FILE} down"
                sh "docker-compose -f ${DOCKER_COMPOSE_FILE} up -d"
            }
        }
    }
    post {
        failure {
            echo 'Build or deploy failed!'
            // You can add notification step here (email, Slack, etc)
        }
        success {
            echo 'Deployed successfully!'
        }
    }
}
