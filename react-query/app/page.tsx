"use client";

import { useApi } from "@/hooks/useApi";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [page, setPage] = useState(1);
  const pageSize = 5; // Matches the API hook's page size
  const { useFetchData, useAddItem } = useApi<Post>("/posts", pageSize);
  const { data, isLoading, error } = useFetchData(page);

  const handleAddPost = () => {
    useAddItem.mutate({
      title: "New Post",
      body: "This is a new post",
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="p-4">
        <h2 className="text-xl font-bold mb-4">Posts</h2>
        <Button onClick={handleAddPost} className="mb-4">
          Add Post
        </Button>
        <ul>
          {data?.results.map((post) => (
            <li key={post.id} className="p-2 border-b">{post.title}</li>
          ))}
        </ul>

        {/* Pagination Component */}
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className={page > 1 ? "" : "opacity-50 pointer-events-none"}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href="#" isActive>
                {page}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => setPage((p) => (data?.hasMore ? p + 1 : p))}
                className={data?.hasMore ? "" : "opacity-50 pointer-events-none"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Card>
    </div>
  );
}
