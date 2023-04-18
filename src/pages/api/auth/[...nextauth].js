import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import nodemailer from 'nodemailer';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export default NextAuth({
    providers: [
      EmailProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM
      }),
    ],
    adapter: PrismaAdapter(prisma),
  });