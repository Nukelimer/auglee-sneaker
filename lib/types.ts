export interface simplifiedProducts {
  slug: string;
  name: string;
  _id: string;
  price: number;

  categoryName: string;
  imageUrl: string;
}


export interface singleProduct {
  slug: string;
  name: string;
  _id: string;
  price: number;
  categoryName: string;
  images: string;
  description: string;
}

