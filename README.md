# VaultDB Documentation

This repository houses the documentation for VaultDB.

## Static documentation

These documents are published using the [docusaurus framework](https://docusaurus.io/).

Updating the documentation is very simple and there are a couple of options on how to do it, depending on what sort of change you are making.

### Easy changes in the browser

<img width="174" alt="Screen Shot 2022-03-08 at 12 17 00 PM" src="https://user-images.githubusercontent.com/93726128/157309404-2bf342ff-8149-4155-9ec2-9ae9d6cb9301.png">

Navigate to the page that you want to edit and click on `Edit this Page` which appears at the bottom of the content. An in-browser IDE will appear in your browser where you can edit the `.md` file. Then push those changes to a new branch and create a pull request.

See [Using GitHub in VSCode](https://code.visualstudio.com/docs/editor/github) for more information on how to create branches in the IDE.

### Running the documentation locally for more complex changes

- Clone this repo
- `cd docs`
- `yarn`
- `yarn start`

Any saved changes that you make to the `.md` files in the `docs` directory will automatically be reflected at [the local preview page](http://localhost:3000/docs/).

### Automatic publishing

Any pushes to the `master` branch will automatically publish to [the live documentation pages](https://vaultdb.ai). The publishing uses GitHub Actions and GitHub pages. You can see the progress of the publish action by going to the `Actions` tab of this repository.

If you forget the site URL, you can go to `Environments` on the right hand side, click on `github-pages` and then click on `View Deployment`.
