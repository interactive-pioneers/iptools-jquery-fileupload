# iptools-jquery-fileupload [![Build Status](http://img.shields.io/travis/interactive-pioneers/iptools-jquery-fileupload.svg)](https://travis-ci.org/interactive-pioneers/iptools-jquery-fileupload)

Displays the filename from the selected file in a sepparate container.

## Features

- Displays the filename from the selected file in a sepparate container.

## Requirements

- jQuery >=1.11.3 <4.0.0

## Example

```html
<div class="file-upload">
  <div class="file-upload__selected-file"><!-- filename will be displayed here--></div>
  <input class="file-upload__field" type="file">
</div>
```

## Contributions

### Development
- `bundle install`
- `npm install`

### Bug reports, suggestions

- File all your issues, feature requests [here](https://github.com/interactive-pioneers/iptools-jquery-fileupload/issues)
- If filing a bug report, follow the convention of _Steps to reproduce_ / _What happens?_ / _What should happen?_
- __If you're a developer, write a failing test instead of a bug report__ and send a Pull Request

### Code

1. Fork it ( https://github.com/[my-github-username]/iptools-jquery-fileupload/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Develop your feature by concepts of [TDD](http://en.wikipedia.org/wiki/Test-driven_development), see [Tips](#tips)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

### Tips

Following tasks are there to help with development:

- `grunt watch:bdd` listens to tests and source, reruns tests
- `grunt qa` run QA task that includes tests and JSHint and SCSSLint
- `grunt build` minify source to dist/

## Licence
Copyright © 2015 Interactive Pioneers GmbH. Licenced under [GPLv3](LICENSE).
