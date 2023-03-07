        
        
        const grid = document.querySelector('.grid-container');
        grid.setAttribute('style', 'border: solid black 2px; height: 512px; width: 512px; grid-template-columns: repeat(16, 32px);')

        function buildBox() {

            const box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute('style', 'border: solid green 2px;');
            grid.appendChild(box);
        }
    
        
        function createGrid(x) {

    

                for (let column = 0; column < x; column++){

                    buildBox();
                    console.log(x)


                }
                //grid.setAttribute('style', 'grid-template-columns : repeat(16, 32px);')
                //grid.setAttribute('style','grid-template-columns:repeat(4, 100px);')
                
        }

        createGrid(256);