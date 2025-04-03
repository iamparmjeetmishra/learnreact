"use client";
import { RandomNumber } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type ImageType = {
	url: string;
};

const generateRandomImage = (): ImageType => {
	const randomId = RandomNumber(20);
	const url = `https://picsum.photos/id/${randomId}/500/500`;
	return { url };
};

export default function InfiniteScrollPage() {
	const [images, setImages] = useState<ImageType[]>([]);
	const [hasMore, setHasMore] = useState(true);

	const fetchMoreData = () => {
		if (images.length >= 20) {
			setHasMore(false);
			return;
		}
		const newImages = Array.from({ length: 10 }, () =>
			generateRandomImage()
		);

		setImages((prevImg) => [...prevImg, ...newImages]);
	};

	useEffect(() => {
		fetchMoreData();
	}, []);

	return (
		<div className="flex flex-col justify-center items-center p-4 container mx-auto">
			<h2 className="text-2xl font-semibold">InfiniteScroll</h2>
			<InfiniteScroll
				dataLength={images.length}
				next={fetchMoreData}
				hasMore={hasMore}
				loader={<h1>Loading...</h1>}
				endMessage={
					<p className="border text-center bg-red-400 text-red-900 rounded-md my-4 shadow p-2">
						No More Images
					</p>
				}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 mt-4">
					{images &&
						images.map((img, idx) => (
							<div key={idx} className="mb-2 shadow">
								<Image
									key={idx}
									src={img.url}
									alt={"Random Image" + idx}
									className="rounded-md object-cover bg-neutral-900"
									width={500}
									height={500}
								/>
								<p className="p-4 text-left font-medium">
									Image Num:{idx + 1}
								</p>
							</div>
						))}
				</div>
			</InfiniteScroll>
		</div>
	);
}
