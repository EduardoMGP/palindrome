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
        word = word.toLowerCase().replace(/\s/g, '');
        word = word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
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