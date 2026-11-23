(function () {
    const { reactive, computed, watch, onMounted, onBeforeUnmount } = Vue;
    const CHAVE = 'bycare-carrinho';

    function ler() {
        try {
            const dados = JSON.parse(localStorage.getItem(CHAVE));
            return Array.isArray(dados) ? dados : [];
        } catch (erro) {
            return [];
        }
    }

    function gravar() {
        try {
            localStorage.setItem(CHAVE, JSON.stringify(estado.itens));
        } catch (erro) {}
    }

    const estado = reactive({ itens: ler(), aberto: false, recemAdicionado: null });

    const quantidade = computed(() =>
        estado.itens.reduce((soma, item) => soma + item.quantidade, 0)
    );

    const total = computed(() =>
        Math.round(estado.itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0) * 100) / 100
    );

    let temporizador = null;

    function adicionar(produto) {
        const existente = estado.itens.find((item) => item.id === produto.id);
        if (existente) {
            existente.quantidade++;
        } else {
            estado.itens.push({
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                imagem: produto.imagem,
                quantidade: 1
            });
        }
        estado.recemAdicionado = produto.id;
        clearTimeout(temporizador);
        temporizador = setTimeout(() => { estado.recemAdicionado = null; }, 1200);
    }

    function alterarQuantidade(id, variacao) {
        const item = estado.itens.find((i) => i.id === id);
        if (!item) return;
        item.quantidade += variacao;
        if (item.quantidade <= 0) remover(id);
    }

    function remover(id) {
        estado.itens = estado.itens.filter((item) => item.id !== id);
    }

    function limpar() {
        estado.itens = [];
    }

    watch(() => estado.itens, gravar, { deep: true });

    window.addEventListener('storage', (evento) => {
        if (evento.key === CHAVE) estado.itens = ler();
    });

    const Painel = {
        template: `
            <div class="carrinho">
                <button class="button botao-carrinho" @click="estado.aberto = true">
                    Carrinho
                    <span class="contador" v-if="quantidade > 0">{{ quantidade }}</span>
                </button>

                <div class="carrinho-fundo" v-if="estado.aberto" @click="estado.aberto = false"></div>

                <aside class="carrinho-painel" :class="{ aberto: estado.aberto }">
                    <div class="carrinho-topo">
                        <h2>Seu carrinho</h2>
                        <button class="carrinho-fechar" @click="estado.aberto = false" aria-label="Fechar carrinho">×</button>
                    </div>

                    <p class="carrinho-vazio" v-if="estado.itens.length === 0">Seu carrinho está vazio.</p>

                    <ul class="carrinho-lista" v-else>
                        <li class="carrinho-item" v-for="item in estado.itens" :key="item.id">
                            <img :src="imagem(item.imagem)" :alt="item.nome">
                            <div class="carrinho-info">
                                <strong>{{ item.nome }}</strong>
                                <span>{{ preco(item.preco) }}</span>
                                <div class="carrinho-quantidade">
                                    <button @click="alterarQuantidade(item.id, -1)" aria-label="Diminuir">−</button>
                                    <span>{{ item.quantidade }}</span>
                                    <button @click="alterarQuantidade(item.id, 1)" aria-label="Aumentar">+</button>
                                </div>
                            </div>
                            <button class="carrinho-remover" @click="remover(item.id)" aria-label="Remover item">Remover</button>
                        </li>
                    </ul>

                    <div class="carrinho-rodape" v-if="estado.itens.length > 0">
                        <p class="carrinho-total">Total: <strong>{{ preco(total) }}</strong></p>
                        <button class="carrinho-limpar" @click="limpar">Limpar carrinho</button>
                    </div>
                </aside>
            </div>
        `,
        setup() {
            function aoTeclar(evento) {
                if (evento.key === 'Escape') estado.aberto = false;
            }
            onMounted(() => document.addEventListener('keydown', aoTeclar));
            onBeforeUnmount(() => document.removeEventListener('keydown', aoTeclar));

            return {
                estado,
                quantidade,
                total,
                alterarQuantidade,
                remover,
                limpar,
                preco: ByCare.formatarPreco,
                imagem: ByCare.caminhoImagem
            };
        }
    };

    window.ByCare = Object.assign(window.ByCare || {}, {
        carrinho: { estado, adicionar },
        registrarCarrinho(app) {
            app.component('carrinho-painel', Painel);
        }
    });
})();
