import { Request, Response } from "express";
import { Genero } from "../models/genero";
import generoRepository from "../repositories/generoRepository";



export default class GeneroController {

    async create(req: Request, res: Response) {
        if (!req.body.nome) {
            res.status(400).send({
                message: "Não pode ser vazio o gênero!"
            });
            return;
        }

        try {
            const genero: Genero = req.body;
            const savedGenero = await generoRepository.save(genero);
            res.status(201).send(savedGenero);
        } catch (err) {
            res.status(500).send({
                message: "Erro ao tentar salvar um gênero."
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const generos = await generoRepository.retrieveAll();
            res.status(200).send(generos);
        } catch (err) {
            res.status(500).send({
                message: "Erro encontrado quando estava se fazendo a busca por todos os gêneros."
            });
        }
    }

    async findOne(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const genero = await generoRepository.retrieveById(id);
            if (genero) res.status(200).send(genero);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum gênero com esse id=${id}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar o Gênero com id=${id}.`
            });
        }
    }

    async findName(req: Request, res: Response) {
        const nome: string = req.params.nome;

        try {
            const genero = await generoRepository.retrieveByNome(nome);
            if (genero) res.status(200).send(genero);
            else
                res.status(404).send({
                    message: `Não foi encontrado nenhum gênero com esse nome=${nome}.`
                });
        } catch (err) {
            res.status(500).send({
                message: `Error não foi possível retornar o Gênero com nome=${nome}.`
            });
        }
    }

    async update(req: Request, res: Response) {
        let genero: Genero = req.body;
        genero.idGenero = parseInt(req.params.id);        
        try {
            await generoRepository.update(genero);
            res.send({
                message: `Genero ${genero.nome} atulizado com sucesso!`
            });
        } catch (err) {
            res.status(500).send({
                message: `Error ao atualizar o Gênero com id=${genero.idGenero}.`
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);

        try {
            const num = await generoRepository.delete(id);

            if (num == 1) {
                res.send({
                    message: "Genero deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o Gênero com id=${id}. O Gênero não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `O Gênero com id==${id}, não pode ser deletado.`
            });
        }
    }

    async deleteEmbutido(req: Request, res: Response) {
        const id: number = parseInt(req.body.id);

        try {
            const num = await generoRepository.delete(id);

            if (num == 1) {
                res.send({
                    message: "Genero deletado com sucesso!"
                });
            } else {
                res.send({
                    message: `Não foi possível deletar o Gênero com id=${id}. O Gênero não tenha sido encontrado.`,
                });
            }
        } catch (err) {
            res.status(500).send({
                message: `O Gênero com id==${id}, não pode ser deletado.`
            });
        }
    }

    async deleteAll(req: Request, res: Response) {
        try {
            const num = await generoRepository.deleteAll();

            res.send({ message: `${num} Gêneros foram deletados com sucesso!` });
        } catch (err) {
            res.status(500).send({
                message: "Algum erro ocorreu enquato deletava todos os gêneros."
            });
        }
    }

}