class NegociacaoController{

    constructor(){
        this.$ = document.querySelector.bind(document);

        this._inputData =  this.$('#data');
        this._inputQuatidade = this.$('#quantidade');
        this._inputValor =  this.$('#valor');
        this._listaNegociacoes = new ListaNegociacoes(model => {
            this._negociacoesView.update(model);
        });
        this._negociacoesView = new  NegociacoesView(this.$('#negociacoesTable'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(this.$('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){
        event.preventDefault();

        let negociacao = this._criaNegociacao()

        //adicionar a negocição em uma lista
        this._listaNegociacoes.adicona(negociacao);
        this._limpaFormulario();

        this._mensagem.texto = "Negociação adicionada com sucesso.";
        this._mensagemView.update(this._mensagem);
    }

    apagar(){
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = "Negociações apagas com sucesso.";

        this._mensagemView.update(this._mensagem)
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