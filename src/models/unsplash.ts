export interface UnsplashPhoto {
	id: string;
	slug: string;
	alternative_slugs: AlternativeSlugs;
	created_at: string;
	updated_at: string;
	promoted_at: string;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	description: string | null;
	alt_description: string;
	breadcrumbs: any[];
	urls: Urls;
	links: Links;
	likes: number;
	liked_by_user: boolean;
	current_user_collections: any[];
	sponsorship: Sponsorship | null;
	topic_submissions: TopicSubmissions;
	asset_type: string;
	user: User;
}

export interface AlternativeSlugs {
	en: string;
	es: string;
	ja: string;
	fr: string;
	it: string;
	ko: string;
	de: string;
	pt: string;
}

export interface Urls {
	raw: string;
	full: string;
	regular: string;
	small: string;
	thumb: string;
	small_s3: string;
}

export interface Links {
	self: string;
	html: string;
	download: string;
	download_location: string;
}

export interface Sponsorship {}

export interface TopicSubmissions {}

export interface User {
	id: string;
	updated_at: string;
	username: string;
	name: string;
	first_name: string;
	last_name: string | null;
	twitter_username: string | null;
	portfolio_url: string | null;
	bio: string | null;
	location: string;
	links: UserLinks;
	profile_image: ProfileImage;
	instagram_username: string;
	total_collections: number;
	total_likes: number;
	total_photos: number;
	total_promoted_photos: number;
	total_illustrations: number;
	total_promoted_illustrations: number;
	accepted_tos: boolean;
	for_hire: boolean;
	social: Social;
}

export interface UserLinks {
	self: string;
	html: string;
	photos: string;
	likes: string;
	portfolio: string;
	following: string;
	followers: string;
}

export interface ProfileImage {
	small: string;
	medium: string;
	large: string;
}

export interface Social {
	instagram_username: string;
	portfolio_url: string;
	twitter_username: string | null;
	paypal_email: string | null;
}
