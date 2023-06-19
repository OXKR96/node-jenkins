
pipeline{
    agent any

    stages {
        stage('clonar el respositorio'){
            steps{
            
                git branch: 'main', credentialsId: 'git-jenkins', url: 'https://github.com/OXKR96/node-jenkins.git'
                                                 
            }

        }
        stage('contruir imagen de Docker'){
          
            steps{
                script{
                    withCredentials([
                        string(credentialsId:'MONGO_URI',variable:'MONGO_URI')
                    ]){
                        docker.build('proyectos-backend-micro:v1','--build-arg MONGO_URI=${MONGO_URI}.')
                    }
                }
            }

        }
        stage('desplegar contenedors docker'){
            steps{
                script{
                    withCredentials([
                        string(credentialsId:'MONGO_URI',variable:'MONGO_URI')
                    ]){
                        sh"""
                            sed 's|\\${MONGO_URI}|${MONGO_URI}|g' docker-compose.yml > docker-compose-update.yml
                            docker-compose -f docker-compose-update.yml up -d 
                        """
                    }
                }
            }

        }
    }
}
