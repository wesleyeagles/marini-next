import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS;

export async function POST(req: NextRequest) {
  console.log(user, pass)

  try {
    const { nome, telefone, email, mensagem } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: user,
      to: 'crafael.wesley@gmail.com',
      subject: `Contato de ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">Novo Contato</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Nome</th>
              <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Telefone</th>
              <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Email</th>
              <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Mensagem</th>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${nome}</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${telefone}</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${mensagem}</td>
            </tr>
          </table>
          <hr>
          <p style="font-size: 0.9em; color: #555;">Este email foi enviado automaticamente pelo sistema de contato do site.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado: ', info.response);
    return NextResponse.json({ message: 'Email enviado com sucesso' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar email: ', error);
    return NextResponse.json({ message: 'Erro ao enviar email', error }, { status: 500 });
  }
}
