"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-500">Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}
