"use client";

import { getProviders, signIn } from 'next-auth/react';
import { useState } from 'react';

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

const AuthProviders = () => {

  const [providers, setProviders] = useState<Providers | null>(null)

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, idx) => (
          <button key={idx}>{provider.id}</button>
        )
        )}
      </div>
    )
  }
}

export default AuthProviders