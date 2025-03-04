export default function Kontakt() {
  return (
    <main className='h-screen'>
      <div className="absolute -z-10 h-full w-full flex items-center justify-center bg-[radial-gradient(circle_500px,_rgba(200,200,200,0.7)_0%,_rgba(0,0,0,0)_200%)]">
        {/* Div für den Hintergrund mit Kreis*/}
      </div>
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px_200px] -z-5">
        {/* Div für den Hintergrund mit Grids*/}
      </div>
      <div className="w-[92%] mx-auto pt-10 z-10 max-w-[1400px]">
        <h1 className="mt-30 text-4xl font-bold mb-6">Kontakt</h1>
        <div className="bg-[#f5f5f5] p-6 rounded-lg shadow-[0px_0px_20px_rgba(0,0,0,0.4)] border-2 border-gray-400">
          <div className="flex justify-between items-start gap-8">
            {/* Kontakt-Informationen */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Kontaktieren Sie uns</h2>
              <div>
                <h3 className="font-bold">Adresse:</h3>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
              </div>
              <div>
                <h3 className="font-bold">Telefon:</h3>
                <p>+49 123 456789</p>
              </div>
              <div>
                <h3 className="font-bold">E-Mail:</h3>
                <p>info@vermessung-beispiel.de</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="w-[300px] h-[250px] rounded-lg overflow-hidden border-1 border-[#c8c8c8] shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d780.4842473086231!2d8.497572669676753!3d49.16309137517027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797a5905fe99deb%3A0xa1f99ad4a1649750!2sK%C3%A4the-Kollwitz-Ring%2045%2C%2076676%20Graben-Neudorf!5e1!3m2!1sen!2sde!4v1741095095597!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 