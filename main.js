document.addEventListener("DOMContentLoaded", function () {
    const presentList = document.getElementById("present-list");
    const modal = document.getElementById("janela-modal");    
    const modalContent = document.getElementById("modal-content");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-name");
    const closeButton = document.getElementById("close");

    // Exemplo de lista de 30 presentes com URLs de imagem fictícias
    const presents = [
        { name: "Joãozinho", imageUrl: "fotos/fotojoao.jpeg" },
        { name: "Presente 2", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 3", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 4", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 5", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 6", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 7", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 8", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 9", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 10", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 11", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 12", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 13", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 14", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 15", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 16", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 17", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 18", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 19", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 20", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 21", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 22", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 23", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 24", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 25", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 26", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 27", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 28", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 29", imageUrl: "https://placekitten.com/300/200" },
        { name: "Presente 30", imageUrl: "https://placekitten.com/300/200" }
    ];

    // Função para gerar os cards em fileiras
    function generateRows() {
        let rowIndex = 1;
        let currentRow;

        presents.forEach((present, index) => {
            if (index % 3 === 0) {
                // Inicia uma nova fileira a cada 3 presentes
                currentRow = document.createElement("div");
                currentRow.classList.add("row");
                rowIndex++;
            }

            const card = document.createElement("div");
            card.classList.add("card");

            
            const content = document.createElement("p");
            content.textContent = present.name;
            
            // Adiciona uma imagem fictícia para os cards
            const image = document.createElement("img");
            image.src = present.imageUrl;
            image.alt = present.name;
            
            // Adicione um botão ou texto na parte inferior do card
            const button = document.createElement("button");
            button.textContent = "Detalhes";
            button.classList.add("card-button");
            
            const organizador = document.createElement("div");
            organizador.classList.add("organizador");

            //gatilho para abrir o modal ficará no botão "detalhes" do card
            button.addEventListener("click", function () {
                openModal(present);
            });

            
            card.appendChild(image);
            card.appendChild(organizador);

            organizador.appendChild(content);
            organizador.appendChild(button);

            currentRow.appendChild(card);

            if (index % 3 === 2 || index === presents.length - 1) {
                // Adiciona a fileira ao presenteList quando a fileira está completa ou é o último presente
                presentList.appendChild(currentRow);
            }
            
        });
    }
    
    function openModal(present){
        console.log("Abrindo modal para:", present.name);
        modalImage.src = present.imageUrl;
        modalImage.alt = present.name;
        modalName.textContent = present.name;

        modal.style.display = "block";
    }

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
      });

    window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    //Chamando a função para gerar os cards em fileiras
    generateRows();

});

