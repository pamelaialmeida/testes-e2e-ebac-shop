pipeline {
    agent any

    stages {
        stage('Clonar projeto') {
            steps {
                git 'https://github.com/pamelaialmeida/testes-e2e-ebac-shop.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar testes') {
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}
