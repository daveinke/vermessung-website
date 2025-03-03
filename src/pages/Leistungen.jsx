export default function Leistungen() {
  return (
    <main className='bg-gradient-to-t from-[#fbdec2] to-[#a6c1ee] h-screen'>
      <div className="w-[92%] mx-auto pt-10">
        <h1 className="text-4xl font-bold mb-6">Unsere Leistungen</h1>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Amtliche Vermessung</h2>
            {/* Inhalt hier */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Bauvermessung</h2>
            {/* Inhalt hier */}
          </div>
        </div>
      </div>
    </main>
  )
} 