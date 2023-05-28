
      // move focus to the next input on typing a number
      var inputs = document.querySelectorAll('.code');
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', function(e) {
          if (this.value.length == this.maxLength) {
            var index = Array.prototype.indexOf.call(inputs, this);
            if (index !== inputs.length - 1) {
              inputs[index + 1].focus();
            }
          }
        });
      }
      
      // move focus to the previous input on backspace key press
      for (var i = inputs.length - 1; i >= 0; i--) {
        inputs[i].addEventListener('keydown', function(e) {
          if (e.keyCode == 8 && this.value.length == 0) {
            var index = Array.prototype.indexOf.call(inputs, this);
            if (index !== 0) {
              inputs[index - 1].focus();
            }
          }
        });
      }