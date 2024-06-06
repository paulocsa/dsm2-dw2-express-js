// Métodos de manipulação do banco
import Galeria from "../models/Galeria.js"

class GaleriaService {
    // Método para salvar uma imagem
    Save(file) {
        Galeria.create({
            file : file
        })
    }
    // Método para ler uma imagem

    SelectPictures(){
        const galeria = Galeria.findAll();
        return galeria;
    }
}
export default new GaleriaService()

