pipeline {
    agent {
        label 'Ubuntu'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Hope it works'
                echo 'Install dependencies with npm'
                sh 'npm install'

                echo 'Build with webpack'
                sh 'npm run build'
            }
        }
         stage('Test') {
            steps {
                echo 'This will be the test stage'
                sh 'npm run test'
            }
        }
        
        stage('Publish') {
            steps {
                echo 'Publish with npm'
                sh 'npm publish'
            }
        }

       
            stage ('Ansible') {
          node('Ubuntu') {
              echo 'This will be the ansible stage'
            //  sh 'git clone https://github.com/MarcosSaavedra/config-Ansible.git'
            //  sh 'ansible-playbook -i configuration-management/hosts configuration-management/playbook.yaml'
            //  sh 'npm install my-package'
             // sh 'npm run dev'

            //   sh '''
            //     RESULT_CODE=`curl -I http://localhost/.../..`
            //     if [ `cat $RESULT_CODE` | grep "HTTP/2 200" ]; then echo "PASSED!"; else exit 1; fi
            //   '''
          }
        }
    }
}