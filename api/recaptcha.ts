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

  console.log("Verifying reCAPTCHA token:", secret ? "[REDACTED]" : "not set", token ? "[REDACTED]" : "not provided");

  if (!secret) {
    return {
      success: false,
      'error-codes': ['missing-input-secret'],
      hostname: undefined,
      score: 0,
      action: undefined,
    };
  }

  if (!token) {
    return {
      success: false,
      'error-codes': ['missing-input-response'],
      hostname: undefined,
      score: 0,
      action: undefined,
    };
  }

  try {
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
      return {
        success: false,
        'error-codes': ['verification-request-failed'],
        hostname: undefined,
        score: 0,
        action: undefined,
      };
    }

    const data = (await response.json()) as RecaptchaVerifyResponse;
    console.log('reCAPTCHA verification response:', data);
    return data;
  } catch (error: any) {
    console.error('[recaptcha] network or fetch error:', error);
    return {
      success: false,
      'error-codes': ['verification-request-error'],
      hostname: undefined,
      score: 0,
      action: undefined,
    };
  }
}
