import { useState } from "react";

import Button from "../components/Button";
import type { UnsplashPhoto } from "../models/unsplash";

interface SearchProps {
	auth: string;
}

const Search = ({ auth }: SearchProps) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isSearching, setIsSearching] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!searchTerm) {
			setError("No search term entered");
			setTimeout(() => {
				setError("");
			}, 3000);
			return;
		}

		setIsSearching(true);

		try {
			const res = await fetch(
				`https://api.unsplash.com/search/photos?query=${searchTerm}`,
				{
					method: "GET",
					headers: {
						Authorization: auth,
					},
				}
			);
			// console.log("res search: ", res);
			const photoRes = await res.json();
			console.log(JSON.stringify(photoRes));
			if (photoRes.results.length === 0) {
				setIsSearching(false);
				setError("No photos found");
				setTimeout(() => {
					setSearchTerm("");
					setError("");
				}, 3000);
				return;
			}
			setIsSearching(false);

			// Handle the photo results
			window.localStorage.setItem(
				"photoResults",
				JSON.stringify(photoRes.results)
			);
			window.location.href = `/unsplash-exp/search-results`;
		} catch (error) {
			console.error("Error fetching data: ", error);
			setError("An error occurred while searching" + error);
			setIsSearching(false);
		}
	};
	return (
		<div className="flex flex-col w-full md:w-1/2">
			<form
				className="flex flex-col md:flex-row items-start md:items-center gap-2"
				onSubmit={handleSubmit}
			>
				<input
					aria-roledescription="search"
					name="search"
					type="text"
					id="search"
					placeholder="search unsplash API for photos..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className={`bg-inherit w-5/6 border rounded-md p-2 focus:outline-none focus:ring-1 ${
						error
							? "border-red-500 dark:border-red-300 focus:ring-red-500 invalid:focus:ring-red-600"
							: "focus:ring-slate-900"
					}`}
				/>
				<Button
					type="submit"
					buttonText={isSearching ? "Searching..." : "Search"}
				/>
			</form>
			<span className="text-start text-red-500 dark:text-red-300 font-medium mt-1">
				{error}
			</span>
		</div>
	);
};

export default Search;
