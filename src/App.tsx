import { AiOutlineJavaScript } from 'react-icons/ai'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiFastify, SiMysql, SiPrisma, SiTypescript, SiVitest } from 'react-icons/si'

import arrowDown from '../src/assets/arrow-down.png'
import fagammon from '../src/assets/fagammon.png'
import igniteShop from '../src/assets/ignite.png'
import pizzaShop from '../src/assets/pizza_shop.png'
import profile from '../src/assets/profile.png'
import apiComSolid from './assets/api_com_solid.png'
import apiPetShop from './assets/api_pet_shop.png'
import certAprofundandoHooks from './assets/aprofundando_hooks.png'
import ArrowUp from './assets/ArrowUpRight.png'
import Backgorund from './assets/Background_Intro.png'
import certFundReact from './assets/cert_fund_react.png'
import certGit from './assets/cert_git_github.png'
import certHtmlCss from './assets/cert_html_css.png'
import certJavascript from './assets/cert_javascript.png'
import coffeeDelivery from './assets/coffe.png'
import ContactIntro from './assets/Contact.png'
import DDDChallenge from './assets/DDD_Challenge.png'
import fagammonBack from './assets/fagammon_back.png'
import certFundNode from './assets/fundamentos_node.png'
import gitHubBlog from './assets/git_hub_blog.png'
import certHttp from './assets/http_performance.png'
import certIntegrandoFrontBack from './assets/integrando_front_back.png'
import certNex from './assets/Next.png'
import numberDrawer from './assets/number_drawer.png'
import siteExtensionista from './assets/site_extensionista.png'
import certTailwind from './assets/tailwind.png'
import { DialogInfoProject } from './components/app/DialogInfoProject'
import { Dialog, DialogTrigger } from './components/ui/dialog'

