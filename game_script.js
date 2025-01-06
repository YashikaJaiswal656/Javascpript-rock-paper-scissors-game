       
        choices = (choose) => {
            let user=choose
            let user_text = document.querySelector(".para").textContent = `user choice is ${choose}`;
            let valuee = ["rock", "paper", "scissor"]
        let div = Math.floor(Math.random() * 3)
        let comp_choice = valuee[div]

            let comp_text = document.querySelector(".para2").textContent = `computer choice is ${comp_choice}`
            let comp=comp_choice
            
            if (user ===comp) {
                document.querySelector(".para3").textContent = "the match is draw"
                document.querySelector(".para3").style.backgroundColor = "grey"
               
            }
            else if ((user== "rock" && comp == "paper") || (user == "paper" && comp == "scissor") || (user == "scissor" && comp == "rock")) {
                document.querySelector(".para3").textContent = "user loose "
                document.querySelector(".para3").style.backgroundColor = "rgb(177, 37, 37)"
              


            } else {
                document.querySelector(".para3").textContent = "user win"
                document.querySelector(".para3").style.backgroundColor = "green"
               

            }

        }
        let user_rock = document.getElementById("rock").addEventListener("click", () => choices("rock"))
        let user_paper = document.getElementById("paper").addEventListener("click", () => choices("paper"))
        let user_scissor = document.getElementById("scissor").addEventListener("click", () => choices("scissor"))

