import { NextResponse } from 'next/server';
import { uploadToCloudinary } from '../../utils/cloudinary';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file-to-upload') as File;

    if (!file) {
      return NextResponse.redirect('/error');
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await uploadToCloudinary(buffer);

    return NextResponse.json({
      success: true,
      imageUrl: uploadResult.secure_url,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.redirect('/error');
  }
}