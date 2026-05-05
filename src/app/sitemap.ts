import { MetadataRoute } from 'next';
import { servicesRegistry } from '@/app/services/data/servicesRegistry';
import { locationsData } from '@/app/locations/data';
import { products } from '@/AllData/products/PRODUCT_DATA';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.webronic.com';

  // 1. Core Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/branches',
    '/careers',
    '/contact',
    '/industries',
    '/locations',
    '/products',
    '/projects',
    '/services',
    '/privacy-policy',
    '/terms',
    '/refund',
    '/shipping'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Service Routes (This automatically includes the 6+ new Geo-Targeted URLs)
  const serviceRoutes = Object.keys(servicesRegistry).map((key) => ({
    url: `${baseUrl}/service?category=${key}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 3. Dynamic Product Routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product?category=${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 4. Dynamic Locations Directory Routes
  const locationRoutes: MetadataRoute.Sitemap = [];
  locationsData.forEach((country) => {
    country.cities.forEach((city) => {
      locationRoutes.push({
        url: `${baseUrl}/locations/${country.countrySlug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    });
  });

  return [...staticRoutes, ...serviceRoutes, ...productRoutes, ...locationRoutes];
}
