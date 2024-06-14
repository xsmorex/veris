export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        <div className='container'>
          <h1 className='mb-12 text-3xl font-bold'>We provide our users the ability to register a Certificate for an artwork they own. </h1>
          <p className='max-w-lg'>
            A Certificate consists of:
          </p>
          <ul className="list-disc list-inside p-4">
            <li>A photo of the artwork</li>
            <li>A title (e.g. "Mona Lisa")</li>
            <li>An Artist (e.g. "Leonardo Da Vinci")</li>
            <li>A year of production (e.g. "1503")</li>
          </ul>

        </div>

      </div>
    </main>
  );
}
