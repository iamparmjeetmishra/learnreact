"use client";
import { Button } from "@/components/ui/button";
import {
	useQuery,
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";

type PostData = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export default function ReactQueryPage() {
	const queryClient = useQueryClient();

	// Fetch posts
	const { data, error, isLoading } = useQuery({
		queryKey: ["posts"],
    queryFn: () => axios.get(URL).then((res) => res.data), 
    staleTime: 1000 * 60 * 5, // 5 minutes
    // refetchOnReconnect: true,
    // refetchOnWindowFocus: true,
    // retry: 5,
	});

	// Add a new post
	const { mutate, isError, isPending } = useMutation({
		mutationFn: (newPost: PostData) =>
			axios.post(URL, newPost).then((res) => res.data),
		onSuccess: (newPost: PostData) => {
			// Update cache
			queryClient.setQueryData<PostData[] | undefined>(["posts"], (oldPosts) => {
				return oldPosts ? [...oldPosts, newPost] : [newPost];
			});
		},
	});

	if (error) return <div>Error loading posts</div>;
	if (isError) return <div>Error adding post</div>;
	if (isLoading) return <div>Loading....</div>;

	return (
		<div className="mx-auto w-full min-h-screen flex flex-col bg-slate-200">
			<main className="container">
				<h2>ReactQueryPage</h2>
				{isPending && <p>Data is being added...</p>}
				<Button
					onClick={() =>
						mutate({
							userId: 2002,
							id: 4233,
							title: "new Post title",
							body: "new Body data",
						})
					}
				>
					Add Post
				</Button>

				<div className="flex gap-4 flex-wrap mt-4">
					{data?.map((item: PostData) => (
						<div
							key={item.id}
							className="rounded border border-slate-400 p-2"
						>
							<small>{item.id}</small>
							<h2>{item.title}</h2>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
