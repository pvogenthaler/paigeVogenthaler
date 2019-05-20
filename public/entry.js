if (NODE_ENV === 'development') {
  require('../src/react/App');
} else if (NODE_ENV === 'production') {
  var script = document.createElement('script');
  script.src = 'https://s3-us-west-1.amazonaws.com/pvogenthaler.github.io/bundles/bundle.js';
  document.body.appendChild(script);
}
