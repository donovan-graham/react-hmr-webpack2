'use strict';

const contentSecurityPolicy = {
  directives: {
    defaultSrc: ['\'none\''],
    baseUri: ['\'self\''],
    blockAllMixedContent: true,
    childSrc: ['\'self\''],
    connectSrc: ['\'self\''],
    fontSrc: ['\'self\''],
    formAction: ['\'self\''],
    frameAncestors: ['\'none\''],
    imgSrc: ['\'self\'', 'data:'],
    mediaSrc: ['\'none\''],
    objectSrc: ['\'self\''],
    pluginTypes: ['application/pdf'],
    scriptSrc: [
      '\'self\'',
      '\'unsafe-eval\'',
      '\'unsafe-inline\'',
    ],
    styleSrc: ['\'self\'', '\'unsafe-inline\''],
  },
};

module.exports = contentSecurityPolicy;
