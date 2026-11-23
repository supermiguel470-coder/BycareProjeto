const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            produtos: ByCare.produtos
        };
    },

    computed: {
        maisEscolhidos() {
            return this.produtos.filter((p) => p.maisEscolhido);
        }
    },

    methods: {
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
