        
        const grid = document.querySelector('.grid-container');
        grid.setAttribute('style', 'border: solid black 1px; height: 512px; width: 512px;');
        const box = document.createElement('div');
        
        //this function creates each individual pixel that will collectively constitute the grid in its entirety
        function buildBox(x,y) {
            //grid.setAttribute('style', `border: solid black 1px; height: 512px; width: 512px; grid-template-columns: repeat(${x}, ${y});`)

            const box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute('style', 'border: solid black 1px;');
            grid.appendChild(box);

            grid.setAttribute('style', `border: solid black 1px; height: 512px; width: 512px; grid-template-columns: repeat(${y}, ${x}`+ `px);`)

            
            grid.addEventListener('mousedown', mouseDown)

            function mouseDown(){

                grid.addEventListener('mousemove', mouseMove)
                grid.addEventListener('mouseup', mouseUp)
                
                function mouseMove(e){
                    e.target.style.background = 'black';
                }

                function mouseUp(){
                    grid.removeEventListener('mousemove',mouseMove)
                }

            }   
            
        }






        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');
        const openModalBtn = document.querySelector('.btn-open');
        const closeModalBtn = document.querySelector('.btn-close');
    
        const openModal = function () {

            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');

        }

        const closeModal = function () {

            modal.classList.add('hidden');
            overlay.classList.add('hidden');
            
        }

        function reset() {
            document
              .querySelectorAll(".box")
              .forEach((e) => e.parentNode.removeChild(e));
          }


        openModalBtn.addEventListener("click", openModal);
        closeModalBtn.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);

        function getVals() {

            reset();
            //once submit is clicked it should remove the old grid then close the modal

            closeModal();            

            const gridLength = document.getElementById('length').value;
            const gridWidth = document.getElementById('width').value;

            createGrid(gridLength,gridWidth);
        }


        function createGrid(length,width) {

            let gridUnits = length*width;
            let unitSize = 512/length;

            for (let currentGridUnit = 0; currentGridUnit < gridUnits; currentGridUnit++){

                buildBox(unitSize,length);
            }     

            document.getElementById('length').value = "";
            document.getElementById('width').value = "";
        }

        createGrid(16,16);