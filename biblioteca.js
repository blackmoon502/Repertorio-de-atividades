const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, ano, genero) {
        const livro = {
            nome,
            autor,
            ano,
            genero,
            disponivel: true,
            alugado: false,
            vezesAlugado: 0
        };

        this.livros.push(livro);
    }
};

biblioteca.adicionarLivros(
    "The Call of Cthulhu",
    "H. P. Lovecraft",
    1928,
    "Terror Cósmico"
);

biblioteca.adicionarLivros(
    "The Alchemist",
    "Paulo Coelho",
    1988,
    "Fantasia"
);

console.log(biblioteca.livros);