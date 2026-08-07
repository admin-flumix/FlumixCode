import React, { useEffect } from 'react';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

interface GoogleRecaptchaProps {
  siteKey: string;
  onChange: (token: string | null) => void;
  onExpired?: () => void;
  onError?: (error: Error) => void;
  theme?: 'light' | 'dark';
  keyProp?: number;
  action?: string;
}

const loadRecaptchaScript = (siteKey: string) => {
  if (document.getElementById('google-recaptcha-v3-script')) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.id = 'google-recaptcha-v3-script';
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
    document.head.appendChild(script);
  });
};

export async function getRecaptchaToken(siteKey: string, action = 'submit_form') {
  if (!siteKey) {
    return null;
  }

  try {
    await loadRecaptchaScript(siteKey);
  } catch {
    return null;
  }

  if (!window.grecaptcha) {
    return null;
  }

  return new Promise<string | null>((resolve) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha!
        .execute(siteKey, { action })
        .then((token) => resolve(token || null))
        .catch(() => resolve(null));
    });
  });
}

export default function GoogleRecaptcha({
  siteKey,
  onChange,
  onExpired,
  onError,
  keyProp,
  action = 'submit_form',
}: GoogleRecaptchaProps) {
  useEffect(() => {
    let isMounted = true;

    const run = async () => {
      if (!siteKey) {
        return;
      }

      try {
        const token = await getRecaptchaToken(siteKey, action);
        if (!isMounted) {
          return;
        }

        if (token) {
          onChange(token);
        } else if (onExpired) {
          onExpired();
        }
      } catch (error) {
        if (!isMounted) {
          return;
        }

        if (onError) {
          onError(error as Error);
        }
      }
    };

    void run();

    return () => {
      isMounted = false;
    };
  }, [siteKey, keyProp, action, onChange, onExpired, onError]);

  return null;
}
