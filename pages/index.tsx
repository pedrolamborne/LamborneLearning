import Header from "../components/Header";
import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <CourseCard
          title="Curso de Figma"
          image="/figma.jpg"
          description="Aprenda design de interfaces com Figma."
        />
        <CourseCard
          title="Curso de Redis"
          image="/redis.jpg"
          description="Domine o banco de dados em memória Redis."
        />
        <CourseCard
          title="Curso de Matemática"
          image="/math.jpg"
          description="Matemática prática e aplicada para concursos."
        />
      </main>
    </div>
  )
}
