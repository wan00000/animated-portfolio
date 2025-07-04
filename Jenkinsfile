pipeline {
    agent any

    environment {
        // Define environment variables for Docker Compose and the Docker project
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'  // Adjust if your file is located elsewhere
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub repository
                git url: 'https://github.com/wan00000/animated-portfolio.git', branch: 'experiment'  // Change branch if needed
            }
        }
                
        
        stage('Deploy') {
            steps {
                // Stop any existing containers and restart with the new ones
                script {
                    try {
			echo "Stopping and removing any existing containers"
                    	sh "docker-compose -f ${DOCKER_COMPOSE_FILE} down --volumes --remove-orphans"
			sh "docker rm -f mysql || true"
			sh "docker rm -f nextjs || true"
			sh "docker-compose -f ${DOCKER_COMPOSE_FILE} build"
                        sh "docker-compose -f ${DOCKER_COMPOSE_FILE} up -d"
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        throw e
                    }
                }
            }
        }
    }

    post {
        always {
            // Clean up, notify or perform other tasks after each build
            echo 'Cleaning up after build...'
        }

        success {
            // Notify success (You can integrate notifications here like Slack, Email, etc.)
            echo 'Build and deployment successful!'
        }

        failure {
            // Notify failure (You can integrate notifications here like Slack, Email, etc.)
            echo 'Build or deployment failed.'
        }
    }
}

