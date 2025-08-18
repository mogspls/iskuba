interface ImportMeta {
  glob<T = unknown>(
    pattern: string,
    options?:
      | {
          eager?: false;
          import?: string | string[];
          query?: Record<string, any>;
        }
      | { eager: true; import?: string | string[]; query?: Record<string, any> }
  ): Record<string, T>;
}
