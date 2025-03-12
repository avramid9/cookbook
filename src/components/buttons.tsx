import Link from 'next/link';

export function ViewRecipe({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/${id}`}
      className="btn btn-primary"
    >
      Read recipe
    </Link>
  );
}