import { z } from "zod";

export const contactFormSchema = z.object({
    nome: z.string({
      required_error: 'Campo nome é obrigatório',
    }).min(3, {
      message: 'Campo nome deve ter pelo menos 3 caracteres',
    }),
    email: z.string({
        required_error: 'Campo email é obrigatório',
    }).email('Email inválido'),
    telefone: z.string({
        required_error: 'Campo telefone é obrigatório',
    }).min(8, {
        message: 'Campo telefone deve ter pelo menos 8 caracteres',
    }),
    mensagem: z.string({
        required_error: 'Campo mensagem é obrigatório',
    }).min(10, {
        message: 'Campo mensagem deve ter pelo menos 10 caracteres',
    }),
  })