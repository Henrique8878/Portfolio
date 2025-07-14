import { BsStars } from 'react-icons/bs'
import { IoRocket } from 'react-icons/io5'

import {
  DialogContent,
  DialogDescription,
} from '@/components/ui/dialog'

interface DialogInfoProjectProps {
  videoUrl: string
  linkRepositorio: string
  Titulo: string
  funcionalidades: string[]
  tecnologias: string[]
  acesseAplicacao: boolean
  linkAplicacao?: string
  date: Date
}

const formatBrasil = new Intl.DateTimeFormat('pt-BR', {
  year: 'numeric',
  month: 'long',
  day: '2-digit',
})

export function DialogInfoProject({ videoUrl, Titulo, funcionalidades, linkRepositorio, tecnologias, acesseAplicacao, linkAplicacao, date }:DialogInfoProjectProps) {
  return (
    <>
      <DialogContent className="w-full max-w-[90vw] sm:max-w-4xl aspect-video bg-[#16181d] border-none group text-white">

        <DialogDescription className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-20 justify-between">
            <div className="w-full aspect-video"><iframe allowFullScreen src={videoUrl} className="w-full h-full text-start" /></div>
            <footer className="flex gap-3">
              <a href={linkRepositorio} target="_blank" rel="noreferrer">
                <div className="bg-gray-200 p-1.5 rounded-sm asap-title-sm hover:opacity-70">Acessar repositório</div>
              </a>
              {acesseAplicacao ??
                <a href={linkAplicacao} target="_blank" rel="noreferrer">
                  <div className="ml-2 bg-gray-200 p-1.5 rounded-sm asap-title-sm hover:opacity-70">Acessar apĺicação</div>
                </a>}
            </footer>
          </div>
          <div className="flex flex-col justify-between text-gray-200 text-justify">
            <section className="flex flex-col gap-4">
              <span className="asap-title-md">{Titulo}</span>
              <div>
                <div className="flex items-center gap-2">
                  <BsStars color="yellow" />
                  <span className="inconsolata-subtitle">Lista de funcionalidades</span>
                </div>
                <ul className="list-disc list-inside">
                  {funcionalidades.map((func) => (
                    <li key={func} className="maven-pro-text-sm">{func}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <IoRocket color="red" />
                  <span className="inconsolata-subtitle">Tecnologias utilizadas</span>
                </div>
                <ul className="list-disc list-inside">
                  {tecnologias.map((tecno) => (
                    <li key={tecno} className="maven-pro-text-sm">{tecno}</li>
                  ))}
                </ul>
              </div>
            </section>
            <footer>Data do projeto:  {formatBrasil.format(date)}</footer>
          </div>
        </DialogDescription>
      </DialogContent>
    </>
  )
}
