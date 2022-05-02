import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image_url';

export const client = sanityClient({
    projectId: 'tkt0cbsy',
    dataset: 'production',
    apiVersion: '2022-03-10',
    usecdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);