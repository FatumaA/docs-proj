import type { UnsplashPhoto } from "../models/unsplash";
import Button, { BtnActions } from "./Button";

const SearchResults = () => {
	const searchRes = window.localStorage.getItem("photoResults");
	const parsedSearchResults: UnsplashPhoto[] = JSON.parse(searchRes!);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{parsedSearchResults.map((res) => (
				<div className="border rounded-lg flex flex-col h-fit">
					<img
						src={res.urls.small}
						alt={res.alt_description}
						className="max-h-48 min-h-48 w-full object-cover rounded-t-lg"
					/>
					<div className="flex flex-col justify-between p-4">
						<div className="flex flex-col text-start gap-2">
							<p className="h-16">{res.alt_description}</p>
							<Button
								type="button"
								withIcon={true}
								buttonText="See Photo"
								iconClass="flex items-end"
								btnAction={BtnActions.ViewPhoto}
								actionURL={res.links.download}
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default SearchResults;
