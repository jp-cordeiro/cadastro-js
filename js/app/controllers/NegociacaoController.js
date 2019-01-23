class NegociacaoController{

    constructor(){
        this.$ = document.querySelector.bind(document);

        this._inputData =  this.$('#data');
        this._inputQuatidade = this.$('#quantidade');
        this._inputValor =  this.$('#valor');

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new  NegociacoesView(this.$('#negociacoesTable')),
            'adiciona','esvazia'
        );

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView(this.$('#mensagemView')),
            'texto'
        );
    }

    adiciona(event){
        event.preventDefault();

        //adicionar a negocição em uma lista
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

        this._mensagem.texto = "Negociação adicionada com sucesso.";
    }

    apagar(){
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = "Negociações apagas com sucesso.";
    }

    _criaNegociacao(){
        let data = DateHelper.textToDate(this._inputData.value);

        return new Negociacao(
            data,
            this._inputQuatidade.value,
            this._inputValor.value
        );

    }

    _limpaFormulario(){
        this.$('.form').reset();
        this._inputData.focus();
    }
}