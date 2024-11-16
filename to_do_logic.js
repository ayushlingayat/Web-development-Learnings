let todo = [];

        let req = prompt("Enter the request here");

        console.log(req);

        while(true){
            if(req == "quit"){
                console.log('Quiting the app');
                break;
            }


            if(req == "list"){
                
                // pure todo koo iterate karna for of loop seeh 
                console.log('-------------');
                for(task of todo){
                    console.log(task);
                }
                console.log('-------------');
            }

            else if(req == "add"){
               let task_req = prompt('Please enter the task you want to add');
               todo.push(task_req);
            }

            // else if(req == "delete"){

            // }
            prompt("Enter the request here");
        }
