import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cep = searchParams.get('cep');

  if (!cep) {
    return NextResponse.json({ ok: false, message: 'CEP inválido' }, { status: 400 });
  }

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '', // ajuste conforme seu XAMPP
      database: 'ceps',
    });

    const [rows]: any = await connection.execute(
      'SELECT * FROM ceps_autorizados WHERE cep = ?',
      [cep]
    );

    await connection.end();

    if (rows.length > 0) {
      return NextResponse.json({ ok: true, message: '✅ Região atendida' });
    } else {
      return NextResponse.json({ ok: false, message: '❌ Não trabalhamos nessa região' }, { status: 404 });
    }
  } catch (error) {
    console.error('Erro ao conectar:', error);
    return NextResponse.json({ ok: false, message: 'Erro ao consultar o banco' }, { status: 500 });
  }
}
