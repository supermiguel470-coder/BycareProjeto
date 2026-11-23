(function () {
    const categorias = [
        { id: 'esfoliante', nome: 'Esfoliantes' },
        { id: 'hidratacao', nome: 'Hidratação' },
        { id: 'limpeza',    nome: 'Limpeza' },
        { id: 'protecao',   nome: 'Proteção' },
        { id: 'tonico',     nome: 'Tônicos' },
        { id: 'tratamento', nome: 'Tratamento' }
    ];

    const produtos = [
        { id: 'esfoliante1', categoria: 'esfoliante', nome: 'Esfoliante ByCare 01', preco: 37.59, imagem: 'esfoliante1.png' },
        { id: 'esfoliante2', categoria: 'esfoliante', nome: 'Esfoliante ByCare 02', preco: 37.59, imagem: 'esfoliante2.png' },
        { id: 'esfoliante3', categoria: 'esfoliante', nome: 'Esfoliante ByCare 03', preco: 37.59, imagem: 'esfoliante3.png' },
        { id: 'esfoliante4', categoria: 'esfoliante', nome: 'Esfoliante ByCare',    preco: 37.59, imagem: 'esfoliante4.png', maisEscolhido: true },

        { id: 'hidratacao1', categoria: 'hidratacao', nome: 'Loção Hidratante ByCare', preco: 58.29, imagem: 'hidratacao1.png', maisEscolhido: true },
        { id: 'hidratacao2', categoria: 'hidratacao', nome: 'Hidratante ByCare 02',    preco: 58.29, imagem: 'hidratacao2.png' },
        { id: 'hidratacao3', categoria: 'hidratacao', nome: 'Hidratante ByCare 03',    preco: 58.29, imagem: 'hidratacao3.png' },
        { id: 'hidratacao4', categoria: 'hidratacao', nome: 'Hidratante ByCare 04',    preco: 58.29, imagem: 'hidratacao4.png' },

        { id: 'limpeza1', categoria: 'limpeza', nome: 'Limpeza ByCare 01', preco: 37.59, imagem: 'limpeza1.png' },
        { id: 'limpeza2', categoria: 'limpeza', nome: 'Limpeza ByCare 02', preco: 37.59, imagem: 'limpeza2.png' },
        { id: 'limpeza3', categoria: 'limpeza', nome: 'Limpeza ByCare 03', preco: 37.59, imagem: 'limpeza3.png' },
        { id: 'limpeza4', categoria: 'limpeza', nome: 'Limpeza ByCare 04', preco: 37.59, imagem: 'limpeza4.png' },

        { id: 'protecao1', categoria: 'protecao', nome: 'Protetor ByCare',    preco: 37.59, imagem: 'protecao1.png', maisEscolhido: true },
        { id: 'protecao2', categoria: 'protecao', nome: 'Protetor ByCare 02', preco: 37.59, imagem: 'protecao2.png' },
        { id: 'protecao3', categoria: 'protecao', nome: 'Protetor ByCare 03', preco: 37.59, imagem: 'protecao3.png' },
        { id: 'protecao4', categoria: 'protecao', nome: 'Protetor ByCare 04', preco: 37.59, imagem: 'protecao4.png' },

        { id: 'tonico1', categoria: 'tonico', nome: 'Tônico ByCare 01', preco: 37.59, imagem: 'tonico1.png' },
        { id: 'tonico2', categoria: 'tonico', nome: 'Tônico ByCare',    preco: 37.59, imagem: 'tonico2.png', maisEscolhido: true },
        { id: 'tonico3', categoria: 'tonico', nome: 'Tônico ByCare 03', preco: 37.59, imagem: 'tonico3.png' },
        { id: 'tonico4', categoria: 'tonico', nome: 'Tônico ByCare 04', preco: 37.59, imagem: 'tonico4.png' },

        { id: 'tratamento1', categoria: 'tratamento', nome: 'Tratamento ByCare 01', preco: 58.29, imagem: 'tratamento1.png' },
        { id: 'tratamento2', categoria: 'tratamento', nome: 'Tratamento ByCare 02', preco: 58.29, imagem: 'tratamento2.png' },
        { id: 'tratamento3', categoria: 'tratamento', nome: 'Tratamento ByCare 03', preco: 58.29, imagem: 'tratamento3.png' },
        { id: 'tratamento4', categoria: 'tratamento', nome: 'Tratamento ByCare 04', preco: 58.29, imagem: 'tratamento4.png' }
    ];

    const combos = [
        { id: 'combo1', nome: 'Combo início do dia',    descricao: 'vitamina C, hidratante leve e protetor solar', preco: 23.49, imagem: 'kit1.png' },
        { id: 'combo2', nome: 'Combo limpeza profunda', descricao: 'sabonete facial, esfoliante e tônico',         preco: 23.49, imagem: 'kit1.png' },
        { id: 'combo3', nome: 'Combo noite relaxante',  descricao: 'limpeza, tônico e creme de tratamento',        preco: 23.49, imagem: 'kit1.png' },
        { id: 'combo4', nome: 'Combo hidratação total', descricao: 'loção hidratante, séruns e máscara',           preco: 23.49, imagem: 'kit1.png' },
        { id: 'combo5', nome: 'Combo rotina completa',  descricao: 'limpeza, tônico, hidratante e protetor',       preco: 23.49, imagem: 'kit1.png' }
    ];

    const formatarPreco = (valor) =>
        valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const caminhoImagem = (arquivo) => '../img/' + arquivo;

    window.ByCare = Object.assign(window.ByCare || {}, { categorias, produtos, combos, formatarPreco, caminhoImagem });
})();
