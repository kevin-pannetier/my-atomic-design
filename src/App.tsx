import "./index.css";

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-blue-500 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">MyAtomicDesign</h1>
          <p className="text-lg mt-2">
            A reusable atomic design system library built with React, Tailwind
            CSS, Radix UI, and Storybook.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About MyAtomicDesign</h2>
          <p>
            MyAtomicDesign is a component library focused on implementing atomic
            design principles to build consistent and reusable UI components. It
            leverages modern technologies such as <strong>React</strong>,{" "}
            <strong>Tailwind CSS</strong>, <strong>Radix UI</strong>, and{" "}
            <strong>Storybook</strong> to ensure scalability and ease of use.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Why Use MyAtomicDesign?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Encourages the use of atomic design principles for consistent UI
              development.
            </li>
            <li>
              Includes pre-styled, customizable components using Tailwind CSS.
            </li>
            <li>
              Integrates Radix UI for accessibility and composable primitives.
            </li>
            <li>Utilizes Storybook for component documentation and testing.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Install the library:</strong> <br />
              <code className="bg-gray-200 p-1 rounded">
                npm install my-atomic-design
              </code>
            </li>
            <li>
              <strong>Import components:</strong> <br />
              Use the pre-built components in your project. For example: <br />
              <code className="bg-gray-200 p-1 rounded">
                import Button from 'my-atomic-design/Button';
              </code>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Explore Components with Storybook
          </h2>
          <p>
            Dive into the available components, view their variations, and
            explore usage examples using Storybook. To start Storybook, run:
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded">
            <code>npm run storybook</code>
          </pre>
          <p className="mt-2">
            Once Storybook is running, open{" "}
            <a
              href="http://localhost:6006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              http://localhost:6006
            </a>{" "}
            in your browser.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contributing</h2>
          <p>
            We welcome contributions! If you'd like to add features or fix bugs,
            feel free to open a pull request on our GitHub repository.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <p className="text-center">
            © {new Date().getFullYear()} MyAtomicDesign. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
