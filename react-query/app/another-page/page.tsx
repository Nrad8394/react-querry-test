"use client";

import { useApi } from "@/hooks/useApi";
import { Card } from "@/components/ui/card";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function AnotherPage() {
  const { useFetchData } = useApi<Post>("/posts", 5);
  const { data, isLoading, error } = useFetchData(1); // Fetch page 1 (cached data)

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="p-4">
        <h2 className="text-xl font-bold mb-4">Cached Posts</h2>
        <ul>
          {data?.results.map((post) => (
            <li key={post.id} className="p-2 border-b">{post.title}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
