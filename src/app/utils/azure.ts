import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import { ApiKeyCredentials } from "@azure/ms-rest-js";

const computerVisionKey = process.env.COMPUTER_VISION_KEY || "";
const computerVisionEndpoint = process.env.COMPUTER_VISION_ENDPOINT || "";

const computerVisionClient = new ComputerVisionClient(
  new ApiKeyCredentials({ inHeader: { "Ocp-Apim-Subscription-Key": computerVisionKey } }),
  computerVisionEndpoint
);

export async function detectColorScheme(imageUrl: string) {
  try {
    if (!imageUrl.startsWith('https')) {
      throw new Error('Invalid image URL. It must be an absolute URL.');
    }

    const analysisResult = await computerVisionClient.analyzeImage(imageUrl, { visualFeatures: ['Color'] });

    const color = analysisResult.color;
    return color;
  } catch (error: unknown) {
    console.error('Error detecting color scheme:', error);
    throw error;
  }
}