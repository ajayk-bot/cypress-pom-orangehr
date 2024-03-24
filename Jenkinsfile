pipeline {
    agent any
        parameters {
            string(name: 'SPEC', defaultValue: 'cypress/e2e/tests/*.cy.js', description: 'Ej: cypress/e2e/features/*.feature')
            choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Pick the web browser you want to use to run your scripts')
    }
    // options {
    //     ansiColor('xterm')
    // }
    
    stages {
        
        stage('Build'){
            //The steps section defines a series of one or more steps to be executed in a given stage directive.
            steps {
                echo "Building the application"
            }
        }
        
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
              
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }

     post {
        always {
            //The script step takes a block of Scripted Pipeline and executes that in the Declarative Pipeline. 
            //For most use-cases, the script step should be unnecessary in Declarative Pipelines, but it can provide
            //a useful "escape hatch." script blocks of non-trivial size and/or complexity should be moved into Shared Libraries instead.
            // script {
            //     BUILD_USER = getBuildUser()
            // }
            
            // slackSend channel: '#jenkins-example',
            //     color: COLOR_MAP[currentBuild.currentResult],
            //     message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\n Tests:${SPEC} executed at ${BROWSER} \n More info at: ${env.BUILD_URL}HTML_20Report/"
            bat 'xcopy /s C:\\Users\\ajay\\.jenkins\\workspace\\CypressE2F_Pipeline\\cypress\\report $WORKSPACE\\reports'
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
            //deleteDir()
        }
    }

}