export interface RecaptchaVerifyResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
  score?: number;
  action?: string;
}

export async function verifyRecaptchaToken(token?: string | null): Promise<RecaptchaVerifyResponse> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    throw new Error('RECAPTCHA_SECRET_KEY is not configured. Add this environment variable to enable server-side reCAPTCHA verification.');
  }

  if (!token) {
    return {
      success: false,
      'error-codes': ['missing-input-response'],
    };
  }

  const params = new URLSearchParams({
    secret,
    response: token,
  });

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error(`reCAPTCHA verification request failed with status ${response.status}`);
  }

  const data = (await response.json()) as RecaptchaVerifyResponse;
  return data;
}
