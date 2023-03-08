        
        
        const grid = document.querySelector('.grid-container');
        grid.setAttribute('style', 'border: solid black 1px; height: 512px; width: 512px; grid-template-columns: repeat(16, 32px);')
        
        //this function creates each individual pixel that will collectively constitute the grid in its entirety
        function buildBox() {

            const box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute('style', 'border: solid black 1px;');
            grid.appendChild(box);

            grid.addEventListener('mousedown', function (e) {
                e.target.style.background = 'black';
              });
            
        }


        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');
        const openModalBtn = document.querySelector('.btn-open');
        const closeModalBtn = document.querySelector('.btn-close');
        const submitBtn = document.querySelector('.btn-submit');

        const openModal = function () {

            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }

        const closeModal = function () {

            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }


        openModalBtn.addEventListener("click", openModal);
        closeModalBtn.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);

        //const gridLength = document.getElementById('length').value;
        //const gridWidth = document.getElementById('width').value;

        function getVal(){

            closeModal();
            
            const gridLength = document.getElementById('length').value;
            const gridWidth = document.getElementById('width').value;
            console.log(gridLength)
            console.log(gridWidth)
        }


        function createGrid(x,y) {

            let gridUnits = x*y;

            for (let currentGridUnit = 0; currentGridUnit < gridUnits; currentGridUnit++){

                buildBox();
            }     
        }

        createGrid(16,16);