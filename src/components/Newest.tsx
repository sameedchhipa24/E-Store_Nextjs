import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { simplifiedProduct } from "@/lib/interface";

async function getData() {
  const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
        _id,
          price,
        name,
        description,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`;

  const data = await client.fetch(query);
  // console.log(data);

  return data;
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest products
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full  rounded-md bg-gray-200 group-hover:opacity-90 lg:h-80  md:hover:-translate-y-20 md:transition md:delay-350 md:ease-out">
            <Link href={`/product/${product.slug}`}><Image
                  src={product.imageUrl}
                  alt="Product image"
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full rounded-md"
                  width={300}
                  height={300} 
                /> 
                </Link>
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-base text-gray-700">
                  <Link href={`/product/${product.slug}`}>
                      {product.name}
                      </Link>
                   
                  </h3>
                  <p className="mt-0 text-base text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  Rs-{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}