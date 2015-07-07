/* jshint undef: false */
(function() {
  'use strict';

  describe('IPTFileUpload', function() {
    var config = {};
    var pluginName = 'plugin_iptFileUpload';
    var $object = null;

    describe('init', function() {

      beforeEach(function() {
        $object = $('.file-upload').iptFileUpload(config);
      });

      it('expected to construct object', function() {
        return expect($object).to.be.an.object;
      });

      it('expected $uploadField to be an object', function() {
        return expect($object.$uploadField).to.be.an.object;
      });

      it('expected $selectedFile to be an object', function() {
        return expect($object.$selectedFile).to.be.an.object;
      });

    });

    describe('openDialogue', function() {

      beforeEach(function() {
        $object = $('.file-upload').iptFileUpload(config);
        //this.callback = sinon.spy($object.data(pluginName), 'openDialogue');
      });

      /*it('expected method openDialogue to be called once', function() {
        $object.data(pluginName).$element.trigger('click');
        return expect(this.callback.callCount).to.equal(1);
      });*/

    });

    describe('displayFilename', function() {

    });

    describe('destroy', function() {
      beforeEach(function() {
        $object = $('.file-upload').iptFileUpload(config);
      });

      it('expected to remove data', function() {
        $object.data(pluginName).destroy();
        return expect($object.data(pluginName)).to.not.be.ok;
      });

    });

  });

})();
