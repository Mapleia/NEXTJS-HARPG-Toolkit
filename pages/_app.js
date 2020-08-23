import '../styles/global.css'

Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
}

Array.prototype.equals = function(array, strict) {
  if (!array)
      return false;

  if (arguments.length == 1)
      strict = true;

  if (this.length != array.length)
      return false;

  for (var i = 0; i < this.length; i++) {
      if (this[i] instanceof Array && array[i] instanceof Array) {
          if (!this[i].equals(array[i], strict))
              return false;
      }
      else if (strict && this[i] != array[i]) {
          return false;
      }
      else if (!strict) {
          return this.sort().equals(array.sort(), true);
      }
  }
  return true;
}


export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }