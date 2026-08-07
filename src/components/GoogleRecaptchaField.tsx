import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';

export interface GoogleRecaptchaFieldHandle {
  reset: () => void;
  getValue: () => string | null;
  executeAsync: () => Promise<string | null>;
}

interface GoogleRecaptchaFieldProps {
  onChange?: (token: string | null) => void;
  onExpired?: () => void;
}

const RECAPTCHA_SCRIPT_ID = 'recaptcha-v3-script';

const loadRecaptchaScript = (siteKey: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const existing = document.getElementById(RECAPTCHA_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      if ((window as any).grecaptcha) {
        resolve();
      } else {
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', () => reject(new Error('Failed to load reCAPTCHA script.')));
      }
      return;
    }

    const script = document.createElement('script');
    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA script.'));
    document.head.appendChild(script);
  });
};

const GoogleRecaptchaField = React.forwardRef<GoogleRecaptchaFieldHandle, GoogleRecaptchaFieldProps>(function GoogleRecaptchaField({ onChange, onExpired }, ref) {
  const siteKey = (import.meta as any).env?.VITE_RECAPTCHA_SITE_KEY as string | undefined;
  const [ready, setReady] = useState(false);
  const lastTokenRef = useRef<string | null>(null);

  useEffect(() => {
    if (!siteKey) {
      setReady(false);
      return;
    }

    let active = true;
    loadRecaptchaScript(siteKey)
      .then(() => {
        if (active) {
          setReady(true);
        }
      })
      .catch((err) => {
        if (active) {
          console.error('[reCAPTCHA] failed to load script', err);
          setReady(false);
        }
      });

    return () => {
      active = false;
    };
  }, [siteKey]);

  const executeAsync = async (): Promise<string | null> => {
    if (!siteKey) {
      return null;
    }

    if (!(window as any).grecaptcha) {
      await loadRecaptchaScript(siteKey);
    }

    const grecaptcha = (window as any).grecaptcha;
    if (!grecaptcha || !grecaptcha.execute) {
      throw new Error('reCAPTCHA is not available.');
    }

    await new Promise((resolve) => grecaptcha.ready(resolve));
    const token = await grecaptcha.execute(siteKey, { action: 'submit' });
    lastTokenRef.current = token;
    onChange?.(token);
    return token;
  };

  useImperativeHandle(ref, () => ({
    reset: () => {
      lastTokenRef.current = null;
      onExpired?.();
    },
    getValue: () => lastTokenRef.current,
    executeAsync,
  }));

  if (!siteKey) {
    return (
      <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 px-3 py-2 text-2xs text-slate-500">
        reCAPTCHA is not configured yet. Add VITE_RECAPTCHA_SITE_KEY to enable human verification.
      </div>
    );
  }

  return (
    <div className="text-2xs text-slate-500">
      {ready ? (
        <span>reCAPTCHA v3 is ready.</span>
      ) : (
        <span>Loading reCAPTCHA...</span>
      )}
    </div>
  );
});

export default GoogleRecaptchaField;
