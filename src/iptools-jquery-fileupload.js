;(function($) {

  'use strict';

  var pluginName = 'iptFileUpload';
  var defaults = {};

  function IPTFileUpload(element, options) {

    this.$element = $(element);
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  IPTFileUpload.prototype = {

    init: function() {
      this.$uploadField = this.$element.find('.file-upload__field');
      this.$selectedFile = this.$element.find('.file-upload__selected-file');
      this.addEventListeners();
    },

    openDialogue: function(event) {
      var self = event.data;

      self.$uploadField[0].click();
    },

    displayFileName: function(event) {
      var self = event.data;
      var val = $(this).val();

      self.$selectedFile.text(val.length ? val.split('\\').pop() : '');
    },

    addEventListeners: function() {
      this.$element.on('click' + '.' + this._name, null, this, this.openDialogue);
      this.$uploadField.on('change' + '.' + this._name, null, this, this.displayFileName);
    },

    destroy: function() {
      this.$element.off('click' + '.' + this._name);
      this.$uploadField.off('change' + '.' + this._name);
      this.$element.removeData('plugin_' + pluginName);
    }

  };

  $.fn[ pluginName ] = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new IPTFileUpload(this, options));
      }
    });
  };

})(jQuery);
