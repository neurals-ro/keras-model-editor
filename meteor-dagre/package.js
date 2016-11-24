Package.describe({
  name: 'benmgreene:dagre',
  version: '0.7.2',
  summary: 'Directed graph renderer for javascript',
  git: 'https://github.com/benmgreene/meteor-dagre',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.export('dagre', 'client');
  api.addFiles('dagre/dist/dagre.js', 'client');
  api.addFiles('export.js', 'client');
});
