interface Props {
  title: string;
  image: string;
  description: string;
}

export default function CourseCard({ title, image, description }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img src={image} alt={title} className="rounded mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
