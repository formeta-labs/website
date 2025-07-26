<!-- src/lib/components/SEO.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { 
    generateTitle, 
    generateCanonical, 
    generateOGImage, 
    generateOrganizationSchema,
    generateWebSiteSchema,
    SITE_CONFIG,
    type SEOData,
    type JSONLDData
  } from '$lib/utils/seo';

  // Props para datos SEO específicos de la página
  export let title: string = '';
  export let description: string = '';
  export let keywords: string = '';
  export let ogTitle: string = '';
  export let ogDescription: string = '';
  export let ogImage: string = '';
  export let ogType: 'website' | 'article' | 'product' | 'service' = 'website';
  export let twitterCard: 'summary' | 'summary_large_image' = 'summary_large_image';
  export let author: string = SITE_CONFIG.author;
  export let publishedTime: string = '';
  export let modifiedTime: string = '';
  export let canonical: string = '';
  export let schemas: JSONLDData[] = [];
  export let noindex: boolean = false;
  export let nofollow: boolean = false;

  // Generar datos computados
  $: finalTitle = generateTitle(title);
  $: finalCanonical = canonical || generateCanonical($page.route.id || '/');
  $: finalOGTitle = ogTitle || title || SITE_CONFIG.name;
  $: finalOGDescription = ogDescription || description || SITE_CONFIG.description;
  $: finalOGImage = generateOGImage(ogImage);

  // Schemas por defecto
  $: defaultSchemas = [
    generateOrganizationSchema(),
    generateWebSiteSchema()
  ];

  $: allSchemas = [...defaultSchemas, ...schemas];

  // Robots meta
  $: robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');
</script>

<svelte:head>
  <!-- Título de la página -->
  <title>{finalTitle}</title>
  
  <!-- Meta tags básicos -->
  <meta name="description" content={description || SITE_CONFIG.description} />
  {#if keywords}
    <meta name="keywords" content={keywords} />
  {/if}
  <meta name="author" content={author} />
  <meta name="robots" content={robotsContent} />
  
  <!-- Canonical URL -->
  <link rel="canonical" href={finalCanonical} />
  
  <!-- Open Graph -->
  <meta property="og:title" content={finalOGTitle} />
  <meta property="og:description" content={finalOGDescription} />
  <meta property="og:type" content={ogType} />
  <meta property="og:url" content={finalCanonical} />
  <meta property="og:image" content={finalOGImage} />
  <meta property="og:site_name" content={SITE_CONFIG.name} />
  <meta property="og:locale" content="es_ES" />
  
  <!-- Twitter Cards -->
  <meta name="twitter:card" content={twitterCard} />
  <meta name="twitter:title" content={finalOGTitle} />
  <meta name="twitter:description" content={finalOGDescription} />
  <meta name="twitter:image" content={finalOGImage} />
  {#if SITE_CONFIG.social.twitter}
    <meta name="twitter:site" content={SITE_CONFIG.social.twitter} />
    <meta name="twitter:creator" content={SITE_CONFIG.social.twitter} />
  {/if}
  
  <!-- Article meta tags (solo si es un artículo) -->
  {#if ogType === 'article'}
    {#if publishedTime}
      <meta property="article:published_time" content={publishedTime} />
    {/if}
    {#if modifiedTime}
      <meta property="article:modified_time" content={modifiedTime} />
    {/if}
    <meta property="article:author" content={author} />
  {/if}
  
  <!-- Datos estructurados JSON-LD -->
  {#each allSchemas as schema}
    {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
  {/each}
  
  <!-- Preconnect para optimización -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  
  <!-- DNS prefetch para recursos externos -->
  <link rel="dns-prefetch" href="//www.google-analytics.com" />
  <link rel="dns-prefetch" href="//fonts.googleapis.com" />
  
  <!-- Favicon y iconos -->
  <link rel="icon" type="image/svg+xml" href="/images/loofo-formeta.svg" />
  <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  
  <!-- Theme color para navegadores móviles -->
  <meta name="theme-color" content="#3b82f6" />
  <meta name="msapplication-TileColor" content="#3b82f6" />
  
  <!-- Viewport optimizado -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  
  <!-- Configuración de formato de números de teléfono -->
  <meta name="format-detection" content="telephone=no" />
  
  <!-- Prevenir traducción automática -->
  <meta name="google" content="notranslate" />
</svelte:head>