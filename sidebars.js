/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  vaultDBSidebar: [
    'index',
    'quickstart',
    'getting-started/gettingstarted',
    'hub/datahub',
    {
      type: 'category',
      label: 'Governance, Risk & Controls',
      items: ['examples/roles', 'examples/fortress', 'examples/tags'],
    },
    'vectordb/vectordatabase',
    {
      type: 'category',
      label: 'Examples',
      items: ['examples/roles', 'examples/fortress', 'examples/tags'],
    },
  ]
};

module.exports = sidebars;
