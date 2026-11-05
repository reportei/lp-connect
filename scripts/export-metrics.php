// Exports the metric catalog of every Connect integration for the metrics pages, as JSON on stdout.
// The catalog is static config in the Reportei repository, so this runs inside the Reportei app,
// on its default branch, and only reads files. See AGENTS.md, "Funcionalidades".
//   docker exec -i reportei-workspace-1 bash -c 'cd /var/www/reportei && CONNECT=/var/www/connect php artisan tinker' \
//     < scripts/export-metrics.php > /tmp/metrics.out
//   node scripts/sync-features.mjs metrics /tmp/metrics.out

config(['app.v4_config_cache_enabled' => false]);
$connect = getenv('CONNECT') ?: '/var/www/connect';
$integrations = require $connect . '/database/data/integrations.php';
$locales = ['en' => 'en', 'pt_br' => 'pt', 'es' => 'es', 'fr' => 'fr'];
$out = [];

foreach ($integrations as $integration) {
    if (!($integration['enabled'] ?? false)) continue;
    $out[$integration['slug']] = [
        'slug' => $integration['slug'],
        'name' => $integration['name'],
        'logo' => preg_replace('/^social\./', '', $integration['icon']['name'] ?? ''),
        'metrics' => [],
    ];
}

foreach ($locales as $reporteiLocale => $locale) {
    app()->setLocale($reporteiLocale);
    $widgets = \App\Reportei\V4\V4Config::allAvailableWidgets();
    foreach ($out as $slug => $entry) {
        $type = \App\Services\Integrations\IntegrationsService::getIntegrationTypeFromSlug($slug);
        foreach ($widgets[$type]['widgets'] ?? [] as $widget) {
            $key = $widget['reference_key'] ?? null;
            $reference = $widget['references'] ?? [];
            if (!$key || empty($reference['title'])) continue;
            $out[$slug]['metrics'][$key]['key'] = $key;
            $out[$slug]['metrics'][$key]['component'] = $widget['component'] ?? null;
            $out[$slug]['metrics'][$key]['title'][$locale] = __($reference['title']);
            if (!empty($reference['description'])) {
                $out[$slug]['metrics'][$key]['description'][$locale] = __($reference['description']);
            }
        }
    }
}

echo '__JSON__' . json_encode(array_values($out), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . '__END__';
