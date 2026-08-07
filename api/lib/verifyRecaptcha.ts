export async function verifyRecaptchaToken(token: string | undefined) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    if (!secretKey) {
      console.warn('RECAPTCHA_SECRET_KEY is not configured. Skipping server-side reCAPTCHA verification.');
      return { ok: true, skipped: true };
    }

    return { ok: false, error: 'Missing reCAPTCHA token' };
  }

  if (!secretKey) {
    console.warn('RECAPTCHA_SECRET_KEY is not configured. Skipping server-side reCAPTCHA verification.');
    return { ok: true, skipped: true };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = (await response.json()) as {
      success?: boolean;
      'error-codes'?: string[];
    };

    if (!response.ok || !data.success) {
      return {
        ok: false,
        error: 'reCAPTCHA verification failed',
        details: data['error-codes'] || [],
      };
    }

    return { ok: true };
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return { ok: false, error: 'reCAPTCHA verification request failed' };
  }
}
