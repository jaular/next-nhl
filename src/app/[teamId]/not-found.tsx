import Link from "next/link";
import Container from "~/components/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="space-y-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-300 md:text-3xl">
          404 | Not found!
        </h1>

        <div>
          <Link className="text-blue-500" href="/">
            Back to home
          </Link>
        </div>
      </div>
    </Container>
  );
}
