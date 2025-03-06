import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className='flex flex-col'>
      {/* First full-height section with grid background */}
      <section className="w-full relative">
        <div className="absolute h-full w-full flex items-center justify-center bg-[radial-gradient(circle_500px,_rgba(200,200,200,0.7)_0%,_rgba(0,0,0,0)_200%)] -z-10">
          {/* Div für den Hintergrund mit Kreis*/}
        </div>
        <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_200px]">
          <div className="flex flex-col items-center pt-35 gap-2">
            <div className="w-[1200px] h-[600px] rounded-xl bg-[url('/src/assets/hero2.jpg')] bg-cover bg-bottom shadow-[0px_0px_25px_rgba(0,0,0,1)]">
              <div className="w-full h-full bg-black/30 rounded-xl flex justify-center">
                <h1 className="text-6xl font-bold font-display text-white 
                [text-shadow:_-1px_0_0_#4b5563,_0_-1px_0_#4b5563,_1px_0_0_#4b5563,_0_1px_0_#4b5563,_-1px_-1px_0_#4b5563,_1px_-1px_0_#4b5563,_-1px_1px_0_#4b5563,_1px_1px_0_#4b5563] relative top-20 left-40">
                  Ihr Partner für Vermessung
                </h1>
              </div>
            </div>

            <section>
              <p className="text-gray-900 text-2xl pt-5">
                Als kompetenter Partner bieten wir ein umfassendes Leistungsspektrum in allen Vermessungsaufgaben.<br />
                Privaten Kunden, Bauherren, Architekten, Erschließungsträgern, Kommunen und Behörden stehen wir mit Rat und Tat zur Seite. <br />
                <div className='font-bold pt-2'>Dipl.-Ing. Thomas Starzec<br />
                  Öffentlich bestellter Vermessungsingenieur
                </div>

              </p>

              <p className="text-gray-900 text-xl max-w-[1400px] mx-auto mt-8">
                Wir begleiten Sie von der ersten Beratung bis zur finalen Umsetzung Ihres Projekts.
                Dabei legen wir besonderen Wert auf eine verständliche Kommunikation und transparente Prozesse.
                Unsere langjährige Erfahrung in der Zusammenarbeit mit Behörden, Architekten und Bauträgern ermöglicht es uns,
                auch komplexe Vermessungsprojekte effizient und reibungslos abzuwickeln.
                Vertrauen Sie auf einen Partner, der Ihre Anforderungen versteht und präzise umsetzt. Als öffentlich bestellter Vermessungsingenieur sind wir Ihr kompetenter Ansprechpartner für alle vermessungstechnischen Aufgaben in der Region.
              </p>

              <div className="flex justify-center gap-8 mt-12">
                {/* Card für Amtliche Vermessung */}
                <div className="bg-white rounded-xl shadow-[0px_0px_20px_rgba(0,0,0,0.2)] p-6 w-[600px] border-2 border-gray-200 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Amtliche Vermessung</h3>
                  <p className="text-gray-700 mb-6">
                    Wir führen sämtliche amtliche Vermessungsarbeiten durch, die für Grundstücksteilungen,
                    Grenzfeststellungen oder bauliche Veränderungen erforderlich sind.
                    Als öffentlich bestellter Vermessungsingenieur garantieren wir die rechtssichere
                    Durchführung aller amtlichen Vermessungsaufgaben.
                  </p>
                  <Link
                    to="/leistungen/amtliche-vermessung"
                    className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold 
            hover:bg-gray-700 transition-colors duration-300 
            shadow-lg hover:shadow-xl active:scale-95 transform"
                  >
                    Mehr erfahren
                  </Link>
                </div>

                {/* Card für Bauvermessung */}
                <div className="bg-white rounded-xl shadow-[0px_0px_20px_rgba(0,0,0,0.2)] p-6 w-[600px] border-2 border-gray-200 hover:shadow-[0px_0px_20px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Bauvermessung</h3>
                  <p className="text-gray-700 mb-6">
                    Von der Absteckung bis zur Baubegleitung bieten wir alle notwendigen
                    vermessungstechnischen Leistungen für Ihr Bauprojekt. Mit modernster
                    Messtechnik und langjähriger Erfahrung sorgen wir für die präzise
                    Umsetzung Ihrer Bauvorhaben.
                  </p>
                  <Link
                    to="/leistungen/bauvermessung"
                    className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold 
            hover:bg-gray-700 transition-colors duration-300 
            shadow-lg hover:shadow-xl active:scale-95 transform"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </div>




            </section>
            <div className="flex justify-between text-gray-900 relative w-[90.3%] mx-auto z-10 mt-10 p-4 border-2 border-gray-200 bg-white rounded-xl mb-10">
              <p>
                Käthe-Kollwitz-Ring 45, 76676 Graben-Neudorf <br />
                Tel:   07255/7681450 <br />
                Mobil: 015771458875
              </p>
              <div className="flex items-center">
                <p>
                  Email: kontakt@vermessung-starzec.de
                </p>
              </div>
              <div className="flex items-center">
                <Link
                  to="/kontakt"
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold 
                    hover:bg-gray-700 transition-colors duration-300 
                    shadow-lg hover:shadow-xl active:scale-95 transform cursor-pointer"
                >
                  Kontaktieren Sie uns
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 