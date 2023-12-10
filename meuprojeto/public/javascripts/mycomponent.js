var existe = false;

function apagar() {
    atomos = document.getElementsByClassName('atomo');
    camadas = document.getElementById('camada');
    eletrons = document.getElementById('eletrons');
    titulo = document.getElementById('titulo');

    atomo.parentNode.removeChild(atomo);
    camada.parentNode.removeChild(camada);
    eletrons.parentNode.removeChild(eletrons);
    titulo.parentNode.removeChild(titulo);
}

AFRAME.registerComponent('hidrogenio', {
    events: {
        click: function(e) {
            if(existe) {
                apagar();
                existe = false;
            }
        
                
            const newatomo = document.createElement('a-sphere');
            newatomo.setAttribute('color', 'blue');
            newatomo.setAttribute('position', '-10.920 1.929 -2.641');
            newatomo.setAttribute('scale', '0.12 0.12 0.12');
            newatomo.setAttribute('id','atomo');
            

            const newring = document.createElement('a-ring');
            newring.setAttribute('position', '-10.920 1.929 -2.641');
            newring.setAttribute('scale', '0.243 0.243 0.243');
            newring.setAttribute('rotation', '0 90 0');
            newring.setAttribute('radius-inner', '1.120');
            newring.setAttribute('id', 'camada');

            const neweletron = document.createElement('a-sphere');
            neweletron.setAttribute('position', '-10.926 1.859 -2.916');
            neweletron.setAttribute('scale', '0.055 0.055 0.055');
            neweletron.setAttribute('color', 'yellow');
            neweletron.setAttribute('id', 'eletrons');

            const titulo = document.createElement('a-entity');
            titulo.setAttribute('position', '-10.727 1.537 -3.891')
            titulo.setAttribute('text', 'value: Hidrogenio;');
            titulo.setAttribute('rotation', '0 90 0');
            titulo.setAttribute('scale', '3 3 3');
            titulo.setAttribute('align', 'center');
            titulo.setAttribute('id', 'titulo');

            this.el.sceneEl.appendChild(newatomo);
            this.el.sceneEl.appendChild(newring);
            this.el.sceneEl.appendChild(neweletron);
            this.el.sceneEl.appendChild(titulo);

            existe = true;
                   
        }
    },

});

AFRAME.registerComponent('litio', {
    events: {
        click: function(e) {
            if(existe) {
                apagar();

                existe = false;
            }

            
            const newatomo = document.createElement('a-sphere');
            newatomo.setAttribute('color', 'red');
            newatomo.setAttribute('position', '-10.920 1.929 -2.641');
            newatomo.setAttribute('scale', '0.12 0.12 0.12');
            newatomo.setAttribute('id','atomo');
            
            const newring = document.createElement('a-ring');
            newring.setAttribute('position', '-10.920 1.929 -2.641');
            newring.setAttribute('scale', '0.243 0.243 0.243');
            newring.setAttribute('rotation', '0 90 0');
            newring.setAttribute('radius-inner', '1.120');
            newring.setAttribute('id', 'camada');


            const neweletron = document.createElement('a-sphere');
            neweletron.setAttribute('position', '-10.926 2 -2.358');
            neweletron.setAttribute('scale', '0.055 0.055 0.055');
            neweletron.setAttribute('color', 'yellow');
            neweletron.setAttribute('id', 'eletrons');

            const titulo = document.createElement('a-entity');
            titulo.setAttribute('position', '-10.727 1.537 -3.891')
            titulo.setAttribute('text', 'value: Litio;');
            titulo.setAttribute('rotation', '0 90 0');
            titulo.setAttribute('scale', '3 3 3');
            titulo.setAttribute('align', 'center');
            titulo.setAttribute('id', 'titulo');

        
            this.el.sceneEl.appendChild(newatomo);
            this.el.sceneEl.appendChild(newring);
            this.el.sceneEl.appendChild(neweletron);
            this.el.sceneEl.appendChild(titulo);
            
            existe = true;
                  
        }
    },

});