class ProxyFactory {
    static create(obj,props,action){
        return new Proxy(obj,{
            get(target,prop,receiver){
                //Verifica se a propriedade chamada está na lista de intercepção e se é uma função, caso seja positivo, reflete o argumentos para a propriedade do alvo original
                if(props.includes(prop) && ProxyFactory._isFunction(target[prop])){
                    return function () {
                        console.log(prop)
                        Reflect.apply(target[prop],target,arguments)
                        return action(target);
                    }
                }
                //Retorna a leitura do target (objeto original), prop (propriedade acessada) e receiver (referência ao proxy)
                return Reflect.get(target,prop,receiver)
            },
            set(target,prop,value,receiver){
                if(props.includes(prop)){
                    //Chama o interceptador
                    action(target)
                }
                return Reflect.set(target,prop,value,receiver)

            }
        })
    }

    static _isFunction(func){
        return typeof(func) == typeof(Function);
    }
}