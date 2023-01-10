import Container from "~/components/Container";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Container>
      <div>
        <h1 className="text-2xl font-semibold text-center text-gray-300 md:text-3xl">
          Loading
        </h1>
      </div>
    </Container>
  );
}
