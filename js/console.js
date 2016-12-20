(function() {
  var noop = function() {};
  var methods = [
    'asset', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception',
    'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline',
    'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd',
    'timeStamp', 'trace', 'warn' ];

  var length = methods.length;
  var console = (window.console = window.console || {});

  var method;
  while (length--)
  {
    method = methods[length];

    if (!console[method]) console[method] = noop;
  }  
}());
