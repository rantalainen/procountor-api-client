import { ApiConfig } from './api';
import CacheableLookup from 'cacheable-lookup';
import https from 'https';

export interface IProcountorApiClientOptions {
  clientId: string;
  clientSecret: string;
  /** An API key is a token that you provide when making API calls */
  apiKey: string;
}

export interface IProcountorApiClientConfig extends ApiConfig<any> {
  /**
   * API base url,
   * by default: `https://api.procountor.com/api`.
   * Use `https://api-test.procountor.com/api` for testing.
   */
  baseURL?: string;
  /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
  timeout?: number;
  /** Instance of `https.Agent` or `true` to enable internal Keep Alive Agent, defaults to `true` */
  keepAliveAgent?: boolean | https.Agent;
  /** Instance of `cacheable-lookup` or `true` to enable internal DNS cache, defaults to `true` */
  dnsCache?: boolean | CacheableLookup;
}

export interface IProcountorApiClientAccessToken {
  access_token: string;
  expires_in: number;
  timeout: NodeJS.Timeout;
}
