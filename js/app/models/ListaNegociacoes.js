class ListaNegociacoes{
    constructor(handler){
        this._negociacoes = [];
        this._handler = handler
    }

    adicona(negociacao){
        this._negociacoes.push(negociacao)
        this._handler(this);
    }

    get negociacoes(){
        //Retorna um novo array concatenado com o array de negociações para que o mesmo esteja blindado
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
        this._handler(this);
    }
}