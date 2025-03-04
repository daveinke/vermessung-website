export default function Home() {
  return (
    <main className='flex flex-col'>
      {/* First full-height section with grid background */}
      <section className="h-screen w-full relative">
        <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_200px]">
          <div className="flex flex-col items-center pt-40 gap-12">
            <div className="w-[800px] h-[500px] rounded-xl shadow-2xl bg-[url('/src/assets/hero2.jpg')] bg-cover bg-center">
              <div className="w-full h-full bg-black/30 rounded-xl flex items-center justify-center">
                <h1 className="text-4xl font-bold font-display text-white">Ihr Partner für Vermessung</h1>
              </div>
            </div>

            <p className="text-gray-900 text-2xl">
              Als kompetenter Partner bieten wir ein umfassendes Leistungsspektrum in allen Vermessungsaufgaben.<br />
              Privaten Kunden, Bauherren, Architekten, Erschließungsträgern, Kommunen und Behörden stehen wir mit Rat und Tat zur Seite. <br />
              <br />
              Dipl.-Ing. Thomas Starzec<br />
              Öffentlich bestellter Vermessungsingenieur
            </p>
            <div className="flex justify-around w-[70%] text-gray-900 text">
              <p>
                Käthe-Kollwitz-Ring 45, 76676 Graben-Neudorf <br />
                Tel:   07255/7681450 <br />
                Mobil: 015771458875
              </p>
              <p>
                Email: kontakt@vermessung-starzec.de
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second full-height section with radial gradient */}
      <section className="h-screen w-full">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_200px]">
          {/* Div für den Hintergrund mit Grids*/}
        </div>
        <div className="h-full w-full flex items-center justify-center bg-[radial-gradient(circle_500px,_rgba(200,200,200,0.7)_0%,_rgba(0,0,0,0)_200%)]">
          {/* Div für den Hintergrund mit Kreis*/}
        </div>
      </section>
    </main>
  )
} 