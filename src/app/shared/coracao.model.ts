// classe coração das tentativas, carrega as imagens no construtor
// (boolean true cheio e false = vazio, carregando urls/caminho das imagens)
export class Coracao{
    
    constructor(public cheio:boolean,
        public urlCoracaoCheio: string = '/assets/coracao_cheio.png',
        public urlCoracaoVazio: string = '/assets/coracao_vazio.png'){            
    }

    //verifica o booleano se é falso ou vazio pra carregar a imagem
    public exibeCoracao(): string{
        if(this.cheio){
            return this.urlCoracaoCheio
        } else {
            return this.urlCoracaoVazio
        }
    }
}