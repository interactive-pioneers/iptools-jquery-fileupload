/* global expect */

(function() {
  'use strict';

  describe('IPTFileUpload', function() {
    var config = {};
    var pluginName = 'plugin_iptFileUpload';
    var object = null;
    var selector = '.file-upload';

    describe('init', function() {

      beforeEach(function() {
        object = $(selector).iptFileUpload(config);
      });

      afterEach(function() {
        object.data(pluginName).destroy();
      });

      it('expected to construct object', function() {
        return expect(object).to.be.an.object;
      });

      it('expected $uploadField to be an object', function() {
        return expect(object.$uploadField).to.be.an.object;
      });

      it('expected $selectedFile to be an object', function() {
        return expect(object.$selectedFile).to.be.an.object;
      });

    });

    xdescribe('openDialogue', function() {

      beforeEach(function() {
        object = $(selector).iptFileUpload(config);
        //this.callback = sinon.spy(object.data(pluginName), 'openDialogue');
      });

      // FIXME: debug and complete spec
      it('expected method openDialogue to be called once', function() {
        object.data(pluginName).$element.trigger('click');
        return expect(this.callback.callCount).to.equal(1);
      });

    });

    xdescribe('displayFilename', function() {
      // TODO: complete spec
    });

    describe('destroy', function() {
      beforeEach(function() {
        object = $(selector).iptFileUpload(config);
      });

      it('expected to remove data', function() {
        object.data(pluginName).destroy();
        return expect(object.data(pluginName)).to.not.be.ok;
      });

    });

  });

})();
