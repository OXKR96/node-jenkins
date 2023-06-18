pipeline{
    agent any
    stages{

        stage('Build'){
            steps{
                echo"etapa build no disponible"
            }
        }
            stage('Test'){
                steps{
                    echo"estaoa Test no disponible"
                }
            }
            stage('Deploy'){
                steps{
                    sh "docker-compose down -v"
                    sh "docker-compose up -d --build"
                }
            }

        }
    }

    
