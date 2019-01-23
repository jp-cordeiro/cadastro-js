class NegociacaoController{

    constructor(){
        this.$ = document.querySelector.bind(document);

        this._inputData =  this.$('#data');
        this._inputQuatidade = this.$('#quantidade');
        this._inputValor =  this.$('#valor');
        this._negociacoesView = new  NegociacoesView(this.$('#negociacoesTable'));
        this._mensagemView = new MensagemView(this.$('#mensagemView'));

        // this._listaNegociacoes = ProxyFactory.create(
        //     new ListaNegociacoes(),
        //     ['adiciona','esvazia'],
        //     model => this._negociacoesView.update(model)
        // );

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            this._negociacoesView,
            ['adiciona','esvazia']
        );

        // this._mensagem = ProxyFactory.create(
        //     new Mensagem(),
        //     ['texto'],
        //     model => this._mensagemView.update(model)
        // );

        this._mensagem = new Bind(
            new Mensagem(),
            this._mensagemView,
            ['texto']
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