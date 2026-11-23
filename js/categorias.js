const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            categorias: ByCare.categorias,
            produtos: ByCare.produtos,
            categoriaAtiva: 'todas'
        };
    },

    computed: {
        produtosFiltrados() {
            if (this.categoriaAtiva === 'todas') {
                return this.produtos;
            }
            return this.produtos.filter((p) => p.categoria === this.categoriaAtiva);
        }
    },

    methods: {
        selecionar(id) {
            this.categoriaAtiva = id;
        },
        preco: ByCare.formatarPreco,
        imagem: ByCare.caminhoImagem,
        adicionar: ByCare.carrinho.adicionar,
        adicionado(id) {
            return ByCare.carrinho.estado.recemAdicionado === id;
        }
    }
});

ByCare.registrarCarrinho(app);
app.mount('#app');
