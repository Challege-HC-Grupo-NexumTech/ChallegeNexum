interface CardProps {
  title: string;
  children?: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <div className="text-gray-700 text-sm">{children}</div>
    </div>
  );
}
