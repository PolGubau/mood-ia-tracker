import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-w-screen overflow-y-auto overflow-x-hidden min-h-screen  flex justify-center items-center dark:bg-black dark:text-white">
      <div className="max-w-[600px] w-full mx-auto flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl">The best Journal app</h1>
        <p className="opacity-75">
          Track your mood, explain to the app, we do the tracks.
        </p>
        <div>
          <Link href={'/journal'}>
            <button className="bg-blue-600 py-2 px-4 rounded-lg text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
