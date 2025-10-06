// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const beaches = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    country: z.string().default('ES'),
    region: z.string(),                 // e.g. Comunidad Valenciana
    locality: z.string(),               // e.g. Pilar de la Horadada
    address: z.string().optional(),     // human-readable address
    coords: z.object({ lat: z.number(), lng: z.number() }),
    isFree: z.boolean().default(true),
    isWheelchairAccessible: z.boolean().optional(),
    amenities: z.array(z.string()).default([]),
    parking: z.array(z.object({
      kind: z.enum(['car_park','on_street','layby']).default('on_street'),
      name: z.string(),
      lat: z.number(),
      lng: z.number(),
      free: z.boolean().optional(),
      price_note: z.string().optional(),
      distance_m: z.number().optional(),
      walk_minutes: z.number().optional(),
      notes: z.string().optional(),
      seasonal_note: z.string().optional(),
    })).default([]),
    // Optional extent for long beaches
    extent: z.object({
      type: z.enum(['line','polygon']).default('line'),
      coords: z.array(z.tuple([z.number(), z.number()])).min(2)
    }).optional(),
    // NEW: playgrounds or kids areas
    playAreas: z.array(z.object({
      name: z.string().default('Playground'),
      lat: z.number(),
      lng: z.number(),
      notes: z.string().optional()
    })).default([]),
    // NEW: cafes/bars/chiringuitos/restaurants
    eateries: z.array(z.object({
      kind: z.enum(['chiringuito','cafe','restaurant','bar']).default('chiringuito'),
      name: z.string(),
      lat: z.number(),
      lng: z.number(),
      url: z.string().url().optional(),
      phone: z.string().optional(),
      seasonal: z.boolean().default(true),
      season_note: z.string().optional(),
      notes: z.string().optional()
    })).default([]),
    blueFlagYear: z.number().optional(), // e.g. 2025
    image: z.string().optional(),
    description: z.string().optional(),
    notes: z.string().optional()         // free-form extras (e.g., boardwalk)
  })
});

export const collections = { beaches };

