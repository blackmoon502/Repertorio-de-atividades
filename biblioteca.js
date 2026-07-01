const biblioteca = {
    livros: [],
    estoque: 1,


    adicionarLivros(nome, autor, ano, genero) {
        const livro = {
            nome,
            autor,
            ano,
            genero,
            disponivel: true,
            alugado: false,
            vezesAlugado: 0,
            estoque: 1
        };

        this.livros.push(livro);
    },

    mostrarLivros(){
        for(let i=0; i<this.livros.length; i++){
            const L= this.livros[i];
            console.log(L.nome + " - " + L.autor + " - " + L.ano + " - " + L.genero);
        }
    },  
    livrosAlugar(nome){
        for(let i = 0; i < this.livros.length; i++){
            const L = this.livros[i];
    
            if(L.nome === nome){
                if(L.disponivel && L.estoque > 0){
                    L.disponivel = false;
                    L.alugado = true;
                    L.vezesAlugado++;
                    L.estoque--;
    
                    console.log("Livro alugado:", L.nome);
                } else {
                    console.log("Livro indisponível:", L.nome);
                }
                return;
            }
        }
    
        console.log("Livro não existe");
    },
    alugar(nome) {
        if (!nome) {
            console.log("Informe o nome do livro que deseja alugar.");
            return;
        }

        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];

            if (l.nome === nome) {
                if (l.estoque > 0) {
                    l.estoque--;
                    l.vezesAlugado++;

                    console.log(`O livro "${nome}" foi alugado com sucesso!`);
                } else {
                    console.log(`O livro "${nome}" está sem estoque, por favor escolha outro livro.`);
                }

                return;
            }
        }

        console.log(`O livro "${nome}" não existe na biblioteca.`);
    },

    devolver(nome) {
        if (!nome) {
            console.log("Informe o nome do livro que deseja devolver.");
            return;
        }

        for (let i = 0; i < this.livros.length; i++) {
            const l = this.livros[i];

            if (l.nome === nome) {
                if (l.estoque < l.estoqueInicial) {
                    l.estoque++;
                    console.log(`O livro "${nome}" foi devolvido com sucesso!`);
                } else {
                    console.log(`O livro "${nome}" já está disponível na biblioteca.`);
                }

                return;
            }
        }

        console.log(`O livro "${nome}" não existe na biblioteca.`);
    },
    removerlivros(nome){
        for(let i=0; i<this.livros.length; i++){
            if(this.livros[i].nome.toLowerCase() === nome.toLowerCase()){
                const removido=this.livros[i]
                this.livros.splice(i,1)
                console.log("livro removido:", removido.nome);
                return;
            } console.log("livro não encontrado");
        }
        console.log("livro não encontrado");
        return;
    } 
};

biblioteca.adicionarLivros(
    "Harry Potter e a Pedra Filosofal",
    "J. K. Rowling",
    1997,
    "Fantasia"
);

biblioteca.adicionarLivros(
    "The Call of Cthulhu",
    "H. P. Lovecraft",
    1928,
    "terror cosmico"
);

biblioteca.adicionarLivros(
    "The Alchemist",
    "Paulo Coelho",
    1988,
    "Fantasia"
);

console.log(biblioteca.livros);
biblioteca.mostrarLivros();
biblioteca.alugar("Harry Potter e a Pedra Filosofal");
biblioteca.devolver("The Call of Cthulhu");
biblioteca.removerlivros("The Alchemist");
biblioteca.mostrarLivros("The Alchemist")