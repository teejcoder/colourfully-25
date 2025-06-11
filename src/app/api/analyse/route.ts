import { v2 as cloudinary } from 'cloudinary';
import { detectColorScheme } from '../../utils/azure';
import { Vibrant } from 'node-vibrant/node';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export async function POST(request: Request) {
  try {
    const { 'image-url': imageUrl } = await request.json();

    if (!imageUrl) {
      return NextResponse.redirect('/error');
    }

    const colorScheme = await detectColorScheme(imageUrl);
    const palette = await Vibrant.from(imageUrl).getPalette();

    return NextResponse.json({
      success: true,
      imageUrl,
      colorScheme,
      palette,
    }, {status: 200});
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'unknown error - refresh & try again'
    return NextResponse.json({error: message}, {status: 500})
  }
}