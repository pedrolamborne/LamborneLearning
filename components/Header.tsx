export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold">LamborneLearning</h1>
      <nav className="space-x-4">
        <a href="#" className="text-gray-700 hover:text-blue-500">Início</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Cursos</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Sobre</a>
      </nav>
    </header>
  )
}