export function App() {
  return (
    <main className="grid grid-rows-4 w-full h-screen">
      <div style={{ backgroundImage: `url(${Backgorund})` }} className="flex items-center justify-center bg-cover py-24">

        <section className="flex flex-col w-[60rem] items-center justify-center gap-4">
          <div className="rounded-full w-[8.2rem] bg-[#e3646e] h-[8.2rem] flex items-center justify-center">
            <img src={profile} alt="" className="rounded-full w-[8rem]" />
          </div>.
          <article className="flex flex-col gap-8 justify-center items-center">
            <span className="text-[#56595f] inconsolata-subtitle">Hello world! Meu nome é <strong className="text-[#e3646e]">Henrique Tomaz </strong>e sou</span>
            <span className="asap-title-lg text-[#e2e4e9]">Desenvolvedor Fullstack</span>
            <span className="maven-pro-text-sm text-[#6a7080] text-justify">Desenvolvedor Fullstack com foco em tecnologias como React.js para Front-end, utilizando
              Typescript como linguagem, Tailwind css para estilização em conjunto
              com o Shad-cn, que é uma biblioteca de componentes reutilizáveis baseados em Tailwind. Utilizo o zod para validação de dados e formulários em todos os
              meus projetos, axios para requisições no back-end e React-query para manipular as respostas, os erros e os sucessos das requisições.
              No Back-end utilizo o Fastify para desenvolvimento, que é uma biblioteca baseada em Node.js. É de praxe a utilização de tokens JWT para validação de
              requisições e refresh token para manter o usuário sempre logado na aplicação. Utilizo a metodologia do DDD para progressão da aplicação, assim como
              a utilização dos princípios SOLID para facilitar o desenvolvimento, manutenção e a refatoração de código.
            </span>
          </article>

          <article className="flex justify-between w-full gap-4 mt-16">
            <section className="flex items-center justify-center gap-2 bg-[#292c34] text-[#878b94]
            w-[7.125rem] h-[2.5rem] p-[1rem] rounded-3xl"
            ><FaGithub />
              <span>Github</span>
            </section>
            <section className="flex items-center justify-center gap-2 bg-[#292c34] text-[#878b94]
            w-[7.125rem] h-[2.5rem] p-[1rem] rounded-3xl"
            ><FaHtml5 color="#E45338" />
              <span>HTML</span>
            </section>
            <section className="flex items-center justify-center gap-2 bg-[#292c34] text-[#878b94]
            w-[7.125rem] h-[2.5rem] p-[1rem] rounded-3xl"
            ><FaCss3 color="#186EB0" />
              <span>CSS</span>
            </section>
            <section className="flex items-center justify-center gap-2 bg-[#292c34] text-[#878b94]
            w-[8] h-[2.5rem] p-[1rem] rounded-3xl"
            ><AiOutlineJavaScript color="#EFD92B" />
              <span>JavaScript</span>
            </section>
            <section className="flex items-center justify-center gap-2 bg-[#292c34] text-[#878b94]
            w-[8rem] h-[2.5rem] p-[1rem] rounded-3xl"
            >
              <SiTypescript color="#3178c6" />
              <span>TypeScript</span>
            </section>
            <section className="flex items-center justify-center gap-2 bg-[#292c34] text-[#878b94]
            w-[7.125rem] h-[2.5rem] p-[1rem] rounded-3xl"
            ><FaReact color="#A4ECF6" />
              <span>React</span>
            </section>

          </article>

          <article className="flex justify-between w-full gap-4 mt-8">
            <section className="flex items-center justify-center gap-2 bg-[#292c34] text-[#878b94]
            w-[7.125rem] h-[2.5rem] p-[1rem] rounded-3xl"
            ><RiTailwindCssFill color="#4DBFF8" />
              <span>Tailwind</span>
            </section>
            <section className="flex items-center justify-center gap-2 bg-[#292c34] text-[#878b94]
            w-[7.125rem] h-[2.5rem] p-[1rem] rounded-3xl"
            ><FaNodeJs color="#83BF0E" />
              <span>Node</span>
            </section>
            <section className="flex items-center justify-center gap-2 bg-[#292c34] text-[#878b94]
            w-[8] h-[2.5rem] p-[1rem] rounded-3xl"
            ><SiFastify color="black" />
              <span>Fastify</span>
            </section>
            <section className="flex items-center justify-center gap-2 bg-[#292c34] text-[#878b94]
            w-[7.125rem] h-[2.5rem] p-[1rem] rounded-3xl"
            ><SiMysql color="#2A6C90" />
              <span>Mysql</span>
            </section>
            <section className="flex items-center justify-center gap-2 bg-[#292c34] text-[#878b94]
            w-[8rem] h-[2.5rem] p-[1rem] rounded-3xl"
            >
              <SiPrisma color="black" />
              <span>Prisma</span>
            </section>
            <section className="flex items-center justify-center gap-2 bg-[#292c34] text-[#878b94]
            w-[7.125rem] h-[2.5rem] p-[1rem] rounded-3xl"
            ><FaGitAlt color="#e9533a" />
              <span>Git</span>
            </section>

          </article>

          <article className="flex justify-center w-full gap-4 mt-8">
            <section className="flex items-center justify-center gap-2 bg-[#292c34] text-[#878b94]
            w-[7.125rem] h-[2.5rem] p-[1rem] rounded-3xl"
            ><SiVitest color="#FAC732" />
              <span>Vitest</span>
            </section>

          </article>

          <img src={arrowDown} alt="" className="mt-24" />

        </section>
      </div>
      <div className="flex justify-center bg-[#16181d] py-18">
        <article className="flex flex-col justify-center items-center gap-8">
          <span className="inconsolata-subtitle text-[#e3646e]">Meus projetos</span>
          <span className="asap-title-md text-[#e2e4e9]">Veja os projetos em destaque</span>
          <span className="inconsolata-subtitle text-[#e2e4e9]">Fullstack</span>

          <section className="grid gap-6 w-[66.375rem]">
            <div className="w-full flex justify-around">
              <Dialog>
                <div className="flex flex-col justify-between rounded-2xl p-3 w-[20.625rem] h-[17.5rem] bg-[#292c34]">
                  <DialogTrigger className="cursor-pointer">
                    <img src={pizzaShop} alt="" className="rounded-2xl" />
                  </DialogTrigger>
                  <span className="asap-title-sm text-gray-100">Pizza Shop</span>
                  <span className="maven-pro-text-sm text-justify text-gray-200">Serviço web onde o usuário consegue gerenciar pedidos de uma pizzaria através de duas interfaces.</span>
                </div>
                <DialogInfoProject
                  Titulo="Pizza Shop" linkRepositorio="https://github.com/Henrique8878/Pizza-Shop-React" videoUrl="https://streamable.com/e/yadjwk"
                  funcionalidades={['Alterar status do pedido', 'Cancelar um pedido', 'Filtrar pedidos', 'Paginação', 'Gráfico de métricas dos pedidos', 'Atualizar perfil do usário']}
                  tecnologias={['React.js', 'TypeScript', 'Tailwind', 'Shad-cn', 'Bun.js', 'Vitest', 'Playwright', 'Zod', 'React Query']}
                  acesseAplicacao={false}
                  date={new Date('2024-12-30')}
                />
              </Dialog>
              <Dialog>
                <div className="flex flex-col justify-between rounded-2xl p-3 w-[20.625rem] h-[17.5rem] bg-[#292c34]">
                  <DialogTrigger className="cursor-pointer"><img src={fagammon} alt="" className="rounded-2xl" /></DialogTrigger>
                  <span className="asap-title-sm text-gray-100">Serviço de agendamento</span>
                  <span className="maven-pro-text-sm text-justify text-gray-200">Serviço web desenvolvido para a Faculdade Presbiteriana Gammon para
                    resolver um problema de conflito de agendamento de salas.
                  </span>
                </div>
                <DialogInfoProject
                  Titulo="Agendamento de salas Fagammon" linkRepositorio="https://github.com/Henrique8878/schedule_lab" videoUrl="https://streamable.com/e/vfv1ow"
                  funcionalidades={['Fazer login como usuário ou admnistrador', 'Visuzalizar todos os agendamentos', 'Filtrar agendamentos', 'Realizar inscrição em agendamentos públicos',
                    'Cadastrar sala(Admin)', 'Cadastrar usuário ou admin(admin)', 'Cadastrar usuários via arquivo .csv(admin)', 'Agendar um horário', 'Escolher foto da sala',
                    'Realizar download de usuários inscritos em eventos públicos(admin)', 'Serviço de envio de e-mails para lembrete de agendamentos',
                  ]}
                  tecnologias={['React.js', 'TypeScript', 'Tailwind', 'Shad-cn', 'Node.js', 'Fastify', 'Vitest', 'Zod', 'React Query']}
                  acesseAplicacao={false}
                  date={new Date('2025-06-25')}
                />
              </Dialog>
            </div>
          </section>

          <span className="inconsolata-subtitle text-[#e2e4e9]">FrontEnd</span>
          <section className="grid gap-6 w-[66.375rem]">
            <div className="w-full flex justify-around">
              <Dialog>
                <div className="flex flex-col justify-around rounded-2xl p-3 w-[20.625rem] h-[17.5rem] bg-[#292c34]">
                  <DialogTrigger><img src={gitHubBlog} alt="" className="rounded-2xl" /></DialogTrigger>
                  <span className="asap-title-sm text-gray-100">Git Hub Blog</span>
                  <span className="maven-pro-text-sm text-justify text-gray-200">Interface web de um blog que consome a api do
                    github de acordo com o perfil do usuário.
                  </span>
                </div>
                <DialogInfoProject
                  Titulo="GitHub Blog" linkRepositorio="https://github.com/Henrique8878/Blog_Api_GitHub" videoUrl="https://streamable.com/e/kgoxdp"
                  funcionalidades={['Buscar uma issue do seu github', 'Link para acessar a issue', 'Carregamento de dados do seu perfil do github',
                    'Integração com API do github']}
                  tecnologias={['HTML', 'CSS', 'JavaScript', 'Axios']}
                  acesseAplicacao={false}
                  date={new Date('2024-11-01')}
                />
              </Dialog>
              <div className="flex flex-col justify-between rounded-2xl p-3 w-[20.625rem] h-[17.5rem] bg-[#292c34]">
                <a href="https://amanda-camargos.web.app/" target="_blank" rel="noreferrer"><img src={siteExtensionista} alt="" className="rounded-2xl" /></a>
                <span className="asap-title-sm text-gray-100">Interface web de agendamento de procedimentos estéticos</span>
                <span className="maven-pro-text-sm text-justify text-gray-200">Interface web desenvolvida para realização de agendamentos estéticos
                  para uma profissional na cidade de Lavras-MG.
                </span>
              </div>

            </div>
          </section>

          <section className="grid gap-6 w-[66.375rem]">
            <div className="w-full flex justify-around">
              <Dialog>
                <div className="flex flex-col justify-between rounded-2xl p-3 w-[20.625rem] h-[17.5rem] bg-[#292c34]">
                  <DialogTrigger><img src={igniteShop} alt="" className="rounded-2xl" /></DialogTrigger>
                  <span className="asap-title-sm text-gray-100">Ignite Shop</span>
                  <span className="maven-pro-text-sm text-justify text-gray-200">Interface de um serviço web de venda de camisetas da plataforma rocketseat,
                    feito em Next.js.
                  </span>
                </div>
                <DialogInfoProject
                  Titulo="Ignite Shop" linkRepositorio="https://github.com/Henrique8878/Blog_Api_GitHub" videoUrl="https://streamable.com/e/s95v1u"
                  funcionalidades={['Colocar camiseta na sacola', 'Remover camiseta da sacola', 'Integração com o serviço de pagamento do stripe',
                    'Pagar camisetas com stripe']}
                  tecnologias={['Next.js', 'TypeScript', 'Stripe']}
                  acesseAplicacao={false}
                  date={new Date('2024-11-01')}
                />
              </Dialog>
              <div className="flex flex-col justify-between rounded-2xl p-3 w-[20.625rem] h-[17.5rem] bg-[#292c34]">
                <img src={coffeeDelivery} alt="" className="rounded-2xl" />
                <span className="asap-title-sm text-gray-100">Serviço de pedidos de café</span>
                <span className="maven-pro-text-sm text-justify text-gray-200">Interface web desenvolvida para gerenciamento de pedidos
                  de uma cafeteria.
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-2xl p-3 w-[20.625rem] h-[17.5rem] bg-[#292c34]">
                <a href="https://henrique8878.github.io/numberDrawer/" target="_blank" rel="noreferrer"><img src={numberDrawer} alt="" className="rounded-2xl" /></a>
                <span className="asap-title-sm text-gray-100">Sorteador de números</span>
                <span className="maven-pro-text-sm text-justify text-gray-200">Interface web desenvolvida para a realização de sorteio de números.
                </span>
              </div>
            </div>
          </section>

          <span className="inconsolata-subtitle text-[#e2e4e9]">BackEnd</span>

          <section className="grid gap-6 w-[87rem]">
            <div className="w-full flex justify-between">
              <div className="flex flex-col justify-between rounded-2xl p-3 w-[20.625rem] h-[17.5rem] bg-[#292c34]">
                <a href="https://github.com/Henrique8878/API-com-SOLID" target="_blank" rel="noreferrer">
                  <img src={apiComSolid} alt="" className="rounded-2xl" />
                </a>
                <span className="asap-title-sm text-gray-100">GymPass com SOLID</span>
                <span className="maven-pro-text-sm text-justify text-gray-200">API que simula o serviço GymPass utilizando
                  os princípios SOLID para desenvolvimento.
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-2xl p-3 w-[20.625rem] h-[17.5rem] bg-[#292c34]">
                <a href="https://github.com/Henrique8878/api_friendly_pet_node_with_solid" target="_blank" rel="noreferrer"><img src={apiPetShop} alt="" className="rounded-2xl" /></a>
                <span className="asap-title-sm text-gray-100">PetShop com SOLID</span>
                <span className="maven-pro-text-sm text-justify text-gray-200">API de gerenciamento de um PetShop utilizando os princípios SOLID, testes
                  unitários utilizando vitest e testes E2E utilizando supertest.
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-2xl p-3 w-[20.625rem] h-[17.5rem] bg-[#292c34]">
                <a href="https://github.com/Henrique8878/schedule_lab_Back_End" target="_blank" rel="noreferrer"><img src={fagammonBack} alt="" className="rounded-2xl" /></a>
                <span className="asap-title-sm text-gray-100">API do gerenciamento de sala da Fagammon</span>
                <span className="maven-pro-text-sm text-justify text-gray-200">API desenvolvida para gerenciamento de salas da Fagammon.
                </span>
              </div>
              <div className="flex flex-col justify-between rounded-2xl p-3 w-[20.625rem] h-[17.5rem] bg-[#292c34]">
                <a href="https://github.com/Henrique8878/DDD_Challenge_Node.js" target="_blank" rel="noreferrer"><img src={DDDChallenge} alt="" className="rounded-2xl" /></a>
                <span className="asap-title-sm text-gray-100">DDD diálogo</span>
                <span className="maven-pro-text-sm text-justify text-gray-200">DDD baseado em um diálogo entre um Domain Expert e um desenvolvedor.
                </span>
              </div>
            </div>
          </section>

        </article>
      </div>
      <div className="flex flex-col items-center gap-14 bg-[#0d0e11] p-22">
        <div className="flex flex-col items-center gap-6">
          <span className="inconsolata-subtitle text-[#e3646e]">Minhas certificações</span>
          <span className="asap-title-md text-[#e2e4e9]">Veja as certificações em destaque</span>
        </div>

        <div className="grid grid-cols-3 gap-6 w-[55.5rem] h-[11rem]">
          <article className="flex flex-col gap-2  gap-2border border-red-500">
            <img src={certHtmlCss} alt="" />
            <span className="asap-title-sm text-gray-100">HTML e CSS</span>

          </article>
          <article className="flex flex-col gap-2 justify-between">
            <img src={certGit} alt="" />
            <span className="asap-title-sm text-gray-100">Git e GitHub</span>
          </article>
          <article className="flex flex-col gap-2 justify-between">
            <img src={certJavascript} alt="" />
            <span className="asap-title-sm text-gray-100">Javascript</span>
          </article>
        </div>

        <div className="grid grid-cols-3 gap-6 w-[55.5rem] h-[11rem]">
          <article className="flex flex-col gap-2 justify-between">
            <img src={certFundReact} alt="" />
            <span className="asap-title-sm text-gray-100">Funamentos React</span>
          </article>
          <article className="flex flex-col gap-2 justify-between">
            <img src={certAprofundandoHooks} alt="" />

            <span className="asap-title-sm text-gray-100">Aprofundando em Hooks</span>
          </article>
          <article className="flex flex-col gap-2 justify-between">
            <img src={certHttp} alt="" />

            <span className="asap-title-sm text-gray-100">HTTP e Performance</span>
          </article>
        </div>

        <div className="grid grid-cols-3 gap-6 w-[55.5rem] h-[11rem]">
          <article className="flex flex-col gap-2 justify-between">
            <img src={certIntegrandoFrontBack} alt="" />
            <span className="asap-title-sm text-gray-100">Integrando Front e Back</span>
          </article>
          <article className="flex flex-col gap-2 justify-between">
            <img src={certFundNode} alt="" />

            <span className="asap-title-sm text-gray-100">Fundamentos do Node</span>
          </article>
          <article className="flex flex-col gap-2 justify-between">
            <img src={certTailwind} alt="" />

            <span className="asap-title-sm text-gray-100">Tailwind</span>
          </article>
        </div>
        <div className="grid grid-cols-3 gap-6 w-[55.5rem] h-[11rem]">
          <article className="flex flex-col">
            <img src={certNex} alt="" />
            <span className="asap-title-sm text-gray-100 mt-2">Fundamentos Next</span>
          </article>

        </div>

      </div>
      <div style={{ backgroundImage: `url(${ContactIntro})` }} className="flex items-center justify-center bg-cover">
        <main className="flex flex-col w-[26.25rem] gap-12 mt-[8rem] mb-[12.5rem]">
          <section className="flex flex-col justify-center items-center gap-6">
            <span className="inconsolata-subtitle text-[#925bb5]">Contato</span>
            <span className="asap-title-md text-gray-100">Gostou do meu trabalho</span>
            <span className="maven-pro-text-md text-gray-200">Entre em contato ou acompanhe minhas redes sociais !</span>
          </section>

          <section className="flex flex-col gap-4">
            <article className="w-full h-[4.25rem] bg-[#292c34] rounded-2xl flex justify-between items-center p-6">
              <div className="flex items-center text-gray-400 gap-2">
                <BsLinkedin size={30} />
                <span className="asap-title-sm">Linkedin</span>
              </div>
              <a href="https://linkedin.com/in/henrique-araújo-tomaz-739974256" target="_blank" rel="noreferrer">
                <img src={ArrowUp} alt="" className="w-[1.25rem] h-[1.25rem]" />
              </a>
            </article>
            <article className="w-full h-[4.25rem] bg-[#292c34] rounded-2xl flex justify-between items-center p-6">
              <div className="flex items-center text-gray-400 gap-2">
                <BsInstagram size={30} />
                <span className="asap-title-sm">Instagram</span>
              </div>
              <a href="https://www.instagram.com/henrique__tomaz/" target="_blank" rel="noreferrer">
                <img src={ArrowUp} alt="" className="w-[1.25rem] h-[1.25rem]" />
              </a>
            </article>
            <article className="w-full h-[4.25rem] bg-[#292c34] rounded-2xl flex justify-between items-center p-6">
              <div className="flex items-center text-gray-400 gap-2">
                <BsGithub size={30} />
                <span className="asap-title-sm">GitHub</span>
              </div>
              <a href="https://github.com/Henrique8878" target="_blank" rel="noreferrer">
                <img src={ArrowUp} alt="" className="w-[1.25rem] h-[1.25rem]" />
              </a>
            </article>
            <article className="w-full h-[4.25rem] bg-[#292c34] rounded-2xl flex justify-between items-center p-6">
              <div className="flex items-center text-gray-400 gap-2">
                <MdEmail size={30} />
                <span className="asap-title-sm">Email</span>
              </div>
              <a href="" target="_blank">
                <img src={ArrowUp} alt="" className="w-[1.25rem] h-[1.25rem]" />
              </a>
            </article>
          </section>
        </main>
      </div>
    </main>
  )
}
