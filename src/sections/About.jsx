import { useRef } from "react"
import Card from "../components/Card"
import { Globe } from "../components/globe"
import CopyEmailButton from "../components/CopyEmailButton"
import { Frameworks } from "../components/Frameworks"

const About = () => {
  const grid2Container = useRef()
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">Sobre Mi</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem]  md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Ola! Soy Pol Valles</p>
            <p className="subtext">Llevo más de 3 años transformando ideas en productos digitales. Me especializo en crear páginas web modernas y de alto rendimiento, y en desarrollar experiencias inmersivas para FiveM (MLOs exclusivos y scripts en Lua). Mi objetivo es entregar resultados limpios, visualmente atractivos y que destaquen.</p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"/>
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card containerRef={grid2Container} style={{rotate: "10deg"}} image="assets/logos/blender.png"/>
            <Card containerRef={grid2Container} style={{rotate: "75deg", top: "30%", left: "20%"}} text="FiveM"/>
            <Card containerRef={grid2Container} style={{rotate: "-30deg", top: "60%", left: "45%"}} text="JavaScript"/>
            <Card containerRef={grid2Container} image="assets/logos/codewalker.jpg"/>
            <Card containerRef={grid2Container} style={{rotate: "90deg", bottom: "30%", left: "70%"}} text="React"/>
            <Card containerRef={grid2Container} style={{rotate: "-45deg", top: "25%", left: "0%"}} text="Motion"/>
            <Card containerRef={grid2Container} style={{rotate: "-35deg", top: "70%", right: "20%"}} image="assets/logos/fivem.png"/>
            <Card containerRef={grid2Container} style={{rotate: "-35deg", top: "55%", left: "0%"}} text="Astro"/>
            <Card containerRef={grid2Container} style={{rotate: "65deg", top: "5%", left: "50%"}} text="Tailwind"/>
            <Card containerRef={grid2Container} style={{rotate: "30deg", top: "70%", left: "20%"}} image="assets/logos/dotnet-pink.png"/>
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Zona horaria</p>
            <p>Vivo en España y estoy abierto a trabajar en remoto para cualquier parte del mundo.</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe/>
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              ¿Empezamos un proyecto juntos?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Stack tecnológico</p>
            <p className="subtext">Me especializo en diversos lenguajes, frameworks y herramientas que me permiten desarrollar aplicaciones robustas y escalables...</p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About