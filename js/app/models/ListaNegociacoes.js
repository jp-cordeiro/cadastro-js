class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }

    adicona(negociacao){

    }

    get negociacoes(){
        //Retorna um novo array concatenado com o array de negociações para que o mesmo esteja blindado
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
    }
}