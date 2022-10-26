// class that stores information about analytics for assigned object
export default class CStatics {
    id?: string;
    ref?: string;

    views: number = 0;
    likes: number = 0;
    clicks: number = 0;
    shares: number = 0;
    comments: number = 0;

    downloads: number = 0;
    favorites: number = 0;
}
