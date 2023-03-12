        
        const grid = document.querySelector('.grid-container');
        //grid.setAttribute('style', 'border: solid black 0.5px; height: 80px; width: 80px;');
        const box = document.createElement('div');
        
        //this function creates each individual pixel that will collectively constitute the grid in its entirety
        function buildBox(pixelLength,numOfPixelsPerSide) {
    
            const box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute('style', 'border: solid black 0.5px;');
            grid.appendChild(box);

            grid.setAttribute('style', `border: solid black 1px; height: 512px; width: 512px; grid-template-columns: repeat(${numOfPixelsPerSide}, ${pixelLength}`+ `px);`)

            grid.addEventListener('mousedown', mouseDown)

            function mouseDown(e){

                grid.addEventListener('mousemove', mouseMove)
                grid.addEventListener('mouseup', mouseUp)
                e.target.style.background = 'black';
                
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
        const pickColour = document.querySelector('.sel-col');
        const rainbow = document.querySelector('.rainbow');
        const eraser = document.querySelector('.eraser');
        const clearGrid = document.querySelector('.clear');

        pickColour.addEventListener("click", ()=>{


        })

        rainbow.addEventListener("click", ()=>{

            
        })

        eraser.addEventListener("click", ()=>{

            
        })

        clearGrid.addEventListener("click", ()=>{
            
            document
              .querySelectorAll(".box")
              .forEach((e) => e.style.background = 'white');

        })


        const closeModal = function () {

            modal.classList.add('hidden');
            overlay.classList.add('hidden');
            
        }

        function reset() {
            document
              .querySelectorAll(".box")
              .forEach((e) => e.parentNode.removeChild(e));
        }




        openModalBtn.addEventListener("click", ()=>{

            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');

        });
        
        closeModalBtn.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);


        function checkVal(glength){

            if(glength > 100){
                
                const modalFlex = document.querySelector(".flex");
                const alertMsg = document.createElement('div');

                alertMsg.classList.add('alertMsg');
                alertMsg.setAttribute('style','display:flex; font-size: 10pt; width: 250px; height:10px; color: red;')
                alertMsg.textContent = 'Grid dimensions cannot exceed a value of 100'
                modalFlex.appendChild(alertMsg)
            }
            else{

                reset();
                //once submit is clicked it should remove the old grid then close the modal
                closeModal();            
                createGrid(glength);
            }
        }

        function getVals() {

            const gridLength = document.getElementById('length').value;
            checkVal(gridLength);

        }


        function createGrid(gridDimension) {

            let gridUnits = gridDimension*gridDimension;
            let unitSize = 512/gridDimension;

            for (let currentGridUnit = 0; currentGridUnit < gridUnits; currentGridUnit++){

                buildBox(unitSize,gridDimension);
            }     

            document.getElementById('length').value = "";
            //document.getElementById('width').value = "";
        }

        createGrid(4);