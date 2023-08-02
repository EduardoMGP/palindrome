import {Request, Response} from "express";

export class ApiController {

    public palindrome(req: Request, res: Response) {
        const word = req.params.word;
        const result = this.isPalindrome(word);
        res.json({
            'result': result,
            'word': word,
            'message': result ?  '"' + word + '" é um palíndromo' : '"' + word + '" não é um palíndromo'
        });
    }

    private isPalindrome(word: string) {
        // Remover todos os espaços em branco e forçar a string para minúsculas
        word = word.toLowerCase().replace(/\s/g, '');
        // Converte a string para Unicode e remove os acentos
        word = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        // Remove todos os caracteres especiais
        word = word.replace(/[^a-zA-Z0-9]/g, '');
        const length = word.length;
        const half = Math.floor(length / 2);
        const length_ = length - 1;

        for (let i = 0; i < half; i++) {
            if (word[i] !== word[length_ - i]) {
                return false;
            }
        }

        return true;
    }
}