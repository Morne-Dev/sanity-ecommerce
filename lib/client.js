import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image_ur';

const client = sanityClient({
    projectId: '',
    dataset: '',
    apiVersion: '',
    usecdn: true,
    token: '',
})