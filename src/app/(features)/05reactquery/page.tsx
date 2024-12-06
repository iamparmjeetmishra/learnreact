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
	const QueryClient = useQueryClient();

	const { data, error, isLoading } = useQuery({
		queryKey: ["posts"],
		queryFn: () => axios.get(URL),
	});

	const { mutate, isError, isPending, isSuccess } = useMutation({
		mutationFn: (newPost) =>
			axios.post(URL, newPost, {
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}),
		onSuccess: (newPost: PostData) => {
			QueryClient.setQueryData(["posts"], (oldPosts: PostData[]) => [
				...oldPosts,
				newPost,
			]);
		},
	});

	if (error) return <div>Error</div>;
	if (isError) return <div>Error from mutate</div>;

	if (isLoading) return <div>Loading....</div>;

	const PostDataFeed: PostData = {
		userId: 2002,
		id: 42323,
		title: "new Post title",
		body: "new Body data",
	};

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
					Update Post
				</Button>

				<div className="flex gap-4 flex-wrap mt-4 ">
					{data?.data.map((item: any) => (
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
