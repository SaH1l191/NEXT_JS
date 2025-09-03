export default function Home() {
  return (
    <main className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-10 gap-16 sm:p-20 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-3">Next.js Concepts</h1>

      <ul className="w-full max-w-3xl space-y-3">
        {/* Section 1 */}
        <li className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Core Concepts (completed)</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Routing</li>
            <li>Params Object</li>
            <li>Client Components</li>
            <li>usePathname</li>
            <li>Search Params</li>
            <li>Server Components</li>
            <li>Router Methods</li>
            <li>Catch-all Routing</li>
            <li>Route Handler </li>
            <li>Private Folders (starting with _)</li>
            <li>Custom 404 Page</li>
            <li>Custom Layout Pages</li>
            <li><code>notFound()</code></li>
            <li><code>loading.tsx</code></li>
            <li><code>Middleware </code></li>
            <li><code>Caching(in readme)</code></li>
            <li>CSR vs SSR in Readme</li>
            <li>SSR vs RSC in Readme</li>
             <li>SSR vs RSC in Readme</li>
          </ul>
        </li>

        <li className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Remaining</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className=" text-gray-500">Metadata</li>
            <li>Error Page</li>
            <li>Parallel Routes</li>
            <li>Intercepted Routes</li>
          </ul>
        </li>
      </ul>
    </main>
  );
}
